// Dados de contato do escritório, num lugar só — aparecem na home e no rodapé.

export const ENDERECO = {
  linha1: "Rua Visconde de Ouro Preto, 139",
  bairro: "Consolação",
  cidade: "São Paulo",
  uf: "SP",
  cep: "01303-060",
};

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
