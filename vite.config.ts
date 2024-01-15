import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    basicSsl(),
  ],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "https://dump-in-admin-server.onrender.com/",
        changeOrigin: true,
      },
    },
  },
});
