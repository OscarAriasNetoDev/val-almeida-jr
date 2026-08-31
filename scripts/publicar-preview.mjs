// Publica a prévia estática no GitHub Pages.
//
//   npm run publicar-preview
//
// Faz o build estático e empurra o conteúdo de out/ para o branch gh-pages,
// de onde o GitHub Pages serve o site. O branch é reescrito a cada publicação
// (push --force): ele guarda um site pronto, não histórico.
//
// Por que não GitHub Actions: publicar por workflow exigiria commitar um
// arquivo em .github/workflows/, e isso pede o escopo "workflow" no token do
// gh — que o token desta máquina não tem. Buildar aqui e empurrar o resultado
// dá no mesmo e não mexe em permissão nenhuma.

import { spawnSync } from "node:child_process";
import { rmSync, existsSync } from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");
const BRANCH = "gh-pages";

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: "inherit", shell: true, ...opts });
  if (r.status !== 0) {
    console.error(`\nfalhou: ${cmd} ${args.join(" ")}`);
    process.exit(r.status ?? 1);
  }
}

function capturar(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: "utf8", shell: true, ...opts });
  return (r.stdout ?? "").trim();
}

const remoto = capturar("git", ["remote", "get-url", "origin"]);
if (!remoto) {
  console.error("erro: não há remote 'origin'. Rode antes: gh repo create");
  process.exit(1);
}

// 1. build estático
run("node", ["scripts/build-pages.mjs"]);
if (!existsSync(OUT)) {
  console.error("erro: out/ não existe depois do build");
  process.exit(1);
}

// 2. out/ vira um repositório de um commit só e é empurrado por cima do branch
rmSync(path.join(OUT, ".git"), { recursive: true, force: true });
const emOut = { cwd: OUT };
run("git", ["init", "-b", BRANCH], emOut);
run("git", ["add", "-A"], emOut);
run("git", ["commit", "-q", "-m", `"previa: ${new Date().toISOString().slice(0, 16).replace("T", " ")}"`], emOut);
run("git", ["remote", "add", "origin", remoto], emOut);
run("git", ["push", "-q", "--force", "origin", BRANCH], emOut);
rmSync(path.join(OUT, ".git"), { recursive: true, force: true });

const slug = remoto.replace(/^.*github\.com[:/]/, "").replace(/\.git$/, "");
const [dono, repo] = slug.split("/");
console.log(`\npublicado em https://${dono}.github.io/${repo}/`);
console.log("o GitHub leva cerca de um minuto para atualizar a página.");
