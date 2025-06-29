import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
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
    allowedHosts: true
  },
  plugins: [react()],
});
