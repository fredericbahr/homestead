import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          "react-router": ["react-router"],
          "framer-motion": ["framer-motion"],
          "chakra-ui": ["@chakra-ui/react", "@emotion/react", "@emotion/styled"],
          "phosphor-icons": ["@phosphor-icons/react"],
        },
      },
    },
    minify: "esbuild",
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
