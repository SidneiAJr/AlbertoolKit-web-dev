# 🔌 Integrações com Backend
*"Chama a API, não reinventa a roda."*

> Templates prontos de integração frontend → backend em JavaScript puro.  
> Estrutura base com `fetch`, tratamento de erro e as funções mais comuns já organizadas.

---

## 📦 O que tem aqui

| Backend | Porta padrão | Funções disponíveis |
|---------|-------------|---------------------|
| **C#** | `5000` / `5001` / `44300` | login, cadastro, listarTodos, listarID |
| **Node.js JS/TS** | `3000` | login, cadastro, listarTodos, listarID, update |
| **Spring (Java)** | `8080` | login, cadastro, listarTodos, listarID |
| **PHP** | `8000` | login, cadastro, listarTodos, listarID |

---

## 🗃️ Estrutura

```
Integrações com Backend/
├── csharp/
├── nodejs/
├── spring/
└── php/
```

---

## 🚀 Como usar

1. Acesse a pasta do backend que seu projeto usa
2. Copie o arquivo pro seu frontend
3. Troque a `const api` pela URL real da sua API
4. Implemente o corpo das funções com seus endpoints

```js
// Exemplo: trocar porta local por URL de produção
const api = "localhost:3000"           // desenvolvimento
const api = "https://suaapi.com"       // produção
```

---

## 📋 Funções base por backend

### C# — ASP.NET
```
Porta: 5000 | 5001 | 44300
├── login()
├── cadastro()
├── listarTodos()
└── listarID()
```

### Node.js — JS / TS
```
Porta: 3000
├── login()
├── cadastro()
├── listarTodos()
├── listarID()
└── update()
```

### Spring — Java
```
Porta: 8080
├── login()
├── cadastro()
├── listarTodos()
└── listarID()
```

### PHP
```
Porta: 8000
├── login()
├── cadastro()
├── listarTodos()
└── listarID()
```

---

## 💡 Padrões usados nos templates

| Backend | Estilo das funções | Try/Catch | Finally |
|---------|-------------------|-----------|---------|
| C# | `const fn = async () =>` | ✅ | ❌ |
| Node.js | `const fn = async () =>` / `async function fn()` | ✅ | ❌ |
| Spring | `const fn = async () =>` | ✅ | ✅ |
| PHP | `const fn = async () =>` | ✅ | ✅ |

---

**Criado no Brasil 🇧🇷 — Open source. Gratuito. Para sempre.**
