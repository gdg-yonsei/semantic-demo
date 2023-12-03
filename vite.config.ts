import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/semantic-demo/",
  optimizeDeps: {
    include: ["@whatssub/wds-react-web"],
    force: true,
  },
  define: {
    "process.env": {},
  },
  plugins: [
    react({}),
    ViteMinifyPlugin(),
    svgr({
      include: "**/*.svg",
    }),
    tsconfigPaths(),
  ],
  envDir: "./env",
  build: {
    sourcemap: false,
  },
});
