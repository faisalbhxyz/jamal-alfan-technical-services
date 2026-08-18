import { spawnSync } from "node:child_process";

function run(command) {
  const result = spawnSync(command, {
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
  process.exit(result.status ?? 1);
}

if (process.env.NEXT_PRIVATE_STANDALONE === "true") {
  run("next build");
}

run("opennextjs-cloudflare build");
