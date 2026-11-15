import * as cheerio from "cheerio";
import { USER_AGENT, type Source } from "./sources.ts";

export interface ListItem {
  region: Source["region"];
  id: string;
  url: string;
  title: string;
}

export interface Notice extends ListItem {
  published: string | null;
  text: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function get(url: string): Promise<string> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url, { headers: { "user-agent": USER_AGENT, "accept-language": "en,ko;q=0.8" } });
    if (res.ok) return res.text();
    if (res.status === 404) throw new Error(`404 ${url}`);
    await sleep(2000 * (attempt + 1));
  }
  throw new Error(`fetch failed ${url}`);
}

/** Lists patch-note candidates on a board, newest first, de-duplicated by id. */
export async function listNotices(src: Source): Promise<ListItem[]> {
  const html = await get(src.listUrl);
  const $ = cheerio.load(html);
  const seen = new Map<string, ListItem>();
  $("a[href]").each((_, el) => {
    const href = ($(el).attr("href") ?? "").replace(/&amp;/g, "&");
    src.linkPattern.lastIndex = 0;
    const m = src.linkPattern.exec(`href="${href}"`);
    if (!m) return;
    const id = m[2]!;
    const title = $(el).text().replace(/\s+/g, " ").trim();
    const prev = seen.get(id);
    // The same notice can appear twice (pinned + list); keep the longer title.
    if (!prev || title.length > prev.title.length) seen.set(id, { region: src.region, id, url: m[1]!.replace(/&amp;/g, "&"), title });
  });
  return [...seen.values()]
    .filter((n) => src.include.test(n.title) && !src.exclude.test(n.title))
    .sort((a, b) => Number(b.id) - Number(a.id));
}

/** Fetches a notice and returns its readable text (tables flattened to rows). */
export async function readNotice(item: ListItem): Promise<Notice> {
  const html = await get(item.url);
  const $ = cheerio.load(html);
  const title = $("title").text().split("|")[0]!.trim() || item.title;
  const body = $(".contents_area.editor_area").first();
  body.find("script, style, img, iframe").remove();
  body.find("tr").each((_, tr) => {
    const cells = $(tr).find("th, td").map((__, c) => $(c).text().replace(/\s+/g, " ").trim()).get();
    $(tr).replaceWith(`\n| ${cells.join(" | ")} |\n`);
  });
  body.find("br").replaceWith("\n");
  body.find("p, div, li, h1, h2, h3, h4, h5").each((_, el) => {
    $(el).append("\n");
  });
  const text = body.text().replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n").trim();
  const dateMatch =
    $(".detail_top_info").text().match(/(\w{3} \d{1,2}, \d{4})|(\d{4}[.-]\d{2}[.-]\d{2})/) ??
    html.match(/(\d{4}\.\d{2}\.\d{2})/);
  return { ...item, title, published: dateMatch ? dateMatch[0] : null, text };
}

export const politeDelay = () => sleep(1500);
