# Portfólio pessoal

Projeto de portfólio pessoal desenvolvido com React e Vite. A aplicação está em andamento e reúne experimentos de animação, navegação interativa e mídia em tela cheia para apresentar a trajetória e os projetos de Bruno Ramos de Sousa.

## Status

🚧 Em desenvolvimento.

O layout e os componentes visuais principais já estão sendo integrados. Conteúdo, acessibilidade, responsividade e acabamento visual ainda podem mudar.

## Tecnologias

- React 18
- Vite
- GSAP
- OGL/WebGL
- React Icons
- Scss

## Componentes principais

- `CardNav`: navegação expansível com animação e cartões de links.
- `ScrollExpand`: seção de mídia que se expande conforme o usuário rola a página.
- `MaskedHeading`: título que revela vídeo ou imagem através das letras.
- `DarkVeil`: fundo animado renderizado com WebGL.

## Requisitos

- Node.js 18 ou superior
- npm

## Como executar

Clone o repositório e entre na pasta do projeto:

```bash
git clone <url-do-repositorio>
cd portifolio
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite abrirá a aplicação em `http://localhost:5173`.

> Use `npm run dev` sem uma barra invertida no final.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Exibe localmente a versão gerada pelo build. |

## Estrutura

```text
src/
├── App.jsx
├── index.jsx
├── assets/
├── components/
│   ├── CardNav.jsx
│   ├── DarkVeil.jsx
│   ├── MaskedHeading.jsx
│   ├── ScrollExpand.jsx
│   └── styles/
├── pages/
│   └── Home.jsx
└── styles/
```

## Mídia

Arquivos importados diretamente pelo código devem ficar em `src/assets/`. Arquivos públicos acessados por URL, como imagens usadas com `src="/arquivo.jpg"`, devem ficar em `public/`.

Verifique se os arquivos de mídia referenciados pelos componentes existem antes de executar a aplicação, especialmente vídeos e imagens usados pelo `ScrollExpand` e pelo `MaskedHeading`.

## Próximos passos

- Finalizar o conteúdo da página inicial.
- Adicionar projetos, habilidades e informações de contato.
- Revisar a responsividade em dispositivos móveis.
- Otimizar as animações WebGL e de scroll para diferentes dispositivos.
- Adicionar testes e validações de acessibilidade.

## Licença

Este projeto é um portfólio pessoal e ainda não possui uma licença definida.
