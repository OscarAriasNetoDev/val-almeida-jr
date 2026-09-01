// Dados de contato do escritório, num lugar só — aparecem na home e no rodapé.

export const ENDERECO = {
  linha1: "Rua Visconde de Ouro Preto, 139",
  bairro: "Consolação",
  cidade: "São Paulo",
  uf: "SP",
  cep: "01303-060",
};

/**
 * Coordenadas do endereço, obtidas pelo geocodificador do OpenStreetMap
 * (Nominatim) e conferidas: número 139 e CEP 01303-060 batem.
 *
 * O mapa embutido usa as coordenadas, não o texto do endereço: com texto livre
 * o Google abre um balão "Place info couldn't load" por cima do mapa, porque
 * não tem um identificador de lugar para resolver.
 */
export const COORDENADAS = { lat: -23.549864, lng: -46.651373 };

/**
 * Mapa embutido, na forma sem chave de API (maps.google.com + output=embed).
 * Não é a Maps Embed API oficial, que exigiria projeto no Google Cloud, cobrança
 * habilitada e uma chave exposta no HTML de um site estático. Esta forma é
 * antiga e estável, mas não é documentada — se um dia parar de responder, a
 * troca é por este endereço do OpenStreetMap, que não precisa de chave:
 * https://www.openstreetmap.org/export/embed.html?bbox=…&marker=lat,lng
 */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${COORDENADAS.lat},${COORDENADAS.lng}&z=17&output=embed`;

/** Busca no Google Maps pelo endereço completo. */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${ENDERECO.linha1}, ${ENDERECO.bairro}, ${ENDERECO.cidade} - ${ENDERECO.uf}, ${ENDERECO.cep}`
  );

/** href do tel: em formato E.164; texto é como o número se lê. */
export const TELEFONES = [
  { href: "tel:+551130883240", texto: "+55 11 3088-3240" },
  { href: "tel:+5531988787858", texto: "+55 31 98878-7858" },
];

// As duas URLs vieram com rastreio de compartilhamento ("?igsi=" no Instagram,
// "?mibextid=" no Facebook), que não faz parte do endereço do perfil.
//
// O Facebook veio como link /share/1J7vWsFp1o/, que é um redirecionamento e
// pode deixar de funcionar; seguindo o redirect, o perfil de verdade é
// /val.almeidajr — é esse que fica gravado aqui.
export const INSTAGRAM_URL = "https://www.instagram.com/valalmeidajrgaleria";
export const INSTAGRAM_NOME = "Val Almeida Jr";
export const INSTAGRAM_ARROBA = "@valalmeidajrgaleria";

export const FACEBOOK_URL = "https://www.facebook.com/val.almeidajr";
export const FACEBOOK_NOME = "Val Almeida Jr";

// TODO: e-mail ainda é o fictício herdado do handoff — trocar pelo real antes
// de o site sair da prévia.
export const EMAIL = "contato@valdealmeidajr.com.br";
