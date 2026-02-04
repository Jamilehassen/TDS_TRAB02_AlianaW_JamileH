# Restaurante JALI - Sistema de Pedidos e Reservas

Este projeto é uma aplicação web **Single Page Application (SPA)** desenvolvida com **React**, como parte do Trabalho 2 da disciplina de Tecnologias para Desenvolvimento de Sistemas da **Unioeste**. O sistema permite que os usuários visualizem o menu, adicionem itens a um carrinho de compras e realizem reservas de mesa de forma dinâmica.

## O Projeto

O objetivo deste trabalho foi implementar uma aplicação front-end utilizando React, integrando e estendendo as tecnologias do Trabalho 1, como **Git/GitHub**, **HTML5**, **CSS3**, **Bootstrap** e **JavaScript (ES6+)**.

### Principais Funcionalidades:
* **Menu Dinâmico**: Listagem de pratos consumida de uma API via Custom Hook (`useFetch`).
* **Carrinho de Compras**: Adição e remoção de itens com cálculo de total em tempo real, utilizando `useState` com arrays e o conceito de *Previous State*.
* **Sistema de Reservas**: Formulário completo com 5+ tipos de input, validações e envio de dados (POST) para o servidor.
* **Feedback ao Usuário**: Mensagens condicionais e estilos dinâmicos baseados no estado da aplicação.

---

## Tecnologias Utilizadas

* **React (Vite)**: Biblioteca principal para construção da interface baseada em componentes reutilizáveis.
* **Bootstrap 5**: Utilizado para o layout responsivo (Grid System) e estilização de componentes globais.
* **JSON Server**: Utilizado para simular uma API REST de back-end na porta 3000.
* **CSS Modules**: Para estilização isolada e escopo fechado de componentes específicos.
* **Hooks**: Uso de `useState` para gerenciamento de estado e `useEffect` para sincronização com a API.

---

## Requisitos Cumpridos

| Requisito | Descrição Implementada |
| :--- | :--- |
| **Componentes** | Header, Menu, MenuItem, Cart e ReservationForm. |
| **Interpolação** | Uso de variáveis comuns (strings), objetos (reserva) e arrays (carrinho). |
| **Eventos** | Implementação de `onClick` (mouse), `onSubmit` (formulário) e `onMouseEnter`. |
| **useState** | Gerenciamento de números, arrays de objetos e estados complexos. |
| **Props** | Passagem de variáveis comuns, estados e funções de callback. |
| **HTTP / API** | Operações GET (Menu) e POST (Reservas) com tratamento de erros. |
| **CSS Dinâmico** | Estilos inline dinâmicos e classes condicionais baseadas em estado. |

---

## Como Rodar a Aplicação

Siga os passos abaixo para configurar o ambiente de desenvolvimento localmente:

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* **Node.js** (versão 18 ou superior recomendada)
* **npm** ou **yarn**
* **Git**
* Recomenda-se o uso de dois terminais abertos simultaneamente.

### 1: Instalação
Clone o repositório e instale as dependências necessárias:
```bash
npm install
```

### 2. Clonando o Repositório
```bash
git clone https://github.com/Jamilehassen/TDS_TRAB02_AlianaW_JamileH.git
cd TDS_TRAB02_AlianaW_JamileH
```

### 3. Instalando as Dependências
Abra o terminal na pasta raiz do projeto e execute:
```bash
npm install
```

### 4. Executando o Projeto
Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

Após o comando, o terminal exibirá um link (geralmente http://localhost:5173/). Clique nele ou cole no seu navegador para visualizar a aplicação.


