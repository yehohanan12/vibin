import React from "react";
import logo from "../assets/Logo.svg";
import icon1 from "../assets/Group 4.svg";
import icon2 from "../assets/Vector 18.svg";
import icon3 from "../assets/Group 2.svg";
import icon4 from "../assets/Group 12.svg";

export default function Header() {
  return (
    <header
      className="w-full flex items-center justify-between px-12 py-4 text-white"
      style={{
        backgroundImage: "url('/fond.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* === Logo à gauche === */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Vibin logo" className="h-[70px] w-auto" />
      </div>

      {/* === Menu centré avec ESPACEMENT VISUEL === */}
      <nav className="flex gap-12 font-bebas text-lg uppercase tracking-widest text-white">
        <a href="#" className="hover:text-orange-300 transition">Accueil</a>
        <a href="#" className="hover:text-orange-300 transition">Sextoys</a>
        <a href="#" className="hover:text-orange-300 transition">Blog</a>
        <a href="#" className="hover:text-orange-300 transition">À propos</a>
        <a href="#" className="hover:text-orange-300 transition">Contact</a>
      </nav>

      {/* === Icônes à droite === */}
      <div className="flex gap-4 flex-shrink-0">
        {[icon1, icon2, icon3, icon4].map((src, index) => (
          <img key={index} src={src} alt={`icon-${index}`} className="h-[20px] w-auto" />
        ))}
      </div>
    </header>
  );
}
