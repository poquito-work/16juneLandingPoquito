// Post-build script: patches Nitro's generated .vc-config.json to use nodejs22.x
// Nitro hardcodes nodejs20.x which conflicts with this project's node>=22.12.0 requirement,
// causing tslib ERR_MODULE_NOT_FOUND at runtime on Vercel.
import { readFileSync, writeFileSync, existsSync } from "fs";

const CONFIG_PATH = ".vercel/output/functions/__server.func/.vc-config.json";

if (!existsSync(CONFIG_PATH)) {
  console.log("[patch-vercel-runtime] .vc-config.json not found, skipping.");
  process.exit(0);
}

const config = JSON.parse(readFileSync(CONFIG_PATH, "utf-8"));

if (config.runtime !== "nodejs22.x") {
  config.runtime = "nodejs22.x";
  writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
  console.log("[patch-vercel-runtime] Patched runtime to nodejs22.x");
} else {
  console.log("[patch-vercel-runtime] Runtime already nodejs22.x, no patch needed.");
}
