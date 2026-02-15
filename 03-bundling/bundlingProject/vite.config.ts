import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import analyzer from "vite-bundle-analyzer";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    analyzer(),

    compression({
      algorithms: ["gzip"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),

    compression({
      algorithms: ["brotliCompress"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
});
