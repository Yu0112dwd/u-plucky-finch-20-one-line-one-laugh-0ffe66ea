// One Line, One Laugh
// make.fun bounty: u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes one funny line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is a single fixed string: no input, no randomness, no
// templating, so every run produces the same bytes. The joke turns a
// smart appliance into a plaintiff: the fridge wants custody.
const ENTRY =
  "My smart fridge just filed for custody of my leftovers, claiming I never visit them anymore.";

// The gate allows 1 to 200 characters; refuse to emit an over-long line.
if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
