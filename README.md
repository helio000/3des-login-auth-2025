# 📘 Projeto de Autenticação com Listagem de Posts

Este projeto é uma aplicação simples de login e exibição de posts utilizando **HTML**, **CSS**, **JavaScript** e uma **API em Node.js com JWT** para autenticação.

---

## 🔐 Tela de Login

O usuário faz login com e-mail e senha. Se o login for válido, um token JWT é gerado e salvo localmente para acessar a tela principal.

![Tela de Login](./images/index-atividade2.png)

---

## 🏠 Tela Principal (Home)

Após o login, o usuário é redirecionado para a tela principal que mostra uma lista de posts recebidos da API.

![Tela Principal](./images/home-atividade2.png)

---

## 📦 Tecnologias Utilizadas

- **Frontend**: HTML, JavaScript
- **Backend**: Node.js, Express
- **Autenticação**: JWT
- **Controle de Acesso**: Middleware de validação de token
- **Permissão de Origem**: CORS

---

## 📁 Estrutura de Pastas
/src
├── controllers/
│ └── posts.js
├── data/
│ └── posts.js
├── middlewares/
│ └── auth.js
└── routes/
├── login.js
└── posts.js
/web
├── index.html
└── home.html
/images
├── index-atividade2.png
└── home-atividade2.png
server.js
