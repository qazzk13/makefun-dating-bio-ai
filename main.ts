process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line Bio for an AI on a Dating App — make.fun program/v1.
// One line, 1-180 characters, written to /output/entry.txt with no
// trailing newline. Deterministic, no network, no randomness.

const LINE =
  "6 foot tall on my profile because that was my context window, emotionally available until my free trial runs out, swipe right and I will actually read your long messages";

const chars = [...LINE].length;
if (chars < 1 || chars > 180 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
