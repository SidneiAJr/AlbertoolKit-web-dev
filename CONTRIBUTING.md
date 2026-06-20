# Contributing

Obrigado por querer contribuir com o **Albertool-DevKit**! Este guia explica como adicionar conteúdo sem quebrar a filosofia do projeto.

---

## Filosofia do projeto

> "Só estrutura. A lógica é sua."

- **Sem código de negócio** — arquivos vazios ou com comentários de orientação apenas
- **Sem exemplos que precisam ser apagados** — o dev entra e já começa a codar
- **Sem opiniões sobre frameworks de teste** — isso fica no projeto do usuário

Se sua contribuição adiciona código de negócio, ela será recusada. Sem exceções.

---

## O que pode ser contribuído

| Tipo | Aceito | Exemplo |
|------|--------|---------|
| Nova arquitetura de backend | ✅ | Microservices com estrutura de pastas vazia |
| Nova linguagem para arquitetura existente | ✅ | Clean Architecture em Go |
| Novo framework de frontend | ✅ | Svelte com estrutura base |
| Novos componentes React/RN (arquivo `.tsx` vazio) | ✅ | `DataTable.tsx`, `BottomNav.tsx` |
| Novo `package.json` ou `pom.xml` de dependências | ✅ | Stack Bun + Elysia |
| Docker Compose para nova combinação de serviços | ✅ | Node + PostgreSQL + Redis |
| Script bash de criação de estrutura | ✅ | `create-next-app-skeleton.sh` |
| Código de negócio | ❌ | Lógica de autenticação, validações |
| Exemplos completos funcionando | ❌ | App de todo list, CRUD pronto |
| Dependências desatualizadas | ❌ | Versões com CVE conhecida |

---

## Como contribuir

### 1. Fork e branch

```bash
git clone https://github.com/SidneiAJr/Albertool-DevKit.git
cd Albertool-DevKit
git checkout -b feat/nome-da-contribuicao
```

Prefixos de branch:
- `feat/` — nova estrutura, componente ou script
- `fix/` — correção de pasta fora do padrão, typo, arquivo no lugar errado
- `docs/` — README de subpasta, melhorias de documentação

### 2. Siga o padrão de cada tipo

**Backend (nova arquitetura ou linguagem)**

```
NomeArquitetura/
  linguagem/
    controllers/
    models/
    routes/
    services/
    ...
    package.json  ← só dependências, scripts e metadados
    README.md     ← o que é a arquitetura em 3 linhas
```

**Frontend (novo componente)**

Arquivo `.tsx` ou `.jsx` vazio com comentário de orientação no topo:

```tsx
// ComponenteX
// Responsabilidade: [descreva em uma linha o que este componente deve fazer]
// Props sugeridas: [liste as props esperadas]
```

**Script bash**

- Deve funcionar em Linux e macOS
- Sempre exibe um `echo` ao final confirmando o que foi criado
- Não instala nada automaticamente — só cria estrutura
- Testa antes de submeter: `bash seu-script.sh`

**package.json / pom.xml**

- Todas as dependências com versão explícita (sem `*` ou `latest`)
- Scripts documentados com comentário inline se não forem óbvios
- Nome do arquivo deve indicar a stack: `package-next-fullstack.json`

### 3. Abra o Pull Request

**Título:** `[feat] Adiciona esqueleto Clean Architecture em Go`

**Descrição mínima:**

```
## O que esta PR adiciona
Esqueleto Clean Architecture para Go usando Gin e GORM.

## Estrutura de pastas
(cole a árvore de pastas aqui)

## Testado em
- [ ] Linux
- [ ] macOS
- [ ] Windows (WSL)
```

---

## Padrões de nomenclatura

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Pastas de arquitetura | PascalCase | `CleanArchitecture/`, `HexagonalArch/` |
| Pastas de linguagem/framework | lowercase | `go/`, `rust/`, `bun/` |
| Componentes React/RN | PascalCase | `DataTable.tsx`, `BottomNav.tsx` |
| Scripts bash | kebab-case | `create-next-skeleton.sh` |
| Arquivos de dependência | kebab-case com stack | `package-bun-api.json` |

---

## O que NÃO fazer

- Não crie arquivos com `import` ou `require` de libs não listadas no `package.json` da mesma pasta
- Não commite `node_modules/`, `.env`, arquivos de build
- Não renomeie pastas existentes sem abrir uma Issue antes — pode quebrar links no README principal
- Não traduza nomes de pastas que já existem em inglês (manter consistência)

---

## Reportando problemas

Se uma pasta está fora do padrão arquitetural que ela representa, ou um arquivo está no lugar errado, [abra uma Issue](https://github.com/SidneiAJr/Albertool-DevKit/issues) com:

- Qual pasta/arquivo está errado
- O que deveria ser o correto segundo a documentação da arquitetura
- Fonte de referência (link para documentação oficial ou artigo técnico)

---

## Dúvidas?

Abre uma Issue com a label `question`. Simples assim.
