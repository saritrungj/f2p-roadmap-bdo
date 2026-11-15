// Official Black Desert notice boards watched for patch notes.
// All three boards serve server-rendered HTML; robots.txt allows /News/ on both domains.
// BDOCodex is intentionally NOT used here: its robots.txt opts out of AI crawlers.

export type Region = "asia" | "kr" | "gl";

export interface Source {
  region: Region;
  label: string;
  listUrl: string;
  /** Captures [url, id] from an anchor href on the list page. */
  linkPattern: RegExp;
  /** Only titles matching this are treated as patch notes. */
  include: RegExp;
  /** Titles matching this are skipped (client-version pings, shop lists, companion app). */
  exclude: RegExp;
  lang: "en" | "ko";
}

export const SOURCES: Source[] = [
  {
    region: "asia",
    label: "Black Desert Asia (TH/SEA)",
    listUrl: "https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice?_categoryNo=2",
    linkPattern: /href="(https:\/\/blackdesert\.pearlabyss\.com\/Asia\/en-us\/News\/Notice\/Detail\?_boardNo=(\d+))"/g,
    include: /Update Details/i,
    exclude: /Pearl Shop|security module|Black Desert\+/i,
    lang: "en",
  },
  {
    region: "kr",
    label: "Black Desert Korea",
    listUrl: "https://www.kr.playblackdesert.com/ko-KR/News/Notice?boardType=2",
    linkPattern: /href="(https:\/\/www\.kr\.playblackdesert\.com\/News\/Notice\/Detail\?groupContentNo=(\d+)&(?:amp;)?countryType=ko-KR)"/g,
    include: /업데이트 안내/,
    exclude: /최신 버전|보안 모듈|검은사막\+/,
    lang: "ko",
  },
  {
    region: "gl",
    label: "Black Desert Global Lab",
    listUrl: "https://blackdesert.pearlabyss.com/GlobalLab/en-US/News/Notice?_categoryNo=2",
    linkPattern: /href="(https:\/\/blackdesert\.pearlabyss\.com\/GlobalLab\/en-US\/News\/Notice\/Detail\?_boardNo=(\d+))"/g,
    include: /업데이트|Update/i,
    exclude: /Login Method|디스코드|Discord/i,
    lang: "ko",
  },
];

export const USER_AGENT =
  "Mozilla/5.0 (compatible; Northern-east-heroic-patch-watch/1.0; fan site, polite crawl)";
