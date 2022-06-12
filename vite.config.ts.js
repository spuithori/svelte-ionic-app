// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import routify from "@roxi/routify/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";
import { readFileSync } from "fs";
var pwaManifest = {
  name: "Name of your app",
  short_name: "Short name of your app",
  description: "Description of your app",
  theme_color: "#ffffff",
  icons: [
    {
      src: "pwa-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
};
var svelteNonWebcomponentConfig = {};
var vite_config_default = defineConfig({
  plugins: [
    { config: () => ({ ssr: { noExternal: true } }) },
    routify({
      ssr: {
        spank: {
          sitemap: readFileSync("./.routify/sitemap.default.txt", "utf8").split("\n")
        }
      }
    }),
    VitePWA({
      manifest: pwaManifest,
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png", "assets/*"]
    }),
    svelte(svelteNonWebcomponentConfig)
  ],
  publicDir: "src/static",
  resolve: {
    alias: {
      $lib: resolve("./src/lib"),
      $components: resolve("./src/components"),
      $services: resolve("./src/services"),
      $routes: resolve("./src/routes"),
      $static: resolve("./src/static"),
      $ionic: resolve("./src/lib/ionic"),
      $theme: resolve("./src/theme")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnXHJcbmltcG9ydCByb3V0aWZ5IGZyb20gJ0Byb3hpL3JvdXRpZnkvdml0ZS1wbHVnaW4nXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcydcclxuXHJcbmNvbnN0IHB3YU1hbmlmZXN0ID0ge1xyXG4gIG5hbWU6ICdOYW1lIG9mIHlvdXIgYXBwJyxcclxuICBzaG9ydF9uYW1lOiAnU2hvcnQgbmFtZSBvZiB5b3VyIGFwcCcsXHJcbiAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBvZiB5b3VyIGFwcCcsXHJcbiAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICBpY29uczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuXHJcbi8qIFxyXG4gIGV4cGVyaW1lbnRpbmcgd2l0aCB3ZWJjb21wb25lbnRzIGluIHN2ZWx0ZSBcclxuICBncmVhdCBndWlkZTogXHJcbiAgICBodHRwczovL3d3dy50aGlzZG90LmNvL2Jsb2cvd2ViLWNvbXBvbmVudHMtd2l0aC1zdmVsdGVcclxuICAgIGh0dHBzOi8vZGV2LnRvL3Ruemsvc3ZlbHRlLWZvci13ZWItY29tcG9uZW50cy1kZXZlbG9wbWVudC1waXRmYWxscy1hbmQtd29ya2Fyb3VuZHMtYXMtb2YtanVseS0yMDIxLTNsaWlcclxuKi9cclxuY29uc3Qgc3ZlbHRlV2ViY29tcG9uZW50Q29uZmlnID0ge1xyXG4gIGluY2x1ZGU6IFsnLi9zcmMvbGliLyouc3ZlbHRlJ10sXHJcbiAgY29tcGlsZXJPcHRpb25zOiB7XHJcbiAgICBjdXN0b21FbGVtZW50OiB0cnVlLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3ZlbHRlTm9uV2ViY29tcG9uZW50Q29uZmlnID0ge1xyXG4gIC8vIGV4Y2x1ZGU6IFsnLi9zcmMvbGliLyouc3ZlbHRlJ11cclxufVxyXG5cclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgeyBjb25maWc6ICgpID0+ICh7IHNzcjogeyBub0V4dGVybmFsOiB0cnVlIH0gfSkgfSxcclxuICAgIHJvdXRpZnkoe1xyXG4gICAgICBzc3I6IHtcclxuICAgICAgICBzcGFuazoge1xyXG4gICAgICAgICAgc2l0ZW1hcDogcmVhZEZpbGVTeW5jKCcuLy5yb3V0aWZ5L3NpdGVtYXAuZGVmYXVsdC50eHQnLCAndXRmOCcpLnNwbGl0KCdcXG4nKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgbWFuaWZlc3Q6IHB3YU1hbmlmZXN0LFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ2Zhdmljb24uaWNvJywgJ3JvYm90cy50eHQnLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnLCAnYXNzZXRzLyonXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vICBzdmVsdGUoc3ZlbHRlV2ViY29tcG9uZW50Q29uZmlnKSxcclxuXHJcbiAgICBzdmVsdGUoc3ZlbHRlTm9uV2ViY29tcG9uZW50Q29uZmlnKSxcclxuICBdLFxyXG4gIHB1YmxpY0RpcjogXCJzcmMvc3RhdGljXCIsXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJGxpYjogcmVzb2x2ZSgnLi9zcmMvbGliJyksXHJcbiAgICAgICRjb21wb25lbnRzOiByZXNvbHZlKCcuL3NyYy9jb21wb25lbnRzJyksXHJcbiAgICAgICRzZXJ2aWNlczogcmVzb2x2ZSgnLi9zcmMvc2VydmljZXMnKSxcclxuICAgICAgJHJvdXRlczogcmVzb2x2ZSgnLi9zcmMvcm91dGVzJyksXHJcbiAgICAgICRzdGF0aWM6IHJlc29sdmUoJy4vc3JjL3N0YXRpYycpLFxyXG4gICAgICAkaW9uaWM6IHJlc29sdmUoJy4vc3JjL2xpYi9pb25pYycpLFxyXG4gICAgICAkdGhlbWU6IHJlc29sdmUoJy4vc3JjL3RoZW1lJyksXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSxjQUFjO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsT0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFDRjtBQWdCQSxJQUFNLDhCQUE4QixDQUVwQztBQUlBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLEVBQUUsUUFBUSxNQUFPLEdBQUUsS0FBSyxFQUFFLFlBQVksS0FBSyxFQUFFLEdBQUc7QUFBQSxJQUNoRCxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSCxPQUFPO0FBQUEsVUFDTCxTQUFTLGFBQWEsa0NBQWtDLE1BQU0sRUFBRSxNQUFNLElBQUk7QUFBQSxRQUM1RTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGVBQWUsQ0FBQyxlQUFlLGVBQWUsY0FBYyx3QkFBd0IsVUFBVTtBQUFBLElBQ2hHLENBQUM7QUFBQSxJQUlELE9BQU8sMkJBQTJCO0FBQUEsRUFDcEM7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sUUFBUSxXQUFXO0FBQUEsTUFDekIsYUFBYSxRQUFRLGtCQUFrQjtBQUFBLE1BQ3ZDLFdBQVcsUUFBUSxnQkFBZ0I7QUFBQSxNQUNuQyxTQUFTLFFBQVEsY0FBYztBQUFBLE1BQy9CLFNBQVMsUUFBUSxjQUFjO0FBQUEsTUFDL0IsUUFBUSxRQUFRLGlCQUFpQjtBQUFBLE1BQ2pDLFFBQVEsUUFBUSxhQUFhO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
