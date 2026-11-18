
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/netflix-clone/",

  build: {
    outDir: "dist",
    assetsDir: "assets",

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          firebase: [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
          ],
          icons: ["lucide-react", "react-icons"],
        },
      },
    },
  },
});
