import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  base: "/don-moto-rental/",
  plugins: [
    react(),
    tailwindcss(),
    tailwindcss("tailwind-scrollbar-hide"),
    viteStaticCopy({
      targets: [
        {
          src: "_redirects",
          dest: ".",
        },
      ],
    }),
  ],
});
