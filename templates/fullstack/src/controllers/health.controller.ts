import { Request, Response } from 'express';
import { dbState } from '../config/db.js';

export const getHealth = (_req: Request, res: Response) => {
  res.json({ status: 'ok', db: dbState() });
};
