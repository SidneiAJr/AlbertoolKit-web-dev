# Comandos para Instalar | JavaScript

## Iniciando Projeto
```bash
npm init -y
```

---

## Backend | Express

### Simples
```bash
npm i express
```

### Básico
```bash
npm i express cors mysql
```

### Intermediário
```bash
npm i express cors mysql2 dotenv
```

### Avançado
```bash
npm i express cors mysql2 dotenv bcrypt jsonwebtoken
```

### Complexo
```bash
npm i express cors mysql2 dotenv bcrypt jsonwebtoken redis
npm i -D jest
```

### Enterprise
```bash
npm i express cors mysql2 dotenv bcrypt jsonwebtoken redis bull axios winston
npm i -D jest eslint prettier husky lint-staged
```

---

## Backend | Prisma

### Básico
```bash
npm i express cors @prisma/client
npm i -D prisma
npx prisma init
```

### Intermediário
```bash
npm i express cors @prisma/client dotenv
npm i -D prisma
```

### Avançado
```bash
npm i express cors @prisma/client dotenv bcrypt jsonwebtoken zod
npm i -D prisma
```

### Complexo
```bash
npm i express cors @prisma/client dotenv bcrypt jsonwebtoken zod redis
npm i -D prisma jest
```

### Enterprise
```bash
npm i express cors @prisma/client dotenv bcrypt jsonwebtoken zod redis bull axios winston
npm i -D prisma jest eslint prettier husky lint-staged
```

---

## API
```bash
npm i axios dotenv
```

---

## Electron | HTML Puro

### Simples
```bash
npm i electron
npm i -D electron-builder
```

### Intermediário
```bash
npm i electron electron-store dotenv
npm i -D electron-builder electron-reload
```

### Avançado
```bash
npm i electron electron-store electron-updater dotenv axios winston
npm i -D electron-builder electron-reload
```

### Enterprise
```bash
npm i electron electron-store electron-updater dotenv axios winston winston-daily-rotate-file socket.io-client keytar node-notifier uuid zod
npm i -D electron-builder electron-reload jest eslint prettier husky lint-staged
```

---

## Electron | React

### Simples
```bash
npm i electron react react-dom
npm i -D electron-builder webpack webpack-cli babel-loader html-webpack-plugin @babel/core @babel/preset-react
```

### Intermediário
```bash
npm i electron react react-dom react-router-dom axios dotenv electron-store
npm i -D electron-builder electron-reload webpack webpack-cli babel-loader html-webpack-plugin @babel/core @babel/preset-react
```

### Avançado
```bash
npm i electron react react-dom react-router-dom axios dotenv electron-store electron-updater zustand zod
npm i -D electron-builder electron-reload webpack webpack-cli babel-loader html-webpack-plugin @babel/core @babel/preset-react
```

### Enterprise
```bash
npm i electron react react-dom react-router-dom axios dotenv electron-store electron-updater zustand zod socket.io-client winston keytar uuid dayjs
npm i -D electron-builder electron-reload webpack webpack-cli babel-loader html-webpack-plugin @babel/core @babel/preset-react jest @testing-library/react eslint prettier husky lint-staged
```