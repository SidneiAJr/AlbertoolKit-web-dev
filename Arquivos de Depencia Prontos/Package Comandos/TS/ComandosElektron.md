# Comandos para Instalar | Electron

## Iniciando Projeto
```bash
npm init -y
```

## Configuração do TS
```bash
npx tsc --init
```
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Electron | HTML Puro

### Simples
```bash
npm i electron
npm i -D typescript @types/node ts-node electron-builder
```

### Intermediário
```bash
npm i electron electron-store dotenv
npm i -D typescript @types/node ts-node electron-builder electron-reload
```

### Avançado
```bash
npm i electron electron-store electron-updater dotenv axios winston
npm i -D typescript @types/node ts-node electron-builder electron-reload
```

### Enterprise
```bash
npm i electron electron-store electron-updater dotenv axios winston winston-daily-rotate-file socket.io-client keytar node-notifier uuid zod
npm i -D typescript @types/node ts-node electron-builder electron-reload jest @types/jest ts-jest eslint prettier husky lint-staged
```

---

## Electron | React

### Simples
```bash
npm i electron react react-dom
npm i -D typescript @types/react @types/react-dom @types/node ts-node electron-builder webpack webpack-cli ts-loader html-webpack-plugin
```

### Intermediário
```bash
npm i electron react react-dom react-router-dom axios dotenv electron-store
npm i -D typescript @types/react @types/react-dom @types/node ts-node electron-builder electron-reload webpack webpack-cli ts-loader html-webpack-plugin
```

### Avançado
```bash
npm i electron react react-dom react-router-dom axios dotenv electron-store electron-updater zustand zod
npm i -D typescript @types/react @types/react-dom @types/node ts-node electron-builder electron-reload webpack webpack-cli ts-loader html-webpack-plugin
```

### Enterprise
```bash
npm i electron react react-dom react-router-dom axios dotenv electron-store electron-updater zustand zod socket.io-client winston keytar uuid dayjs
npm i -D typescript @types/react @types/react-dom @types/node ts-node electron-builder electron-reload webpack webpack-cli ts-loader html-webpack-plugin jest @types/jest ts-jest @testing-library/react eslint prettier husky lint-staged
```

---

## Electron | Angular

### Simples
```bash
npm i -g @angular/cli
ng new meu-app
npm i electron
npm i -D electron-builder ts-node
```

### Intermediário
```bash
npm i electron electron-store dotenv axios
npm i -D electron-builder electron-reload ts-node
```

### Avançado
```bash
npm i electron electron-store electron-updater dotenv axios winston zod
npm i -D electron-builder electron-reload ts-node
```

### Enterprise
```bash
npm i electron electron-store electron-updater dotenv axios winston winston-daily-rotate-file socket.io-client keytar uuid zod dayjs
npm i -D electron-builder electron-reload ts-node jest @types/jest eslint prettier husky lint-staged
```