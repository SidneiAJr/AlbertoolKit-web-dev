# 🗂️ Estrutura de Pastas
*"Arquitetura certa desde o início."*

> Estruturas de projeto prontas para os principais padrões arquiteturais, separadas por linguagem.  
> Você não precisa pensar na organização — só na lógica.

---

## 📐 Padrões disponíveis

| Padrão | Descrição resumida |
|--------|-------------------|
| **ADR** | Architectural Decision Records — registro de decisões técnicas do projeto |
| **Clean** | Clean Architecture — separação por regras de negócio, casos de uso e infraestrutura |
| **CQRS** | Command Query Responsibility Segregation — separação entre leitura e escrita |
| **DDD** | Domain-Driven Design — modelagem orientada ao domínio do negócio |
| **Hex** | Hexagonal Architecture (Ports & Adapters) — núcleo isolado de infraestrutura |
| **Layered** | Arquitetura em camadas — apresentação, negócio, dados |
| **MVC** | Model-View-Controller — padrão clássico de separação de responsabilidades |

---

## 🌐 Linguagens suportadas

Cada padrão possui estrutura separada para 4 linguagens:

```
<padrão>/
├── <padrão>-java/
├── <padrão>-js/
├── <padrão>-php/
└── <padrão>-ts/
```

---

## 🗃️ Estrutura completa

```
Estrutura de Pastas/
│
├── ADR/
│   ├── adr-java/
│   ├── adr-js/
│   ├── adr-php/
│   └── adr-ts/
│
├── Clean/
│   ├── clean-java/
│   ├── clean-js/
│   ├── clean-php/
│   └── clean-ts/
│
├── Cqrs/
│   ├── cqrs-java/
│   ├── cqrs-js/
│   ├── cqrs-php/
│   └── cqrs-ts/
│
├── DDD/
│   ├── ddd-java/
│   ├── ddd-js/
│   ├── ddd-php/
│   └── ddd-ts/
│
├── Hex/
│   ├── hex-java/
│   ├── hex-js/
│   ├── hex-php/
│   └── hex-ts/
│
├── Layered/
│   ├── layered-java/
│   ├── layered-js/
│   ├── layered-php/
│   └── layered-ts/
│
└── MVC/
    ├── mvc-java/
    ├── mvc-js/
    ├── mvc-php/
    └── mvc-ts/
```

---

## 🚀 Como usar

1. Escolha o padrão arquitetural que faz sentido pro seu projeto
2. Acesse a pasta da linguagem que você vai usar
3. Copie a estrutura pro seu repositório
4. Comece a codar — a organização já tá feita

---

## 🤔 Qual padrão escolher?

| Cenário | Sugestão |
|---------|----------|
| API simples / CRUD | **MVC** ou **Layered** |
| Sistema com regras de negócio complexas | **DDD** ou **Clean** |
| Alta escala com leitura/escrita separadas | **CQRS** |
| Integração com múltiplos serviços externos | **Hex** |
| Precisa documentar decisões técnicas | **ADR** (combinável com qualquer outro) |

---

**Criado no Brasil 🇧🇷 — Open source. Gratuito. Para sempre.**
