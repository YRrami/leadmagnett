// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // update paths as needed for your project
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        // Custom shadow for Mac-style button and nav
        mac: "0 2px 6px rgba(0,0,0,0.18)",
        nav: "0 2px 16px 0 rgba(0,0,0,0.18)",
      },
      borderRadius: {
        '2xl': '1.25rem',
        xl: '0.75rem',
      },
      width: {
        'nav': '950px',
      },
    },
  },
  plugins: [],
};
