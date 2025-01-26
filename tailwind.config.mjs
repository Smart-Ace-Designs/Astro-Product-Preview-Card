/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-primary-dark-cyan": "hsl(158, 36%, 37%)",
        "theme-secondary-dark-cyan": "hsl(158, 36%, 18%)",
        "theme-cream": "hsl(30, 38%, 92%)",
        "theme-very-dark-blue": "hsl(212, 21%, 14%)",
        "theme-dark-grayish-blue": "hsl(228, 12%, 48%)",
        "theme-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Sans-Serif"],
        fraunces: ["Fraunces", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};
