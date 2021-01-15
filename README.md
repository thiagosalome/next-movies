<!-- Logo -->
<p align="center">
  <img src="./.github/logo.png" alt="Next Movies" title="Next Movies">
</p>

<!-- Badges -->
<p align="center">
  <a href="https://thiagosalome.github.io/next-movies/" target="_blank"><img alt="Next Movies" title="Next Movies" src="https://img.shields.io/badge/Aplica%C3%A7%C3%A3o-Next Movies-FA5302" />
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/thiagosalome/next-movies?color=FA5302">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thiagosalome/next-movies?color=FA5302">
  <img alt="GitHub package.json version badge" src="https://img.shields.io/github/downloads/thiagosalome/next-movies/total?color=FA5302">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-FA5302?color=FA5302">
</p>

<!-- Indice-->
<p align="center">
 <a href="#computer-sobre">Sobre</a> •
 <a href="#gear-funcionalidades">Funcionalidades</a> •
 <a href="#wrench-tecnologias-utilizadas">Tecnologias</a> •
 <a href="#art-layout">Layout</a> •  
 <a href="#movie_camera-preview">Preview</a> •
 <a href="#rocket-executando-o-projeto">Executando</a> •
 <a href="#memo-licença">Licença</a>
</p>

## :computer: Sobre

O **Next Movies** foi um projeto criado utilizando a API do [The Movie Database](https://developers.themoviedb.org/3) para listagem de filmes de streaming, para tv, para alugar e nos cinemas. O principal motivo de sua criação foi o estudo prático dos frameworks [Next.js](https://nextjs.org/) e [Tailwind CSS](https://tailwindcss.com/).

### Conceitos e ferramentas aplicados de cada framework

- [x] [Next.js](https://nextjs.org/)
  - [x] [next/link](https://nextjs.org/docs/api-reference/next/link)
  - [x] [next/head](https://nextjs.org/docs/api-reference/next/head)
  - [x] [next/router](https://nextjs.org/docs/api-reference/next/router)
  - [x] [next/image](https://nextjs.org/docs/api-reference/next/image)
  - [x] [global stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)
  - [x] [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)
    - [x] [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)
    - [x] [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)
    - [x] [SWR](https://nextjs.org/docs/basic-features/data-fetching#swr)
  - [x] [API Routes](https://nextjs.org/docs/api-routes/introduction)
- [x] [Tailwind CSS](https://tailwindcss.com/)
  - [x] [Utility First](https://tailwindcss.com/docs/utility-first)
  - [x] [Hover, Focus, & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
  - [x] [Dark Mode](https://tailwindcss.com/docs/dark-mode)
  - [x] [Extracting Components](https://tailwindcss.com/docs/extracting-components)
  - [x] [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives)

## :gear: Funcionalidades

- [x] Listagem dos últimos trailers
  - [x] Streaming
  - [x] Na TV
  - [x] Para Alugar
  - [x] Nos Cinemas
- [x] Listagem de empresas
  - [x] Streaming
  - [x] Na TV
  - [x] Para Alugar
  - [x] Nos Cinemas
- [x] Listagem de filmes e séries populares
  - [x] Streaming
  - [x] Na TV
  - [x] Para Alugar
  - [x] Nos Cinemas
- [x] Busca de filmes e séries
- [x] Dark Mode

## :wrench: Tecnologias Utilizadas

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/html.png" width='50' alt="HTML">
        <p>HTML</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/css.png" width='50' alt="CSS">
        <p>CSS</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/typescript.png" width='50' alt="TypeScript">
        <p>Typescript</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/react-base.png" width='50' alt="React">
        <p>React</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/next.png" width='50' alt="Next.js">
        <p>Next.js</p>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/tailwind.png" width='50' alt="Tailwind CSS">
        <p>Tailwind CSS</p>
      </td>
    </tr>
  </tbody>
</table>

## :art: Layout

### Web - [Figma](https://www.figma.com/file/TVPfivjWKVy57gw7Cf8to1/Next-Movies?node-id=1%3A14)

<img src="./.github/layout-web-mobile.png" alt="Layout Web" title="Layout Web">
<img src="./.github/layout-web-mobile-dark.png" alt="Layout Web Dark" title="Layout Web Dark">

## :movie_camera: Preview

### Web

<img src="./.github/preview-web.gif" alt="Preview Web" title="Preview Web">

## :rocket: Executando o projeto

### Pré-requisitos

Para executar o projeto é necessário ter instalado as seguintes ferramentas:

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href='https://git-scm.com/downloads' target='_blank'>
          <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/git.png" width='50' alt="GIT">
          <p>GIT</p>
        </a>
      </td>
      <td>
        <a href='https://git-scm.com/downloads' target='_blank'>
          <img src="https://raw.githubusercontent.com/thiagosalome/technologies-icons/master/node.png" width='50' alt="Node.js">
          <p>Node.js</p>
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Baixando e configurando aplicação

```bash
# Clone este repositório
$ git clone https://github.com/thiagosalome/next-movies

# Acesse a pasta do projeto no seu terminal/cmd
$ cd next-movies

# Instale as dependências
$ npm install

# Crie um arquivo para configurar as variáveis de ambiente
$ touch .env.local

# Dentro desse arquivo crie as seguintes variáveis
BASE_URL=https://api.themoviedb.org/3
ACCOUNT=
API_KEY=
SESSION_ID=

# OBS: As variáveis ACCOUNT, API_KEY e SESSION_ID são disponilizadas pela api do The Movie Database. Logo após criar uma conta, vá em https://www.themoviedb.org/settings/api e esses dados estarão lá.
```

### Rodando aplicação web

```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## :memo: Licença

Este projeto esta sobe a licença [MIT](./LICENCE).
