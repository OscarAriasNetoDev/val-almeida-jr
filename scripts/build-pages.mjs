// Build da prévia estática para o GitHub Pages.
//
//   npm run build:pages
//
// Faz três coisas além do build normal:
//   1. liga GITHUB_PAGES=true, que ativa o bloco de export em next.config.mjs
//   2. apaga out/ antes, para não sobrar arquivo de um build anterior
//   3. escreve out/.nojekyll — sem esse arquivo o GitHub Pages passa o site
//      pelo Jekyll, que ignora pastas começadas em underscore e derruba todo
//      o /_next/ (CSS e JS). O site sairia sem estilo nenhum.
//   4. escreve out/CNAME quando há domínio próprio configurado. O GitHub Pages
//      lê esse arquivo a cada publicação; sem ele o domínio é desligado no
//      primeiro publish, porque o branch gh-pages é reescrito por inteiro.

import { spawnSync } from "node:child_process";
import { rmSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { DOMINIO } from "../next.config.mjs";

const OUT = path.join(process.cwd(), "out");

rmSync(OUT, { recursive: true, force: true });

const build = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES: "true" },
  shell: true,
});

if (build.status !== 0) process.exit(build.status ?? 1);
if (!existsSync(OUT)) {
  console.error("erro: o build terminou mas out/ não existe");
  process.exit(1);
}

writeFileSync(path.join(OUT, ".nojekyll"), "");

if (DOMINIO) writeFileSync(path.join(OUT, "CNAME"), `${DOMINIO}\n`);

console.log(
  `\nout/ pronto para o GitHub Pages (.nojekyll${DOMINIO ? ` + CNAME ${DOMINIO}` : ""})`
);
