// Post-build script: patches Nitro's generated .vc-config.json to use nodejs22.x
// Nitro hardcodes nodejs20.x which conflicts with this project's node>=22.12.0 requirement,
// causing tslib ERR_MODULE_NOT_FOUND at runtime on Vercel.
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { resolve, join } from "path";

const CWD = process.cwd();
console.log("[patch-vercel-runtime] Working directory:", CWD);

// Find all .vc-config.json files under .vercel/output
function findConfigs(dir, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      findConfigs(full, results);
    } else if (entry.name === ".vc-config.json") {
      results.push(full);
    }
  }
  return results;
}

const outputDir = resolve(CWD, ".vercel/output");
const configs = findConfigs(outputDir);

if (configs.length === 0) {
  console.log("[patch-vercel-runtime] No .vc-config.json files found under", outputDir);
  process.exit(0);
}

for (const configPath of configs) {
  const config = JSON.parse(readFileSync(configPath, "utf-8"));
  if (config.runtime && config.runtime !== "nodejs22.x") {
    config.runtime = "nodejs22.x";
    writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log("[patch-vercel-runtime] Patched:", configPath);
  } else {
    console.log("[patch-vercel-runtime] Already nodejs22.x or no runtime field:", configPath);
  }
}
