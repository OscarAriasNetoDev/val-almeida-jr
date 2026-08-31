"use client";

import Image from "next/image";
import { SocialLinks } from "./ui";
import { useLang } from "./LangProvider";
import { asset } from "@/lib/data";

export default function Footer() {
  const { lang } = useLang();
  const pt = lang === "pt";
  return (
    <footer className="ft">
      <div className="container-wide ft-inner">
        <div className="ft-logo">
          <Image
            src={asset("/logo-wordmark-light.png")}
            alt="Val de Almeida Jr — escritório de arte, desde 1987"
            width={1600}
            height={409}
            /* sem style inline: a altura vem de .ft-logo img no CSS, que muda no celular
               (style inline venceria a folha de estilo e estouraria o tamanho) */
          />
          <p style={{ maxWidth: "34ch", color: "var(--ink-on-dark-2)" }}>
            {pt
              ? "Escritório de arte dedicado à arte contemporânea brasileira desde 1987."
              : "Art office dedicated to Brazilian contemporary art since 1987."}
          </p>
        </div>
        <div>
          <h4>{pt ? "Endereço" : "Address"}</h4>
          <p>
            Rua dos Pinheiros, 1280
            <br />
            Pinheiros · São Paulo · SP
            <br />
            05422-002
          </p>
        </div>
        <div>
          <h4>{pt ? "Horários" : "Hours"}</h4>
          <p>
            {pt ? "Terça a sexta · 10h–19h" : "Tue–Fri · 10am–7pm"}
            <br />
            {pt ? "Sábado · 11h–17h" : "Sat · 11am–5pm"}
            <br />
            {pt ? "Visitas com agendamento" : "Visits by appointment"}
          </p>
        </div>
        <div>
          <h4>{pt ? "Redes" : "Social"}</h4>
          <p>@valdealmeidajr</p>
          <SocialLinks className="ft-social" />
        </div>
      </div>
      <div className="container-wide ft-bottom">
        <span>
          © {new Date().getFullYear()} Val de Almeida Jr — escritório de arte.{" "}
          {pt ? "Todos os direitos reservados." : "All rights reserved."}
        </span>
        <span>{pt ? "Desde 1987" : "Since 1987"}</span>
      </div>
    </footer>
  );
}
