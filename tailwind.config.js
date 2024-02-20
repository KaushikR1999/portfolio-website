/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        deepSapphire: '#0F4C81',
        softSky: '#87BFFF',
        vibrantTangerine: '#FF7043',
        offWhite: '#F1F1F1',
        darkSlate: '#2B2B2B',
      }
    },
  },
  variants: {},
  plugins: [],
}

