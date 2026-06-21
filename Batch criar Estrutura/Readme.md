# 🖥️ Scripts
*"Um comando e a estrutura tá pronta."*

> Scripts bash que criam a estrutura completa de um projeto do zero.  
> Pasta, arquivos, tudo organizado — você só começa a codar.

---

## 📦 O que tem aqui

| Pasta | Scripts disponíveis |
|-------|-------------------|
| **React** | Estrutura completa React Web |
| **MVC** | MVC em PHP, Java, JS e TS |
| **DDD** | DDD em PHP, Java, JS, TS e C# |

---

## 🗃️ Estrutura

```
Scripts/
├── React/
│   └── criar-react.sh
│
├── MVC/
│   ├── mvc-php.sh
│   ├── mvc-java.sh
│   ├── mvc-js.sh
│   └── mvc-ts.sh
│
└── DDD/
    ├── ddd-csharp.sh
    ├── ddd-php.sh
    ├── ddd-java.sh
    ├── ddd-js.sh
    └── ddd-ts.sh
```

---

## 🚀 Como usar

```bash
# Dá permissão de execução
chmod +x script.sh

# Executa
./script.sh
```

> Os scripts de MVC e DDD pedem o nome do projeto na hora da execução.  
> O de React já cria tudo automaticamente dentro de `src/`.

---

## 📋 O que cada script cria

### ⚛️ React Web
```
src/
├── Components/     # Botões, Inputs, Cards, Navegação, Tipografia, Layout, Feedback, Tabelas
├── Screen/         # Login, Cadastro, Dashboard, Admin, 2FA, 404 e mais
├── Hooks/          # useAuth, useApi, useForm, useModal, useToast, useFetch
├── Services/       # api.ts, authService.ts
├── Utils/          # validators, formatters, constants
├── Types/
├── Assets/
└── Context/
```

### 🏗️ MVC (4 linguagens)
```
<projeto>/
├── app/
│   ├── Controllers/    # Home, User, Auth
│   ├── Models/         # User, Product
│   ├── Services/       # User, Auth
│   ├── Repositories/   # User
│   ├── Middleware/     # Auth, Error
│   ├── Config/         # database, env
│   └── Utils/
├── public/
├── routes/             # index, user, auth
└── tests/
```

### 🧱 DDD (4 linguagens + C#)
```
<projeto>/src/
├── Domain/
│   ├── Entities/       # User, Product
│   ├── ValueObjects/   # Email, Password
│   ├── Repositories/   # interfaces
│   ├── Services/
│   └── Exceptions/
├── Application/
│   ├── UseCases/       # Create, Get, List
│   ├── DTOs/
│   ├── Validators/
│   └── Mappers/
├── Infrastructure/
│   ├── Repositories/
│   ├── Persistence/
│   └── Config/
└── Interfaces/
    ├── Controllers/    # User, Auth
    ├── Middleware/
    └── Routes/
```

---

**Criado no Brasil 🇧🇷 — Open source. Gratuito. Para sempre.**
