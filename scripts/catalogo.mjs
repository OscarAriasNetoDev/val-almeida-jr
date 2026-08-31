// Catálogo curado do acervo — mapeia cada arquivo de imagem original
// (em c:/Programação/Val/imagem) para os metadados da obra.
//
// Os dados vêm dos nomes dos arquivos. A convenção de medida foi confirmada
// comparando com a proporção real das fotos: ALTURA × LARGURA, em cm.
//
// Grafias de artista e de técnica foram uniformizadas aqui (os nomes de arquivo
// trazem variações e erros de digitação); o comentário marca cada correção.
//
// Campos:
//   src        caminho relativo à pasta de imagens de origem
//   artista    nome canônico (grafia unificada entre os arquivos)
//   titulo     ausente => o rótulo da obra é só artista + medida
//   ano        ausente quando não informado no nome do arquivo
//   tecnica    ausente quando não informada no nome do arquivo — não inventar
//   alt/larg   em cm; prof opcional (tridimensionais). Ausentes = medida
//              desconhecida; o site então omite a medida do rótulo.
//   nota       observação vinda do nome do arquivo
//   meio       "Pintura" | "Escultura" | "Gravura" | "Obra sobre papel" | "Cerâmica"
//   vendido    true quando a obra já foi vendida
//   revisar    dado suspeito, marcado para conferência (não aparece no site)

