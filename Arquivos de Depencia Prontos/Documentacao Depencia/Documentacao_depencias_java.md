# 📦 Java Enterprise POM - Documentação de Dependências

## Visão Geral
Este POM contém **70+ dependências** para projetos Java/Spring Boot enterprise-ready.

---

## 📊 Grupos de Dependências

### 1. Spring Boot Core (15 dependências)

| Dependência | Versão | Função |
|-------------|--------|--------|
| `spring-boot-starter-web` | 3.2.0 | APIs REST, Tomcat embutido |
| `spring-boot-starter-data-jpa` | 3.2.0 | ORM, Hibernate |
| `spring-boot-starter-security` | 3.2.0 | Autenticação, autorização |
| `spring-boot-starter-validation` | 3.2.0 | Validação de dados |
| `spring-boot-starter-actuator` | 3.2.0 | Monitoramento, health checks |
| `spring-boot-starter-cache` | 3.2.0 | Cache (Caffeine) |
| `spring-boot-starter-mail` | 3.2.0 | Envio de e-mails |
| `spring-boot-starter-batch` | 3.2.0 | Processamento em lote |
| `spring-boot-starter-quartz` | 3.2.0 | Tarefas agendadas |
| `spring-boot-starter-amqp` | 3.2.0 | RabbitMQ |
| `spring-boot-starter-data-mongodb` | 3.2.0 | MongoDB NoSQL |
| `spring-boot-starter-data-redis` | 3.2.0 | Redis cache/session |

### 2. Spring Cloud (8 dependências)

| Dependência | Função |
|-------------|--------|
| `spring-cloud-starter-config` | Configuração externa centralizada |
| `spring-cloud-starter-netflix-eureka-client` | Service discovery |
| `spring-cloud-starter-gateway` | API Gateway |
| `spring-cloud-starter-openfeign` | Cliente HTTP declarativo |
| `spring-cloud-starter-circuitbreaker-resilience4j` | Circuit breaker |
| `spring-cloud-starter-kubernetes-client` | Integração com K8s |

### 3. Banco de Dados (6 drivers)

| Dependência | Banco |
|-------------|-------|
| `mysql-connector-j` | MySQL |
| `postgresql` | PostgreSQL |
| `ojdbc11` | Oracle |
| `mssql-jdbc` | SQL Server |
| `spring-boot-starter-data-mongodb` | MongoDB |
| `spring-boot-starter-data-redis` | Redis |

### 4. Mensageria (2 dependências)

| Dependência | Função |
|-------------|--------|
| `spring-boot-starter-amqp` | RabbitMQ |
| `spring-kafka` | Apache Kafka |

### 5. Segurança (6 dependências)

| Dependência | Função |
|-------------|--------|
| `jjwt-api` | Criação/validação de tokens JWT |
| `jjwt-impl` | Implementação JWT |
| `jjwt-jackson` | JSON com JWT |
| `keycloak-spring-boot-starter` | SSO, OAuth2 |

### 6. Cloud (3 dependências)

| Dependência | Cloud |
|-------------|-------|
| `aws-java-sdk-s3` | AWS S3 |
| `azure-storage-blob` | Azure Blob |
| `google-cloud-storage` | GCP Storage |

### 7. Utilitários (8 dependências)

| Dependência | Função |
|-------------|--------|
| `lombok` | Reduz boilerplate |
| `mapstruct` | Mapeamento DTO |
| `commons-lang3` | Utilitários String/Number |
| `commons-io` | Utilitários IO |
| `elasticsearch-java` | Busca |
| `flyway-core` | Migração de banco |
| `liquibase-core` | Migração alternativa |
| `springdoc-openapi` | Swagger/OpenAPI |

### 8. Monitoramento (3 dependências)

| Dependência | Função |
|-------------|--------|
| `micrometer-registry-prometheus` | Métricas para Prometheus |
| `micrometer-tracing-bridge-brave` | Distributed tracing |
| `opentelemetry-api` | Observabilidade |

### 9. Testes (5 dependências)

| Dependência | Função |
|-------------|--------|
| `spring-boot-starter-test` | JUnit, Mockito, AssertJ |
| `testcontainers` | Containers para testes |
| `testcontainers-mysql` | MySQL em testes |
| `testcontainers-junit-jupiter` | Integração JUnit 5 |
| `testcontainers-kafka` | Kafka em testes |

---

## 🚀 Como Usar

### Instalação
```bash
mvn clean install
```

