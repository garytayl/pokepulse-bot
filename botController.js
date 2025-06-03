import { runBot } from './pokemonBot.js';

async function startBot(productUrl) {
  console.log('Starting bot for:', productUrl);
  await runBot(productUrl);
}

module.exports = { startBot };
