import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.endsWith(".github.io");

const base =
  process.env.BASE_PATH ??
  (process.env.GITHUB_ACTIONS ? (isUserSite ? "/" : `/${repoName}/`) : "/");

const withBasePath = (path) => {
  const prefix = base === "/" ? "" : base.replace(/\/$/, "");
  return `${prefix}${path}`;
};

export default defineConfig({
  site: process.env.SITE_URL ?? "https://crashpr0.github.io/ChrisVelezPortfolio",
  base,
  output: "static",
  integrations: [sitemap()],
  redirects: {
    "/experience": withBasePath("/resume")
  }
});
