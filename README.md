# DevFlow Solutions - API

API simples de e-commerce criada para uma atividade de CI/CD.

## Execução local

Instale as dependências com `npm install`, rode os testes com `npm test` e inicie o servidor com `npm start`. A API ficará disponível em `http://localhost:3000`.

## Pipeline CI/CD

Em cada push para `main`, o GitHub Actions instala as dependências com `npm ci` e executa os testes. Se o secret `SSH_HOST` estiver configurado, o job de deploy conecta ao servidor e executa `~/deploy_script.sh`; sem servidor configurado, o deploy é simulado.

Configure os secrets `SSH_HOST`, `SSH_USER` e `SSH_PRIVATE_KEY` no repositório para habilitar o deploy real. No servidor, mantenha o script em `~/deploy_script.sh` e o projeto em `/var/www/my-app`.