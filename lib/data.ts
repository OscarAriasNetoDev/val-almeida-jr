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

export type Medium = "Pintura" | "Escultura" | "Obra sobre papel";

export interface Artwork {
  id: string;
  artist: string;
  artistName: string;
  title: string | null;
  year: number | null;
  technique: string | null;
  /** altura da obra, em cm */
  h: number;
  /** largura da obra, em cm */
  w: number;
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
  { id: "agostinho-batista-de-freitas-80x120", artist: "agostinho-batista-de-freitas", artistName: "Agostinho Batista de Freitas", title: null, year: 1972, technique: "Óleo sobre tela", h: 80, w: 120, ratio: 1.488, medium: "Pintura", sold: false },
  { id: "aldemir-martins-30x40", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: null, h: 30, w: 40, ratio: 1.292, medium: null, sold: false },
  { id: "aldemir-martins-100x75", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: 1971, technique: "Acrílica sobre tela", h: 100, w: 75, ratio: 1, medium: "Pintura", sold: false },
  { id: "aldemir-martins-75x60", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Escultura em chapa de aço e pintura automotiva", h: 75, w: 60, ratio: 1.495, medium: "Escultura", sold: false },
  { id: "clovis-graciano-50x35", artist: "clovis-graciano", artistName: "Clóvis Graciano", title: null, year: null, technique: null, h: 50, w: 35, ratio: 1.821, medium: null, sold: false },
  { id: "dionisio-del-santo-65x81", artist: "dionisio-del-santo", artistName: "Dionísio Del Santo", title: "Bovino Cultura", year: null, technique: "Acrílica sobre tela", h: 65, w: 81, ratio: 1.23, medium: "Pintura", sold: false },
  { id: "efigenia-de-deus-45x55", artist: "efigenia-de-deus", artistName: "Efigênia de Deus", title: null, year: null, technique: null, h: 45, w: 55, ratio: 1.246, medium: null, sold: false },
  { id: "efigenia-de-deus-60x40", artist: "efigenia-de-deus", artistName: "Efigênia de Deus", title: null, year: null, technique: null, h: 60, w: 40, ratio: 0.669, medium: null, sold: false },
  { id: "samson-flexor-130x100", artist: "samson-flexor", artistName: "Samson Flexor", title: null, year: 1959, technique: "Óleo sobre tela", h: 130, w: 100, ratio: 0.746, medium: "Pintura", sold: false, note: "Obra reproduzida no livro do artista; participou da exposição no MAM SP." },
  { id: "gabriela-brasileiro-100x150", artist: "gabriela-brasileiro", artistName: "Gabriela Brasileiro", title: null, year: null, technique: null, h: 100, w: 150, ratio: 0.658, medium: null, sold: false },
  { id: "gabriela-brasileiro-160x120", artist: "gabriela-brasileiro", artistName: "Gabriela Brasileiro", title: null, year: null, technique: null, h: 160, w: 120, ratio: 0.769, medium: null, sold: false },
  { id: "guyer-salles-100x140", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: null, h: 100, w: 140, ratio: 1.488, medium: null, sold: false },
  { id: "guyer-salles-60x80", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: null, h: 60, w: 80, ratio: 0.563, medium: null, sold: false },
  { id: "ibere-camargo-70x100", artist: "ibere-camargo", artistName: "Iberê Camargo", title: null, year: null, technique: "Óleo sobre placa", h: 70, w: 100, ratio: 1.309, medium: "Pintura", sold: false, note: "Obra registrada na Fundação Iberê Camargo." },
  { id: "inacio-rodrigues-30x30", artist: "inacio-rodrigues", artistName: "Inácio Rodrigues", title: null, year: null, technique: null, h: 30, w: 30, ratio: 0.993, medium: null, sold: false },
  { id: "jose-a-silva-55x38", artist: "jose-a-silva", artistName: "José A. Silva", title: null, year: null, technique: null, h: 55, w: 38, ratio: 0.72, medium: null, sold: false },
  { id: "jorge-fonseca-50x30x30", artist: "jorge-fonseca", artistName: "Jorge Fonseca", title: null, year: null, technique: "Caixa de cetim", h: 50, w: 30, d: 30, ratio: 1.182, medium: "Escultura", sold: false },
  { id: "jorge-dos-anjos-220x40x40", artist: "jorge-dos-anjos", artistName: "Jorge dos Anjos", title: null, year: null, technique: "Aço corten", h: 220, w: 40, d: 40, ratio: 0.815, medium: "Escultura", sold: false },
  { id: "luiz-solha-120x160", artist: "luiz-solha", artistName: "Luiz Solha", title: null, year: null, technique: null, h: 120, w: 160, ratio: 1.221, medium: null, sold: false },
  { id: "luiz-solha-160x190", artist: "luiz-solha", artistName: "Luiz Solha", title: null, year: null, technique: null, h: 160, w: 190, ratio: 1.22, medium: null, sold: false },
  { id: "luis-tomasello-35x35", artist: "luis-tomasello", artistName: "Luis Tomasello", title: null, year: null, technique: null, h: 35, w: 35, ratio: 0.75, medium: null, sold: false },
  { id: "manoel-martins-40x60", artist: "manoel-martins", artistName: "Manoel Martins", title: null, year: null, technique: null, h: 40, w: 60, ratio: 1.156, medium: null, sold: false },
  { id: "mauricio-nogueira-lima-80x60", artist: "mauricio-nogueira-lima", artistName: "Maurício Nogueira Lima", title: null, year: null, technique: null, h: 80, w: 60, ratio: 0.747, medium: null, sold: false },
  { id: "newton-mesquita-120x100", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: null, h: 120, w: 100, ratio: 0.868, medium: null, sold: false },
  { id: "newton-mesquita-160x160", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: null, h: 160, w: 160, ratio: 1.006, medium: null, sold: false },
  { id: "paulo-von-poser-120x50", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: null, h: 120, w: 50, ratio: 0.502, medium: null, sold: false },
  { id: "pink-wainer-170x15", artist: "pink-wainer", artistName: "Pink Wainer", title: null, year: null, technique: null, h: 170, w: 15, ratio: 0.895, medium: null, sold: false, review: "A medida 170x15 do nome do arquivo não bate com a proporção da foto (quase quadrada)." },
  { id: "rosario-moreno-100x66", artist: "rosario-moreno", artistName: "Rosario Moreno", title: null, year: null, technique: null, h: 100, w: 66, ratio: 0.645, medium: null, sold: false },
  { id: "sou-kit-gom-120x130", artist: "sou-kit-gom", artistName: "Sou Kit Gom", title: null, year: null, technique: null, h: 120, w: 130, ratio: 0.75, medium: null, sold: false },
  { id: "sergio-niculitcheff-50x70", artist: "sergio-niculitcheff", artistName: "Sérgio Niculitcheff", title: null, year: null, technique: null, h: 50, w: 70, ratio: 1.177, medium: null, sold: false },
  { id: "sergio-niculitcheff-100x140", artist: "sergio-niculitcheff", artistName: "Sérgio Niculitcheff", title: null, year: null, technique: "Acrílica sobre tela", h: 100, w: 140, ratio: 1.344, medium: "Pintura", sold: false },
  { id: "sergio-niculitcheff-70x50", artist: "sergio-niculitcheff", artistName: "Sérgio Niculitcheff", title: null, year: null, technique: "Acrílica sobre tela", h: 70, w: 50, ratio: 0.713, medium: "Pintura", sold: false },
  { id: "sergio-telles-69x80", artist: "sergio-telles", artistName: "Sérgio Telles", title: "Natureza-morta", year: null, technique: "Óleo sobre tela", h: 69, w: 80, ratio: 1.246, medium: "Pintura", sold: false },
  { id: "victor-lema-rique-160x190", artist: "victor-lema-rique", artistName: "Victor Lema Rique", title: null, year: 2012, technique: null, h: 160, w: 190, ratio: 1.113, medium: null, sold: false },
  { id: "wesley-duke-lee-60x80", artist: "wesley-duke-lee", artistName: "Wesley Duke Lee", title: null, year: null, technique: null, h: 60, w: 80, ratio: 1.29, medium: null, sold: false },
  { id: "zorlini-65x57", artist: "zorlini", artistName: "Zorlini", title: null, year: null, technique: null, h: 65, w: 57, ratio: 0.893, medium: null, sold: false, note: "Medida tomada com a moldura." },
  { id: "leda-catunda-152x180", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: null, h: 152, w: 180, ratio: 1.08, medium: null, sold: false },

  // ---- Obras vendidas ----
  { id: "agostinho-batista-de-freitas-60x80", artist: "agostinho-batista-de-freitas", artistName: "Agostinho Batista de Freitas", title: null, year: null, technique: null, h: 60, w: 80, ratio: 0.809, medium: null, sold: true },
  { id: "aldemir-martins-50x35", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: null, h: 50, w: 35, ratio: 0.771, medium: null, sold: true },
  { id: "antonio-bandeira-32x24", artist: "antonio-bandeira", artistName: "Antônio Bandeira", title: null, year: null, technique: null, h: 32, w: 24, ratio: 0.729, medium: null, sold: true },
  { id: "bruno-giorgi-89x40x10", artist: "bruno-giorgi", artistName: "Bruno Giorgi", title: null, year: null, technique: null, h: 89, w: 40, d: 10, ratio: 0.625, medium: "Escultura", sold: true },
  { id: "di-cavalcanti-22x31", artist: "di-cavalcanti", artistName: "Di Cavalcanti", title: null, year: null, technique: null, h: 22, w: 31, ratio: 1.351, medium: null, sold: true },
  { id: "di-cavalcanti-38x55", artist: "di-cavalcanti", artistName: "Di Cavalcanti", title: null, year: null, technique: "Óleo sobre tela", h: 38, w: 55, ratio: 1.432, medium: "Pintura", sold: true },
  { id: "fang-60x80", artist: "fang", artistName: "Fang", title: null, year: null, technique: null, h: 60, w: 80, ratio: 1.382, medium: null, sold: true },
  { id: "ivald-granato-20x160", artist: "ivald-granato", artistName: "Ivald Granato", title: null, year: null, technique: null, h: 20, w: 160, ratio: 6.522, medium: null, sold: true, review: "O nome do arquivo diz “160x20cn”; a foto é uma faixa horizontal, então foi registrada como 20 × 160 cm." },
  { id: "jorge-dos-anjos-115x115", artist: "jorge-dos-anjos", artistName: "Jorge dos Anjos", title: null, year: null, technique: "Relevo em aço corten", h: 115, w: 115, ratio: 0.75, medium: "Escultura", sold: true },
  { id: "jose-a-silva-65x90", artist: "jose-a-silva", artistName: "José A. Silva", title: null, year: null, technique: null, h: 65, w: 90, ratio: 1.451, medium: null, sold: true },
  { id: "marcelo-grassmann-45x65", artist: "marcelo-grassmann", artistName: "Marcelo Grassmann", title: null, year: null, technique: "Sanguínea sobre papel", h: 45, w: 65, ratio: 1.422, medium: "Obra sobre papel", sold: true },
  { id: "newton-mesquita-160x160-2", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: null, h: 160, w: 160, ratio: 1.035, medium: null, sold: true },
  { id: "paulo-roberto-leal-30x17", artist: "paulo-roberto-leal", artistName: "Paulo Roberto Leal", title: null, year: null, technique: "Acrílica e colagem sobre papel", h: 30, w: 17, ratio: 0.498, medium: "Obra sobre papel", sold: true },
  { id: "silvio-pinto-51x58", artist: "silvio-pinto", artistName: "Silvio Pinto", title: null, year: null, technique: "Óleo sobre tela", h: 51, w: 58, ratio: 1.245, medium: "Pintura", sold: true },
  { id: "alfredo-volpi-23x41", artist: "alfredo-volpi", artistName: "Alfredo Volpi", title: null, year: null, technique: null, h: 23, w: 41, ratio: 1.593, medium: null, sold: true },
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

/** "130 × 100 cm" — ou "50 × 30 × 30 cm" nas tridimensionais. */
export function dimLabel(work: Artwork): string {
  const partes = work.d ? [work.h, work.w, work.d] : [work.h, work.w];
  return `${partes.join(" × ")} cm`;
}

/**
 * Rótulo da obra: "Aldemir Martins, 30 × 40 cm".
 * As obras do acervo não têm título próprio — o nome do artista e a medida
 * são o que as identifica, como nos nomes dos arquivos originais.
 */
export const workLabel = (work: Artwork) => `${work.artistName}, ${dimLabel(work)}`;

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

export const MEDIUMS: Medium[] = ["Pintura", "Escultura", "Obra sobre papel"];

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
