import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // ping simple
  app.get('/health', (_req, res) => res.json({ status: 'ok (app)' }));

  // API
  app.use('/api', routes);

  return app;
}
