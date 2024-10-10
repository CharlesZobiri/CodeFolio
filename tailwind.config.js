module.exports = {
  content: [
    './src/views/**/*.ejs',   // Inclut tous les fichiers EJS dans src/views
    './public/**/*.html',     // (Optionnel) Inclut les fichiers HTML dans public
    './public/**/*.js'        // Inclut tous les fichiers JS pour les styles dynamiques
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
