# Patch watch

Finds new official Black Desert update notices, summarizes them with Claude into Thai + English, and waits for a human to approve before anything reaches the site.

| Region | Source | Notes |
|---|---|---|
| `asia` | blackdesert.pearlabyss.com/Asia (Updates category) | Live server for Thai players |
| `kr` | kr.playblackdesert.com (Updates board, Korean) | Usually ahead of Asia, marked as spoiler |
| `gl` | blackdesert.pearlabyss.com/GlobalLab (Korean) | Test server, may change, marked as spoiler |
| BDOCodex | `query.php?a=items&type=version` for `kr` / `gl` | New item names, passed to Claude as context |

NA/EU is not included: its site sits behind a bot challenge and we do not bypass it. The other sites sometimes show the same challenge; the run then skips that source and tries again on the next schedule.

## Use

```bash
cd site
node scripts/patch-watch/watch.mjs --dry-run          # list + extract, no API call, no cost
node scripts/patch-watch/watch.mjs                     # summarize up to 3 new notices (needs ANTHROPIC_API_KEY)
node scripts/patch-watch/approve.mjs --list            # read the summaries
node scripts/patch-watch/approve.mjs kr-16474          # approve one -> app/data/patch-feed.json
node scripts/patch-watch/approve.mjs --reject kr-16474 # drop one
```

If a site shows a bot challenge, save the notice page from your browser and feed it in:

```bash
node scripts/patch-watch/watch.mjs --from-file saved.html --region kr --url "<notice url>" --title "<title>"
```

## Files

- `state.json`: notices already handled (first run keeps only the newest 2 per region, `--backfill N` to change)
- `pending/`: summaries waiting for review
- `../../app/data/patch-feed.json`: approved entries shown on the site

## Cost

`claude-opus-5-5` at $4 / $20 per million tokens. A notice is roughly 5k-50k input tokens, so about $0.05-0.30 each; 4-6 notices a week is around $5 a month.

## GitHub Actions

`.github/workflows/patch-watch.yml` runs hourly Wednesday to Friday and daily otherwise, then opens a pull request. Add the repository secret `ANTHROPIC_API_KEY`. Merging the PR is the approval.
