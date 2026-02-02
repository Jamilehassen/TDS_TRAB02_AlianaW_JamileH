# Restaurante JALI - Sistema de Pedidos e Reservas

[cite_start]Este projeto é uma aplicação web **Single Page Application (SPA)** desenvolvida com **React**, como parte do Trabalho 2 da disciplina de Tecnologias para Desenvolvimento de Sistemas da **Unioeste**. [cite_start]O sistema permite que os usuários visualizem o menu, adicionem itens a um carrinho de compras e realizem reservas de mesa de forma dinâmica.

## O Projeto

[cite_start]O objetivo deste trabalho foi implementar uma aplicação front-end utilizando React, integrando e estendendo as tecnologias do Trabalho 1, como **Git/GitHub**, **HTML5**, **CSS3**, **Bootstrap** e **JavaScript (ES6+)**.

### Principais Funcionalidades:
* [cite_start]**Menu Dinâmico**: Listagem de pratos consumida de uma API via Custom Hook (`useFetch`).
* [cite_start]**Carrinho de Compras**: Adição e remoção de itens com cálculo de total em tempo real, utilizando `useState` com arrays e o conceito de *Previous State*.
* [cite_start]**Sistema de Reservas**: Formulário completo com 5+ tipos de input, validações e envio de dados (POST) para o servidor.
* [cite_start]**Feedback ao Usuário**: Mensagens condicionais e estilos dinâmicos baseados no estado da aplicação.

---

## Tecnologias Utilizadas

* [cite_start]**React (Vite)**: Biblioteca principal para construção da interface baseada em componentes reutilizáveis.
* [cite_start]**Bootstrap 5**: Utilizado para o layout responsivo (Grid System) e estilização de componentes globais.
* [cite_start]**JSON Server**: Utilizado para simular uma API REST de back-end na porta 3000.
* [cite_start]**CSS Modules**: Para estilização isolada e escopo fechado de componentes específicos.
* [cite_start]**Hooks**: Uso de `useState` para gerenciamento de estado e `useEffect` para sincronização com a API.

---

## Requisitos Cumpridos

| Requisito | Descrição Implementada |
| :--- | :--- |
| **Componentes** | [cite_start]Header, Menu, MenuItem, Cart e ReservationForm. |
| **Interpolação** | [cite_start]Uso de variáveis comuns (strings), objetos (reserva) e arrays (carrinho). |
| **Eventos** | [cite_start]Implementação de `onClick` (mouse), `onSubmit` (formulário) e `onMouseEnter`. |
| **useState** | [cite_start]Gerenciamento de números, arrays de objetos e estados complexos. |
| **Props** | [cite_start]Passagem de variáveis comuns, estados e funções de callback. |
| **HTTP / API** | [cite_start]Operações GET (Menu) e POST (Reservas) com tratamento de erros. |
| **CSS Dinâmico** | [cite_start]Estilos inline dinâmicos e classes condicionais baseadas em estado. |

---

## Como Rodar a Aplicação

### Pré-requisitos
* [cite_start]**Node.js** instalado (v18 ou superior).
* [cite_start]Recomenda-se o uso de dois terminais abertos simultaneamente.

### Passo 1: Instalação
Clone o repositório e instale as dependências necessárias:
```bash
npm install

