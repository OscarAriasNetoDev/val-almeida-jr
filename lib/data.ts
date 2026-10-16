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
  { id: "aldemir-martins-35x25", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.713, medium: "Gravura", sold: false },
  { id: "aldemir-martins-35x50", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.389, medium: "Gravura", sold: false },
  { id: "aldemir-martins-35x50-2", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.369, medium: "Gravura", sold: false },
  { id: "aldemir-martins-35x50-3", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.384, medium: "Gravura", sold: false },
  { id: "aldemir-martins-35x50-4", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.365, medium: "Gravura", sold: false },
  { id: "aldemir-martins-35x50-5", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.378, medium: "Gravura", sold: false },
  { id: "aldemir-martins-45x30", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 45, w: 30, ratio: 0.667, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x100", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.471, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x100-2", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.458, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x50", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.678, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x50-2", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.455, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x50-3", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.702, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x50-4", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.726, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x50-5", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.385, medium: "Gravura", sold: false },
  { id: "aldemir-martins-70x70", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.114, medium: "Gravura", sold: false },
  { id: "aldemir-martins-100x70", artist: "aldemir-martins", artistName: "Aldemir Martins", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.708, medium: "Gravura", sold: false },
  { id: "alexandre-rato-70x50", artist: "alexandre-rato", artistName: "Alexandre Rato", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.71, medium: "Gravura", sold: false },
  { id: "alexandre-rato-70x50-2", artist: "alexandre-rato", artistName: "Alexandre Rato", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.695, medium: "Gravura", sold: false },
  { id: "amilcar-de-castro-100x70-2", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.442, medium: "Gravura", sold: false },
  { id: "amilcar-de-castro-100x70-3", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.399, medium: "Gravura", sold: false },
  { id: "amilcar-de-castro-100x70-4", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.7, medium: "Gravura", sold: false },
  { id: "amilcar-de-castro-100x70-5", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.711, medium: "Gravura", sold: false },
  { id: "amilcar-de-castro-70x50", artist: "amilcar-de-castro", artistName: "Amilcar de Castro", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.707, medium: "Gravura", sold: false },
  { id: "ana-maria-maiolino-70x100", artist: "ana-maria-maiolino", artistName: "Ana Maria Maiolino", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 0.696, medium: "Gravura", sold: false },
  { id: "ana-maria-maiolino-70x100-2", artist: "ana-maria-maiolino", artistName: "Ana Maria Maiolino", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.451, medium: "Gravura", sold: false },
  { id: "ana-maria-maiolino-70x50", artist: "ana-maria-maiolino", artistName: "Ana Maria Maiolino", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.693, medium: "Gravura", sold: false },
  { id: "andrea-brazil-35x25", artist: "andrea-brazil", artistName: "Andrea Brazil", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.715, medium: "Gravura", sold: false },
  { id: "andrea-brazil-35x25-2", artist: "andrea-brazil", artistName: "Andrea Brazil", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.718, medium: "Gravura", sold: false },
  { id: "andrea-brazil-35x25-3", artist: "andrea-brazil", artistName: "Andrea Brazil", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.72, medium: "Gravura", sold: false },
  { id: "andrea-brazil-50x35", artist: "andrea-brazil", artistName: "Andrea Brazil", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.705, medium: "Gravura", sold: false },
  { id: "andrea-brazil-70x50", artist: "andrea-brazil", artistName: "Andrea Brazil", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.74, medium: "Gravura", sold: false },
  { id: "andrea-brazil-70x50-2", artist: "andrea-brazil", artistName: "Andrea Brazil", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.692, medium: "Gravura", sold: false },
  { id: "antonio-bokel-100x100", artist: "antonio-bokel", artistName: "Antonio Bokel", title: null, year: null, technique: "Gravura", h: 100, w: 100, ratio: 0.999, medium: "Gravura", sold: false },
  { id: "antonio-bokel-100x70", artist: "antonio-bokel", artistName: "Antonio Bokel", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.744, medium: "Gravura", sold: false },
  { id: "antonio-bokel-100x70-2", artist: "antonio-bokel", artistName: "Antonio Bokel", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.718, medium: "Gravura", sold: false },
  { id: "antonio-bokel-100x70-3", artist: "antonio-bokel", artistName: "Antonio Bokel", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.744, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 1.382, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-2", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.718, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-3", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.722, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-4", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.714, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-5", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 1.395, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-6", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 1.379, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-7", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.721, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-8", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.723, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-9", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.724, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-10", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.73, medium: "Gravura", sold: false },
  { id: "arnaldo-antunes-54x39-11", artist: "arnaldo-antunes", artistName: "Arnaldo Antunes", title: null, year: null, technique: "Gravura", h: 54, w: 39, ratio: 0.719, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-50x100", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 50, w: 100, ratio: 1.967, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x50", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.704, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x50-2", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.703, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x50-3", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.722, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x50-4", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.708, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x70", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.028, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x70-2", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.022, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x70-3", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 0.986, medium: "Gravura", sold: false },
  { id: "arnaldo-bataglini-70x70-4", artist: "arnaldo-bataglini", artistName: "Arnaldo Bataglini", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.023, medium: "Gravura", sold: false },
  { id: "beneson-35x25", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.798, medium: "Gravura", sold: false },
  { id: "beneson-35x25-2", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.823, medium: "Gravura", sold: false },
  { id: "beneson-35x25-3", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.854, medium: "Gravura", sold: false },
  { id: "beneson-100x70", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.433, medium: "Gravura", sold: false },
  { id: "beneson-100x70-2", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.419, medium: "Gravura", sold: false },
  { id: "beneson-70x50", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.693, medium: "Gravura", sold: false },
  { id: "beneson-70x50-2", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.438, medium: "Gravura", sold: false },
  { id: "beneson-70x50-3", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.708, medium: "Gravura", sold: false },
  { id: "beneson-70x50-4", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.718, medium: "Gravura", sold: false },
  { id: "beneson-70x50-5", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.734, medium: "Gravura", sold: false },
  { id: "beneson-70x50-6", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.706, medium: "Gravura", sold: false },
  { id: "beneson-70x50-7", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.704, medium: "Gravura", sold: false },
  { id: "beneson-70x50-8", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.465, medium: "Gravura", sold: false },
  { id: "beneson-70x50-9", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.718, medium: "Gravura", sold: false },
  { id: "beneson-70x50-10", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.709, medium: "Gravura", sold: false },
  { id: "beneson-70x50-11", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.697, medium: "Gravura", sold: false },
  { id: "beneson-70x50-12", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.399, medium: "Gravura", sold: false },
  { id: "beneson-70x50-13", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.448, medium: "Gravura", sold: false },
  { id: "beneson-70x50-14", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.724, medium: "Gravura", sold: false },
  { id: "beneson-70x50-15", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.389, medium: "Gravura", sold: false },
  { id: "beneson-70x50-16", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.731, medium: "Gravura", sold: false },
  { id: "beneson-70x50-17", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.697, medium: "Gravura", sold: false },
  { id: "beneson-70x50-18", artist: "beneson", artistName: "Beneson", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.718, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.686, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-2", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.693, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-3", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.679, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-4", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.678, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-5", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.686, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-6", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.702, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-7", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.719, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-8", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.693, medium: "Gravura", sold: false },
  { id: "bernardo-krasniansky-70x50-9", artist: "bernardo-krasniansky", artistName: "Bernardo Krasniansky", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.71, medium: "Gravura", sold: false },
  { id: "caetano-almeida-70x50", artist: "caetano-almeida", artistName: "Caetano Almeida", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.697, medium: "Gravura", sold: false },
  { id: "caetano-almeida-70x50-2", artist: "caetano-almeida", artistName: "Caetano Almeida", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.692, medium: "Gravura", sold: false },
  { id: "christina-parisi-50x50", artist: "christina-parisi", artistName: "Christina Parisi", title: null, year: null, technique: "Gravura", h: 50, w: 50, ratio: 0.97, medium: "Gravura", sold: false },
  { id: "christina-parisi-50x50-2", artist: "christina-parisi", artistName: "Christina Parisi", title: null, year: null, technique: "Gravura", h: 50, w: 50, ratio: 0.972, medium: "Gravura", sold: false },
  { id: "christina-parisi-50x50-3", artist: "christina-parisi", artistName: "Christina Parisi", title: null, year: null, technique: "Gravura", h: 50, w: 50, ratio: 0.944, medium: "Gravura", sold: false },
  { id: "claudio-cretti-70x100", artist: "claudio-cretti", artistName: "Claudio Cretti", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.503, medium: "Gravura", sold: false },
  { id: "claudio-cretti-70x100-2", artist: "claudio-cretti", artistName: "Claudio Cretti", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.483, medium: "Gravura", sold: false },
  { id: "daniel-melin-85x67", artist: "daniel-melin", artistName: "Daniel Melin", title: null, year: null, technique: "Gravura", h: 85, w: 67, ratio: 0.84, medium: "Gravura", sold: false },
  { id: "daniel-melin-85x67-2", artist: "daniel-melin", artistName: "Daniel Melin", title: null, year: null, technique: "Gravura", h: 85, w: 67, ratio: 0.811, medium: "Gravura", sold: false },
  { id: "darel-50x35", artist: "darel", artistName: "Darel", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 1.373, medium: "Gravura", sold: false },
  { id: "darel-50x70", artist: "darel", artistName: "Darel", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 0.732, medium: "Gravura", sold: false },
  { id: "darel-50x70-2", artist: "darel", artistName: "Darel", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.348, medium: "Gravura", sold: false },
  { id: "darel-50x70-3", artist: "darel", artistName: "Darel", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.367, medium: "Gravura", sold: false },
  { id: "darel-70x50", artist: "darel", artistName: "Darel", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.382, medium: "Gravura", sold: false },
  { id: "edith-derdyk-70x50", artist: "edith-derdyk", artistName: "Edith Derdyk", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.727, medium: "Gravura", sold: false },
  { id: "edith-derdyk-70x50-2", artist: "edith-derdyk", artistName: "Edith Derdyk", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.725, medium: "Gravura", sold: false },
  { id: "elso-arruda-70x100", artist: "elso-arruda", artistName: "Elso Arruda", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.471, medium: "Gravura", sold: false },
  { id: "elso-arruda-70x100-2", artist: "elso-arruda", artistName: "Elso Arruda", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.33, medium: "Gravura", sold: false },
  { id: "emanoel-araujo-70x50", artist: "emanoel-araujo", artistName: "Emanoel Araujo", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.721, medium: "Gravura", sold: false },
  { id: "fabiana-pretti-50x35", artist: "fabiana-pretti", artistName: "Fabiana Pretti", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.733, medium: "Gravura", sold: false },
  { id: "fabiana-pretti-50x35-2", artist: "fabiana-pretti", artistName: "Fabiana Pretti", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.731, medium: "Gravura", sold: false },
  { id: "fabiana-pretti-50x35-3", artist: "fabiana-pretti", artistName: "Fabiana Pretti", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.736, medium: "Gravura", sold: false },
  { id: "fabiana-pretti-50x35-4", artist: "fabiana-pretti", artistName: "Fabiana Pretti", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.73, medium: "Gravura", sold: false },
  { id: "fabiana-pretti-50x35-5", artist: "fabiana-pretti", artistName: "Fabiana Pretti", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.737, medium: "Gravura", sold: false },
  { id: "flavio-bassani-50x35", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.722, medium: "Gravura", sold: false },
  { id: "flavio-bassani-50x35-2", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.726, medium: "Gravura", sold: false },
  { id: "flavio-bassani-50x35-3", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.725, medium: "Gravura", sold: false },
  { id: "flavio-bassani-60x40", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 60, w: 40, ratio: 0.684, medium: "Gravura", sold: false },
  { id: "flavio-bassani-60x40-2", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 60, w: 40, ratio: 0.687, medium: "Gravura", sold: false },
  { id: "flavio-bassani-60x40-3", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 60, w: 40, ratio: 0.684, medium: "Gravura", sold: false },
  { id: "flavio-bassani-60x40-4", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 60, w: 40, ratio: 0.698, medium: "Gravura", sold: false },
  { id: "flavio-bassani-70x100", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.401, medium: "Gravura", sold: false },
  { id: "flavio-bassani-70x50", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.742, medium: "Gravura", sold: false },
  { id: "flavio-bassani-70x50-2", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.725, medium: "Gravura", sold: false },
  { id: "flavio-bassani-70x50-3", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.382, medium: "Gravura", sold: false },
  { id: "flavio-bassani-70x50-4", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.732, medium: "Gravura", sold: false },
  { id: "flavio-bassani-70x50-5", artist: "flavio-bassani", artistName: "Flavio Bassani", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.741, medium: "Gravura", sold: false },
  { id: "giles-50x35", artist: "giles", artistName: "Giles", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.7, medium: "Gravura", sold: false },
  { id: "giles-50x35-2", artist: "giles", artistName: "Giles", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.717, medium: "Gravura", sold: false },
  { id: "giles-50x35-3", artist: "giles", artistName: "Giles", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.72, medium: "Gravura", sold: false },
  { id: "giles-50x35-4", artist: "giles", artistName: "Giles", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.707, medium: "Gravura", sold: false },
  { id: "granato-100x70", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.737, medium: "Gravura", sold: false },
  { id: "granato-100x70-2", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.728, medium: "Gravura", sold: false },
  { id: "granato-70x100", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.459, medium: "Gravura", sold: false },
  { id: "granato-70x100-2", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.462, medium: "Gravura", sold: false },
  { id: "granato-70x100-3", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.56, medium: "Gravura", sold: false },
  { id: "granato-70x50", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.742, medium: "Gravura", sold: false },
  { id: "granato-70x50-2", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.72, medium: "Gravura", sold: false },
  { id: "granato-70x50-3", artist: "granato", artistName: "Granato", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.727, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.426, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-2", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.34, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-3", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.436, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-4", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.442, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-5", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.443, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-6", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.435, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-7", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.377, medium: "Gravura", sold: false },
  { id: "gregorio-gruber-70x100-8", artist: "gregorio-gruber", artistName: "Gregório Gruber", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.442, medium: "Gravura", sold: false },
  { id: "guto-lacaz-50x70", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.347, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.353, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100-2", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.425, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100-3", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.24, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100-4", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.38, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100-5", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.349, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100-6", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.359, medium: "Gravura", sold: false },
  { id: "guto-lacaz-70x100-7", artist: "guto-lacaz", artistName: "Guto Lacaz", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.3, medium: "Gravura", sold: false },
  { id: "guyer-salles-50x70", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.354, medium: "Gravura", sold: false },
  { id: "guyer-salles-50x70-2", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.371, medium: "Gravura", sold: false },
  { id: "guyer-salles-50x70-3", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.438, medium: "Gravura", sold: false },
  { id: "guyer-salles-50x70-4", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.306, medium: "Gravura", sold: false },
  { id: "guyer-salles-70x50", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.727, medium: "Gravura", sold: false },
  { id: "guyer-salles-70x50-2", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.719, medium: "Gravura", sold: false },
  { id: "guyer-salles-70x50-3", artist: "guyer-salles", artistName: "Guyer Salles", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.738, medium: "Gravura", sold: false },
  { id: "herton-roitman-100x70", artist: "herton-roitman", artistName: "Herton Roitman", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.739, medium: "Gravura", sold: false },
  { id: "herton-roitman-70x100", artist: "herton-roitman", artistName: "Herton Roitman", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 0.746, medium: "Gravura", sold: false },
  { id: "herton-roitman-70x70", artist: "herton-roitman", artistName: "Herton Roitman", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.033, medium: "Gravura", sold: false },
  { id: "herton-roitman-70x70-2", artist: "herton-roitman", artistName: "Herton Roitman", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.065, medium: "Gravura", sold: false },
  { id: "herton-roitman-70x70-3", artist: "herton-roitman", artistName: "Herton Roitman", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1, medium: "Gravura", sold: false },
  { id: "jeron-100x70", artist: "jeron", artistName: "Jeron", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.412, medium: "Gravura", sold: false },
  { id: "jeron-100x70-2", artist: "jeron", artistName: "Jeron", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.419, medium: "Gravura", sold: false },
  { id: "joao-rossi-100x70", artist: "joao-rossi", artistName: "João Rossi", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.703, medium: "Gravura", sold: false },
  { id: "joao-rossi-100x70-2", artist: "joao-rossi", artistName: "João Rossi", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.732, medium: "Gravura", sold: false },
  { id: "joao-rossi-100x70-3", artist: "joao-rossi", artistName: "João Rossi", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.821, medium: "Gravura", sold: false },
  { id: "joao-rossi-100x70-4", artist: "joao-rossi", artistName: "João Rossi", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.728, medium: "Gravura", sold: false },
  { id: "joao-rossi-100x70-5", artist: "joao-rossi", artistName: "João Rossi", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.692, medium: "Gravura", sold: false },
  { id: "julio-vieira-100x100", artist: "julio-vieira", artistName: "Julio Vieira", title: null, year: null, technique: "Gravura", h: 100, w: 100, ratio: 0.989, medium: "Gravura", sold: false },
  { id: "julio-vieira-100x100-2", artist: "julio-vieira", artistName: "Julio Vieira", title: null, year: null, technique: "Gravura", h: 100, w: 100, ratio: 1.013, medium: "Gravura", sold: false },
  { id: "jussara-age-100x70", artist: "jussara-age", artistName: "Jussara Age", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.46, medium: "Gravura", sold: false },
  { id: "jussara-age-30x70", artist: "jussara-age", artistName: "Jussara Age", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.164, medium: "Gravura", sold: false },
  { id: "jussara-age-35x50", artist: "jussara-age", artistName: "Jussara Age", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.308, medium: "Gravura", sold: false },
  { id: "leda-catunda-30x30", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 30, w: 30, ratio: 0.956, medium: "Gravura", sold: false },
  { id: "leda-catunda-30x30-2", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 30, w: 30, ratio: 1.034, medium: "Gravura", sold: false },
  { id: "leda-catunda-35x50", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 35, w: 50, ratio: 1.435, medium: "Gravura", sold: false },
  { id: "leda-catunda-50x40", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 50, w: 40, ratio: 0.851, medium: "Gravura", sold: false },
  { id: "leda-catunda-70x50", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.727, medium: "Gravura", sold: false },
  { id: "leda-catunda-70x50-2", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.731, medium: "Gravura", sold: false },
  { id: "leda-catunda-70x50-3", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.719, medium: "Gravura", sold: false },
  { id: "leda-catunda-70x50-4", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.725, medium: "Gravura", sold: false },
  { id: "leda-catunda-70x50-5", artist: "leda-catunda", artistName: "Leda Catunda", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.714, medium: "Gravura", sold: false },
  { id: "livio-abramo-50x70", artist: "livio-abramo", artistName: "Livio Abramo", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 0.737, medium: "Gravura", sold: false },
  { id: "livio-abramo-50x70-2", artist: "livio-abramo", artistName: "Livio Abramo", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.408, medium: "Gravura", sold: false },
  { id: "livio-abramo-50x70-3", artist: "livio-abramo", artistName: "Livio Abramo", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.371, medium: "Gravura", sold: false },
  { id: "livio-abramo-50x70-4", artist: "livio-abramo", artistName: "Livio Abramo", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.368, medium: "Gravura", sold: false },
  { id: "livio-abramo-50x70-5", artist: "livio-abramo", artistName: "Livio Abramo", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.363, medium: "Gravura", sold: false },
  { id: "luciano-rocha-100x70", artist: "luciano-rocha", artistName: "Luciano Rocha", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.721, medium: "Gravura", sold: false },
  { id: "luciano-rocha-70x50", artist: "luciano-rocha", artistName: "Luciano Rocha", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.731, medium: "Gravura", sold: false },
  { id: "luciano-rocha-70x50-2", artist: "luciano-rocha", artistName: "Luciano Rocha", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.733, medium: "Gravura", sold: false },
  { id: "luciano-rocha-70x50-3", artist: "luciano-rocha", artistName: "Luciano Rocha", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.737, medium: "Gravura", sold: false },
  { id: "luciano-rocha-70x50-4", artist: "luciano-rocha", artistName: "Luciano Rocha", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.741, medium: "Gravura", sold: false },
  { id: "mana-bernardes-63x48", artist: "mana-bernardes", artistName: "Mana Bernardes", title: null, year: null, technique: "Gravura", h: 63, w: 48, ratio: 0.801, medium: "Gravura", sold: false },
  { id: "mana-bernardes-63x48-2", artist: "mana-bernardes", artistName: "Mana Bernardes", title: null, year: null, technique: "Gravura", h: 63, w: 48, ratio: 0.797, medium: "Gravura", sold: false },
  { id: "mana-bernardes-63x48-3", artist: "mana-bernardes", artistName: "Mana Bernardes", title: null, year: null, technique: "Gravura", h: 63, w: 48, ratio: 0.811, medium: "Gravura", sold: false },
  { id: "mana-bernardes-63x48-4", artist: "mana-bernardes", artistName: "Mana Bernardes", title: null, year: null, technique: "Gravura", h: 63, w: 48, ratio: 0.811, medium: "Gravura", sold: false },
  { id: "maria-do-carmo-70x70", artist: "maria-do-carmo", artistName: "Maria do Carmo", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1, medium: "Gravura", sold: false },
  { id: "nazareno-50x40", artist: "nazareno", artistName: "Nazareno", title: null, year: null, technique: "Gravura", h: 50, w: 40, ratio: 0.824, medium: "Gravura", sold: false },
  { id: "nazareno-50x40-2", artist: "nazareno", artistName: "Nazareno", title: null, year: null, technique: "Gravura", h: 50, w: 40, ratio: 0.816, medium: "Gravura", sold: false },
  { id: "nazareno-70x100", artist: "nazareno", artistName: "Nazareno", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.376, medium: "Gravura", sold: false },
  { id: "nazareno-70x70", artist: "nazareno", artistName: "Nazareno", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.008, medium: "Gravura", sold: false },
  { id: "nazareno-70x70-2", artist: "nazareno", artistName: "Nazareno", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.005, medium: "Gravura", sold: false },
  { id: "nazareno-70x70-3", artist: "nazareno", artistName: "Nazareno", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 0.972, medium: "Gravura", sold: false },
  { id: "newman-schutze-70x50", artist: "newman-schutze", artistName: "Newman Schutze", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.721, medium: "Gravura", sold: false },
  { id: "newman-schutze-70x50-2", artist: "newman-schutze", artistName: "Newman Schutze", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.726, medium: "Gravura", sold: false },
  { id: "newman-schutze-70x50-3", artist: "newman-schutze", artistName: "Newman Schutze", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.731, medium: "Gravura", sold: false },
  { id: "newton-mesquita-50x35", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.71, medium: "Gravura", sold: false },
  { id: "newton-mesquita-50x35-2", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.692, medium: "Gravura", sold: false },
  { id: "newton-mesquita-50x35-3", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.717, medium: "Gravura", sold: false },
  { id: "newton-mesquita-50x35-4", artist: "newton-mesquita", artistName: "Newton Mesquita", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 1.402, medium: "Gravura", sold: false },
  { id: "ofra-grinfeder-70x100", artist: "ofra-grinfeder", artistName: "Ofra Grinfeder", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.449, medium: "Gravura", sold: false },
  { id: "ofra-grinfeder-70x100-2", artist: "ofra-grinfeder", artistName: "Ofra Grinfeder", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.382, medium: "Gravura", sold: false },
  { id: "ofra-grinfeder-70x30", artist: "ofra-grinfeder", artistName: "Ofra Grinfeder", title: null, year: null, technique: "Gravura", h: 70, w: 30, ratio: 0.407, medium: "Gravura", sold: false },
  { id: "ofra-grinfeder-70x30-2", artist: "ofra-grinfeder", artistName: "Ofra Grinfeder", title: null, year: null, technique: "Gravura", h: 70, w: 30, ratio: 0.422, medium: "Gravura", sold: false },
  { id: "ofra-grinfeder-70x30-3", artist: "ofra-grinfeder", artistName: "Ofra Grinfeder", title: null, year: null, technique: "Gravura", h: 70, w: 30, ratio: 0.398, medium: "Gravura", sold: false },
  { id: "oscar-niemeyer-50x70", artist: "oscar-niemeyer", artistName: "Oscar Niemeyer", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.433, medium: "Gravura", sold: false },
  { id: "osmar-pinheiro-70x50", artist: "osmar-pinheiro", artistName: "Osmar Pinheiro", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.704, medium: "Gravura", sold: false },
  { id: "osmar-pinheiro-70x50-2", artist: "osmar-pinheiro", artistName: "Osmar Pinheiro", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.712, medium: "Gravura", sold: false },
  { id: "osmar-pinheiro-70x50-3", artist: "osmar-pinheiro", artistName: "Osmar Pinheiro", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.714, medium: "Gravura", sold: false },
  { id: "osmar-pinheiro-70x50-4", artist: "osmar-pinheiro", artistName: "Osmar Pinheiro", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.724, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-100x70", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 1.34, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-100x70-2", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.685, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.104, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70-2", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.09, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70-3", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.066, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70-4", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.109, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70-5", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.111, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70-6", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 2.061, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-30x70-7", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 30, w: 70, ratio: 1.996, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-50x70", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.355, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-50x70-2", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.331, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-50x70-3", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.33, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-50x70-4", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.348, medium: "Gravura", sold: false },
  { id: "paulo-von-poser-50x70-5", artist: "paulo-von-poser", artistName: "Paulo von Poser", title: null, year: null, technique: "Gravura", h: 50, w: 70, ratio: 1.358, medium: "Gravura", sold: false },
  { id: "pinky-wainer-70x50", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.388, medium: "Gravura", sold: false },
  { id: "pinky-wainer-70x50-2", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.386, medium: "Gravura", sold: false },
  { id: "pinky-wainer-70x50-3", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.344, medium: "Gravura", sold: false },
  { id: "pinky-wainer-70x50-4", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.337, medium: "Gravura", sold: false },
  { id: "pinky-wainer-35x25", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.741, medium: "Gravura", sold: false },
  { id: "pinky-wainer-35x25-2", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.719, medium: "Gravura", sold: false },
  { id: "pinky-wainer-35x25-3", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.739, medium: "Gravura", sold: false },
  { id: "pinky-wainer-35x25-4", artist: "pinky-wainer", artistName: "Pinky Wainer", title: null, year: null, technique: "Gravura", h: 35, w: 25, ratio: 0.725, medium: "Gravura", sold: false },
  { id: "regina-silveira-57x76", artist: "regina-silveira", artistName: "Regina Silveira", title: null, year: null, technique: "Gravura", h: 57, w: 76, ratio: 0.748, medium: "Gravura", sold: false },
  { id: "regina-silveira-70x50", artist: "regina-silveira", artistName: "Regina Silveira", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.76, medium: "Gravura", sold: false },
  { id: "ricardo-homen-100x70", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.692, medium: "Gravura", sold: false },
  { id: "ricardo-homen-100x70-2", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.681, medium: "Gravura", sold: false },
  { id: "ricardo-homen-100x70-3", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.703, medium: "Gravura", sold: false },
  { id: "ricardo-homen-50x35", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.701, medium: "Gravura", sold: false },
  { id: "ricardo-homen-50x35-2", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.719, medium: "Gravura", sold: false },
  { id: "ricardo-homen-50x35-3", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.731, medium: "Gravura", sold: false },
  { id: "ricardo-homen-50x35-4", artist: "ricardo-homen", artistName: "Ricardo Homen", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 0.737, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x70", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 0.982, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x70-2", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.03, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x70-3", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 70, ratio: 1.006, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-100x70", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.705, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-100x70-2", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.702, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-100x70-3", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.708, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-50x50", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 50, w: 50, ratio: 0.987, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-50x50-2", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 50, w: 50, ratio: 1.004, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x100", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.445, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.68, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50-2", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.664, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50-3", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.442, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50-4", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 1.402, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50-5", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.733, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50-6", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.738, medium: "Gravura", sold: false },
  { id: "rubens-ianelli-70x50-7", artist: "rubens-ianelli", artistName: "Rubens Ianelli", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.744, medium: "Gravura", sold: false },
  { id: "sergio-rabinovitz-50x35", artist: "sergio-rabinovitz", artistName: "Sergio Rabinovitz", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 1.396, medium: "Gravura", sold: false },
  { id: "sergio-rabinovitz-50x35-2", artist: "sergio-rabinovitz", artistName: "Sergio Rabinovitz", title: null, year: null, technique: "Gravura", h: 50, w: 35, ratio: 1.377, medium: "Gravura", sold: false },
  { id: "silvio-oppenheim-100x70", artist: "silvio-oppenheim", artistName: "Silvio Oppenheim", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.665, medium: "Gravura", sold: false },
  { id: "silvio-oppenheim-100x70-2", artist: "silvio-oppenheim", artistName: "Silvio Oppenheim", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.739, medium: "Gravura", sold: false },
  { id: "silvio-oppenheim-100x70-3", artist: "silvio-oppenheim", artistName: "Silvio Oppenheim", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.814, medium: "Gravura", sold: false },
  { id: "silvio-oppenheim-70x100", artist: "silvio-oppenheim", artistName: "Silvio Oppenheim", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.443, medium: "Gravura", sold: false },
  { id: "stephan-doitschinoff-70x50", artist: "stephan-doitschinoff", artistName: "Stephan Doitschinoff", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.738, medium: "Gravura", sold: false },
  { id: "stephan-doitschinoff-70x50-2", artist: "stephan-doitschinoff", artistName: "Stephan Doitschinoff", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.738, medium: "Gravura", sold: false },
  { id: "stephan-doitschinoff-70x50-3", artist: "stephan-doitschinoff", artistName: "Stephan Doitschinoff", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.738, medium: "Gravura", sold: false },
  { id: "stephan-doitschinoff-100x70", artist: "stephan-doitschinoff", artistName: "Stephan Doitschinoff", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.723, medium: "Gravura", sold: false },
  { id: "tomie-ohtake-100x70", artist: "tomie-ohtake", artistName: "Tomie Ohtake", title: null, year: null, technique: "Gravura", h: 100, w: 70, ratio: 0.749, medium: "Gravura", sold: false },
  { id: "tomie-ohtake-75x52-5", artist: "tomie-ohtake", artistName: "Tomie Ohtake", title: null, year: null, technique: "Gravura", h: 75, w: 52.5, ratio: 1.371, medium: "Gravura", sold: false },
  { id: "tomie-ohtake-78-5x40-5", artist: "tomie-ohtake", artistName: "Tomie Ohtake", title: null, year: null, technique: "Gravura", h: 78.5, w: 40.5, ratio: 1.761, medium: "Gravura", sold: false },
  { id: "tomie-ohtake-78x53-5", artist: "tomie-ohtake", artistName: "Tomie Ohtake", title: null, year: null, technique: "Gravura", h: 78, w: 53.5, ratio: 1.408, medium: "Gravura", sold: false },
  { id: "tomie-ohtake-78x54", artist: "tomie-ohtake", artistName: "Tomie Ohtake", title: null, year: null, technique: "Gravura", h: 78, w: 54, ratio: 1.382, medium: "Gravura", sold: false },
  { id: "tuneu-70x50", artist: "tuneu", artistName: "Tuneu", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.723, medium: "Gravura", sold: false },
  { id: "tuneu-70x50-2", artist: "tuneu", artistName: "Tuneu", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.702, medium: "Gravura", sold: false },
  { id: "tuneu-70x50-3", artist: "tuneu", artistName: "Tuneu", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.738, medium: "Gravura", sold: false },
  { id: "tuneu-70x50-4", artist: "tuneu", artistName: "Tuneu", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.72, medium: "Gravura", sold: false },
  { id: "tuneu-70x50-5", artist: "tuneu", artistName: "Tuneu", title: null, year: null, technique: "Gravura", h: 70, w: 50, ratio: 0.709, medium: "Gravura", sold: false },
  { id: "tuneu", artist: "tuneu", artistName: "Tuneu", title: null, year: null, technique: "Gravura", ratio: 1.026, medium: "Gravura", sold: false, review: "Sem medida no nome do arquivo." },
  { id: "vicente-kutka-70x100", artist: "vicente-kutka", artistName: "Vicente Kutka", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.436, medium: "Gravura", sold: false },
  { id: "vicente-kutka-70x100-2", artist: "vicente-kutka", artistName: "Vicente Kutka", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.46, medium: "Gravura", sold: false },
  { id: "vicente-kutka-70x100-3", artist: "vicente-kutka", artistName: "Vicente Kutka", title: null, year: null, technique: "Gravura", h: 70, w: 100, ratio: 1.452, medium: "Gravura", sold: false },
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
  heroTitle: string;
  /** Texto de abertura, um item por parágrafo. */
  heroLead: string[];
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
    heroTitle: "Arte moderna e contemporânea",
    heroLead: [
      "No mercado desde 1987, o escritório Val de Almeida Jr. mantém um importante acervo com nomes da arte moderna e contemporânea. E sempre atento a novos e jovens talentos.",
      "Além de pinturas e desenhos, temos um grande acervo de gravuras dos principais artistas brasileiros.",
      "Realizamos catalogação e avaliação de coleções públicas e privadas.",
    ],
    featuredWorks: "Acervo",
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
    heroTitle: "Modern and contemporary art",
    heroLead: [
      "In business since 1987, the Val de Almeida Jr. office holds a significant collection of names from modern and contemporary art — and keeps a close eye on new and young talent.",
      "Beyond paintings and drawings, we hold a large collection of prints by leading Brazilian artists.",
      "We carry out the cataloguing and appraisal of public and private collections.",
    ],
    featuredWorks: "Collection",
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
