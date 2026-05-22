# 📦 Níveis de Package.json - Node.js (JavaScript e TypeScript)

## Nível 1 - SIMPLES (API básica)

**Para que serve:** API simples, estudos, protótipo.

| Dependência | Pra que serve |
|-------------|----------------|
| `express` | Criar API REST, rotas, servidor |
| `typescript` (TS) | Tipagem estática (pega erros antes de rodar) |
| `ts-node-dev` (TS) | Rodar TS sem compilar e recarrega sozinho |
| `@types/express` (TS) | Typescript enxergar o Express |

**Tamanho:** ~5MB | **Tempo de instalação:** 10-20 segundos

---

## Nível 2 - BÁSICO (API com banco)

**Para que serve:** API conectada no banco de dados.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 1 | + |
| `mysql2` | Conectar no MySQL |
| `dotenv` | Variáveis de ambiente (.env) |
| `cors` | Permitir frontend acessar a API |
| `nodemon` (JS) | Recarregar servidor quando salvar |

**Tamanho:** ~15MB | **Tempo de instalação:** 30-40 segundos

---

## Nível 3 - INTERMEDIÁRIO (API com segurança)

**Para que serve:** API com autenticação e banco.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 2 | + |
| `bcrypt` | Criptografar senhas |
| `jsonwebtoken` | Criar tokens de autenticação (JWT) |
| `helmet` | Proteger headers HTTP (segurança) |

**Tamanho:** ~25MB | **Tempo de instalação:** 1 minuto

---

## Nível 4 - AVANÇADO (API com ORM + Validação)

**Para que serve:** API profissional, com banco e validação.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 3 | + |
| `sequelize` | ORM (facilita queries SQL) |
| `class-validator` | Validar dados (email, tamanho) |
| `class-transformer` | Transformar dados antes de enviar |
| `reflect-metadata` | Necessário pro class-validator |

**Tamanho:** ~40MB | **Tempo de instalação:** 1-2 minutos

---

## Nível 5 - COMPLEXO (Cache + Filas + Testes)

**Para que serve:** Sistemas com cache, filas, testes.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 4 | + |
| `redis` | Cache de dados (mais rápido) |
| `bull` | Fila de tarefas (processamento em lote) |
| `jest` | Testes unitários |
| `supertest` | Testar as rotas da API |
| `winston` | Logs da aplicação |

**Tamanho:** ~60MB | **Tempo de instalação:** 2-3 minutos

---

## Nível 6 - ENTERPRISE (Microserviços + Mensageria + Cloud)

**Para que serve:** Sistemas grandes, na nuvem, com mensageria.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 5 | + |
| `amqplib` | Mensageria com RabbitMQ |
| `socket.io` | Comunicação em tempo real |
| `bull` | Fila de tarefas |
| `aws-sdk` | Salvar arquivos na AWS |
| `@azure/storage-blob` | Salvar arquivos na Azure |
| `winston` | Logs avançados |
| `express-rate-limit` | Limitar quantidade de requisições |

**Tamanho:** ~100MB | **Tempo de instalação:** 3-5 minutos

---

## 📊 Resumo rápido

| Nível | Quando usar | Tamanho | Tempo |
|-------|-------------|---------|-------|
| **Simples** | Estudo, protótipo | 5MB | 10-20s |
| **Básico** | API com banco | 15MB | 30-40s |
| **Intermediário** | API com autenticação | 25MB | 1 min |
| **Avançado** | API com ORM + validação | 40MB | 1-2 min |
| **Complexo** | Cache, filas, testes | 60MB | 2-3 min |
| **Enterprise** | Cloud, microserviços | 100MB | 3-5 min |

---

## 💡 Dica do chefe

> Comece pelo SIMPLES. Se precisar de mais, sobe o nível. Não adianta instalar 100MB pra fazer um CRUD de 2 tabelas.

**Feito no Brasil 🇧🇷**
