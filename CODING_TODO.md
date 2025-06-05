# ✅ Implementation Checklist – Basketball Highlight Reel App
> Goal: every feature works, every screen matches the spec, and each user gets their own real-time data.

---

## 0. Tech Stack lock-in
- **Front-end**: React + Vite + TypeScript, TailwindCSS for styling, shadcn/ui components.
- **Back-end**: Node 18 + Express + Prisma (PostgreSQL) OR Supabase (recommended for auth + realtime DB).
- **AI worker**: Python 3.10 service (FastAPI) that wraps our highlight-detection pipeline.
- **CI**: GitHub Actions.
- **E2E**: Playwright.
- **Unit tests**: Vitest + React-Testing-Library.

*Codex: install & configure all of the above if missing.*

---

## 1. Live Data & Auth
1. **User table / collection**
   ```prisma
   model User {
     id          String   @id @default(uuid())
     email       String   @unique
     password    String   // bcrypt hash
     displayName String?
     avatarUrl   String?
     reels       Reel[]
     createdAt   DateTime @default(now())
   }
Auth flow

Email / password and OAuth (Google).

JWT stored in http-only cookie.

Supabase option: enable auth, RLS on reels table (owner = auth.uid()).

Realtime updates

When the AI worker finishes a reel → it emits a row into reels table.

Front-end subscribes to reels for currentUser via Supabase’s realtime channels (or websockets if self-hosted).

2. Front-end QA Gates
GateToolWhat Codex must generate
Static-type checktsc --noEmitzero errors
LintESLint + Prettiernpm run lint passes
Unit testsVitest≥ 80 % coverage
Visual regressionStorybook + @storybook/test-runnersnapshots for each shadcn card, button, modal
E2EPlaywrightflows: sign-up → upload video → pick settings → see reel preview → purchase (Stripe test mode)

Design Lock
Import tailwind.config.js colors from /design/tokens.json. All spacing, font sizes, and colors must match tokens. Use shadcn/ui primitives only; extend via className utilities if needed.

3. End-to-End Tests to implement
happy-path-generate.spec.ts

```css
user logs in
uploads sample `sample_game.mp4`
selects “Montage / Hype” preset
clicks “Generate”
waits for realtime status → “Complete”
asserts player thumbnails render
plays video preview
```
edge-bad-video.spec.ts

Upload corrupt video → UI shows friendly error toast.

auth-gate.spec.ts

Visit /studio while logged-out → redirect to /login.

4. Back-end Integration Tests
Write Jest tests (or Vitest w/ ts-node) that spin up Docker-compose services:

```pgsql
postgres 15
minio (object storage)          # for raw uploads
ai-worker (mock returns JSON)   # stub highlight data
```
Scenario:

POST /api/videos (attach file)

Service stores file in MinIO, writes DB row in videos with status PROCESSING.

Mock AI worker posts back results → service updates row to COMPLETE.

Assert DB state & S3 object existence.

5. AI Worker Contract
POST /process

```json
{
  "videoId": "uuid",
  "userId": "uuid",
  "s3Url": "https://…/raw.mp4"
}
```
returns

```json
{
  "clips": [
    { "start": 123.4, "end": 129.9, "type": "dunk", "player": "23" },
    …
  ],
  "previewUrl": "https://…/hls/playlist.m3u8"
}
```
Worker must stream progress events over websocket reel-progress:<videoId>.

Unit test the Python detector with pytest + a 10 s sample clip ⇒ expect ≥ 1 dunk detected.

6. Stripe Billing Logic
Plans: Free, Pro $9/mo, One-Time $2/reel.

Middleware checks user tier:

Free → enqueue job with low priority queue, watermark video, resolution cap 720p.

Pro or One-Time credit → high-priority queue, 1080p or 4K, no watermark.

Playwright test signs into Stripe test customer, upgrades to Pro, verifies UI badge shows PRO.

7. GitHub Actions Workflow
.github/workflows/ci.yml

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: pnpm/action-setup@v2
  - name: Install
    run: pnpm install
  - name: Type-check / Lint / Unit
    run: pnpm run ci          # composite script
  - name: Storybook diff
    uses: chromaui/action@v1
  - name: Playwright
    uses: microsoft/playwright-github-action@v1
Merge blocked unless ALL checks green.
```

8. Debug & Logging
Client: React-Query DevTools + Redux DevTools (if used).

Server: Winston logger (LOG_LEVEL from env).

AI worker: uvicorn --reload --log-level info.

Send logs to Grafana Loki in staging.

9. Post-launch Monitoring
Add Sentry (frontend + backend) for error tracking.

NewRelic or Grafana Tempo for request traces.

Daily cron job: run lighthouse CI → drop scores in /analytics.

When every box above is green, the codebase is production-grade: every feature functional, design tokens respected, user accounts isolated with live data.
Codex, ⌘ / Ctrl-Enter when ready!

```pgsql

---

### How to use this
1. **Commit** this file as `CODING_TODO.md`.  
2. Open a new chat with *GitHub Copilot / Codex* in VS Code and paste the whole checklist; ask it to start executing tasks top-to-bottom.  
3. As each checklist item is finished, mark it complete (or let Codex check it via CI).

You’ll end up with automated tests, live user accounts, styling locked to your design tokens, and CI that fails if anything breaks.
```

