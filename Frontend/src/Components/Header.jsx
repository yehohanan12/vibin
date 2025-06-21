import React from "react";

function Header() {
    return (
        <header
            className="fixed top-0 left-0 w-full z-50 flex-shrink-0"
            style={{
                background:
                    "url(<path-to-image>) #F1E8E8 50% / cover no-repeat",
                height: "80px" // ajuste selon ta hauteur de header
            }}
        >
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 h-full">
                {/* Logo */}
                <div className="flex items-center">
          <span
              className="font-bold text-white text-3xl tracking-tight select-none mr-2"
              style={{
                  fontFamily: "Pacifico, cursive",
                  color: "#FFFFFF",
                  textShadow: "1px 1px 4px #73181799"
              }}
          >
            Vib<span className="font-normal">in</span>
          </span>
                    <span
                        className="text-xs ml-1"
                        style={{ color: "#731817", opacity: 0.7 }}
                    >
            à votre rythme
          </span>
                </div>
                {/* Navigation */}
                <nav
                    aria-label="Menu principal"
                    className="flex-1 flex justify-center"
                >
                    <ul className="flex gap-4 md:gap-8">
                        {["ACCUEIL", "SEXTOYS", "BLOG", "À PROPOS", "CONTACT"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="font-semibold transition"
                                        style={{
                                            color: "#FFFFFF",
                                            textShadow: "1px 1px 3px #73181799"
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
                {/* Icons */}
                <div className="flex items-center gap-4 md:gap-6 text-lg">
                    {[
                        { label: "Recherche", icon: <circle cx="9" cy="9" r="7" /> },
                        { label: "Favoris", icon: <path d="M10 17l-5.5-5.5a4 4 0 015.5-5.5 4 4 0 015.5 5.5L10 17z" /> },
                        { label: "Panier", icon: <path d="M1 1h2l2.68 13.39a2 2 0 001.99 1.61h8.66a2 2 0 001.99-1.61L21 6H6" /> },
                        { label: "Compte", icon: <path d="M2 19c0-4 8-4 8-4s8 0 8 4" /> },
                    ].map(({ label, icon }) => (
                        <button key={label} aria-label={label} style={{ color: "#FFFFFF" }}>
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                {icon}
                            </svg>
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
