# 📦 Arquivos de Dependência Prontos
*"Nunca mais comece um projeto do zero."*

> Arquivos de dependência prontos para as principais linguagens e frameworks backend e frontend.  
> Do básico ao enterprise — escolhe o nível e já sai codando.

---

## 🗂️ O que tem aqui

| Pasta | Linguagem / Framework | Arquivo principal |
|-------|-----------------------|-------------------|
| **PACKAGEJSON JS** | Node.js JavaScript | `package.json` |
| **PACKAGEJSON TS** | Node.js TypeScript | `package.json` |
| **Package Json React Web** | React Web (Vite/CRA) | `package.json` |
| **Package Json React Web Expo** | React Native / Expo | `package.json` |
| **Composer PHP** | PHP / Laravel | `composer.json` |
| **Pom XML Java** | Java / Spring Boot | `pom.xml` + `application.properties` |
| **gadle** | Android / Kotlin | `build.gradle` |
| **Python** | Python | `requirements.txt` |
| **Ruby** | Ruby | `Gemfile` |
| **Go** | Go | `go.mod` |
| **csproj** | C# / .NET | `.csproj` + `appsettings.json` |
| **Env's** | Todas | `.env.example` por linguagem |
| **Docker** | Todas | Dockerfiles + Docker Compose prontos |
| **Documentacao Depencia** | Todas | Docs explicando cada dependência |

---

## 📊 Níveis disponíveis

Todas as linguagens seguem a mesma progressão de níveis:

| Nível | Descrição |
|-------|-----------|
| `basico` | Dependências essenciais para começar |
| `intermediario` | Adiciona autenticação, validação e banco |
| `avancado` | Inclui cache, filas, testes e mais |
| `complexo` | Arquitetura robusta com monitoramento |
| `enterprise` | Stack completa de produção |

---

## 🗃️ Estrutura completa

```
Arquivos de Dependencia Prontos/
│
├── PACKAGEJSON JS/
│   ├── Jest/
│   ├── paths/
│   ├── package-basico.json
│   ├── package-intermediario.json
│   ├── package-avancado.json
│   ├── package-complexo.json
│   └── package-enterprise.json
│
├── PACKAGEJSON TS/
│   ├── Jest/
│   ├── Prisma TS/
│   ├── paths/
│   ├── package-basico.ts.json
│   ├── package-intermediario.ts.json
│   ├── package-avancado.ts.json
│   ├── package-complexo.ts.json
│   ├── package-complexo-especialidades.ts.json
│   ├── package-enterprise.ts.json
│   ├── package-enterprise-v3.ts.json
│   ├── package-cli.ts.json
│   ├── package-cron.ts.json
│   ├── package-fastify.ts.json
│   ├── package-graphql.ts.json
│   ├── package-grpc.ts.json
│   ├── package-hono.ts.json
│   ├── package-microservice.ts.json
│   ├── package-nestjs.ts.json
│   ├── package-serverless.ts.json
│   ├── package-simples.ts.json
│   ├── package-trpc.ts.json
│   ├── package-websocket.ts.json
│   └── package-enterprise-prisma.json
│
├── Package Json React Web/
│   ├── package-basico.json
│   ├── package-intermediario.json
│   ├── package-avancado.json
│   ├── package-complexo.json
│   └── package-enterprise.json
│
├── Package Json React Web Expo/
│   ├── package-basico.json
│   ├── package-intermediario.json
│   ├── package-avancado.json
│   ├── package-complexo.json
│   └── package-enterprise.json
│
├── Composer PHP/
│   ├── composer-basico.json
│   ├── composer-intermediario.json
│   ├── composer-avancado.json
│   ├── composer-complexo.json
│   └── composer-enterprise.json
│
├── Pom XML Java/
│   ├── pom-basico.xml
│   ├── pom-intermediario.xml
│   ├── pom-avancado.xml
│   ├── pom-complexo.xml
│   ├── pom-enterprise.xml
│   └── application.properties
│
├── gadle/
│   ├── build.gradle_basico
│   ├── build.gradle_intermediario
│   ├── build.gradle_avancado
│   ├── build.gradle_complexo
│   └── build.gradle_enterprise
│
├── Python/
│   ├── requirements-basico.txt
│   ├── requirements-intermediario.txt
│   ├── requirements-avancado.txt
│   ├── requirements-complexo.txt
│   └── requirements-enterprise.txt
│
├── Ruby/
│   ├── Gemfile-basico
│   ├── Gemfile-intermediario
│   ├── Gemfile-avancado
│   ├── Gemfile-complexo
│   └── Gemfile-enterprise
│
├── Go/
│   ├── go-basico.mod
│   ├── go-intermediario.mod
│   ├── go-avancado.mod
│   ├── go-complexo.mod
│   └── go-enterprise.mod
│
├── csproj/
│   ├── app-basico.csproj
│   ├── app-intermediario.csproj
│   ├── app-avancado.csproj
│   ├── app-complexo.csproj
│   ├── app-enterprise.csproj
│   ├── appsettings.Development.json
│   ├── appsettings.Production.json
│   └── appsettings.Test.json
│
├── Env's/
│   ├── .env.example.js
│   ├── .env.example.ts
│   ├── .env.example.php
│   ├── .env.example.java
│   ├── .env.example.python
│   ├── .env.example.ruby
│   ├── .env.example.go
│   └── .env.example.csharp
│
├── Docker/
│   ├── Dockerfile.alpine
│   ├── Dockerfile.ubuntu
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   ├── docker-compose.ubuntu.yml
│   └── docker-compose.mysql.yml
│
└── Documentacao Depencia/
```

