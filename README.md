# 🌐 Modern Portfolio | Vitor Cavalcante

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **Live Demo:** [vitorcavalcante.vercel.app](https://vitorcavalcante.vercel.app/)

## 🚀 Sobre o Projeto

Este é meu portfólio profissional, desenvolvido para demonstrar a convergência entre minha sólida bagagem em **Ciências Biológicas** e minha atuação como **Coordenador de TI**. O projeto foi arquitetado com foco em **performance**, **segurança** e **internacionalização (i18n)**, visando o mercado global e processos acadêmicos na União Europeia.

## 🛠️ Stack Técnica

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Deploy & CI/CD:** Vercel

## 🛡️ Diferenciais Técnicos e Segurança

Para este projeto, implementei camadas de robustez que simulam um ambiente de produção real:

- **Security Headers:** Configuração de `next.config.mjs` com políticas de segurança (X-Frame-Options, Content-Type-Options) para proteção contra ataques comuns.
- **Environment Variables:** Proteção de dados sensíveis (como e-mails de contato) utilizando `.env.local` e garantindo o isolamento de informações privadas através de `.gitignore`.
- **i18n (Multilíngue):** Estrutura de rotas preparada para suporte nativo a Português (BR) e Inglês (EN), essencial para candidaturas internacionais.
- **Zero Vulnerabilities:** Manutenção de dependências limpas, validadas via `npm audit` para garantir um ambiente livre de falhas conhecidas.
- **Git History Clean:** Gestão de histórico via Git para garantir que nenhuma credencial ou dado sensível fosse exposto em commits anteriores.

## 📦 Como rodar localmente

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/vitor-cavalcante/meu-portfolio.git](https://github.com/vitor-cavalcante/meu-portfolio.git)

   ```

2. **Instale as dependências:**

   ```bash
   npm install

   Configure as variáveis de ambiente:
   Crie um arquivo .env.local e adicione:
   Snippet de código

   NEXT_PUBLIC_CONTACT_EMAIL=seu-email@exemplo.com

   ```

3. **Inicie o servidor:**

   ```bash

   npm run dev

   ```

## 📈 Propósito Acadêmico

- Este repositório faz parte do meu dossiê técnico para o Mestrado na Universidade do Porto (Portugal), exemplificando a aplicação prática de conceitos de Sistemas de Informação e Análise e Desenvolvimento de Sistemas (ADS).

Feito com ☕ por [Vitor Cavalcante](https://vitorcavalcante.vercel.app/)
