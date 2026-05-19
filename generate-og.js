const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  const filePath = 'file://' + path.resolve(__dirname, 'og-preview.html');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  await page.screenshot({ path: 'assets/og-preview.png', clip: { x:0, y:0, width:1200, height:630 } });
  await browser.close();
  console.log('OG preview generated: assets/og-preview.png');
})();
