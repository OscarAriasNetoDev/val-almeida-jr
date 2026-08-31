import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";

export const metadata: Metadata = {
  title: "Val de Almeida Jr — escritório de arte",
  description:
    "Escritório de arte dedicado à arte contemporânea brasileira desde 1987. Artistas, acervo, vídeos e contato.",
  metadataBase: new URL("https://valdealmeidajr.com.br"),
  openGraph: {
    title: "Val de Almeida Jr — escritório de arte",
    description: "Arte contemporânea brasileira. Uma seleção reunida desde 1987.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
