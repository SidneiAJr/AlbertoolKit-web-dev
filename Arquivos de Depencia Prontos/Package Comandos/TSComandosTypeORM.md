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
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Backend | TypeORM

### Básico
```bash
npm i express cors mysql typeorm
npm i -D typescript @types/express @types/cors @types/node ts-node
```

### Intermediário
```bash
npm i express cors mysql2 typeorm dotenv
npm i -D typescript @types/express @types/cors @types/node @types/mysql2 ts-node
```

### Avançado
```bash
npm i express cors mysql2 typeorm dotenv bcrypt jsonwebtoken class-validator class-transformer
npm i -D typescript @types/express @types/cors @types/node @types/bcrypt @types/jsonwebtoken ts-node
```

### Complexo
```bash
npm i express cors mysql2 typeorm dotenv bcrypt jsonwebtoken class-validator class-transformer redis
npm i -D typescript @types/express @types/cors @types/node @types/bcrypt @types/jsonwebtoken ts-node jest @types/jest ts-jest
```

### Enterprise
```bash
npm i express cors mysql2 typeorm dotenv bcrypt jsonwebtoken class-validator class-transformer redis bull axios winston
npm i -D typescript @types/express @types/cors @types/node @types/bcrypt @types/jsonwebtoken ts-node jest @types/jest ts-jest eslint prettier husky
```

### API
```bash
npm i axios dotenv
npm i -D typescript @types/node ts-node
```