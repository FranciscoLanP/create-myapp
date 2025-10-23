create-myapp

Generador de proyectos full-stack con un solo comando:
Express + TypeScript + MongoDB (Mongoose) + VS Code Debug
(en el Paso 2 puedes agregar el cliente React + Vite si quieres)

✨ ¿Qué hace?

Crea una estructura lista para trabajar:

server/ con Express + TypeScript + Mongoose

server/.env.example con MONGODB_URI y PORT

Endpoints de salud:

GET /health → { status }

GET /api/health → { status, db }

Configuración de depuración en VS Code (Ctrl+Shift+D → Run Server (TS))

Instala dependencias automáticamente.

✅ Requisitos

Node.js 18+ (recomendado 20+).

npm 9+.

(Opcional) MongoDB local o MongoDB Atlas.

🔧 Instalación (desde GitHub)
npm i -g github:TU_USUARIO/create-myapp


Esto instala el comando global create-myapp.

🚀 Uso
# 1) crear un proyecto
create-myapp mi-app

# 2) entrar a la carpeta
cd mi-app

# 3) crear el .env del servidor
# PowerShell:
copy .\server\.env.example .\server\.env
# Git Bash / macOS / Linux:
cp server/.env.example server/.env

# 4) ejecutar
npm run dev

# Server: http://localhost:4000
# Health: http://localhost:4000/health  y  /api/health


Si tienes MongoDB corriendo (o usas una cadena de Atlas en server/.env), GET /api/health mostrará "db": "connected".

🧱 Estructura generada
mi-app/
├─ .vscode/
│  ├─ launch.json          # VS Code: Run Server (TS)
│  └─ tasks.json
├─ server/
│  ├─ src/
│  │  ├─ index.ts          # bootstrap + connectDB + listen
│  │  ├─ app.ts            # middlewares + rutas + /health
│  │  ├─ config/
│  │  │  ├─ env.ts
│  │  │  └─ db.ts
│  │  ├─ controllers/
│  │  │  └─ health.controller.ts
│  │  └─ routes/
│  │     ├─ index.ts
│  │     └─ health.routes.ts
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ .env.example
├─ .gitignore
├─ package.json            # scripts para dev/build/start (server)
└─ README.md               # (opcional)

🧪 Probar salud del servidor

GET http://localhost:4000/health → { "status": "ok (app)" }

GET http://localhost:4000/api/health → { "status": "ok", "db": "connected|disconnected" }

🐞 Depurar en VS Code

Abre la carpeta del proyecto en VS Code.

Ctrl + Shift + D → elige Run Server (TS) → ▶️.

Coloca breakpoints en server/src/*.ts y prueba /api/health.

⚙️ Variables de entorno

Archivo: server/.env

MONGODB_URI=mongodb://127.0.0.1:27017/miapp
PORT=4000


Para MongoDB Atlas, reemplaza MONGODB_URI por tu cadena de conexión.

🔁 Actualizar el CLI

Cuando publiques cambios en tu repo:

# reinstalar global desde GitHub
npm i -g github:TU_USUARIO/create-myapp
# verificar versión instalada
npm ls -g create-myapp

❌ Desinstalar el CLI
npm uninstall -g create-myapp

🧰 Instalación local (modo desarrollo del CLI)
# en tu repo del CLI
git clone https://github.com/TU_USUARIO/create-myapp.git
cd create-myapp
npm link      # registra el comando global desde tu carpeta local
# usar:
create-myapp prueba-local


Para dejar de usar el link local:

npm unlink -g create-myapp

🧯 Solución de problemas (Windows)

EPERM al instalar: cierra VS Code/Explorador en la carpeta, ejecuta PowerShell como Admin, desactiva antivirus temporalmente, y vuelve a crear el proyecto.

“cannot execute: Permission denied”: asegúrate de que el archivo bin/create-myapp.js comience con #!/usr/bin/env node y tenga fin de línea LF (no CRLF).

No encuentra npm en postinstall: este CLI instala en dos pasos (root y luego server) para evitar ese bug. Si ves algo raro, ejecuta manualmente:

cd mi-app
npm install
cd server
npm install