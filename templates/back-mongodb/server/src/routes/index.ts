import { Router } from 'express';
import health from './health.routes.js';

const api = Router();
api.use('/', health);

export default api;
