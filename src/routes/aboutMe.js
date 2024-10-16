const express = require('express');
const router = express.Router();

// Route pour la page aboutMe
router.get('/', (req, res) => {
  res.render('aboutMe');
});

module.exports = router;