export const CATALOGO = [
  // ---- Aldemir Martins ----
  { src: "Aldemir Martins, cerâmicas.jpg", artista: "Aldemir Martins", titulo: "Cerâmicas", meio: "Cerâmica",
    nota: "Conjunto de cinco peças.",
    revisar: "Sem medida no nome do arquivo, e a foto mostra 5 peças — confirmar se é um lote único ou 5 obras separadas, e as medidas." },
  { src: "Aldemir Martins, escultura em chapa de aço e pintura automotiva, 75x60cm.jpeg", artista: "Aldemir Martins", tecnica: "Escultura em chapa de aço e pintura automotiva", alt: 75, larg: 60, meio: "Escultura" },

  // ---- Aldir Mendes de Souza ----
  { src: "Aldir Mendes de Souza, têmpera sobre tela 100x100cm.jpeg", artista: "Aldir Mendes de Souza", tecnica: "Têmpera sobre tela", alt: 100, larg: 100, meio: "Pintura" },

  // ---- Alfredo Volpi ----
  { src: "Alfredo Volpi, têmpera sobre tela, 67,5x135,5cm Inicio década de 1970.jpeg", artista: "Alfredo Volpi", tecnica: "Têmpera sobre tela", alt: 67.5, larg: 135.5, meio: "Pintura",
    nota: "Início da década de 1970." },

  // ---- Amilcar de Castro ----
  // "cortem" nos nomes de arquivo é o aço corten.
  { src: "Amilcar de Castro, escultura em aço cortem 20x28cm.jpg", artista: "Amilcar de Castro", tecnica: "Escultura em aço corten", alt: 20, larg: 28, meio: "Escultura" },
  { src: "Amilcar de Castro, escultura em aço cortem 40x60x5cm.png", artista: "Amilcar de Castro", tecnica: "Escultura em aço corten", alt: 40, larg: 60, prof: 5, meio: "Escultura" },
  // Três litografias DIFERENTES (conferido nas imagens). O "(1) (2) (3)" é a
  // numeração automática do Windows, não a numeração da tiragem.
  { src: "Amilcar de Castro, gravura litografia, 70x100cm, Certificada no Projeto Amilcar de Castro  (1).jpg", artista: "Amilcar de Castro", tecnica: "Litografia", alt: 70, larg: 100, meio: "Gravura",
    nota: "Certificada no Projeto Amilcar de Castro." },
  { src: "Amilcar de Castro, gravura litografia, 70x100cm, Certificada no Projeto Amilcar de Castro  (2).jpg", artista: "Amilcar de Castro", tecnica: "Litografia", alt: 100, larg: 70, meio: "Gravura",
    nota: "Certificada no Projeto Amilcar de Castro.",
    revisar: "O nome do arquivo diz 70x100 como as outras duas, mas esta gravura é vertical — registrada como 100 × 70 cm. Conferir." },
  { src: "Amilcar de Castro, gravura litografia, 70x100cm, Certificada no Projeto Amilcar de Castro  (3).jpg", artista: "Amilcar de Castro", tecnica: "Litografia", alt: 70, larg: 100, meio: "Gravura",
    nota: "Certificada no Projeto Amilcar de Castro." },

  // ---- Antônio Bandeira ----
  // Três aquarelas diferentes (conferido nas imagens).
  { src: "Antonio Bandeira, aquarela, 25x34cm 25x35cm.jpg", artista: "Antônio Bandeira", tecnica: "Aquarela", alt: 25, larg: 34, meio: "Obra sobre papel",
    revisar: "O nome do arquivo traz DUAS medidas: 25x34cm e 25x35cm. Ficou a primeira. Conferir qual é a certa." },
  { src: "Antonio Bandeira, aquarela, 25x35cm.jpg", artista: "Antônio Bandeira", tecnica: "Aquarela", alt: 25, larg: 35, meio: "Obra sobre papel" },
  { src: "Antonio Bandeira, aquarela, 35x25cm.jpg", artista: "Antônio Bandeira", tecnica: "Aquarela", alt: 35, larg: 25, meio: "Obra sobre papel" },

  // ---- Chen-Kong Fang ----
  // Nos arquivos aparece "FANG" em caixa alta; "sobte" é "sobre".
  { src: "Chen-Kong FANG, fruteira, óleo sobre tela, 35x43cm, 1959 copiar.jpg", artista: "Chen-Kong Fang", titulo: "Fruteira", ano: 1959, tecnica: "Óleo sobre tela", alt: 35, larg: 43, meio: "Pintura" },
  { src: "Chen-Kong FANG, óleo sobre madeira, 120x125cm.png", artista: "Chen-Kong Fang", tecnica: "Óleo sobre madeira", alt: 120, larg: 125, meio: "Pintura" },
  { src: "Chen-Kong FANG, óleo sobre tela, 32x20cm.jpeg", artista: "Chen-Kong Fang", tecnica: "Óleo sobre tela", alt: 32, larg: 20, meio: "Pintura" },
  { src: "Chen-Kong FANG, óleo sobte tela sobre madeira 55x40cm.png", artista: "Chen-Kong Fang", tecnica: "Óleo sobre tela sobre madeira", alt: 55, larg: 40, meio: "Pintura" },

  // ---- Claudio Tozzi ----
  { src: "Claudio Tozzi, N.Y, óleo sobre tela sobre madeira, 100x150cm, década de 1980.jpeg", artista: "Claudio Tozzi", titulo: "N.Y", tecnica: "Óleo sobre tela sobre madeira", alt: 100, larg: 150, meio: "Pintura",
    nota: "Década de 1980." },

  // ---- Di Cavalcanti ----
  { src: "Di Cavalcanti, óleo sobre tela, 55x65cm - Década de 1979.jpg", artista: "Di Cavalcanti", ano: 1979, tecnica: "Óleo sobre tela", alt: 55, larg: 65, meio: "Pintura",
    revisar: "O nome do arquivo diz \"Década de 1979\" — 1979 é ano, não década. Registrado como ano de 1979; conferir se não é a década de 1970." },

  // ---- Dionísio Del Santo ----
  { src: "Dionisio Del Santo, óleo sobre tela, 55x80cm, Fazendinha 1983.JPG", artista: "Dionísio Del Santo", titulo: "Fazendinha", ano: 1983, tecnica: "Óleo sobre tela", alt: 55, larg: 80, meio: "Pintura",
    revisar: "Esta MESMA foto estava antes no acervo como \"acrílica sobre tela, 65x81cm, Bovino Cultura\". A proporção da foto (1,25) fecha com 65×81 e não com 55×80. Conferir técnica, medida e título." },

  // ---- Félix Toranzo ----
  { src: "Félix Toranzo, acrílica sobre tela, Díptico 120x102cm (Cada).jpg", artista: "Félix Toranzo", tecnica: "Acrílica sobre tela", alt: 120, larg: 102, meio: "Pintura",
    nota: "Díptico — a medida é de cada painel." },

  // ---- Gabriela Brasileiro ----
  // Três arquivos trazem "Brasilerio", que é erro de digitação.
  { src: "Gabriela Brasileiro, acrílica sobre tela  120x160cm.JPG", artista: "Gabriela Brasileiro", tecnica: "Acrílica sobre tela", alt: 120, larg: 160, meio: "Pintura" },
  { src: "Gabriela Brasilerio, acrílica sobre tela, 110x150cm.jpeg", artista: "Gabriela Brasileiro", tecnica: "Acrílica sobre tela", alt: 110, larg: 150, meio: "Pintura" },
  { src: "Gabriela Brasilerio, acrílica sobre tela, 120x120cm.jpeg", artista: "Gabriela Brasileiro", tecnica: "Acrílica sobre tela", alt: 120, larg: 120, meio: "Pintura" },
  { src: "Gabriela Brasilerio, acrílica sobre tela, 150x120cm.jpeg", artista: "Gabriela Brasileiro", tecnica: "Acrílica sobre tela", alt: 150, larg: 120, meio: "Pintura" },

  // ---- Ianelli ----
  { src: "Ianelli, têmpera sobre tela, 100x80cm - Década 1970.jpeg", artista: "Ianelli", tecnica: "Têmpera sobre tela", alt: 100, larg: 80, meio: "Pintura",
    nota: "Década de 1970.",
    revisar: "O arquivo traz só o sobrenome. Confirmar se é Arcangelo Ianelli ou Thomaz Ianelli." },

  // ---- Iberê Camargo ----
  // O arquivo traz "Carmargo".
  { src: "Iberê Carmargo, óleo sobre cartão colado em madeira 70x100cm, reproduzido em catálogo da exposição do Artista.JPG", artista: "Iberê Camargo", tecnica: "Óleo sobre cartão colado em madeira", alt: 70, larg: 100, meio: "Pintura",
    nota: "Reproduzida em catálogo de exposição do artista." },

  // ---- Jorge dos Anjos ----
  { src: "Jorge dos Anjos, escultura de aço cortem, 300x200cm.jpeg", artista: "Jorge dos Anjos", tecnica: "Escultura em aço corten", alt: 300, larg: 200, meio: "Escultura",
    revisar: "As outras duas esculturas do artista têm três medidas (240x40x40 e 230x40x40); esta só tem duas. Falta a profundidade?" },
  { src: "Jorge dos Anjos, escultura em aço cortem 240x40x40cm.jpeg", artista: "Jorge dos Anjos", tecnica: "Escultura em aço corten", alt: 240, larg: 40, prof: 40, meio: "Escultura" },
  { src: "Jorge dos Anjos, escultura em aço cortem e tinta automotiva, 230x40x40cm.jpeg", artista: "Jorge dos Anjos", tecnica: "Escultura em aço corten e tinta automotiva", alt: 230, larg: 40, prof: 40, meio: "Escultura" },

  // ---- Marcello Tomazelli ----
  // Duas fotos da MESMA obra (conferido). Fica o recorte, que é a melhor
  // reprodução; a foto na parede vai para _pendentes/fotos-duplicadas/.
  { src: "Marcello Tomazelli, acrílica sobre tela, 110x160cm copiar.jpg", artista: "Marcello Tomazelli", tecnica: "Acrílica sobre tela", alt: 110, larg: 160, meio: "Pintura" },

  // ---- Mira Schendel ----
  { src: "Mira Schendel, óleo e ecoline sobre papel 50x70cm.JPG", artista: "Mira Schendel", tecnica: "Óleo e ecoline sobre papel", alt: 50, larg: 70, meio: "Obra sobre papel" },

  // ---- Paulo Torres ----
  { src: "Paulo Torres, acrílica sobre tela, 90x170cm.JPG", artista: "Paulo Torres", tecnica: "Acrílica sobre tela", alt: 90, larg: 170, meio: "Pintura" },

  // ---- Rubens Matuck ----
  { src: "Rubens Matuck, óleo sobre tela, Díptico, 100x160, 2000.png", artista: "Rubens Matuck", ano: 2000, tecnica: "Óleo sobre tela", alt: 100, larg: 160, meio: "Pintura",
    nota: "Díptico.",
    revisar: "A medida vem sem unidade no nome do arquivo e não diz se 100x160 é cada painel ou o conjunto." },

  // ---- Samson Flexor ----
  // O arquivo traz "Sansom" e "obra produzida no livro"; o certo é reproduzida,
  // como constava antes.
  { src: "Sansom Flexor, óleo sobre tela, 130x100cm 1959, obra produzida no livro do artista.jpg", artista: "Samson Flexor", ano: 1959, tecnica: "Óleo sobre tela", alt: 130, larg: 100, meio: "Pintura",
    nota: "Reproduzida no livro do artista." },

  // ---- Sérgio Niculitcheff ----
  // Um arquivo traz "Niculiticheff". São três obras diferentes (conferido).
  { src: "Sérgio Niculitcheff, acrílica sobre tela, 100x140cm 2001.jpeg", artista: "Sérgio Niculitcheff", ano: 2001, tecnica: "Acrílica sobre tela", alt: 100, larg: 140, meio: "Pintura" },
  { src: "Sérgio Niculitcheff, acrílica sobre tela, 70x50cm 2001.jpeg", artista: "Sérgio Niculitcheff", ano: 2001, tecnica: "Acrílica sobre tela", alt: 70, larg: 50, meio: "Pintura" },
  { src: "Sérgio Niculiticheff, óleo sobre tela, 100x140cm, 2001 -.png", artista: "Sérgio Niculitcheff", ano: 2001, tecnica: "Óleo sobre tela", alt: 100, larg: 140, meio: "Pintura" },

  // ---- Sérgio Telles ----
  // O arquivo traz "olé sobre placa".
  { src: "Sérgio Telles, olé sobre placa 60x80cm.jpeg", artista: "Sérgio Telles", tecnica: "Óleo sobre placa", alt: 60, larg: 80, meio: "Pintura",
    revisar: "Esta MESMA foto estava antes no acervo como \"óleo sobre tela, natureza-morta, 69x80cm\". Mudaram o suporte e a medida, e o título sumiu. Conferir." },

  // ---- Victor Lema Rique ----
  { src: "Victor Lema Riquê , acrilica sobre tela, 200x170cm, 1995 (rep Catalogo Nara Roesler).jpeg", artista: "Victor Lema Rique", ano: 1995, tecnica: "Acrílica sobre tela", alt: 200, larg: 170, meio: "Pintura",
    nota: "Reproduzida no catálogo da Galeria Nara Roesler." },

  // ---- Wesley Duke Lee ----
  // O arquivo traz "Xarox" e "séria".
  { src: "Wesley Duke Lee, Xarox colorido, séria N.Y 60x80cm.JPG", artista: "Wesley Duke Lee", titulo: "Série N.Y", tecnica: "Xerox colorido", alt: 60, larg: 80, meio: "Obra sobre papel" },
];

// Fotos adicionais de obras que JÁ estão no catálogo (a mesma obra registrada
// duas vezes na pasta de origem). Vão para _pendentes/fotos-duplicadas/ em vez
// de se misturarem com as imagens que ainda precisam de nome e medida.
export const DUPLICADAS = [
  "Marcello Tomazelli, acrílica sobre tela, 110x160cm.JPG",
];