---

## 🚀 Como usar

**1. Escolha o arquivo** correspondente à sua linguagem e nível (`basico`, `intermediario`, etc.)

**2. Copie o conteúdo** do arquivo ou faça o download direto

**3. Cole na raiz do seu projeto** e renomeie conforme necessário:

| Linguagem | Nome do arquivo |
|-----------|----------------|
| Node.js / React / Expo | `package.json` |
| PHP | `composer.json` |
| Python | `requirements.txt` |
| Ruby | `Gemfile` |
| Go | `go.mod` |
| Android | `build.gradle` |
| C# / .NET | `app.csproj` |

**4. Troque o nome do projeto** dentro do arquivo (campo `name`, `artifactId`, `module`, etc.)

**5. Instale as dependências:**

```bash
# Node.js / React / React Native
npm install

# PHP
composer install

# Python
pip install -r requirements.txt

# Ruby
bundle install

# Go
go mod tidy

# Android
./gradlew build

# C# / .NET
dotnet restore
```

> Pronto. Sem configuração extra — só codar.

---

## ⭐ Especialidades Node.js TypeScript

O TS tem pacotes extras para casos de uso específicos:

| Arquivo | Caso de uso |
|---------|-------------|
| `package-nestjs.ts.json` | API com NestJS |
| `package-fastify.ts.json` | API com Fastify |
| `package-graphql.ts.json` | API GraphQL |
| `package-grpc.ts.json` | Comunicação gRPC |
| `package-microservice.ts.json` | Arquitetura de microsserviços |
| `package-websocket.ts.json` | Aplicação em tempo real |
| `package-serverless.ts.json` | Deploy serverless |
| `package-trpc.ts.json` | API type-safe com tRPC |
| `package-hono.ts.json` | API ultrarrápida com Hono |
| `package-cron.ts.json` | Jobs agendados |
| `package-cli.ts.json` | Ferramentas de linha de comando |
| `package-enterprise-prisma.json` | Enterprise com Prisma ORM |
| `package-enterprise-v3.ts.json` | Stack enterprise completa v3 |

---

## ⚛️ Especialidades React Web

Pacotes prontos para aplicações React com Vite ou CRA:

| Arquivo | Caso de uso |
|---------|-------------|
| `package-basico.json` | React + Vite + TypeScript |
| `package-intermediario.json` | Adiciona React Router, Axios, Zustand |
| `package-avancado.json` | Adiciona React Query, React Hook Form, Zod |
| `package-complexo.json` | Adiciona i18n, charts, socket, pagamento |
| `package-enterprise.json` | Stack completa com testes, monitoramento e CI |

---

## 📱 Especialidades React Native / Expo

Pacotes prontos para aplicações mobile com Expo:

| Arquivo | Caso de uso |
|---------|-------------|
| `package-basico.json` | Expo + Router + AsyncStorage |
| `package-intermediario.json` | Adiciona câmera, localização, notificações |
| `package-avancado.json` | Adiciona Zustand, React Query, React Hook Form |
| `package-complexo.json` | Adiciona i18n, charts, socket, pagamento (Stripe) |
| `package-enterprise.json` | Stack completa com biometria, mapas e testes |

---

## 🐳 Docker

Ambientes prontos pra subir com um comando:

| Arquivo | Descrição |
|---------|-----------|
| `Dockerfile.alpine` | Imagem de produção com Node, Python, Java, PHP, Go e Ruby |
| `Dockerfile.ubuntu` | Imagem de lab/dev com ferramentas básicas |
| `docker-compose.yml` | Stack completa: backend + MySQL + PostgreSQL + MongoDB + Redis + Nginx |
| `docker-compose.prod.yml` | Compose de produção usando a imagem Alpine |
| `docker-compose.ubuntu.yml` | Ambiente de lab com Ubuntu |
| `docker-compose.mysql.yml` | Só o MySQL, pra projetos simples |

```bash
# Subir a stack completa
docker-compose up -d

# Subir só o banco
docker-compose -f docker-compose.mysql.yml up -d

# Produção com Alpine
docker-compose -f docker-compose.prod.yml up -d
```

---

**Criado no Brasil 🇧🇷 — Open source. Gratuito. Para sempre.**
