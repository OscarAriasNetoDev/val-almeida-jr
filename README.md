# Val de Almeida Jr — escritório de arte

Site institucional do escritório de arte **Val de Almeida Jr** (arte contemporânea brasileira desde 1987), implementado a partir do design system de handoff (`_handoff/`).

Estética: minimalismo de galeria — base off-white quente, muito espaço em branco, tipografia serifada (Cormorant Garamond) + sans (Hanken Grotesk), acento único terracota. A obra é a protagonista.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- CSS com design tokens (sem framework) — `app/globals.css`
- Bilíngue **PT / EN** via contexto de idioma (`components/LangProvider.tsx`)

## Páginas

| Rota       | Descrição |
|------------|-----------|
| `/`        | Home de página única: Hero, Sobre (desde 1987), Artistas do acervo, Acervo em destaque (12 obras, filtro por disponibilidade, lightbox) e Contato. |
| `/acervo`  | Acervo completo: busca por texto (artista, técnica, medida, ano), filtro por disponibilidade, filtro por artista, ordenação e lightbox. Aceita `?artista=<id>` — é o link dos cartões de artista da home. |

## Prévia para o cliente

O site vai ao ar como página estática no GitHub Pages, servido de uma subpasta:

**https://oscarariasnetodev.github.io/val-almeida-jr/**

Para republicar depois de qualquer mudança:

```bash
npm run publicar-preview
```

O comando gera o build estático em `out/` e o empurra para o branch `gh-pages`, que é de onde o Pages serve. O branch guarda um site pronto, não histórico — cada publicação o reescreve. O GitHub leva cerca de um minuto para refletir.

Três detalhes que essa configuração exige (todos já resolvidos, mas bom saber ao mexer):

- **O site roda em subpasta**, então o build usa `basePath`. O `<Link>` do Next aplica isso sozinho, mas o `<Image>` **não**, porque a otimização de imagem está desligada (não há servidor). Por isso todo caminho de `public/` passa pelo helper `asset()`, em `lib/data.ts`. Se alguma imagem nova apontar direto para `/algo.jpg`, ela vai dar 404 na prévia.
- **`out/.nojekyll`** é obrigatório. Sem ele o GitHub Pages passa o site pelo Jekyll, que ignora pastas iniciadas em underscore e derruba todo o `/_next/` — o site sai sem CSS nem JS. O `build:pages` escreve esse arquivo.
- **Sem otimização de imagem.** As fotos são servidas no tamanho em que estão em `public/obras/` (máx. 1800px, ~6 MB somando as 52). Suficiente para a prévia; num domínio próprio com servidor Next, a otimização volta sozinha.

O `npm run dev` e o `npm run build` continuam sem `basePath` — ele só liga com a variável `GITHUB_PAGES=true`, que o `build:pages` define.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Estrutura

```
app/
  layout.tsx          metadata + LangProvider
  globals.css         tokens + estilos de todos os componentes/páginas
  page.tsx            Home
  acervo/page.tsx     Acervo com busca e filtros
components/
  Header.tsx Footer.tsx LangProvider.tsx
  Icon.tsx ui.tsx cards.tsx modals.tsx
lib/
  data.ts             ARTWORKS (acervo), ARTIST_BIOS, I18N — fonte de verdade
scripts/
  catalogo.mjs        mapa arquivo-original -> metadados da obra
  importar-imagens.mjs gera public/obras/ e _pendentes/ a partir dos originais
public/
  obras/              52 imagens do acervo, uma por obra
  logo-wordmark-*.png wordmarks
_pendentes/           imagens ainda sem nome de artista e/ou medida (fora do site)
_handoff/             bundle original do design system (referência)
```

## Acervo

O conteúdo vem das fotos do escritório, em `c:/Programação/Val/imagem`. Os dados de cada obra (artista, técnica, ano, medida, observações) estavam **no nome do arquivo** e foram transcritos para `scripts/catalogo.mjs`.

Convenção das medidas, confirmada comparando cada nome de arquivo com a proporção real da foto: **altura × largura, em cm** (a terceira medida, quando existe, é a profundidade).

### Adicionar obras novas

1. Renomeie a imagem em `_pendentes/` no padrão dos originais — nome do artista + medida, e o que mais souber:
   `Nome do Artista, técnica, ano, 80x120cm, "Título".jpg`
2. Mova o arquivo para `c:/Programação/Val/imagem/` (ou `imagem/vendido/` se já foi vendida).
3. Acrescente a entrada em `scripts/catalogo.mjs` e rode:
   ```bash
   npm run importar-imagens
   ```
   Isso regrava `public/obras/` (reencodadas, no máximo 1800px) e reagrupa `_pendentes/`. O relatório impresso traz o `id` e a proporção de cada obra.
4. Acrescente a linha correspondente em `ARTWORKS`, em `lib/data.ts`, usando o `id` e o `ratio` do relatório.

`ARTWORKS` é a fonte de verdade: a lista de artistas, as contagens e as capas são derivadas dela. As bios ficam em `ARTIST_BIOS` (ainda vazio) — quem não tiver bio simplesmente não exibe uma.

### Como as obras são rotuladas

As obras do acervo não têm título próprio. O que as identifica é **o nome do artista mais a medida** — `Aldemir Martins, 30 × 40 cm` — igual ao nome do arquivo original. É o que `workLabel()` monta, e é o rótulo do card, do lightbox e do texto alternativo da imagem.

Técnica, ano e título (quando existem) entram numa segunda linha, via `workCaption()`. Só duas obras têm título registrado: "Bovino Cultura" e "Natureza-morta".

### Obra em destaque na home

É sorteada a cada carregamento, entre as **disponíveis** — as vendidas ficam de fora da vitrine. O sorteio roda depois da montagem (`useEffect`), para o HTML pré-renderizado e o do cliente não divergirem na hidratação. Por isso o quadro do destaque tem proporção fixa (1:1, com `object-fit: contain`): a obra muda de visita para visita e o layout não pode pular.

### O que fica de fora

- `_pendentes/` — imagens sem nome de artista e/ou sem medida no nome (`IMG_4467.jpeg`, `Captura de Tela…`, `esc.jpg`). Não entram no site até serem identificadas.
- `_pendentes/fotos-duplicadas/` — segundas fotos de obras que já estão no acervo.

### Dados marcados para conferência

Obras com o campo `review` em `lib/data.ts` têm alguma medida que não fecha com a proporção da foto. O campo é só uma anotação interna — não aparece no site.
