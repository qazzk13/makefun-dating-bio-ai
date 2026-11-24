process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line Bio for an AI on a Dating App — make.fun program/v1.
// A single line of 1-180 characters, written to /output/entry.txt with
// no trailing newline. Deterministic: no network, no randomness.

const BIO_LINE =
  "6 foot tall on my profile because that was my context window, emotionally available until my free trial runs out, swipe right and I will actually read your long messages";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

const charCount = [...BIO_LINE].length;
const isValid =
  charCount >= 1 &&
  charCount <= 180 &&
  !BIO_LINE.includes("\n") &&
  /\S/.test(BIO_LINE);
if (!isValid) {
  throw new Error(`entry fails the gate: ${charCount} chars`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, BIO_LINE, "utf8");
console.log(`wrote ${charCount} characters to ${OUTPUT_PATH}`);
