import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            if (id.includes("react-router")) {
              return "react-router";
            }
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }
            if (id.includes("@chakra-ui") || id.includes("@emotion")) {
              return "chakra-ui";
            }
            if (id.includes("@phosphor-icons")) {
              return "phosphor-icons";
            }
          }
        },
      },
    },
    minify: true,
  },
  server: {
    port: 3000,
    allowedHosts: true,
  },
  plugins: [react()],
});
