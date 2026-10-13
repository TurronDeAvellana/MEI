// Genera las versiones reducidas (archivo-480.webp, …) de las imágenes listadas en
// src/data/imageSizes.js, para usarlas en srcset. Solo crea las que faltan o están
// desactualizadas, así que se puede correr en cada build.
//
// Si reemplazas una foto, súbela con un nombre nuevo: el .htaccess la cachea 30 días.
import { existsSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { imageSources, variantSrc, variantWidths } from "../src/data/imageSizes.js";

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public");

let created = 0;
for (const src of imageSources) {
  const input = join(publicDir, src);
  if (!existsSync(input)) {
    console.warn(`resize-images: no existe ${src}`);
    continue;
  }
  const inputTime = statSync(input).mtimeMs;
  for (const w of variantWidths(src)) {
    const output = join(publicDir, variantSrc(src, w));
    if (existsSync(output) && statSync(output).mtimeMs >= inputTime) continue;
    await sharp(input).resize({ width: w }).webp({ quality: 78 }).toFile(output);
    created++;
  }
}
console.log(`resize-images: ${created} versiones nuevas`);
