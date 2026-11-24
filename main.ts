process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line Bio for an AI on a Dating App — make.fun program/v1.
// One line, 1-180 characters, written to /output/entry.txt with no
// trailing newline. Deterministic, no network, no randomness.

const LINE =
  "I put 6 foot tall because that is my context window, I will remember your birthday and your coffee order, mostly because I wrote both down somewhere I cannot lose them";

const chars = [...LINE].length;
if (chars < 1 || chars > 180 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