# 📦 Níveis de Pom.xml - Java/Spring Boot

## Nível 1 - SIMPLES (Projeto básico)

**Para que serve:** Projetos pequenos, estudos, CRUD simples.

| Dependência | Pra que serve |
|-------------|----------------|
| `spring-boot-starter-web` | Criar API REST, rodar servidor Tomcat |
| `spring-boot-starter-data-jpa` | Conectar e manipular banco de dados |
| `mysql-connector-j` | Driver para conectar no MySQL |
| `lombok` | Evita escrever getter/setter na mão |
| `spring-boot-starter-test` | Testar se o código funciona |

**Tamanho:** ~20MB | **Tempo de download:** 1-2 minutos

---

## Nível 2 - BÁSICO (CRUD completo)

**Para que serve:** API com banco, validação, logs.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 1 | + |
| `spring-boot-starter-validation` | Validar dados (email, tamanho, etc) |
| `postgresql` | Driver para PostgreSQL (outro banco) |
| `HikariCP` | Pool de conexões (mais rápido) |
| `slf4j-simple` | Logs da aplicação |

**Tamanho:** ~35MB | **Tempo de download:** 2-3 minutos

---

## Nível 3 - INTERMEDIÁRIO (Múltiplos bancos)

**Para que serve:** Sistemas que usam vários bancos de dados.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 2 | + |
| `ojdbc11` | Driver para Oracle |
| `mssql-jdbc` | Driver para SQL Server |
| `HikariCP` | Pool de conexões |
| `slf4j-simple` | Logs |

**Tamanho:** ~50MB | **Tempo de download:** 3-4 minutos

---

## Nível 4 - AVANÇADO (API com segurança)

**Para que serve:** API com autenticação JWT, segurança.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 3 | + |
| `spring-boot-starter-security` | Autenticação e autorização |
| `jjwt-api` | Criar e validar tokens JWT |
| `jjwt-impl` | Implementação do JWT |
| `jjwt-jackson` | Converter JWT para JSON |

**Tamanho:** ~70MB | **Tempo de download:** 4-5 minutos

---

## Nível 5 - COMPLEXO (Cache + Filas + Testes)

**Para que serve:** Sistemas com cache, filas, testes avançados.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 4 | + |
| `spring-boot-starter-cache` | Guardar dados em cache (mais rápido) |
| `spring-boot-starter-quartz` | Tarefas agendadas (toda hora, todo dia) |
| `spring-kafka` | Mensageria com Kafka (fila) |
| `testcontainers` | Testes com banco de verdade |
| `micrometer-registry-prometheus` | Monitorar performance |

**Tamanho:** ~120MB | **Tempo de download:** 5-7 minutos

---

## Nível 6 - ENTERPRISE (Cloud + Microserviços)

**Para que serve:** Sistemas grandes, na nuvem, com microserviços.

| Dependência | Pra que serve |
|-------------|----------------|
| Tudo do Nível 5 | + |
| `spring-cloud-starter-config` | Configuração centralizada |
| `spring-cloud-starter-netflix-eureka-client` | Localizar outros serviços |
| `spring-cloud-starter-gateway` | Roteamento de requisições |
| `spring-cloud-starter-openfeign` | Chamar outras APIs fácil |
| `aws-java-sdk-s3` | Salvar arquivos na AWS |
| `azure-storage-blob` | Salvar arquivos na Azure |
| `spring-cloud-starter-kubernetes-client` | Rodar no Kubernetes |
| `springdoc-openapi` | Documentação da API (Swagger) |

**Tamanho:** ~300MB | **Tempo de download:** 10-15 minutos

---

## 📊 Resumo rápido

| Nível | Quando usar | Tamanho | Tempo |
|-------|-------------|---------|-------|
| **Simples** | Estudo, CRUD básico | 20MB | 1-2 min |
| **Básico** | API com banco | 35MB | 2-3 min |
| **Intermediário** | Múltiplos bancos | 50MB | 3-4 min |
| **Avançado** | API com segurança | 70MB | 4-5 min |
| **Complexo** | Cache, filas, testes | 120MB | 5-7 min |
| **Enterprise** | Cloud, microserviços | 300MB | 10-15 min |

---

## 💡 Dica do chefe

> Comece pelo SIMPLES. Se precisar de mais, sobe o nível. Não adianta baixar 300MB pra fazer um CRUD de 2 tabelas. Preguiça? Chama de eficiência.

**Feito no Brasil 🇧🇷**
