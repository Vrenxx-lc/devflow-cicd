const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`DevFlow Solutions API escutando na porta ${port}`);
});