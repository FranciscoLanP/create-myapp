import { createApp } from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

async function bootstrap() {
  try {
    await connectDB();
    const app = createApp();
    app.listen(env.PORT, () => {
      console.log(`🚀 Server listo en http://localhost:${env.PORT}`);
    });
  } catch (err) {
    console.error('❌ No se pudo iniciar el servidor:', err);
    process.exit(1);
  }
}

bootstrap();
