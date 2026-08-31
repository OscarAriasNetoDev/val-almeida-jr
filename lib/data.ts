// Acervo Val de Almeida Jr — fonte de verdade do conteúdo do site.
//
// Cada obra corresponde a uma imagem em public/obras/<id>.jpg.
// Os dados foram extraídos dos nomes dos arquivos originais
// (c:/Programação/Val/imagem) — ver scripts/catalogo.mjs.
//
// PARA ADICIONAR UMA OBRA:
//   1. coloque a imagem em public/obras/ com o nome <id>.jpg
//   2. acrescente uma linha em ARTWORKS abaixo
//   3. ratio = largura ÷ altura DA FOTO em pixels (não da obra), para o card
//      não recortar nada. Ex.: foto 1024×768 -> ratio 1.333
//
// Campos h / w / d são as medidas da OBRA em cm: altura, largura e
// profundidade (só em obras tridimensionais). technique, year e title ficam
// null quando a informação não existe — o site simplesmente não os exibe.
// Os artistas são derivados de ARTWORKS; as bios entram em ARTIST_BIOS.

export type Lang = "pt" | "en";

export type Medium = "Pintura" | "Escultura" | "Gravura" | "Obra sobre papel" | "Cerâmica";

export interface Artwork {
  id: string;
  artist: string;
  artistName: string;
  title: string | null;
  year: number | null;
  technique: string | null;
  /** altura da obra, em cm. Ausente quando o acervo ainda não a registra. */
  h?: number;
  /** largura da obra, em cm */
  w?: number;
  /** profundidade da obra, em cm (tridimensionais) */
  d?: number;
  /** proporção largura ÷ altura da FOTO, para o card não recortar a obra */
  ratio: number;
  medium: Medium | null;
  sold: boolean;
  /** observação sobre a obra, vinda do arquivo original */
  note?: string;
  /** anotação interna: dado do nome do arquivo que precisa de conferência */
  review?: string;
}

export interface Artist {
  id: string;
  name: string;
  count: number;
  /** obra usada como capa do artista */
  cover: Artwork;
  bio: string[];
}

