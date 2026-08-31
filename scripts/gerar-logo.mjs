// Gera as duas versões da logo a partir do original.
//
//   node scripts/gerar-logo.mjs
//
// O original é um JPEG de tinta preta sobre fundo branco, sem canal alpha —
// colado direto na página ele vira um retângulo branco sobre o off-white, e não
// serve para o rodapé escuro. Aqui o fundo vira transparência: como a arte é
// preta sobre branco, a luminância de cada pixel É a máscara (branco = fundo,
// preto = tinta), então alpha = 255 - luminância. Isso preserva o antialiasing
// das curvas da assinatura, que um recorte por limiar destruiria.
//
// Saem dois PNGs, ambos transparentes:
//   logo-wordmark-dark.png   tinta cor do texto do site, para o topo claro
//   logo-wordmark-light.png  tinta clara, para o rodapé escuro

import sharp from "sharp";
import path from "node:path";

const ORIGEM = "c:/Programação/Val/logo.jpeg";
const DESTINO = path.join(process.cwd(), "public");

// mesmas cores dos tokens em app/globals.css
const VERSOES = [
  { arquivo: "logo-wordmark-dark.png", rgb: [0x1a, 0x1a, 0x18] }, // --ink
  { arquivo: "logo-wordmark-light.png", rgb: [0xf4, 0xf1, 0xea] }, // --ink-on-dark
];

// Tira a moldura branca do original para a logo não vir com folga embutida.
const recortado = await sharp(ORIGEM)
  .trim({ background: "#ffffff", threshold: 12 })
  .toBuffer();

const cinza = sharp(recortado).greyscale();
const { data, info } = await cinza.raw().toBuffer({ resolveWithObject: true });
const pixels = info.width * info.height;

for (const { arquivo, rgb } of VERSOES) {
  const rgba = Buffer.alloc(pixels * 4);
  for (let i = 0; i < pixels; i++) {
    rgba[i * 4] = rgb[0];
    rgba[i * 4 + 1] = rgb[1];
    rgba[i * 4 + 2] = rgb[2];
    rgba[i * 4 + 3] = 255 - data[i]; // branco -> transparente, preto -> opaco
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(DESTINO, arquivo));
  console.log(`${arquivo}  ${info.width}x${info.height}`);
}

console.log(`\nproporção: ${(info.width / info.height).toFixed(3)}`);
