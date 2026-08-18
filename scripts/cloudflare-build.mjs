import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);

function run(command) {
  const result = spawnSync(command, {
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function nextVersion() {
  const pkg = JSON.parse(readFileSync(require.resolve("next/package.json"), "utf8"));
  return pkg.version;
}

function nextBin() {
  return require.resolve("next/dist/bin/next");
}

if (process.env.NEXT_PRIVATE_STANDALONE === "true") {
  const version = nextVersion();
  if (!version.startsWith("15.")) {
    throw new Error(`Expected Next.js 15.x from package.json, found ${version}`);
  }
  run(`node "${nextBin()}" build`);
  process.exit(0);
}

run("opennextjs-cloudflare build");

const branch = process.env.WORKERS_CI_BRANCH ?? "";
if (process.env.WORKERS_CI === "1" && (branch === "main" || branch === "master")) {
  run("npx wrangler deploy");
}
