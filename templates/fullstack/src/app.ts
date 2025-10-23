import express from 'express';
import cors from 'cors';
import api from './routes/index.js';

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api', api);
  app.get('/health', (_req, res) => res.json({ status: 'ok (app)' }));

  return app;
}
