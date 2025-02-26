import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@data": "/src/data",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@features": "/src/features",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@providers": "/src/providers",
      "@router": "/src/router",
      "@util": "/src/util",
      "@lib": "/src/lib",
    },
  },
});
