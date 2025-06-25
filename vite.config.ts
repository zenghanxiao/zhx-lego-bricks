import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.build.json",
    }),
    libCss(),
  ],
  build: {
    lib: {
      formats: ["es", "umd"],
      entry: resolve(__dirname, "lib/index.ts"),
      name: "zhx-bricks",
      fileName: (format) => `zhx-bricks.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "lodash-es"],
      output: {
        globals: {
          vue: "Vue",
          "lodash-es": "_",
        },
        assetFileNames: "styles/[name]-[hash][extname]",
      },
    },
  },
});
