import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Shopping-Cart-App/",

  plugins: [react()],
});
