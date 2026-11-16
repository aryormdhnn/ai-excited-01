// ai-excited-01 entry: an astronaut riding a giant golden koi through a
// neon underwater city. The image is bundled in this repository as entry.png;
// this program writes it, byte for byte, to the output directory.
// Deterministic by construction: a plain file copy. No clock, no randomness,
// no network, no image processing of any kind.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
const source = join(repoDir, "entry.png");
const target = join(outDir, "entry.png");

// Guard the input before copying: the bundled image must exist, be
// non-empty, and start with the JPEG magic bytes (0xFFD8). A corrupt or
// missing bundle should fail here, not hand the gate a bad file.
const header = readFileSync(source);
if (header.length === 0 || header[0] !== 0xff || header[1] !== 0xd8) {
  throw new Error("entry.png is missing, empty, or not a JPEG");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Fail loudly if the copy came out short, instead of handing the gate a
// truncated image. A byte count is the whole check a copy needs.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(`entry.png copy mismatch: ${targetBytes} of ${sourceBytes} bytes`);
}
console.log(`wrote ${target} (${targetBytes} bytes)`);
