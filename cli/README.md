# 🚀 Gbit Framework

<div align="center">

<img src="./assets/gbit-logo.png" alt="Gbit Framework Logo" width="192" height="192" />

</div>



CLI oficial do **Gbit Framework** para criar aplicações completas — Backend, Frontend e Smart Contracts — prontas para produção.

![Gbit Framework](https://img.shields.io/badge/Gbit-Framework-red?style=for-the-badge)
![NPM Version](https://img.shields.io/npm/v/create-gbit-app?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

## 📦 Instalação

### Uso Direto (Recomendado)

```bash
npx create-gbit-app@Latest meu-projeto
```

### Instalação Global

```bash
npm install -g create-gbit-app
create-gbit-app meu-projeto
```

## 🎯 Características

- ✅ **Backend Completo** (Node.js, Python)
- ✅ **Frontend Moderno** (React, Next.js, Vite)
- ✅ **Smart Contracts** (Solidity, Vyper)
- ✅ **Banco de Dados** (PostgreSQL, SQLite, MongoDB)
- ✅ **WebSockets** (Socket.io, ws)
- ✅ **Docker & Docker Compose**
- ✅ **CI/CD Ready** (GitHub Actions, Vercel)
- ✅ **Temas Profissionais** (Gbit Dark, Light, Minimal)
- ✅ **TypeScript Support**
- ✅ **ESLint & Prettier**

## 🛠️ Estrutura Gerada

### Projeto Full Stack Completo

```
meu-projeto/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/
│   │   └── utils/
│   ├── config/
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── assets/
│   ├── package.json
│   └── README.md
│
├── contracts/
│   ├── contracts/
│   │   └── GbitToken.sol
│   ├── scripts/
│   │   ├── deploy.js
│   │   └── verify.js
│   ├── build/abi/
│   ├── hardhat.config.js
│   └── README.md
│
├── database/
│   ├── schema.sql
│   ├── migrations/
│   ├── seeds/
│   └── README.md
│
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .dockerignore
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .gitignore
├── vercel.json
└── README.md
```

## 📋 Menu Interativo

Ao executar o comando, você será guiado por um menu interativo:

```
🚀 Bem-vindo ao Create Gbit App (Gbit Framework)
Crie aplicações completas — Backend, Frontend e Smart Contracts — prontas para produção.

1️⃣  Nome do projeto: my-enterprise-app
2️⃣  Incluir backend? (Y/n)
3️⃣  Linguagem do backend? (Node.js / Python)
4️⃣  Framework backend? (Express / NestJS / Flask / FastAPI)
5️⃣  Incluir WebSockets? (Y/n)
6️⃣  Base de dados? (SQLite / PostgreSQL / MongoDB / Nenhum)
7️⃣  Incluir frontend? (Y/n)
8️⃣  Linguagem do frontend? (JavaScript / TypeScript)
9️⃣  Framework frontend? (React / Next.js / Vite)
🔟 Incluir smart contracts? (Y/n)
1️⃣1️⃣ Linguagem dos smart contracts? (Solidity / Vyper)
1️⃣2️⃣ Gerar scripts de deploy e ABI automaticamente? (Y/n)
1️⃣3️⃣ Tema inicial do frontend? (Gbit Dark / Gbit Light / Minimal)
1️⃣4️⃣ Adicionar Docker e Docker Compose? (Y/n)
1️⃣5️⃣ Incluir configuração Git + Vercel + README automático? (Y/n)
1️⃣6️⃣ Criar estrutura completa ou parcial?
     → Projeto Completo (Full Stack)
     → Somente Backend
     → Somente Frontend
     → Somente Smart Contracts
```

## 🚀 Início Rápido

### 1. Criar Projeto

```bash
npx create-gbit-app@Latest meu-app
cd meu-app
```

### 2. Instalar Dependências

```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Smart Contracts (se incluído)
cd ../contracts && npm install
```

### 3. Configurar Variáveis de Ambiente

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

### 4. Executar Projeto

```bash
# Com Docker (recomendado)
docker-compose up

# Ou manualmente
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```
# Github

```bash
# Clone o repositório
git clone https://github.com/Gislaine-programadora/create-gbit-app.git
cd create-gbit-app/cli

# Instale as dependências
npm install


```



npx create-gbit-app@latest  "novo-projeto"
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Gbit Team** - [GitHub](https://github.com/Gislaine-programadora)

## 🌟 Suporte

Se este projeto foi útil, considere dar uma ⭐️ no GitHub!

## 📞 Contato

- Website: [gbitframework.com](https://gislaine-programadora.github.io/flamework-gbit/)
- Email: gislainelophes@gmail.com
- GitHub: [@Gislaine-programadora](https://github.com/Gislaine-programadora)

---

**Feito com ❤️ pela comunidade Gbit Framework**
