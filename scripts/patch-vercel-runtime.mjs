// Post-build script: patches Nitro's generated config files to use nodejs22.x
// Nitro hardcodes nodejs20.x which is discontinued on Vercel.
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { resolve, join } from "path";

const CWD = process.cwd();
const TARGET = "nodejs22.x";
console.log("[patch-vercel-runtime] Working directory:", CWD);

// Patch .vc-config.json files (top-level runtime field)
function findVcConfigs(dir, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      findVcConfigs(full, results);
    } else if (entry.name === ".vc-config.json") {
      results.push(full);
    }
  }
  return results;
}

const outputDir = resolve(CWD, ".vercel/output");

const vcConfigs = findVcConfigs(outputDir);
for (const configPath of vcConfigs) {
  const config = JSON.parse(readFileSync(configPath, "utf-8"));
  if (config.runtime && config.runtime !== TARGET) {
    config.runtime = TARGET;
    writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log("[patch-vercel-runtime] Patched .vc-config.json:", configPath);
  } else {
    console.log("[patch-vercel-runtime] OK .vc-config.json:", configPath);
  }
}

// Patch nitro.json nested runtime (config.vercel.functions.runtime)
const nitroJsonPath = resolve(CWD, ".vercel/output/nitro.json");
if (existsSync(nitroJsonPath)) {
  const nitro = JSON.parse(readFileSync(nitroJsonPath, "utf-8"));
  const nested = nitro?.config?.vercel?.functions?.runtime;
  if (nested && nested !== TARGET) {
    nitro.config.vercel.functions.runtime = TARGET;
    writeFileSync(nitroJsonPath, JSON.stringify(nitro, null, 2));
    console.log("[patch-vercel-runtime] Patched nitro.json runtime");
  } else {
    console.log("[patch-vercel-runtime] OK nitro.json runtime:", nested ?? "not set");
  }
}

if (vcConfigs.length === 0 && !existsSync(nitroJsonPath)) {
  console.log("[patch-vercel-runtime] No config files found — skipping");
}
