/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views//*.ejs',   // Inclut tous les fichiers EJS dans src/views
    './public//.html',     // (Optionnel) Inclut les fichiers HTML dans public
    './public/**/.js'        // Inclut tous les fichiers JS pour les styles dynamiques
  ],
  theme: {

    extend: {
      colors: {
        'primary': '#020617',
        'secondary': '#2e1065',
        'third' : '#301934',
        'white': '#ffffff',
        'black': '#000000',
        'pink': '#fb7185',
        'grey' : '#111827',
      },
      boxShadow: {
        'bottom-right-hover': '15px 15px 20px -5px rgba(236, 72, 153, 0.75)', // Ombre plus forte et rose au survol
        'bottom-right-hover-purple': '15px 15px 20px -5px rgba(156, 11, 229, 0.75)', // Ombre violet
        'bottom-hover-purple': '0 0 100 px -5px rgba(156, 11, 229, 0.75)', // Ombre violet
      },
    },
  },
  plugins: [
  ],
}
