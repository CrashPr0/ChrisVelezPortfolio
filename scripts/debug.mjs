import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const colors = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m"
};

const log = (msg = "") => process.stdout.write(`${msg}\n`);
const ok = (msg) => log(`${colors.green}✔${colors.reset} ${msg}`);
const warn = (msg) => log(`${colors.yellow}⚠${colors.reset} ${msg}`);
const fail = (msg) => log(`${colors.red}✖${colors.reset} ${msg}`);
const section = (title) => log(`\n${colors.cyan}${title}${colors.reset}`);

const run = (cmd) => {
  execSync(cmd, { cwd: root, stdio: "inherit" });
};

const readText = (p) => readFileSync(path.join(root, p), "utf8");
const fileExists = (p) => existsSync(path.join(root, p));

const issues = [];
const argSet = new Set(process.argv.slice(2));
const shouldBuild = argSet.has("--build");
const shouldCheck = argSet.has("--check");

section("Portfolio debug");
log(`${colors.dim}${root}${colors.reset}`);

section("Asset sanity checks");
const requiredPublicAssets = [
  "public/favicon.svg",
  "public/scripts/site.js",
  "public/resume/Chris_s_Resume_General.pdf",
  "public/images/placeholders/Chris_Velez_Headshot.jpeg",
  "public/images/placeholders/benthos.png",
  "public/images/placeholders/PhotogrametryWorkshop.jfif",
  "public/images/placeholders/project-immersion-2026.png"
];

for (const p of requiredPublicAssets) {
  if (fileExists(p)) ok(p);
  else {
    fail(`${p} (missing)`);
    issues.push(`Missing asset: ${p}`);
  }
}

section("Placeholder text scan");
const filesToScan = ["src/data/site.ts", "src/data/projects.ts"];
const placeholderMatchers = [
  /\[[A-Za-z][A-Za-z0-9 .:/_-]{0,80}\]/g, // placeholder tokens like [LinkedIn URL]
  /example\.github\.io/g
];

for (const rel of filesToScan) {
  const text = readText(rel);
  const hits = [];
  for (const rx of placeholderMatchers) {
    const m = text.match(rx);
    if (m?.length) hits.push(...m);
  }
  if (hits.length === 0) ok(`${rel} (no placeholders detected)`);
  else {
    warn(`${rel} (possible placeholders: ${[...new Set(hits)].slice(0, 8).join(", ")}${hits.length > 8 ? ", ..." : ""})`);
    issues.push(`Possible placeholders found in ${rel}`);
  }
}

if (shouldCheck) {
  section("Type check (astro check)");
  try {
    run("npm run check");
    ok("astro check passed");
  } catch {
    issues.push("astro check failed");
  }
}

if (shouldBuild) {
  section("Build (astro build)");
  try {
    run("npm run build");
    ok("astro build passed");
  } catch {
    issues.push("astro build failed");
  }
}

section("Result");
if (issues.length === 0) {
  ok("No issues detected.");
  process.exit(0);
} else {
  fail(`${issues.length} issue(s) detected.`);
  for (const i of issues) log(`- ${i}`);
  process.exit(1);
}

