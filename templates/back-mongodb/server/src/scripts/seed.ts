import { connectDB } from '../config/db.js';
import { Example } from '../models/example.model.js';

async function run() {
  await connectDB();
  await Example.deleteMany({});
  await Example.create({ name: 'hello' });
  console.log('✅ Seed completado');
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
