// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Fraunces",
        cssVariable: "--font-fraunces",
        weights: [400, 600],
        styles: ["normal"],
      },
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        weights: [400],
        styles: ["normal"],
      },
    ],
  },
});
