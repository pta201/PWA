import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["assets/*.png"],
      manifest: {
        name: "My Todo App",
        short_name: "Todo",
        description: "My Todo App description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "assets/apple-icon-180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "pwa-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "assets/maskable-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "assets/maskable-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],

        background_color: "#e0cc3b",
        display: "standalone",
        start_url: "/todo",
        orientation: "portrait",
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
