// Catálogo curado do acervo — mapeia cada arquivo de imagem original
// (em c:/Programação/Val/imagem) para os metadados da obra.
//
// Os dados vêm dos nomes dos arquivos. A convenção de medida foi confirmada
// comparando com a proporção real das fotos: ALTURA × LARGURA, em cm.
//
// Campos:
//   src        caminho relativo à pasta de imagens de origem
//   artista    nome canônico (grafia unificada entre os arquivos)
//   titulo     ausente => exibido como "Sem título"
//   ano        ausente quando não informado no nome do arquivo
//   tecnica    ausente quando não informada no nome do arquivo — não inventar
//   alt/larg   em cm; prof opcional (obras tridimensionais)
//   nota       observação vinda do nome do arquivo
//   meio       "Pintura" | "Escultura" | "Obra sobre papel" — só quando há evidência
//   vendido    true para a pasta vendido/
//   revisar    medida suspeita, marcada para conferência

export const CATALOGO = [
  // ---------------- Disponíveis ----------------
  // "Agostinho Batista de Freitas 80x120cm.jpg" é a mesma obra, fotografada de
  // novo; fica esta, cuja proporção bate com os 80 × 120 cm.
  { src: "Agostinho Batista de Freitas, óleo sobre tela, 1972, 80x120cm..jpeg", artista: "Agostinho Batista de Freitas", ano: 1972, tecnica: "Óleo sobre tela", alt: 80, larg: 120, meio: "Pintura" },
  { src: "Aldemir  Martins 30x40cm.jpg", artista: "Aldemir Martins", alt: 30, larg: 40 },
  { src: "Aldemir Martins, acrílica sobre tela, 100x75cm, 1971.jpeg", artista: "Aldemir Martins", ano: 1971, tecnica: "Acrílica sobre tela", alt: 100, larg: 75, meio: "Pintura" },
  { src: "Aldemir Martins, escultura em chapa de aço e pintura automotiva, 75x60cm.jpeg", artista: "Aldemir Martins", tecnica: "Escultura em chapa de aço e pintura automotiva", alt: 75, larg: 60, meio: "Escultura" },
  { src: "Clovis Graciano  50x35cm.jpeg", artista: "Clóvis Graciano", alt: 50, larg: 35 },
  // Mesma obra em dois arquivos: "Dionisio Del Santo 55x80cm.jpg" (foto maior) e
  // o arquivo com os dados ("…65x81cm, Bovino Cultura"). Fica a foto maior com
  // os dados da outra; 65 × 81 cm é a medida correta — é a que bate com a
  // proporção das duas fotos.
  { src: "Dionisio Del Santo 55x80cm.jpg", artista: "Dionísio Del Santo", titulo: "Bovino Cultura", tecnica: "Acrílica sobre tela", alt: 65, larg: 81, meio: "Pintura" },
  { src: "Efigenia de Deus 45x55cm.jpg", artista: "Efigênia de Deus", alt: 45, larg: 55 },
  { src: "Efigênia de Deus 60x40cm.jpg", artista: "Efigênia de Deus", alt: 60, larg: 40 },

  // "Flexor, óleo sobre tela, 1959…" e "Sansom flexor…" são fotos da MESMA obra.
  // Fica a reprodução recortada (Sansom flexor), de melhor qualidade.
  { src: "Sansom flexor 130x100cm.jpeg", artista: "Samson Flexor", ano: 1959, tecnica: "Óleo sobre tela", alt: 130, larg: 100, meio: "Pintura", nota: "Obra reproduzida no livro do artista; participou da exposição no MAM SP." },

  { src: "Gabriela Brasileiro 100x150cm.jpg", artista: "Gabriela Brasileiro", alt: 100, larg: 150 },
  { src: "Gabriela Brasileiro 160x120cm.jpg", artista: "Gabriela Brasileiro", alt: 160, larg: 120 },
  { src: "Guyer Salles 100x140cm.jpg", artista: "Guyer Salles", alt: 100, larg: 140 },
  { src: "Guyer Salles 60x80cm.jpg", artista: "Guyer Salles", alt: 60, larg: 80 },
  { src: "Iberê Camargo, óleo sobre placa, 70x100cm, registrado na Fundação..jpeg", artista: "Iberê Camargo", tecnica: "Óleo sobre placa", alt: 70, larg: 100, meio: "Pintura", nota: "Obra registrada na Fundação Iberê Camargo." },
  { src: "Inacio Rodrigues 30x30cm.jpg", artista: "Inácio Rodrigues", alt: 30, larg: 30 },
  { src: "J A Silva  55x38cm.jpg", artista: "José A. Silva", alt: 55, larg: 38 },
  { src: "Jorge Fonseca caixa de cetim 50x30x30cm.jpeg", artista: "Jorge Fonseca", tecnica: "Caixa de cetim", alt: 50, larg: 30, prof: 30, meio: "Escultura" },
  { src: "Jorge dos Anjos aço cortem 220x40x40cm.jpeg", artista: "Jorge dos Anjos", tecnica: "Aço corten", alt: 220, larg: 40, prof: 40, meio: "Escultura" },
  { src: "LUIZ SOLHA 120X160.jpg", artista: "Luiz Solha", alt: 120, larg: 160 },
  { src: "LUIZ SOLHA 160X190cm.jpg", artista: "Luiz Solha", alt: 160, larg: 190 },
  { src: "Luis Tomasello 35x35cm.jpg", artista: "Luis Tomasello", alt: 35, larg: 35 },
  { src: "Manoel Martins 40x60cm.jpg", artista: "Manoel Martins", alt: 40, larg: 60 },
  { src: "Mauricio Nogueira Lima 80x60cm.jpg", artista: "Maurício Nogueira Lima", alt: 80, larg: 60 },
  { src: "Newton Mesquita 120x100cm.jpg", artista: "Newton Mesquita", alt: 120, larg: 100 },
  { src: "Newton Mesquita 160x160cm.jpeg", artista: "Newton Mesquita", alt: 160, larg: 160 },
  { src: "Paulo von Poser 120x50cm.jpg", artista: "Paulo von Poser", alt: 120, larg: 50 },
  { src: "Pink Wainer 170x15.jpg", artista: "Pink Wainer", alt: 170, larg: 15, revisar: "A medida 170x15 do nome do arquivo não bate com a proporção da foto (quase quadrada)." },
  { src: "Rosario Moreno 100x66cm.jpeg", artista: "Rosario Moreno", alt: 100, larg: 66 },
  { src: "Sou Kit Gom 120x130.jpg", artista: "Sou Kit Gom", alt: 120, larg: 130 },
  { src: "Sérgio Niculitcheff, 50x70cm.jpeg", artista: "Sérgio Niculitcheff", alt: 50, larg: 70 },
  { src: "Sérgio Niculitcheff, a.s.t, 100x140cm.jpeg", artista: "Sérgio Niculitcheff", tecnica: "Acrílica sobre tela", alt: 100, larg: 140, meio: "Pintura" },
  { src: "Sérgio Niculitcheff, a.s.t, 70x50cm.jpeg", artista: "Sérgio Niculitcheff", tecnica: "Acrílica sobre tela", alt: 70, larg: 50, meio: "Pintura" },
  { src: "Sérgio Telles, o.s.t, nat.morta, 69x80cm.jpeg", artista: "Sérgio Telles", titulo: "Natureza-morta", tecnica: "Óleo sobre tela", alt: 69, larg: 80, meio: "Pintura" },
  { src: "Victor Lema Rique, 160x190cm, 2012.jpg", artista: "Victor Lema Rique", ano: 2012, alt: 160, larg: 190 },
  { src: "Wesley Duke lee 60x80cm.jpg", artista: "Wesley Duke Lee", alt: 60, larg: 80 },
  { src: "Zorlini 65x57cm com moldura.jpg", artista: "Zorlini", alt: 65, larg: 57, nota: "Medida tomada com a moldura." },
  { src: "leda catunda 152x180cm.jpeg", artista: "Leda Catunda", alt: 152, larg: 180 },

  // ---------------- Vendidas ----------------
  { src: "vendido/Agostinho B. Freitas 60x80cm.jpeg", artista: "Agostinho Batista de Freitas", alt: 60, larg: 80, vendido: true },
  { src: "vendido/Aldemir Martins 50x35cm.jpeg", artista: "Aldemir Martins", alt: 50, larg: 35, vendido: true },
  { src: "vendido/Antônio Bandeira 32x24cm.jpeg", artista: "Antônio Bandeira", alt: 32, larg: 24, vendido: true },
  { src: "vendido/Bruno Giorgi 89x40x10cm.jpeg", artista: "Bruno Giorgi", alt: 89, larg: 40, prof: 10, meio: "Escultura", vendido: true },
  { src: "vendido/Di Cavalcanti 22x31cm.jpeg", artista: "Di Cavalcanti", alt: 22, larg: 31, vendido: true },
  { src: "vendido/Di Cavalcanti, o.s.t, 38x55cm.jpeg", artista: "Di Cavalcanti", tecnica: "Óleo sobre tela", alt: 38, larg: 55, meio: "Pintura", vendido: true },
  { src: "vendido/Fang 60x80cm.jpeg", artista: "Fang", alt: 60, larg: 80, vendido: true },
  { src: "vendido/Ivald Granato 160x20cn.jpeg", artista: "Ivald Granato", alt: 20, larg: 160, vendido: true, revisar: "O nome do arquivo diz \u201C160x20cn\u201D; a foto é uma faixa horizontal, então foi registrada como 20 × 160 cm." },
  { src: "vendido/Jorge dos Anjos relevo em aço cortem 115x115cm.jpeg", artista: "Jorge dos Anjos", tecnica: "Relevo em aço corten", alt: 115, larg: 115, meio: "Escultura", vendido: true },
  { src: "vendido/José A Silva 65x90cm.jpeg", artista: "José A. Silva", alt: 65, larg: 90, vendido: true },
  { src: "vendido/Marcelo Grassmann, sanguínea sobre papel, 45x65cm.jpeg", artista: "Marcelo Grassmann", tecnica: "Sanguínea sobre papel", alt: 45, larg: 65, meio: "Obra sobre papel", vendido: true },
  { src: "vendido/Newton Mesquita1 160x160cm.jpeg", artista: "Newton Mesquita", alt: 160, larg: 160, vendido: true },
  { src: "vendido/Paulo Roberto Leal, acrílica e colagem sobre papel, 30x17cm.jpeg", artista: "Paulo Roberto Leal", tecnica: "Acrílica e colagem sobre papel", alt: 30, larg: 17, meio: "Obra sobre papel", vendido: true },
  { src: "vendido/Silvio Pinto, o.s.t, 51x58cm.jpeg", artista: "Silvio Pinto", tecnica: "Óleo sobre tela", alt: 51, larg: 58, meio: "Pintura", vendido: true },
  { src: "vendido/Volpi 23x41cm.jpeg", artista: "Alfredo Volpi", alt: 23, larg: 41, vendido: true },
];

// Fotos adicionais de obras que JÁ estão no catálogo (a mesma obra registrada
// duas vezes nas pastas de origem). Vão para _pendentes/fotos-duplicadas/ em vez
// de se misturarem com as imagens que ainda precisam de nome e medida.
export const DUPLICADAS = [
  "Agostinho Batista de Freitas 80x120cm.jpg",
  "Dionísio Del Santo, acrílica sobre tela, 65x81cm, “Bovino Cultura”.jpeg",
  "Flexor, óleo sobre tela, 1959, 130x100cm. Obra reproduzida no livro do artista, participou da exposição no MAM SP.jpeg",
];
