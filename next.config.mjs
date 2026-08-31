/** @type {import('next').NextConfig} */

// A prévia no GitHub Pages é um site estático servido de uma subpasta
// (usuario.github.io/val-almeida-jr), não de um servidor Next. Isso muda três
// coisas, e todas ficam atrás da variável GITHUB_PAGES para o `npm run dev`
// continuar rodando normal em http://localhost:3000/.
//
//   output: "export"     gera HTML estático em out/, sem servidor
//   basePath/assetPrefix prefixa links e assets com o nome do repositório
//   images.unoptimized   o otimizador de imagem do Next precisa de servidor
//   trailingSlash        /acervo/ vira acervo/index.html, que o Pages serve
//
// Use `npm run build:pages`, que liga a variável e ainda escreve o .nojekyll.

const REPO = "/val-almeida-jr";
const paraPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  // O basePath é aplicado sozinho em <Link>, mas NÃO no <Image> quando
  // images.unoptimized está ligado — o loader padrão devolve o src cru. Sem
  // isso as fotos apontariam para /obras/... e dariam 404 na subpasta do Pages.
  // O helper asset(), em lib/data.ts, prefixa os caminhos com esta variável.
  env: { NEXT_PUBLIC_BASE_PATH: paraPages ? REPO : "" },
  ...(paraPages && {
    output: "export",
    basePath: REPO,
    assetPrefix: REPO,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
