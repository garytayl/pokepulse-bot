const { chromium } = require('playwright');

async function runBot(productUrl) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(productUrl);

  // Wait for product availability
  await page.waitForSelector('button.add-to-cart', { timeout: 30000 });

  await page.click('button.add-to-cart');
  await page.waitForTimeout(1000);

  await page.goto('https://www.pokemoncenter.com/checkout');
  await page.waitForTimeout(5000); // Let it load

  await browser.close();
}

module.exports = { runBot };
