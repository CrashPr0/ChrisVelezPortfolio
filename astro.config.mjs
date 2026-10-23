import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Served from the custom domain chrisvelez.dev (see public/CNAME), so base is root.
const base = process.env.BASE_PATH ?? "/";

const withBasePath = (path) => {
  const prefix = base === "/" ? "" : base.replace(/\/$/, "");
  return `${prefix}${path}`;
};

export default defineConfig({
  site: process.env.SITE_URL ?? "https://chrisvelez.dev",
  base,
  output: "static",
  integrations: [sitemap()],
  redirects: {
    "/experience": withBasePath("/resume")
  }
});
