import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/s28forge/' : '/',  // Using repo name for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  // ... rest of your config
}));