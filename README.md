# 📘 CorreaDigital.ia.br — Plataforma Multi-Clientes (React + Vite)

## 📌 Visão geral

Este projeto é uma plataforma multi-clientes desenvolvida com React + Vite, onde vários sites diferentes rodam dentro de uma única aplicação. Cada cliente possui sua própria rota, seus próprios componentes e seu próprio tema (CSS) carregado dinamicamente. A ideia central é manter tudo isolado, organizado e escalável, permitindo adicionar novos clientes sem quebrar o sistema existente.

## 🧠 Como funciona

O sistema funciona com base na URL acessada. Quando o usuário entra em uma rota, o aplicativo identifica qual cliente está sendo solicitado, carrega o componente correspondente e injeta automaticamente o CSS daquele cliente a partir da pasta `/public/themes`. Isso garante que cada site tenha sua identidade visual independente, mesmo compartilhando o mesmo projeto base.

## 📁 Estrutura do projeto

O projeto é dividido entre o núcleo principal e os clientes:

- `src/App.jsx` → responsável por controlar rotas e temas
- `src/main.jsx`
- `src/Loja/` → cliente loja principal
- `src/clientes/Site_FabianaEstetica/` → cliente Fabiana (projeto isolado)
- `public/themes/` → arquivos CSS de cada cliente

Cada cliente possui sua própria estrutura de componentes, páginas e estilos, totalmente separados dos demais.

## 🎯 Configuração dos clientes

Todos os clientes são registrados em um array central dentro do App.jsx, onde cada um define sua rota, componente e tema:

```js
const CLIENTES = [
  {
    id: "loja",
    rota: "/",
    component: LojaApp,
    theme: "/themes/loja/Style.css",
  },
  {
    id: "fabiana",
    rota: "/fabiana",
    component: AppFabiana,
    theme: "/themes/fabiana/Style.css",
  },
];