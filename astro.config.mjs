// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE_URL } from "./src/consts.ts";

export default defineConfig({
  // L'URL peut porter un sous-chemin (GitHub Pages) : il devient la base du site.
  site: new URL(SITE_URL).origin,
  base: new URL(SITE_URL).pathname,
  fonts: [
    {
      name: "Cormorant Garamond",
      cssVariable: "--font-cormorant",
      provider: fontProviders.google(),
      weights: [500, 600],
      styles: ["normal", "italic"],
      fallbacks: ["Garamond", "Georgia", "serif"],
    },
    {
      name: "EB Garamond",
      cssVariable: "--font-garamond",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal", "italic"],
      fallbacks: ["Garamond", "Georgia", "serif"],
    },
  ],
  devToolbar: { enabled: false },
  trailingSlash: "ignore",
  vite: { build: { cssTarget: "safari15.4" } },
});
