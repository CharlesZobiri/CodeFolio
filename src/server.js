const express = require('express');
const path = require('path');
const routes = require('./routes/index'); 

const app = express();

// Définir le moteur de vue sur EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques
app.use(express.static(path.join(__dirname, '../public'))); // Statics comme CSS et JS dans public

// Routes
app.use('/', routes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});