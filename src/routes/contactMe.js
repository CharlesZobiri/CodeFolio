const express = require('express');
const router = express.Router();

// Route pour la page d'accueil
router.get('/', (req, res) => {
  res.render('contactMe');
});

module.exports = router;
