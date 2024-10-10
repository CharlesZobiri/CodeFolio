const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Utilise la route principale
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
