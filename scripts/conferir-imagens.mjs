// Confere a pasta de imagens de origem contra o catálogo do site.
//
//   node scripts/conferir-imagens.mjs
//
// Relatório de leitura, não muda nada. Aponta:
//   - arquivos novos, que ainda não estão no site
//   - entradas do catálogo cujo arquivo de origem sumiu
//   - medidas do nome que não batem com a proporção da foto
//   - nomes de artista quase iguais (provável erro de digitação)
//   - possíveis fotos repetidas da mesma obra

import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { CATALOGO } from "./catalogo.mjs";

const ORIGEM = "c:/Programação/Val/imagem";
const EXT = /\.(jpe?g|png|webp|tiff?)$/i;

const RE_DIM = /(\d{1,4}(?:[.,]\d+)?)\s*[x×X]\s*(\d{1,4}(?:[.,]\d+)?)(?:\s*[x×X]\s*(\d{1,4}(?:[.,]\d+)?))?/g;
const RE_ANO = /\b(1[89]\d{2}|20[0-2]\d)\b/;
const num = (s) => Number(String(s).replace(",", "."));

function analisar(base) {
  const nome = base.replace(EXT, "");
  const dims = [...nome.matchAll(RE_DIM)];
  const ano = nome.match(RE_ANO);
  const artista = nome.split(",")[0].replace(/\s+/g, " ").trim();
  return { nome, base, artista, dims, ano: ano?.[1] ?? null };
}

// distância de edição, para achar grafias quase iguais do mesmo artista
function distancia(a, b) {
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return m[a.length][b.length];
}

const arquivos = readdirSync(ORIGEM)
  .filter((f) => statSync(path.join(ORIGEM, f)).isFile() && EXT.test(f))
  .sort();

const itens = [];
for (const base of arquivos) {
  const info = analisar(base);
  const md = await sharp(path.join(ORIGEM, base)).metadata();
  const girado = md.orientation && md.orientation >= 5;
  const w = girado ? md.height : md.width;
  const h = girado ? md.width : md.height;
  itens.push({ ...info, px: `${w}x${h}`, ratioFoto: w / h });
}

console.log(`ARQUIVOS NA ORIGEM: ${itens.length}\n`);

// ---- 1. o que mudou em relação ao site ----
const noSite = new Set(CATALOGO.map((o) => path.basename(o.src)));
const naOrigem = new Set(arquivos);
const novos = arquivos.filter((f) => !noSite.has(f));
const sumiram = [...noSite].filter((f) => !naOrigem.has(f));

console.log(`=== ARQUIVOS NOVOS (não estão no site): ${novos.length} ===`);
novos.forEach((f) => console.log(`  ${f}`));
console.log(`\n=== NO SITE MAS SUMIRAM DA ORIGEM: ${sumiram.length} ===`);
sumiram.forEach((f) => console.log(`  ${f}`));

// ---- 2. medida vs proporção da foto ----
// Convenção do acervo: altura × largura. Comparo largura/altura da obra com a
// proporção da foto; folga grande porque muita foto pega parede e moldura.
console.log(`\n=== MEDIDA QUE NÃO FECHA COM A FOTO ===`);
for (const it of itens) {
  if (it.dims.length === 0) {
    console.log(`  SEM MEDIDA  ${it.base}`);
    continue;
  }
  const d = it.dims[0];
  if (d[3]) continue; // tridimensional: a foto não tem como bater
  const rObra = num(d[2]) / num(d[1]); // largura / altura
  const erro = Math.abs(Math.log(it.ratioFoto / rObra));
  if (erro > 0.34) {
    console.log(
      `  ${it.base}\n      nome ${d[0]} -> proporção ${rObra.toFixed(2)} | foto ${it.px} -> ${it.ratioFoto.toFixed(2)}`
    );
  }
}

// ---- 3. mais de uma medida no mesmo nome ----
console.log(`\n=== MAIS DE UMA MEDIDA NO NOME ===`);
itens.filter((i) => i.dims.length > 1).forEach((i) => console.log(`  ${i.base}\n      ${i.dims.map((d) => d[0]).join("  E  ")}`));

// ---- 4. grafias parecidas do mesmo artista ----
console.log(`\n=== NOMES DE ARTISTA QUASE IGUAIS ===`);
const artistas = [...new Set(itens.map((i) => i.artista))].sort();
const vistos = new Set();
for (let i = 0; i < artistas.length; i++)
  for (let j = i + 1; j < artistas.length; j++) {
    const d = distancia(artistas[i].toLowerCase(), artistas[j].toLowerCase());
    const chave = `${artistas[i]}|${artistas[j]}`;
    if (d > 0 && d <= 2 && !vistos.has(chave)) {
      vistos.add(chave);
      console.log(`  "${artistas[i]}"  vs  "${artistas[j]}"  (${d} caractere${d > 1 ? "s" : ""} de diferença)`);
    }
  }

// ---- 5. mesmo artista + mesma medida = possível foto repetida ----
console.log(`\n=== MESMO ARTISTA E MESMA MEDIDA (conferir se é a mesma obra) ===`);
const grupos = {};
for (const it of itens) {
  if (!it.dims.length) continue;
  const chave = `${it.artista.toLowerCase().slice(0, 6)}|${it.dims[0][0].replace(/\s/g, "")}`;
  (grupos[chave] ??= []).push(it.base);
}
Object.values(grupos)
  .filter((g) => g.length > 1)
  .forEach((g) => console.log(`  ${g.join("\n  ")}\n`));

console.log(`=== ARTISTAS NA ORIGEM: ${artistas.length} ===`);
console.log(artistas.join(" · "));
