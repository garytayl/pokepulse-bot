import { chromium } from 'playwright';

async function runBot(productUrl) {
  console.log("🚀 Launching browser (desktop mode)...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log("🌐 Navigating to:", productUrl);
  await page.goto(productUrl, { waitUntil: "domcontentloaded" });

  try {
    console.log("🕵️ Waiting for Add to Cart button...");
    await page.waitForSelector('button[class*="add-to-cart-button"]', { timeout: 30000 });

    console.log("🖱️ Clicking Add to Cart...");
    await page.click('button[class*="add-to-cart-button"]');

    console.log("🛒 Going to checkout...");
    await page.goto('https://www.pokemoncenter.com/checkout');

    console.log("✅ Bot run complete. Closing browser.");
  } catch (err) {
    console.error("❌ Failed to click Add to Cart:", err.message);
    throw new Error("Add to Cart button not found or failed to click.");
  } finally {
    await browser.close();
  }
}

module.exports = { runBot };
