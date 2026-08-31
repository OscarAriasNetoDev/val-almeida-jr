"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { LangToggle, SocialLinks } from "./ui";
import { useLang } from "./LangProvider";
import { I18N, asset } from "@/lib/data";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { lang } = useLang();
  const t = I18N[lang];

  const items = [
    { key: "artistas", label: t.nav[0], href: "/#artistas" },
    { key: "acervo", label: t.nav[1], href: "/acervo" },
    { key: "contato", label: t.nav[2], href: "/#contato" },
  ];

  return (
    <header className="hd">
      <div className="container-wide hd-inner">
        <Link className="hd-logo" href="/" aria-label="Val de Almeida Jr — escritório de arte">
          <Image
            src={asset("/logo-wordmark-dark.png")}
            alt="Val de Almeida Jr — escritório de arte, desde 1987"
            width={1600}
            height={409}
            /* sem style inline: a altura vem de .hd-logo img no CSS, que muda no celular
               (style inline venceria a folha de estilo e estouraria o tamanho) */
            priority
          />
        </Link>
        <nav className="hd-nav">
          {items.map((it) => (
            <Link key={it.key} href={it.href}>
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="hd-right">
          <LangToggle />
          <SocialLinks />
          <button className="hd-burger" onClick={() => setMenu(true)} aria-label="Menu">
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {menu && (
        <div className="mmenu">
          <button className="close" onClick={() => setMenu(false)} aria-label="Fechar">
            <Icon name="x" size={26} />
          </button>
          <nav>
            {items.map((it) => (
              <Link key={it.key} href={it.href} onClick={() => setMenu(false)}>
                {it.label}
              </Link>
            ))}
          </nav>
          <div className="mlang">
            <LangToggle />
          </div>
        </div>
      )}
    </header>
  );
}
