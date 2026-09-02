# Comandos para Instalar | Typescript

## Iniciando Projeto
```bash
npm init -y
```

## Simples
```bash
npm i typescript ts-node
```

## Configuração do TS
```bash
npx tsc --init
```
> Isso gera o `tsconfig.json`. Configuração recomendada:
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
> ⚠️ Removido `experimentalDecorators` e `emitDecoratorMetadata` — não são necessários no Prisma

## Configuração do Prisma
```bash
npx prisma init
```
> Gera o `prisma/schema.prisma` e o `.env` com `DATABASE_URL`

## Backend | Prisma

### Básico
```bash
npm i express cors @prisma/client
npm i -D typescript @types/express @types/cors @types/node ts-node prisma
```

### Intermediário
```bash
npm i express cors @prisma/client dotenv
npm i -D typescript @types/express @types/cors @types/node ts-node prisma
```

### Avançado
```bash
npm i express cors @prisma/client dotenv bcrypt jsonwebtoken zod
npm i -D typescript @types/express @types/cors @types/node @types/bcrypt @types/jsonwebtoken ts-node prisma
```

### Complexo
```bash
npm i express cors @prisma/client dotenv bcrypt jsonwebtoken zod redis
npm i -D typescript @types/express @types/cors @types/node @types/bcrypt @types/jsonwebtoken ts-node prisma jest @types/jest ts-jest
```

### Enterprise
```bash
npm i express cors @prisma/client dotenv bcrypt jsonwebtoken zod redis bull axios winston
npm i -D typescript @types/express @types/cors @types/node @types/bcrypt @types/jsonwebtoken ts-node prisma jest @types/jest ts-jest eslint prettier husky
```

### API
```bash
npm i axios dotenv @prisma/client
npm i -D typescript @types/node ts-node prisma
```