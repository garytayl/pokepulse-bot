const { chromium } = require('playwright');

async function runBot(productUrl) {
  console.log("🚀 Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log("🌐 Navigating to:", productUrl);
  await page.goto(productUrl);

  console.log("🕵️ Looking for 'Add to Cart' button...");
  const addToCartBtn = await page.getByRole('button', { name: 'Add to Cart' });

  console.log("🖱️ Clicking 'Add to Cart'...");
  await addToCartBtn.click();

  console.log("🛒 Navigating to checkout...");
  await page.goto('https://www.pokemoncenter.com/checkout');

  console.log("✅ Bot completed flow, closing browser.");
  await browser.close();
}
  
module.exports = { runBot };