const { chromium } = require('playwright');

async function runBot(productUrl) {
  console.log("🚀 Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log("🌐 Navigating to:", productUrl);
  await page.goto(productUrl, { waitUntil: "domcontentloaded" });

  try {
    console.log("🕵️ Waiting for button with class to show...");
    await page.waitForSelector('button[class*="add-to-cart-button"]', { timeout: 30000 });

    console.log("🖱️ Clicking the add-to-cart button...");
    await page.click('button[class*="add-to-cart-button"]');

    console.log("🛒 Navigating to checkout...");
    await page.goto('https://www.pokemoncenter.com/checkout');

    console.log("✅ Bot completed flow.");
  } catch (err) {
    console.error("❌ Failed to find or click button:", err.message);
    throw new Error("Could not find Add to Cart button. Page may be blocking bot.");
  } finally {
    await browser.close();
  }
}

module.exports = { runBot };
