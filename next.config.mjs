/** @type {import('next').NextConfig} */

// O site é publicado como páginas estáticas no GitHub Pages. Isso muda três
// coisas, todas atrás da variável GITHUB_PAGES para o `npm run dev` continuar
// rodando normal em http://localhost:3000/.
//
//   output: "export"     gera HTML estático em out/, sem servidor
//   images.unoptimized   o otimizador de imagem do Next precisa de servidor
//   trailingSlash        /acervo/ vira acervo/index.html, que o Pages serve
//
// Use `npm run build:pages`, que liga a variável e ainda escreve o .nojekyll.

// ---------------------------------------------------------------------------
// PARA LIGAR O DOMÍNIO PRÓPRIO: preencha DOMINIO abaixo e rode
// `npm run publicar-preview`. É só isso — o basePath some sozinho, porque num
// domínio próprio o site fica na raiz, e o build passa a escrever o arquivo
// CNAME que o GitHub Pages exige.
//
// Antes disso o domínio precisa estar registrado e com o DNS apontado:
//   A     @     185.199.108.153
//   A     @     185.199.109.153
//   A     @     185.199.110.153
//   A     @     185.199.111.153
//   CNAME www   oscarariasnetodev.github.io.
// ---------------------------------------------------------------------------
export const DOMINIO = ""; // ex.: "valalmeidajr.com.br"

// Enquanto não há domínio próprio, o site mora numa subpasta
// (usuario.github.io/val-almeida-jr) e precisa de basePath.
const REPO = "/val-almeida-jr";
const paraPages = process.env.GITHUB_PAGES === "true";
const base = DOMINIO ? "" : REPO;

const nextConfig = {
  reactStrictMode: true,
  // O basePath é aplicado sozinho em <Link>, mas NÃO no <Image> quando
  // images.unoptimized está ligado — o loader padrão devolve o src cru. Sem
  // isso as fotos apontariam para /obras/... e dariam 404 na subpasta do Pages.
  // O helper asset(), em lib/data.ts, prefixa os caminhos com esta variável.
  env: { NEXT_PUBLIC_BASE_PATH: paraPages ? base : "" },
  ...(paraPages && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    ...(base && { basePath: base, assetPrefix: base }),
  }),
};

export default nextConfig;
