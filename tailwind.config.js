/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views//*.ejs',   // Inclut tous les fichiers EJS dans src/views
    './public//.html',     // (Optionnel) Inclut les fichiers HTML dans public
    './public/**/.js'        // Inclut tous les fichiers JS pour les styles dynamiques
  ],
  theme: {
    colors : {
      'primary':'#020617',
      'secondary':'#2e1065',
      'white':'#ffffff',
      'black':'#000000',
      'rose':'#fb7185',
    },
    extend: {},
  },
  plugins: [
  ],
}
