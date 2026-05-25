# OctoFit Tracker

Projeto multi-tier exemplo.

Ports:
- Frontend: 5173
- Backend: 8000
- MongoDB: 27017

Como usar:
- Instalar dependências (não mudar de diretório, use `--prefix`).

Exemplos:

```bash
npm --prefix octofit-tracker/frontend install
npm --prefix octofit-tracker/backend install

npm --prefix octofit-tracker/frontend run dev
npm --prefix octofit-tracker/backend run dev
```

Verifique se o `mongod` está rodando: `ps aux | grep mongod`
