import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  // GitHub Pages hosts project sites under /<repository-name>/.
  // Keep the production default while allowing forks to supply their own path.
  base: process.env.VITE_BASE_PATH ?? "/portfolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        resume: resolve(import.meta.dirname, "resume/index.html"),
      },
    },
  },
});
