"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { artworkSrc, dimLabel, workLabel, I18N } from "@/lib/data";
import type { Artwork, Lang } from "@/lib/data";

interface LightboxProps {
  works: Artwork[];
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
  lang: Lang;
}

export function Lightbox({ works, index, setIndex, onClose, lang }: LightboxProps) {
  const t = I18N[lang];
  const work = works[index];
  const total = works.length;

  const prev = useCallback(() => setIndex((index - 1 + total) % total), [index, total, setIndex]);
  const next = useCallback(() => setIndex((index + 1) % total), [index, total, setIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <div className="overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose} aria-label="Fechar">
        <Icon name="x" size={20} />
      </button>
      <div className="lb" onClick={(e) => e.stopPropagation()}>
        <div className="lb-stage">
          <div className="lb-art">
            <Image
              src={artworkSrc(work)}
              alt={workLabel(work)}
              fill
              sizes="(max-width: 900px) 92vw, 62vw"
              priority
            />
          </div>
          {total > 1 && (
            <>
              <button className="lb-nav prev" onClick={prev} aria-label="Anterior">
                <Icon name="chevron-left" size={18} />
              </button>
              <button className="lb-nav next" onClick={next} aria-label="Próxima">
                <Icon name="chevron-right" size={18} />
              </button>
            </>
          )}
        </div>
        <div className="lb-panel">
          <span className="eyebrow">{t.nav[1]}</span>
          {/* O nome do artista + a medida são o rótulo da obra — não há título próprio. */}
          <h3 className="ti">{workLabel(work)}</h3>
          {work.sold && <span className="tag-sold static">{t.soldTag}</span>}
          {(work.title || work.technique || work.year !== null) && (
            <dl>
              {work.title && (
                <>
                  <dt>{t.title}</dt>
                  <dd>{work.title}</dd>
                </>
              )}
              {work.technique && (
                <>
                  <dt>{t.technique}</dt>
                  <dd>{work.technique}</dd>
                </>
              )}
              {work.year !== null && (
                <>
                  <dt>{t.year}</dt>
                  <dd>{work.year}</dd>
                </>
              )}
            </dl>
          )}
          {work.note && <p className="lb-note">{work.note}</p>}
          {total > 1 && (
            <span className="lb-count">
              {index + 1} / {total}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
