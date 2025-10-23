import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDB(): Promise<void> {
  if (!env.MONGODB_URI) throw new Error('MONGODB_URI no está definido');
  await mongoose.connect(env.MONGODB_URI);
  mongoose.connection.on('connected', () => console.log('✅ MongoDB conectado'));
  mongoose.connection.on('error', (err) => console.error('❌ Error MongoDB:', err));
}

export function dbState(): 'connected' | 'disconnected' {
  return mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
}
