"use client";

import Image from "next/image";
import { useLang } from "./LangProvider";
import { artworkSrc, workCaption, workLabel, I18N } from "@/lib/data";
import type { Artist, Artwork } from "@/lib/data";

/** Larguras que o grid ocupa em cada breakpoint (3–4 colunas em 1600px). */
const GRID_SIZES = "(max-width: 720px) 92vw, (max-width: 1080px) 46vw, 30vw";

export function ArtworkThumb({
  work,
  onOpen,
  priority,
}: {
  work: Artwork;
  onOpen: (w: Artwork) => void;
  priority?: boolean;
}) {
  const { lang } = useLang();
  const t = I18N[lang];
  const caption = workCaption(work);
  return (
    <button className="thumb" onClick={() => onOpen(work)}>
      <div className="thumb-frame" style={{ aspectRatio: work.ratio }}>
        <Image
          className="fill"
          src={artworkSrc(work)}
          alt={workLabel(work)}
          fill
          sizes={GRID_SIZES}
          priority={priority}
        />
        {work.sold && <span className="tag-sold">{t.soldTag}</span>}
      </div>
      <div className="thumb-meta">
        <div className="t">{workLabel(work)}</div>
        {caption && <div className="l">{caption}</div>}
      </div>
    </button>
  );
}

export function ArtistCard({ artist, onOpen }: { artist: Artist; onOpen?: (a: Artist) => void }) {
  const { lang } = useLang();
  const t = I18N[lang];
  return (
    <button className="artist" onClick={() => onOpen?.(artist)}>
      <div className="artist-portrait">
        <Image
          className="fit"
          src={artworkSrc(artist.cover)}
          alt={workLabel(artist.cover)}
          fill
          sizes={GRID_SIZES}
        />
      </div>
      <div className="name">{artist.name}</div>
      <div className="role">
        {artist.count} {t.works[artist.count === 1 ? 0 : 1]}
      </div>
    </button>
  );
}

export function GalleryGrid({
  works,
  onOpen,
  cols,
}: {
  works: Artwork[];
  onOpen: (w: Artwork) => void;
  cols?: number;
}) {
  return (
    <div className={`grid-works${cols === 4 ? " cols-4" : ""}`}>
      {works.map((w, i) => (
        <ArtworkThumb key={w.id} work={w} onOpen={onOpen} priority={i < 3} />
      ))}
    </div>
  );
}
