/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",       
      "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
      "./src/content/**/*.{md,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
  };
  