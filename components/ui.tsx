"use client";

import Icon from "./Icon";
import { useLang } from "./LangProvider";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  type?: "button" | "submit";
}

export function Button({ variant = "primary", children, onClick, icon, type = "button" }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} type={type}>
      {children}
      {icon && <Icon name={icon} size={16} />}
    </button>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className || "social"}>
      <a href="#" aria-label="Instagram">
        <Icon name="instagram" size={18} />
      </a>
      <a href="#" aria-label="Facebook">
        <Icon name="facebook" size={18} />
      </a>
    </div>
  );
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang">
      <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")} aria-pressed={lang === "pt"}>
        PT
      </button>
      <span className="sep">/</span>
      <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>
        EN
      </button>
    </div>
  );
}
