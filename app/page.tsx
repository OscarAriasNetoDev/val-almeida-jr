"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui";
import Icon from "@/components/Icon";
import { ArtistCard, GalleryGrid } from "@/components/cards";
import { Lightbox } from "@/components/modals";
import { useLang } from "@/components/LangProvider";
import { ARTISTS, ARTWORKS, I18N, MEDIUMS, artworkSrc, workCaption, workLabel } from "@/lib/data";
import type { Artwork, Medium } from "@/lib/data";
import { INSTAGRAM_NOME, INSTAGRAM_URL, MAPS_URL } from "@/lib/contato";

// O acervo ainda não registra obras vendidas, então o filtro aqui é por meio.
// O selo "Vendida" e o recorte por disponibilidade continuam no código, presos
// a HAS_SOLD (lib/data.ts): marcar sold: true numa obra traz os dois de volta.
type Filtro = "todas" | Medium;

/** Quantas obras a home mostra antes de mandar para o acervo completo. */
const DESTAQUES = 12;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface LightboxState {
  works: Artwork[];
  index: number;
}

export default function HomePage() {
  const { lang } = useLang();
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const t = I18N[lang];
  const pt = lang === "pt";

  // A obra em destaque é sorteada a cada carregamento, entre as disponíveis.
  // O sorteio roda depois da montagem: no HTML pré-renderizado o destaque ainda
  // não existe, e assim o servidor e o cliente não divergem na hidratação.
  const disponiveis = useMemo(() => ARTWORKS.filter((w) => !w.sold), []);
  const [heroWork, setHeroWork] = useState<Artwork | null>(null);
  useEffect(() => {
    setHeroWork(disponiveis[Math.floor(Math.random() * disponiveis.length)]);
  }, [disponiveis]);

  const filtros: { key: Filtro; label: string }[] = [
    { key: "todas", label: t.allFilter },
    ...MEDIUMS.map((m) => ({ key: m as Filtro, label: m })),
  ];

  const filtradas = ARTWORKS.filter((w) => filtro === "todas" || w.medium === filtro);
  const destaques = filtradas.slice(0, DESTAQUES);

  return (
    <div className="app home">
      <Header />
      <main>
        {/* ---------- Hero ---------- */}
        <section className="container-wide home-hero">
          <div>
            <div className="eyebrow">{t.heroEyebrow}</div>
            <h1 className="serif-title">{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="hero-actions">
              <Button variant="primary" icon="arrow-right" onClick={() => scrollToId("acervo")}>
                {t.nav[1]}
              </Button>
              <Button variant="secondary" onClick={() => scrollToId("artistas")}>
                {t.nav[0]}
              </Button>
            </div>
          </div>
          <div className="hero-feature">
            {/* Proporção fixa: o destaque muda a cada visita e o quadro não pode
                pular de tamanho. A obra usa "contain", então nunca é recortada. */}
            <button
              className="frame"
              onClick={() => heroWork && setLightbox({ works: [heroWork], index: 0 })}
              aria-label={heroWork ? workLabel(heroWork) : undefined}
            >
              {heroWork && (
                <Image
                  key={heroWork.id}
                  src={artworkSrc(heroWork)}
                  alt={workLabel(heroWork)}
                  fill
                  sizes="(max-width: 1080px) 92vw, 40vw"
                  /* "eager", não "priority": o preload do priority vai no HTML
                     pré-renderizado, e a obra em destaque só é sorteada no cliente. */
                  loading="eager"
                />
              )}
            </button>
            <div className="cap">
              <span className="t">{heroWork ? workLabel(heroWork) : ""}</span>
              <span className="l">{heroWork ? workCaption(heroWork) : ""}</span>
            </div>
          </div>
        </section>

        {/* ---------- Sobre — desde 1987 ---------- */}
        <section className="about-band">
          <div className="container-wide inner">
            <div className="eyebrow">{pt ? "O escritório" : "The office"}</div>
            <div>
              <p>
                {pt
                  ? "Desde 1987 reunimos obras de artistas brasileiros contemporâneos — no tempo lento da galeria, onde a obra encontra quem a olha."
                  : "Since 1987 we have gathered works by contemporary Brazilian artists — in the gallery’s slow time, where the work meets the one who looks."}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Artistas ---------- */}
        <section id="artistas" className="container-wide sec">
          <div className="sec-head">
            <div>
              <div className="eyebrow">{t.nav[0]}</div>
              <h2 className="serif-title">{t.featuredArtists}</h2>
            </div>
            <span className="count">
              {ARTISTS.length} {pt ? "artistas" : "artists"}
            </span>
          </div>
          <div className="grid-artists">
            {ARTISTS.map((a) => (
              <Link key={a.id} href={`/acervo?artista=${a.id}`} className="artist-link">
                <ArtistCard artist={a} />
              </Link>
            ))}
          </div>
        </section>

        {/* ---------- Acervo ---------- */}
        <section id="acervo" className="container-wide sec">
          <div className="sec-head">
            <div>
              <div className="eyebrow">{t.nav[1]}</div>
              <h2 className="serif-title">{t.featuredWorks}</h2>
            </div>
            <Link className="btn btn-ghost" href="/acervo">
              {pt ? "Ver acervo completo" : "See full collection"}
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <div className="filterbar">
            <div className="filters">
              {filtros.map((f) => (
                <button key={f.key} className={filtro === f.key ? "on" : ""} onClick={() => setFiltro(f.key)}>
                  {f.label}
                </button>
              ))}
            </div>
            <span className="count">
              {pt
                ? `${destaques.length} de ${filtradas.length} ${t.works[filtradas.length === 1 ? 0 : 1]}`
                : `${destaques.length} of ${filtradas.length} ${t.works[filtradas.length === 1 ? 0 : 1]}`}
            </span>
          </div>
          <GalleryGrid
            works={destaques}
            onOpen={(w) => setLightbox({ works: destaques, index: destaques.indexOf(w) })}
          />
        </section>

        {/* ---------- Contato ---------- */}
        <section id="contato" className="container-wide sec">
          <div className="sec-head">
            <div>
              <div className="eyebrow">{t.nav[2]}</div>
              <h2 className="serif-title">{pt ? "Contato" : "Contact"}</h2>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="blk">
                <h4>
                  <Icon name="map-pin" size={15} /> {pt ? "Endereço" : "Address"}
                </h4>
                <p>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Rua Visconde de Ouro Preto, 139 · Consolação
                    <br />
                    São Paulo · SP · 01303-060
                  </a>
                </p>
              </div>
              <div className="blk">
                <h4>
                  <Icon name="clock" size={15} /> {pt ? "Horários" : "Hours"}
                </h4>
                <p>
                  {pt ? "10h – 17h" : "10am – 5pm"}
                  <br />
                  {pt ? "Visitas com agendamento" : "Visits by appointment"}
                </p>
              </div>
              <div className="blk">
                <h4>
                  <Icon name="mail" size={15} /> {pt ? "E-mail" : "Email"}
                </h4>
                <p>
                  <a href="mailto:contato@valdealmeidajr.com.br">contato@valdealmeidajr.com.br</a>
                </p>
              </div>
              <div className="blk">
                <h4>
                  <Icon name="phone" size={15} /> {pt ? "Telefone" : "Phone"}
                </h4>
                <p>
                  <a href="tel:+551130883240">+55 11 3088-3240</a>
                  <br />
                  <a href="tel:+5531988787858">+55 31 98878-7858</a>
                </p>
              </div>
              <div className="blk">
                <h4>
                  <Icon name="instagram" size={15} /> {pt ? "Redes" : "Social"}
                </h4>
                <p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    {INSTAGRAM_NOME}
                  </a>
                </p>
              </div>
            </div>
            <a className="map-strip" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="map-pin" size={18} />
              {pt ? "Ver no mapa" : "Open in maps"}
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {lightbox && (
        <Lightbox
          works={lightbox.works}
          index={lightbox.index}
          setIndex={(i) => setLightbox({ ...lightbox, index: i })}
          onClose={() => setLightbox(null)}
          lang={lang}
        />
      )}
    </div>
  );
}
