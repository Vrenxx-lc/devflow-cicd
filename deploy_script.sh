#!/usr/bin/env bash
set -e # Interrompe o script se qualquer comando falhar.
cd /var/www/my-app # Entra na pasta da aplicação no servidor.
git pull origin main # Atualiza o código com a branch principal do repositório.
npm install --omit=dev # Instala somente as dependências necessárias em produção.
pm2 restart my-app || pm2 start src/server.js --name my-app # Reinicia o processo ou inicia a aplicação se ainda não estiver no PM2.