export const ARTWORKS: Artwork[] = [
  { id: "aldemir-martins-ceramicas", artist: "aldemir-martins", artistName: "Aldemir Martins", title: "Cerâmicas", year: null, technique: null, ratio: 1.476, medium: "Cerâmica", sold: false, note: "Conjunto de cinco peças.", review: "Sem medida no nome do arquivo, e a foto mostra 5 peças — confirmar se é um lote único ou 5 obras separadas, e as medidas." },
  { id: "aldemir-martins-75x60", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Escultura em chapa de aço e pintura automotiva", h: 75, w: 60, ratio: 1.495, medium: "Escultura", sold: false },
  { id: "aldir-mendes-de-souza-100x100", artist: "aldir-mendes-de-souza", artistName: "Aldir Mendes de Souza", title: null, year: null, technique: "Têmpera sobre tela", h: 100, w: 100, ratio: 0.99, medium: "Pintura", sold: false },
  { id: "alfredo-volpi-67-5x135-5", artist: "alfredo-volpi", artistName: "Alfredo Volpi", title: null, year: null, technique: "Têmpera sobre tela", h: 67.5, w: 135.5, ratio: 1.969, medium: "Pintura", sold: false, note: "Início da década de 1970." },
  { id: "amilcar-de-castro-20x28", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Escultura em aço corten", h: 20, w: 28, ratio: 1.334, medium: "Escultura", sold: false },
  { id: "amilcar-de-castro-40x60x5", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Escultura em aço corten", h: 40, w: 60, d: 5, ratio: 1.207, medium: "Escultura", sold: false },
  { id: "amilcar-de-castro-70x100", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Litografia", h: 70, w: 100, ratio: 1.392, medium: "Gravura", sold: false, note: "Certificada no Projeto Amilcar de Castro." },
  { id: "amilcar-de-castro-100x70", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Litografia", h: 100, w: 70, ratio: 0.717, medium: "Gravura", sold: false, note: "Certificada no Projeto Amilcar de Castro.", review: "O nome do arquivo diz 70x100 como as outras duas, mas esta gravura é vertical — registrada como 100 × 70 cm. Conferir." },
  { id: "amilcar-de-castro-70x100-2", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Litografia", h: 70, w: 100, ratio: 1.43, medium: "Gravura", sold: false, note: "Certificada no Projeto Amilcar de Castro." },
  { id: "antonio-bandeira-25x34", artist: "antonio-bandeira", artistName: "Antônio Bandeira", title: null, year: null, technique: "Aquarela", h: 25, w: 34, ratio: 1.266, medium: "Obra sobre papel", sold: false, review: "O nome do arquivo traz DUAS medidas: 25x34cm e 25x35cm. Ficou a primeira. Conferir qual é a certa." },
  { id: "antonio-bandeira-25x35", artist: "antonio-bandeira", artistName: "Antônio Bandeira", title: null, year: null, technique: "Aquarela", h: 25, w: 35, ratio: 1.361, medium: "Obra sobre papel", sold: false },
  { id: "antonio-bandeira-35x25", artist: "antonio-bandeira", artistName: "Antônio Bandeira", title: null, year: null, technique: "Aquarela", h: 35, w: 25, ratio: 0.719, medium: "Obra sobre papel", sold: false },
  { id: "chen-kong-fang-35x43", artist: "chen-kong-fang", artistName: "Chen-Kong Fang", title: "Fruteira", year: 1959, technique: "Óleo sobre tela", h: 35, w: 43, ratio: 1.197, medium: "Pintura", sold: false },
  { id: "chen-kong-fang-120x125", artist: "chen-kong-fang", artistName: "Chen-Kong Fang", title: null, year: null, technique: "Óleo sobre madeira", h: 120, w: 125, ratio: 1.227, medium: "Pintura", sold: false },
  { id: "chen-kong-fang-32x20", artist: "chen-kong-fang", artistName: "Chen-Kong Fang", title: null, year: null, technique: "Óleo sobre tela", h: 32, w: 20, ratio: 0.728, medium: "Pintura", sold: false },
  { id: "chen-kong-fang-55x40", artist: "chen-kong-fang", artistName: "Chen-Kong Fang", title: null, year: null, technique: "Óleo sobre tela sobre madeira", h: 55, w: 40, ratio: 0.721, medium: "Pintura", sold: false },
  { id: "claudio-tozzi-100x150", artist: "claudio-tozzi", artistName: "Claudio Tozzi", title: "N.Y", year: null, technique: "Óleo sobre tela sobre madeira", h: 100, w: 150, ratio: 1.539, medium: "Pintura", sold: false, note: "Década de 1980." },
  { id: "di-cavalcanti-55x65", artist: "di-cavalcanti", artistName: "Di Cavalcanti", title: null, year: 1979, technique: "Óleo sobre tela", h: 55, w: 65, ratio: 1.183, medium: "Pintura", sold: false, review: "O nome do arquivo diz \"Década de 1979\" — 1979 é ano, não década. Registrado como ano de 1979; conferir se não é a década de 1970." },
  { id: "dionisio-del-santo-55x80", artist: "dionisio-del-santo", artistName: "Dionísio Del Santo", title: "Fazendinha", year: 1983, technique: "Óleo sobre tela", h: 55, w: 80, ratio: 1.249, medium: "Pintura", sold: false, review: "Esta MESMA foto estava antes no acervo como \"acrílica sobre tela, 65x81cm, Bovino Cultura\". A proporção da foto (1,25) fecha com 65×81 e não com 55×80. Conferir técnica, medida e título." },
  { id: "felix-toranzo-120x102", artist: "felix-toranzo", artistName: "Félix Toranzo", title: null, year: null, technique: "Acrílica sobre tela", h: 120, w: 102, ratio: 2.081, medium: "Pintura", sold: false, note: "Díptico — a medida é de cada painel." },
  { id: "gabriela-brasileiro-120x160", artist: "gabriela-brasileiro", artistName: "Gabriela Brasileiro", title: null, year: null, technique: "Acrílica sobre tela", h: 120, w: 160, ratio: 1.373, medium: "Pintura", sold: false },
  { id: "gabriela-brasileiro-110x150", artist: "gabriela-brasileiro", artistName: "Gabriela Brasileiro", title: null, year: null, technique: "Acrílica sobre tela", h: 110, w: 150, ratio: 1.246, medium: "Pintura", sold: false },
  { id: "gabriela-brasileiro-120x120", artist: "gabriela-brasileiro", artistName: "Gabriela Brasileiro", title: null, year: null, technique: "Acrílica sobre tela", h: 120, w: 120, ratio: 0.992, medium: "Pintura", sold: false },
  { id: "gabriela-brasileiro-150x120", artist: "gabriela-brasileiro", artistName: "Gabriela Brasileiro", title: null, year: null, technique: "Acrílica sobre tela", h: 150, w: 120, ratio: 0.768, medium: "Pintura", sold: false },
  { id: "ianelli-100x80", artist: "ianelli", artistName: "Ianelli", title: null, year: null, technique: "Têmpera sobre tela", h: 100, w: 80, ratio: 0.804, medium: "Pintura", sold: false, note: "Década de 1970.", review: "O arquivo traz só o sobrenome. Confirmar se é Arcangelo Ianelli ou Thomaz Ianelli." },
  { id: "ibere-camargo-70x100", artist: "ibere-camargo", artistName: "Iberê Camargo", title: null, year: null, technique: "Óleo sobre cartão colado em madeira", h: 70, w: 100, ratio: 1.422, medium: "Pintura", sold: false, note: "Reproduzida em catálogo de exposição do artista." },
  { id: "jorge-dos-anjos-300x200", artist: "jorge-dos-anjos", artistName: "Jorge dos Anjos", title: null, year: null, technique: "Escultura em aço corten", h: 300, w: 200, ratio: 0.75, medium: "Escultura", sold: false, review: "As outras duas esculturas do artista têm três medidas (240x40x40 e 230x40x40); esta só tem duas. Falta a profundidade?" },
  { id: "jorge-dos-anjos-240x40x40", artist: "jorge-dos-anjos", artistName: "Jorge dos Anjos", title: null, year: null, technique: "Escultura em aço corten", h: 240, w: 40, d: 40, ratio: 0.615, medium: "Escultura", sold: false },
  { id: "jorge-dos-anjos-230x40x40", artist: "jorge-dos-anjos", artistName: "Jorge dos Anjos", title: null, year: null, technique: "Escultura em aço corten e tinta automotiva", h: 230, w: 40, d: 40, ratio: 0.75, medium: "Escultura", sold: false },
  { id: "marcello-tomazelli-110x160", artist: "marcello-tomazelli", artistName: "Marcello Tomazelli", title: null, year: null, technique: "Acrílica sobre tela", h: 110, w: 160, ratio: 1.486, medium: "Pintura", sold: false },
  { id: "mira-schendel-50x70", artist: "mira-schendel", artistName: "Mira Schendel", title: null, year: null, technique: "Óleo e ecoline sobre papel", h: 50, w: 70, ratio: 1.255, medium: "Obra sobre papel", sold: false },
  { id: "paulo-torres-90x170", artist: "paulo-torres", artistName: "Paulo Torres", title: null, year: null, technique: "Acrílica sobre tela", h: 90, w: 170, ratio: 1.834, medium: "Pintura", sold: false },
  { id: "rubens-matuck-100x160", artist: "rubens-matuck", artistName: "Rubens Matuck", title: null, year: 2000, technique: "Óleo sobre tela", h: 100, w: 160, ratio: 1.325, medium: "Pintura", sold: false, note: "Díptico.", review: "A medida vem sem unidade no nome do arquivo e não diz se 100x160 é cada painel ou o conjunto." },
  { id: "samson-flexor-130x100", artist: "samson-flexor", artistName: "Samson Flexor", title: null, year: 1959, technique: "Óleo sobre tela", h: 130, w: 100, ratio: 0.746, medium: "Pintura", sold: false, note: "Reproduzida no livro do artista." },
  { id: "sergio-niculitcheff-100x140", artist: "sergio-niculitcheff", artistName: "Sérgio Niculitcheff", title: null, year: 2001, technique: "Acrílica sobre tela", h: 100, w: 140, ratio: 1.344, medium: "Pintura", sold: false },
  { id: "sergio-niculitcheff-70x50", artist: "sergio-niculitcheff", artistName: "Sérgio Niculitcheff", title: null, year: 2001, technique: "Acrílica sobre tela", h: 70, w: 50, ratio: 0.713, medium: "Pintura", sold: false },
  { id: "sergio-niculitcheff-100x140-2", artist: "sergio-niculitcheff", artistName: "Sérgio Niculitcheff", title: null, year: 2001, technique: "Óleo sobre tela", h: 100, w: 140, ratio: 1.438, medium: "Pintura", sold: false },
  { id: "sergio-telles-60x80", artist: "sergio-telles", artistName: "Sérgio Telles", title: null, year: null, technique: "Óleo sobre placa", h: 60, w: 80, ratio: 1.246, medium: "Pintura", sold: false, review: "Esta MESMA foto estava antes no acervo como \"óleo sobre tela, natureza-morta, 69x80cm\". Mudaram o suporte e a medida, e o título sumiu. Conferir." },
  { id: "victor-lema-rique-200x170", artist: "victor-lema-rique", artistName: "Victor Lema Rique", title: null, year: 1995, technique: "Acrílica sobre tela", h: 200, w: 170, ratio: 0.879, medium: "Pintura", sold: false, note: "Reproduzida no catálogo da Galeria Nara Roesler." },
  { id: "wesley-duke-lee-60x80", artist: "wesley-duke-lee", artistName: "Wesley Duke Lee", title: "Série N.Y", year: null, technique: "Xerox colorido", h: 60, w: 80, ratio: 1.29, medium: "Obra sobre papel", sold: false },
];

/**
 * Bios dos artistas, por id. Ainda não preenchidas — o site omite a bio de
 * quem não estiver aqui. Ex.: "leda-catunda": ["Primeiro parágrafo.", "Segundo."]
 */
export const ARTIST_BIOS: Record<string, string[]> = {};

// ---- derivados ----

/**
 * Prefixa um caminho de public/ com o basePath do build.
 *
 * Em desenvolvimento a variável é vazia e nada muda. Na prévia do GitHub Pages,
 * que roda numa subpasta, ela vale "/val-almeida-jr". É preciso fazer isso à
 * mão porque o <Image> do Next não aplica basePath quando images.unoptimized
 * está ligado — ver o comentário em next.config.mjs.
 */
export const asset = (caminho: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${caminho}`;

/** Caminho da imagem da obra dentro de public/. */
export const artworkSrc = (work: Artwork) => asset(`/obras/${work.id}.jpg`);

/**
 * "130 × 100 cm" — ou "50 × 30 × 30 cm" nas tridimensionais.
 * Devolve null quando o acervo ainda não registra a medida da obra.
 */
export function dimLabel(work: Artwork): string | null {
  if (work.h == null || work.w == null) return null;
  const partes = work.d != null ? [work.h, work.w, work.d] : [work.h, work.w];
  // decimal com vírgula: 67,5 × 135,5 cm
  return `${partes.map((n) => String(n).replace(".", ",")).join(" × ")} cm`;
}

/**
 * Rótulo da obra: "Aldemir Martins, 30 × 40 cm".
 * As obras do acervo não têm título próprio — o nome do artista e a medida
 * são o que as identifica, como nos nomes dos arquivos originais. Sem medida
 * registrada, o rótulo é só o nome do artista.
 */
export function workLabel(work: Artwork): string {
  const medida = dimLabel(work);
  return medida ? `${work.artistName}, ${medida}` : work.artistName;
}

/**
 * Área da obra em cm², para ordenar por tamanho.
 * Obra sem medida registrada vai para o fim da lista.
 */
export const workArea = (work: Artwork) =>
  work.h != null && work.w != null ? work.h * work.w : -1;

/** Segunda linha: título, técnica e ano — só o que existir. Pode ser vazia. */
export const workCaption = (work: Artwork) =>
  [work.title, work.technique, work.year].filter(Boolean).join(" · ");

/** Artistas do acervo, em ordem alfabética, com capa e contagem de obras. */
export const ARTISTS: Artist[] = Object.values(
  ARTWORKS.reduce<Record<string, Artist>>((acc, work) => {
    const atual = acc[work.artist];
    if (!atual) {
      acc[work.artist] = {
        id: work.artist,
        name: work.artistName,
        count: 1,
        cover: work,
        bio: ARTIST_BIOS[work.artist] ?? [],
      };
      return acc;
    }
    atual.count += 1;
    // prefere uma obra disponível como capa
    if (atual.cover.sold && !work.sold) atual.cover = work;
    return acc;
  }, {})
).sort((a, b) => a.name.localeCompare(b.name, "pt"));

const ORDEM_MEIOS: Medium[] = ["Pintura", "Escultura", "Gravura", "Obra sobre papel", "Cerâmica"];

/** Só os meios que existem no acervo, para não gerar filtro vazio. */
export const MEDIUMS: Medium[] = ORDEM_MEIOS.filter((m) => ARTWORKS.some((w) => w.medium === m));

/** Há alguma obra marcada como vendida? O filtro de disponibilidade só
 *  aparece quando houver — hoje o acervo não registra nenhuma. */
export const HAS_SOLD = ARTWORKS.some((w) => w.sold);

interface I18NEntry {
  nav: [string, string, string];
  seeWorks: string;
  seeAll: string;
  visit: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  featuredWorks: string;
  featuredArtists: string;
  allFilter: string;
  available: string;
  sold: string;
  /** rótulo do selo no card de uma obra vendida (singular) */
  soldTag: string;
  year: string;
  technique: string;
  dim: string;
  title: string;
  artist: string;
  works: [string, string];
  worksOf: string;
}

export const I18N: Record<Lang, I18NEntry> = {
  pt: {
    nav: ["Artistas", "Acervo", "Contato"],
    seeWorks: "Ver obras",
    seeAll: "Ver tudo",
    visit: "Agendar visita",
    heroEyebrow: "Escritório de arte · desde 1987",
    heroTitle: "Arte contemporânea brasileira",
    heroLead:
      "Uma seleção de obras e artistas reunida ao longo de mais de três décadas. A obra é a protagonista — o escritório, o intervalo de silêncio ao redor.",
    featuredWorks: "Acervo em destaque",
    featuredArtists: "Artistas do acervo",
    allFilter: "Todas",
    available: "Disponíveis",
    sold: "Vendidas",
    soldTag: "Vendida",
    year: "Ano",
    technique: "Técnica",
    dim: "Dimensões",
    title: "Título",
    artist: "Artista",
    works: ["obra", "obras"],
    worksOf: "Obras de",
  },
  en: {
    nav: ["Artists", "Collection", "Contact"],
    seeWorks: "See works",
    seeAll: "See all",
    visit: "Book a visit",
    heroEyebrow: "Art office · since 1987",
    heroTitle: "Brazilian contemporary art",
    heroLead:
      "A selection of works and artists assembled over more than three decades. The work is the protagonist — the office, the quiet interval around it.",
    featuredWorks: "Featured works",
    featuredArtists: "Artists in the collection",
    allFilter: "All",
    available: "Available",
    sold: "Sold",
    soldTag: "Sold",
    year: "Year",
    technique: "Technique",
    dim: "Dimensions",
    title: "Title",
    artist: "Artist",
    works: ["work", "works"],
    worksOf: "Works by",
  },
};
