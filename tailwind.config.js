/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        Montserrat: ["Montserrat Alternates", "sans-serif"],
        Open: ["Open Sans", "sans-serif"],
       Dance: ["Dancing Script", "cursive"],
      },
      backgroundImage: theme => ({
        'bg1': "url('/src/assets/bg1.jpg')",
        'bg2': "url('/src/assets/bg2.jpg')",
        'p1': "url('/src/assets/p1.jpg')",
        'p2': "url('/src/assets/p2.jpg')",
        'p3': "url('/src/assets/p3.jpg')",
        'p4': "url('/src/assets/p4.jpg')",
        'p5': "url('/src/assets/p5.jpg')",
        'p6': "url('/src/assets/p6.jpg')",
     }),
    },
  },
  plugins: [],
};
