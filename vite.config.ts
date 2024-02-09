import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx({ providerImportSource: "@mdx-js/react" }), react()],
});
