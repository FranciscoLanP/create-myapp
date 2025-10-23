#!/usr/bin/env node
import { execSync } from 'child_process';
import { mkdirSync, cpSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ Debes indicar el nombre del proyecto. Ejemplo:");
  console.log("   npx create-myapp mi-proyecto");
  process.exit(1);
}

const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, '../templates/fullstack');

console.log(`🚀 Creando proyecto "${projectName}"...`);

try {
  mkdirSync(targetDir, { recursive: true });
  cpSync(templateDir, targetDir, { recursive: true });
  console.log('✅ Plantilla copiada con éxito.');

  console.log('📦 Instalando dependencias (root)...');
  execSync('npm install --no-audit --no-fund', {
    cwd: targetDir,
    stdio: 'inherit',
    shell: true,
  });

  console.log('📦 Instalando dependencias (server)...');
  execSync('npm install --no-audit --no-fund', {
    cwd: path.join(targetDir, 'server'),
    stdio: 'inherit',
    shell: true,
  });

  console.log(`
🎉 Proyecto creado correctamente.

👉 Siguientes pasos:
   cd ${projectName}
   copy server\\.env.example server\\.env   (PowerShell)
   npm run dev

• Server: http://localhost:4000  (GET /health)
`);
} catch (error) {
  console.error('❌ Error al crear el proyecto:', error.message);
}
