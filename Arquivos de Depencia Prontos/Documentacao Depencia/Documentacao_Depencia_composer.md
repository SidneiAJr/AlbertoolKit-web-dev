# 📦 Níveis de Composer.json - PHP

## Nível 1 - SIMPLES (PHP puro)

**Para que serve:** Scripts simples, estudos, projeto básico.

| Dependência | Pra que serve |
|-------------|----------------|
| `php` | Versão do PHP (>=7.4) |

**Tamanho:** 0MB | **Tempo de instalação:** Nenhum

---

## Nível 2 - BÁSICO (PHP com .env + logs)

**Para que serve:** Projetos com configuração de ambiente.

| Dependência | Pra que serve |
|-------------|----------------|
| `vlucas/phpdotenv` | Variáveis de ambiente (.env) |
| `monolog/monolog` | Logs da aplicação |

**Tamanho:** ~2MB | **Tempo de instalação:** 10-20 segundos

---

## Nível 3 - INTERMEDIÁRIO (PHP com ORM + banco)

**Para que serve:** CRUD completo com banco de dados.

| Dependência | Pra que serve |
|-------------|----------------|
| `doctrine/orm` | ORM (facilita queries SQL) |
| `doctrine/dbal` | Camada de banco de dados |
| `phpunit/phpunit` | Testes unitários |

**Tamanho:** ~15MB | **Tempo de instalação:** 1-2 minutos

---

## Nível 4 - AVANÇADO (PHP com framework Slim + JWT)

**Para que serve:** API REST profissional com autenticação.

| Dependência | Pra que serve |
|-------------|----------------|
| `slim/slim` | Framework para API (leve) |
| `slim/psr7` | Manipular requisições HTTP |
| `firebase/php-jwt` | Criar tokens de autenticação (JWT) |
| `mockery/mockery` | Testes com simulação de dados |

**Tamanho:** ~25MB | **Tempo de instalação:** 2-3 minutos

---

## Nível 5 - COMPLEXO (PHP com cache + validação)

**Para que serve:** Sistemas com cache e validação avançada.

| Dependência | Pra que serve |
|-------------|----------------|
| `symfony/cache` | Cache de dados (mais rápido) |
| `symfony/validator` | Validar dados (email, tamanho) |
| `ramsey/uuid` | Gerar IDs únicos |
| `squizlabs/php_codesniffer` | Padronizar código |

**Tamanho:** ~40MB | **Tempo de instalação:** 3-4 minutos

---

## Nível 6 - ENTERPRISE (PHP com Laravel completo)

**Para que serve:** Sistemas grandes, corporativos, com tudo incluso.

| Dependência | Pra que serve |
|-------------|----------------|
| `laravel/framework` | Framework completo (rotas, banco, views) |
| `laravel/sanctum` | Autenticação com token |
| `laravel/tinker` | Executar PHP no terminal |
| `spatie/laravel-permission` | Controle de permissões (admin, usuario) |
| `barryvdh/laravel-debugbar` | Debug no navegador |
| `predis/predis` | Conexão com Redis |
| `guzzlehttp/guzzle` | Chamar APIs externas |
| `laravel/horizon` | Gerenciar filas (Redis) |
| `laravel/telescope` | Monitorar requisições |
| `laravel/pint` | Corrigir formatação do código |
| `nunomaduro/collision` | Erros mais bonitos no terminal |
| `laravel/sail` | Docker para desenvolvimento |

**Tamanho:** ~100MB | **Tempo de instalação:** 5-10 minutos

---

## 📊 Resumo rápido

| Nível | Quando usar | Tamanho | Tempo |
|-------|-------------|---------|-------|
| **Simples** | Estudo, PHP puro | 0MB | Nenhum |
| **Básico** | Projetos com .env | 2MB | 10-20s |
| **Intermediário** | CRUD com banco | 15MB | 1-2 min |
| **Avançado** | API com framework | 25MB | 2-3 min |
| **Complexo** | Cache + validação | 40MB | 3-4 min |
| **Enterprise** | Laravel completo | 100MB | 5-10 min |

---

## 💡 Dica do chefe

> Comece pelo SIMPLES. Se precisar de mais, sobe o nível. PHP puro já resolve muito problema.

**Feito no Brasil 🇧🇷**
