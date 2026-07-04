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
    (= installs vite)
	npm install react react-dom
    (= installs react)
  npm install --save-dev typescript @types/react @types/react-dom
    (= installs Typescript - .jsx files now need to be .tsx files)
  npx tsc --init
    (= creates Typescript Config)

Then:
	npx vite ????
  vite build --watch --config react/vite.config.js ????
    (= npm run react)

  Change all .jsx files to .tsx, and reload VSCode.
  Create vite-env.d.ts file with content so that Typescript can import SCSS.

 
*/
