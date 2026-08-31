// Importa as imagens do acervo para public/obras/ e separa as pendentes.
//
//   node scripts/importar-imagens.mjs
//
// 1. Cada obra do CATALOGO (scripts/catalogo.mjs) vira public/obras/<slug>.jpg,
//    reencodada com no máximo 1800px no lado maior e orientação EXIF aplicada.
// 2. Toda imagem das pastas de origem que NÃO está no catálogo é copiada para
//    _pendentes/ — são os arquivos sem nome de artista e/ou sem medida no nome.
//    Os originais nunca são movidos nem alterados.
// 3. Imprime a tabela (slug, proporção) usada para preencher lib/data.ts.

import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync, rmSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { CATALOGO, DUPLICADAS } from "./catalogo.mjs";

const ORIGEM = "c:/Programação/Val/imagem";
// Varre a raiz e qualquer subpasta que exista — a organização da pasta de
// origem muda com o tempo, então nada de lista fixa.
const PASTAS = [".", ...readdirSync(ORIGEM).filter((f) => statSync(path.join(ORIGEM, f)).isDirectory())];
const EXT = /\.(jpe?g|png|webp|tiff?)$/i;
const DESTINO = path.join(process.cwd(), "public", "obras");
const PENDENTES = path.join(process.cwd(), "_pendentes");
const LADO_MAX = 1800;

function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const hashDe = (f) => createHash("sha1").update(readFileSync(f)).digest("hex");

// ---- 1. obras do catálogo ----
rmSync(DESTINO, { recursive: true, force: true });
mkdirSync(DESTINO, { recursive: true });

const usados = new Set();
const linhas = [];

for (const obra of CATALOGO) {
  const full = path.join(ORIGEM, obra.src);
  if (!existsSync(full)) throw new Error(`arquivo do catálogo não encontrado: ${obra.src}`);
  usados.add(hashDe(full));

  const dims = obra.alt == null ? slugify(obra.titulo ?? "") : obra.prof ? `${obra.alt}x${obra.larg}x${obra.prof}` : `${obra.alt}x${obra.larg}`;
  let slug = [slugify(obra.artista), slugify(String(dims))].filter(Boolean).join("-");
  let n = 2;
  while (linhas.some((l) => l.slug === slug)) slug = `${slugify(obra.artista)}-${dims}-${n++}`;

  const img = sharp(full).rotate();
  const md = await img.metadata();
  const girado = md.orientation && md.orientation >= 5;
  const w = girado ? md.height : md.width;
  const h = girado ? md.width : md.height;

  await img
    .resize({ width: LADO_MAX, height: LADO_MAX, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(DESTINO, `${slug}.jpg`));

  linhas.push({ slug, obra, w, h, ratio: +(w / h).toFixed(4) });
}

// ---- 2. pendentes ----
const DUPLICADAS_DIR = path.join(PENDENTES, "fotos-duplicadas");
rmSync(PENDENTES, { recursive: true, force: true });
mkdirSync(PENDENTES, { recursive: true });
mkdirSync(DUPLICADAS_DIR, { recursive: true });

const nomesDuplicados = new Set(DUPLICADAS.map((f) => path.basename(f)));
const vistos = new Set(usados);
let nPend = 0;
let nDup = 0;
for (const pasta of PASTAS) {
  const dir = path.join(ORIGEM, pasta);
  for (const base of readdirSync(dir).sort()) {
    const full = path.join(dir, base);
    if (!statSync(full).isFile() || !EXT.test(base)) continue;
    const h = hashDe(full);
    if (vistos.has(h)) continue;
    vistos.add(h);
    // outra foto de uma obra que já está no site vai para uma subpasta própria
    const dup = nomesDuplicados.has(base);
    let destino = path.join(dup ? DUPLICADAS_DIR : PENDENTES, base);
    let n = 2;
    while (existsSync(destino)) {
      const ext = path.extname(base);
      destino = path.join(path.dirname(destino), `${path.basename(base, ext)}-${n++}${ext}`);
    }
    copyFileSync(full, destino);
    if (dup) nDup++;
    else nPend++;
  }
}

// ---- 3. relatório ----
console.log(`obras em public/obras/: ${linhas.length}`);
console.log(`imagens copiadas para _pendentes/: ${nPend}`);
console.log(`fotos repetidas em _pendentes/fotos-duplicadas/: ${nDup}\n`);
for (const l of linhas) {
  console.log(`${l.slug.padEnd(42)} ratio ${String(l.ratio).padEnd(7)} ${l.w}x${l.h}px  ${l.obra.artista}`);
}
