// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Fraunces",
        cssVariable: "--font-fraunces",
      },
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
      },
    ],
  },
});
