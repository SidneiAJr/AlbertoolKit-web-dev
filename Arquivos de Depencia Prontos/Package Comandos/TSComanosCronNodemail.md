# Comandos para Instalar | TypeScript

## Backend | Cron (Agendamento)

### Simples
```bash
npm i node-cron
npm i -D typescript @types/node @types/node-cron ts-node
```

### Básico
```bash
npm i node-cron dotenv
npm i -D typescript @types/node @types/node-cron ts-node
```

### Intermediário
```bash
npm i express cors node-cron dotenv
npm i -D typescript @types/express @types/cors @types/node @types/node-cron ts-node
```

### Avançado
```bash
npm i express cors node-cron dotenv axios winston
npm i -D typescript @types/express @types/cors @types/node @types/node-cron ts-node
```

### Complexo
```bash
npm i express cors node-cron dotenv axios winston redis
npm i -D typescript @types/express @types/cors @types/node @types/node-cron ts-node jest @types/jest ts-jest
```

### Enterprise
```bash
npm i express cors node-cron dotenv axios winston redis bull
npm i -D typescript @types/express @types/cors @types/node @types/node-cron ts-node jest @types/jest ts-jest eslint prettier husky lint-staged
```

---

## Backend | Nodemailer (Email)

### Simples
```bash
npm i nodemailer
npm i -D typescript @types/node @types/nodemailer ts-node
```

### Básico
```bash
npm i nodemailer dotenv
npm i -D typescript @types/node @types/nodemailer ts-node
```

### Intermediário
```bash
npm i express cors nodemailer dotenv
npm i -D typescript @types/express @types/cors @types/node @types/nodemailer ts-node
```

### Avançado
```bash
npm i express cors nodemailer dotenv zod handlebars
npm i -D typescript @types/express @types/cors @types/node @types/nodemailer @types/handlebars ts-node
```

> `handlebars` — para templates de email em HTML dinâmico

### Complexo
```bash
npm i express cors nodemailer dotenv zod handlebars bull redis
npm i -D typescript @types/express @types/cors @types/node @types/nodemailer @types/handlebars ts-node jest @types/jest ts-jest
```

> `bull + redis` — envia emails em fila sem travar o servidor

### Enterprise
```bash
npm i express cors nodemailer dotenv zod handlebars bull redis axios winston
npm i -D typescript @types/express @types/cors @types/node @types/nodemailer @types/handlebars ts-node jest @types/jest ts-jest eslint prettier husky lint-staged
```
