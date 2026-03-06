# samueljansem.dev

![Astro](https://img.shields.io/badge/Astro-5-007ec6?style=for-the-badge&logo=astro&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-007ec6?style=for-the-badge&logo=typescript&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-10-007ec6?style=for-the-badge&logo=pnpm&logoColor=white)

---

## Links Uteis

- Site publicado: [https://samueljansem.dev](https://samueljansem.dev)
- Repositorio GitHub: [https://github.com/samueljansem/samueljansem.dev](https://github.com/samueljansem/samueljansem.dev)

---

## Sobre o Projeto

Portfolio pessoal desenvolvido como projeto da disciplina **Laboratorio de Desenvolvimento de Software** do curso de Engenharia de Software da PUC Minas.

O site reune informacoes profissionais, projetos open-source e artigos sobre desenvolvimento de software, servindo como vitrine profissional e espaco para compartilhar conhecimento.

---

## Funcionalidades Principais

- **Listagem de Projetos** — Pagina dedicada com projetos em destaque e detalhes individuais
- **Blog** — Artigos sobre engenharia de software e desenvolvimento web
- **Dark Mode** — Alternancia entre temas claro e escuro
- **Responsividade** — Layout adaptavel a diferentes tamanhos de tela
- **SEO** — Meta tags, Open Graph, Twitter Cards e URLs canonicas
- **Pagina 404 Customizada** — Pagina de erro personalizada

---

## Tecnologias Utilizadas

### Front-end

- **Framework:** [Astro 5](https://astro.build/)
- **Estilizacao:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)

### Infraestrutura & DevOps

- **Containerizacao:** [Docker](https://www.docker.com/) (multi-stage build com Nginx)
- **Gerenciador de Pacotes:** [pnpm 10](https://pnpm.io/)
- **Servidor de Producao:** Nginx (Alpine)

---

## Estrutura do Projeto

```
.
├── content/                  # Conteudo do site (Markdown + TOML)
│   ├── configuration.toml    # Configuracoes globais do site
│   ├── blogs/                # Artigos do blog
│   └── projects/             # Projetos
├── public/                   # Arquivos estaticos
├── src/
│   ├── components/           # Componentes Astro reutilizaveis
│   │   ├── common/           # Componentes genericos (Anchor, Section)
│   │   └── home/             # Componentes da pagina inicial (Hero, Featured)
│   ├── layouts/              # Layouts (Layout, BlogLayout, ProjectLayout)
│   ├── lib/                  # Utilitarios e tipos TypeScript
│   ├── pages/                # Rotas do site
│   │   ├── index.astro       # Pagina inicial
│   │   ├── 404.astro         # Pagina de erro
│   │   ├── blog/             # Listagem e detalhe de artigos
│   │   └── projects/         # Listagem e detalhe de projetos
│   └── styles/               # Estilos globais (CSS)
├── astro.config.mjs          # Configuracao do Astro
├── Dockerfile                # Build multi-stage (Node + Nginx)
├── package.json              # Dependencias e scripts
└── tsconfig.json             # Configuracao TypeScript
```

---

## Instalacao e Execucao

### Pre-requisitos

- **Node.js:** versao 22 ou superior
- **pnpm:** versao 10 ou superior

### Passos

1. Clone o repositorio:

```bash
git clone https://github.com/samueljansem/samueljansem.dev.git
cd samueljansem.dev
```

2. Instale as dependencias:

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O site estara disponivel em **http://localhost:4321**.

4. Para gerar o build de producao:

```bash
pnpm build
```

5. Para pre-visualizar o build:

```bash
pnpm preview
```

---

## Docker

Para executar o projeto via Docker:

1. Build da imagem:

```bash
docker build -t samueljansem-dev .
```

2. Executar o container:

```bash
docker run -p 8080:80 samueljansem-dev
```

O site estara disponivel em **http://localhost:8080**.

---

## Deploy

O site esta publicado e disponivel em [https://samueljansem.dev](https://samueljansem.dev).

O deploy utiliza uma imagem Docker com build multi-stage: o Astro gera os arquivos estaticos que sao servidos pelo Nginx.

---

## Documentacoes Utilizadas

- [Documentacao do Astro](https://docs.astro.build/)
- [Documentacao do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentacao do Docker](https://docs.docker.com/)

---

## Autor

| Nome          | GitHub                                                     | LinkedIn                                                             |
| ------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Samuel Jansem | [github.com/samueljansem](https://github.com/samueljansem) | [linkedin.com/in/samueljansem](https://linkedin.com/in/samueljansem) |

---

## Licenca

Este projeto esta sob a licenca MIT.
