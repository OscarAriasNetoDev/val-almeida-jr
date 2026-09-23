"use client";

import Image from "next/image";
import { SocialLinks } from "./ui";
import { useLang } from "./LangProvider";
import { asset } from "@/lib/data";
import { ENDERECO, MAPS_URL, TELEFONES } from "@/lib/contato";

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
        </div>
        <div>
          <h4>{pt ? "Endereço" : "Address"}</h4>
          <p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              {ENDERECO.linha1}
              <br />
              {ENDERECO.bairro} · {ENDERECO.cidade} · {ENDERECO.uf}
              <br />
              {ENDERECO.cep}
            </a>
          </p>
          <p style={{ marginTop: 12 }}>
            {TELEFONES.map((tel) => (
              <a key={tel.href} href={tel.href} style={{ display: "block" }}>
                {tel.texto}
              </a>
            ))}
          </p>
        </div>
        <div>
          <h4>{pt ? "Horário" : "Hours"}</h4>
          <p>
            {pt ? "Segunda a sexta · 10h – 17h" : "Mon–Fri · 10am – 5pm"}
            <br />
            {pt ? "Visitas com agendamento" : "Visits by appointment"}
          </p>
          {/* Mesma ordem do contato: as redes vêm abaixo do horário. */}
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
