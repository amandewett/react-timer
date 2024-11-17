import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows the app to be accessed by IP
    port: 5174, // Optional: to ensure it runs on the correct port
  },
});
