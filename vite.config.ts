import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import wasm from "vite-plugin-wasm";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), wasm(), tailwindcss()],
  optimizeDeps: {
    exclude: ["@myriaddreamin/typst-ts-web-compiler"],
	},
	server: {
		headers: {
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Embedder-Policy": "require-corp"
		}
  },
  assetsInclude: ["**/*.wasm"],
});
