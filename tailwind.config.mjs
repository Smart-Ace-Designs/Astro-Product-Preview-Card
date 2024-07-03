/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryDarkCyan: "hsl(158, 36%, 37%)",
        primaryCream: "hsl(30, 38%, 92%)",
        secondaryDarkCyan: "hsl(158, 36%, 18%)",
        secondaryVeryDarkBlue: "hsl(212, 21%, 14%)",
        secondaryDarkGrayishBlue: "hsl(228, 12%, 48%)",
        secondaryWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Sans-Serif"],
        fraunces: ["Fraunces", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};
