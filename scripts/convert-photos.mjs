/* One-shot: convert /public/resort/r*.jpg -> r*.webp, max 2400px wide, q78.
   Run with: node scripts/convert-photos.mjs */
import { readdir, stat, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import sharp from "sharp";

const DIR = fileURLToPath(new URL("../public/resort/", import.meta.url));
const MAX_WIDTH = 2400;
const QUALITY = 78;

const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));
console.log(`Converting ${files.length} JPEGs in ${DIR}`);

let savedBytes = 0;
for (const f of files) {
  const src = join(DIR, f);
  const dest = join(DIR, f.replace(/\.jpe?g$/i, ".webp"));
  const before = (await stat(src)).size;

  await sharp(src)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(dest);

  const after = (await stat(dest)).size;
  await unlink(src);
  savedBytes += before - after;
  const pct = Math.round((1 - after / before) * 100);
  console.log(
    `  ${f.padEnd(10)} ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(2)}MB  (-${pct}%)`
  );
}
console.log(`\nTotal saved: ${(savedBytes / 1e6).toFixed(1)} MB`);
