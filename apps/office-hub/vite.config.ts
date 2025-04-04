import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          "chakra-ui": ["@chakra-ui/react", "@chakra-ui/icons", "@emotion/react", "@emotion/styled"],
          "phosphor-icons": ["@phosphor-icons/react"],
          "framer-motion": ["framer-motion"],
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
