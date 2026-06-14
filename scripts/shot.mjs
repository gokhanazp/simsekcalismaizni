import { chromium } from "/Users/gokhan.yildirim/.npm/_npx/705bc6b22212b352/node_modules/playwright/index.mjs";

const url = process.argv[2] || "http://localhost:3000/";
const out = process.argv[3] || "shot.png";
const full = process.argv[4] === "full";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
if (full === "hero") {
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1440, height: 720 } });
} else {
  await page.screenshot({ path: out, fullPage: full === "full" });
}
await browser.close();
console.log("kaydedildi:", out);
