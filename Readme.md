# create-myapp

Generador de proyectos **full-stack** con un solo comando.  
**Stack inicial:** Express + TypeScript + MongoDB (Mongoose) + VS Code Debug  
> *(Paso 2 opcional: agregar cliente React + Vite).*

---

## ✨ Características

- **Server listo** (Express + TS + Mongoose).
- **`.env.example`** con `MONGODB_URI` y `PORT`.
- Endpoints de salud:
  - `GET /health` → `{ status }`
  - `GET /api/health` → `{ status, db }`
- **Depuración en VS Code** (Ctrl + Shift + D → *Run Server (TS)*).
- **Instalación automatizada** de dependencias.

---

## ✅ Requisitos

- Node.js **18+** (recomendado **20+**).
- npm **9+**.
- (Opcional) MongoDB local o **MongoDB Atlas**.

---

## 🔧 Instalación del CLI (desde GitHub)

> Reemplaza `TU_USUARIO` por tu usuario real de GitHub.

```bash
npm i -g github:TU_USUARIO/create-myapp
```

Esto instala el comando global `create-myapp`.

---

## 🚀 Uso (copiar & pegar)

```bash
# 1) crear un proyecto
create-myapp mi-app

# 2) entrar a la carpeta
cd mi-app

# 3) crear el .env del servidor
# PowerShell (Windows):
copy .\server\.env.example .\server\.env
# Git Bash / macOS / Linux:
cp server/.env.example server/.env

# 4) ejecutar
npm run dev
```

- Server: <http://localhost:4000>  
- Health:  
  - <http://localhost:4000/health>  
  - <http://localhost:4000/api/health>

> Si tienes MongoDB funcionando (o usas una cadena de Atlas en `server/.env`), `GET /api/health` mostrará `"db": "connected"`.

---

## 🧱 Estructura generada

> **Claridad ante todo** — así queda tu proyecto creado:

```txt
mi-app/
├─ .vscode/
│  ├─ launch.json           # VS Code: Run Server (TS)
│  └─ tasks.json
├─ server/
│  ├─ src/
│  │  ├─ index.ts           # bootstrap: connectDB + listen
│  │  ├─ app.ts             # middlewares + rutas + /health
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
├─ package.json             # scripts: dev/build/start (server)
└─ README.md                # (opcional)
```

---

## 🧪 Probar salud del servidor

```http
GET http://localhost:4000/health
→ { "status": "ok (app)" }

GET http://localhost:4000/api/health
→ { "status": "ok", "db": "connected" | "disconnected" }
```

---

## 🐞 Depurar en VS Code (1 clic)

1. Abre la carpeta del proyecto en VS Code.  
2. `Ctrl + Shift + D` → elige **Run Server (TS)** → ▶️.  
3. Coloca breakpoints en `server/src/*.ts` y prueba `/api/health`.

---

## ⚙️ Variables de entorno

Archivo: `server/.env`

```ini
MONGODB_URI=mongodb://127.0.0.1:27017/miapp
PORT=4000
```

> Para **MongoDB Atlas**, reemplaza `MONGODB_URI` por tu cadena de conexión.

---

## 🔁 Actualizar el CLI

```bash
# reinstalar global desde GitHub
npm i -g github:TU_USUARIO/create-myapp

# verificar versión instalada
npm ls -g create-myapp
```

---

## ❌ Desinstalar el CLI

```bash
npm uninstall -g create-myapp
```

---

## 🧰 Desarrollo local del CLI (para contribuir)

```bash
git clone https://github.com/TU_USUARIO/create-myapp.git
cd create-myapp
npm link                # registra el comando global desde tu carpeta local
# usar:
create-myapp prueba-local
# al terminar:
npm unlink -g create-myapp
```

---

## 🧯 Problemas comunes (Windows)

- **EPERM al instalar**: cierra VS Code/Explorador en la carpeta, ejecuta PowerShell como Admin, desactiva antivirus temporalmente y vuelve a crear el proyecto.
- **“cannot execute: Permission denied”**: asegúrate de que `bin/create-myapp.js` comience con `#!/usr/bin/env node` y tenga fin de línea **LF** (no CRLF).
- **No encuentra `npm` en postinstall**: este CLI instala en **dos pasos** (root y luego `server`) para evitar ese bug. Si hiciera falta, ejecuta manual:
  ```bash
  cd mi-app
  npm install
  cd server
  npm install
  ```

---

## 📦 (Opcional) Publicarlo en npm

1. En el `package.json` del CLI, asegúrate de tener:

```json
{
  "name": "create-myapp",
  "version": "1.0.0",
  "type": "module",
  "bin": { "create-myapp": "./bin/create-myapp.js" },
  "files": ["bin", "templates", "package.json", "README.md", "LICENSE"]
}
```

2. Publica:
```bash
npm login
npm publish --access public
```

3. Uso desde npm:
```bash
npm create myapp@latest mi-app
# o
npx create-myapp mi-app
```

---

MIT © TU_USUARIO
