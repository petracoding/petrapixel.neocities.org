import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "../public/assets/react"),
    emptyOutDir: true,
    assetsDir: "", // do not create "assets" subfolder
    rollupOptions: {
      input: resolve(__dirname, "src/main.jsx"),
      output: {
        entryFileNames: "app.js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});

/*
Installation:
	npm install --save-dev vite @vitejs/plugin-react
	npm install react react-dom

Then:
	npx vite ????
  vite build --watch --config react/vite.config.js ????
    (= npm run react)
*/
