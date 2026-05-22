# 🛠️ Albertool-DevKit

*"Preguiça? Chama de eficiência."*

> ⚠️ **Observação importante sobre arquiteturas**
> 
> Eu domino **MVC** na prática. As outras 6 estruturas (DDD, Hexagonal, Clean Architecture, Layered, CQRS, Repository Pattern) foram criadas seguindo a documentação oficial e referências técnicas que estudei.
> 
> **Os esqueletos estão vazios por design** – você que sabe preencher com sua lógica.
> 
> Se você entende dessas arquiteturas e perceber que:
> - Faltou algum arquivo importante
> - Alguma pasta está invertida ou fora do padrão
> - A estrutura não reflete fielmente a arquitetura proposta
> 
> **Por favor, me reporte** abrindo uma Issue no GitHub. Vou corrigir assim que possível.
> 
> *Se você não conhece essas arquiteturas ainda, comece pelo MVC. É mais seguro.*

---
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height="40" />
</p>

---

## 📌 O que é isso?

**Albertool-DevKit** é um ecossistema de esqueletos prontos para desenvolvedores que estão cansados de:

- Criar a mesma estrutura de pastas todo santo projeto
- Copiar `pom.xml`, `package.json` ou `requirements.txt` de um projeto velho
- Perder 30 minutos configurando linter, pastas e dependências iniciais

**Você recebe pastas vazias com a organização correta. A lógica é sua.**

> ⚠️ **Importante**: Nenhum arquivo tem código de negócio. Só estrutura e dependências. Isso é de propósito: você não vai perder tempo apagando exemplo que não quer.

---

## 👁️ Veja antes de clonar

### Estrutura MVC – JavaScript
<img width="193" height="334" alt="Pastas MVC para JS: controllers, models, routes, services" src="https://github.com/user-attachments/assets/a81b7be3-dcb2-4ce2-b701-627f855e3328" />

### Estrutura MVC – TypeScript
<img width="189" height="356" alt="Pastas MVC para TS com tipagens" src="https://github.com/user-attachments/assets/c8ba417d-8243-4a5d-a437-fc4d87d20535" />

### Todas as 7 arquiteturas disponíveis
<img width="202" height="179" alt="Visão geral das 7 estruturas de pastas" src="https://github.com/user-attachments/assets/9906ef13-784e-4608-9ced-3a9f81094964" />

### Frontend – estrutura organizada
<img width="197" height="588" alt="Pastas de frontend: assets, components, pages, services" src="https://github.com/user-attachments/assets/69ad0f77-2123-492d-bb37-af44a81b6080" />

---

## 📦 Projetos do ecossistema

| Projeto | O que tem | Stack | Link |
|---------|-----------|-------|------|
| **NoMorePomPain** | 30+ arquivos de dependência prontos (`pom.xml`, `package.json`, `requirements.txt`) | Java, PHP, Node, Python | [GitHub](https://github.com/SidneiAJr/NoMorePomPain) |
| **Constellation Backend Only** | 7 arquiteturas × 4 linguagens = 28 esqueletos (pastas vazias + dependências) | JS, TS, PHP, Java | [GitHub](https://github.com/SidneiAJr/Constellation-Backend-Only) |
| **Esqueletos Backend Enterprise** | Versão simplificada: só MVC tradicional (menos pastas, mais direto) | Java, Node, PHP, TS | [GitHub](https://github.com/SidneiAJr/Esqueletos_backend_enteprise) |
| **Nosso Frontend** | Estrutura de CSS/JS organizada em dois níveis (Hard / Enterprise) | HTML, CSS, JS | [GitHub](https://github.com/SidneiAJr/Nosso-Frontend) |

> 🤔 **Por que dois projetos de backend?**  
> `Constellation` é para quem quer explorar múltiplas arquiteturas (DDD, Hexagonal, Clean...).  
> `Esqueletos Enterprise` é para quem só quer MVC rápido, sem excesso de pastas.  
> **Se você não sabe a diferença, comece pelo Enterprise.**

---

## 🚀 Exemplo rápido de uso (de verdade)

```bash
# 1. Pegue um esqueleto MVC para Node.js
git clone https://github.com/SidneiAJr/Constellation-Backend-Only.git
cd Constellation-Backend-Only/js/mvc

# 2. Instale as dependências (já estão no package.json)
npm install

# 3. Comece a codar dentro das pastas vazias
# - routes/
# - controllers/
# - models/
# - services/

# 4. Rode seu servidor
npm start
```

## 🧩 As 7 arquiteturas do Constellation

1. **MVC** – Model-View-Controller (tradicional)
2. **DDD** – Domain-Driven Design (regras de negócio no centro)
3. **Hexagonal** – Ports & Adapters (isolamento de dependências externas)
4. **Clean Architecture** – Camadas concêntricas (mais rígida que hexagonal)
5. **Layered** – N-tier clássico (apresentação → negócio → dados)
6. **CQRS** – Separação de comandos e consultas
7. **Repository Pattern** – Abstração de acesso a dados

---

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Repositórios | 4 |
| Linguagens | 6 |
| Arquivos de dependência | 30+ |
| Esqueletos de backend | 28 |
| Arquiteturas | 7 |
| Níveis de frontend | 2 |

---

## 🙏 De dev pra dev

Criado no Brasil 🇧🇷 por um dev preguiçoso (no bom sentido) que cansou de refazer estrutura.

**Open source. MIT. Use à vontade. Só não vende.**
