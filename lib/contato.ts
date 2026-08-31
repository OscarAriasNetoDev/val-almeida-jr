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

// A URL veio com "?igsi=…", que é rastreio de compartilhamento do Instagram e
// não faz parte do endereço do perfil — fica só o caminho limpo.
export const INSTAGRAM_URL = "https://www.instagram.com/valalmeidajrgaleria";
export const INSTAGRAM_NOME = "Val Almeida Jr";
export const INSTAGRAM_ARROBA = "@valalmeidajrgaleria";

// TODO: e-mail ainda é o fictício herdado do handoff — trocar pelo real antes
// de o site sair da prévia.
export const EMAIL = "contato@valdealmeidajr.com.br";
