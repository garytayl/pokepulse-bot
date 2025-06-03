import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { startBot } from './botController.js';


const app = express();
app.use(cors());
app.use(express.json());

app.post('/start-bot', async (req, res) => {
  const { productUrl } = req.body;
  try {
    await startBot(productUrl);
    res.status(200).json({ message: 'Bot started' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Bot failed to start', details: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('PokéPulse bot is live!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
