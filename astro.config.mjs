import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import million from "million/compiler";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [million.vite({ mode: "react", server: true, auto: true })],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: vercel(),
});
