"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { GalleryGrid } from "@/components/cards";
import { Lightbox } from "@/components/modals";
import { useLang } from "@/components/LangProvider";
import { ARTISTS, ARTWORKS, I18N, dimLabel } from "@/lib/data";
import type { Artwork } from "@/lib/data";

type SortKey = "artista" | "maior" | "acervo";
type Status = "todas" | "disponiveis" | "vendidas";

function AcervoContent() {
  const { lang } = useLang();
  const pt = lang === "pt";
  const t = I18N[lang];

  // artista pode vir da home: /acervo?artista=leda-catunda
  const artistaInicial = useSearchParams().get("artista") ?? "";

  const [query, setQuery] = useState("");
  const [artist, setArtist] = useState(artistaInicial);
  const [status, setStatus] = useState<Status>("todas");
  const [sort, setSort] = useState<SortKey>("artista");
  const [lightbox, setLightbox] = useState<{ works: Artwork[]; index: number } | null>(null);

  const works = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = ARTWORKS.filter((w) => {
      if (artist && w.artist !== artist) return false;
      if (status === "vendidas" && !w.sold) return false;
      if (status === "disponiveis" && w.sold) return false;
      if (!q) return true;
      const campos = [w.artistName, w.title, w.technique, w.year, w.medium, dimLabel(w), w.note];
      return campos.join(" ").toLowerCase().includes(q);
    });

    return [...list].sort((a, b) => {
      if (sort === "maior") return b.h * b.w - a.h * a.w;
      if (sort === "artista") {
        const porNome = a.artistName.localeCompare(b.artistName, "pt");
        return porNome !== 0 ? porNome : b.h * b.w - a.h * a.w;
      }
      return 0; // ordem do acervo
    });
  }, [query, artist, status, sort]);

  const wlabel = t.works[works.length === 1 ? 0 : 1];
  const limpar = query !== "" || artist !== "" || status !== "todas";

  const filtrosStatus: { key: Status; label: string }[] = [
    { key: "todas", label: t.allFilter },
    { key: "disponiveis", label: t.available },
    { key: "vendidas", label: t.sold },
  ];

  const ordenacoes: { key: SortKey; label: string }[] = [
    { key: "artista", label: pt ? "Artista A–Z" : "Artist A–Z" },
    { key: "maior", label: pt ? "Maiores obras" : "Largest works" },
    { key: "acervo", label: pt ? "Ordem do acervo" : "Collection order" },
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <section className="container-wide acervo-intro">
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {t.nav[1]}
          </div>
          <h1 className="serif-title">{pt ? "Acervo completo" : "Full collection"}</h1>
          <p className="lead">
            {pt
              ? "Navegue por todas as obras reunidas pelo escritório. Busque por artista, técnica, medida ou ano, e filtre por disponibilidade."
              : "Browse every work gathered by the office. Search by artist, technique, size or year, and filter by availability."}
          </p>
        </section>

        <section className="container-wide" style={{ paddingBottom: "var(--space-9)" }}>
          {/* Busca por texto */}
          <div className="search-bar">
            <span className="icon">
              <Icon name="search" size={18} />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={pt ? "Buscar por artista, técnica, medida ou ano…" : "Search by artist, technique, size or year…"}
              aria-label={pt ? "Buscar no acervo" : "Search the collection"}
            />
            {query && (
              <button className="clear" onClick={() => setQuery("")} aria-label={pt ? "Limpar busca" : "Clear search"}>
                <Icon name="x" size={16} />
              </button>
            )}
          </div>

          {/* Disponibilidade + artista */}
          <div className="acervo-filtros">
            <div className="filters">
              {filtrosStatus.map((f) => (
                <button key={f.key} className={status === f.key ? "on" : ""} onClick={() => setStatus(f.key)}>
                  {f.label}
                </button>
              ))}
            </div>
            <label className="select-field">
              <span>{t.artist}</span>
              <select value={artist} onChange={(e) => setArtist(e.target.value)}>
                <option value="">{pt ? "Todos os artistas" : "All artists"}</option>
                {ARTISTS.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name} ({a.count})
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Ordenação + contagem */}
          <div className="acervo-toolbar">
            <div className="filters">
              {ordenacoes.map((o) => (
                <button key={o.key} className={sort === o.key ? "on" : ""} onClick={() => setSort(o.key)}>
                  {o.label}
                </button>
              ))}
            </div>
            <span className="count">
              {works.length} {wlabel}
              {limpar && (
                <button
                  className="reset"
                  onClick={() => {
                    setQuery("");
                    setArtist("");
                    setStatus("todas");
                  }}
                >
                  {pt ? "limpar filtros" : "clear filters"}
                </button>
              )}
            </span>
          </div>

          {works.length > 0 ? (
            <GalleryGrid works={works} cols={4} onOpen={(w) => setLightbox({ works, index: works.indexOf(w) })} />
          ) : (
            <div className="empty-state">
              <div className="t">{pt ? "Nenhuma obra encontrada" : "No works found"}</div>
              <div className="s">
                {pt ? "Tente outra busca ou remova os filtros." : "Try another search or clear the filters."}
              </div>
            </div>
          )}
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

export default function AcervoPage() {
  return (
    <Suspense fallback={<div className="app" />}>
      <AcervoContent />
    </Suspense>
  );
}
