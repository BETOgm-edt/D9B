// Exemplo em app.js, index.js ou server.js:
const port = process.env.PORT || 3000; // Use a variável PORT do Railway
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});