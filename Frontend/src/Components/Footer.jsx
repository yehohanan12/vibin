import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-primary to-warm pt-8 pb-3 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8">
                {/* Menu & SAV */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    <div>
                        <h4 className="text-white font-bold mb-2 tracking-wide text-sm">
                            MENU
                        </h4>
                        <ul className="text-white/80 text-base space-y-1">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Sextoy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2 tracking-wide text-sm">
                            S.A.V
                        </h4>
                        <ul className="text-white/80 text-base space-y-1">
                            <li>
                                <a href="#" className="hover:text-white">
                                    CGV
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Retour
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Newsletter */}
                <div className="mt-8 md:mt-0 flex flex-col min-w-[320px]">
                    <h4 className="text-white font-bold mb-2 tracking-wide text-sm">
                        NEWSLETTER
                    </h4>
                    <form className="flex mb-2">
                        <input
                            type="email"
                            placeholder="Adresse mail"
                            className="rounded-l px-4 py-2 w-full text-primary focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white px-4 py-2 rounded-r font-bold hover:bg-white hover:text-primary transition-colors"
                            aria-label="S'abonner"
                        >
                            <svg
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="inline-block"
                            >
                                <path d="M4 9h10M11 6l3 3-3 3" />
                            </svg>
                        </button>
                    </form>
                    <p className="text-white/80 text-xs">
                        Les conseils, des actus et des vibrations en avant-première.
                        <br />
                        Rejoins la communauté qui célèbre le plaisir sans tabou.
                    </p>
                    <div className="flex gap-4 mt-3">
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="text-white/80 hover:text-white"
                        >
                            {/* LinkedIn */}
                            <svg
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect x="4" y="4" width="14" height="14" rx="2" />
                                <path d="M8 11v4M8 8v.01M12 11v4m0-4a2 2 0 0 1 4 0v4" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="text-white/80 hover:text-white"
                        >
                            {/* Facebook */}
                            <svg
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect x="4" y="4" width="14" height="14" rx="2" />
                                <path d="M14 8h-2a2 2 0 0 0-2 2v4" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="text-white/80 hover:text-white"
                        >
                            {/* Twitter */}
                            <svg
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect x="4" y="4" width="14" height="14" rx="2" />
                                <path d="M8 12c3 2 6 0 6-2" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/* Logo bottom left */}
            <div className="max-w-7xl mx-auto mt-8 flex items-end px-4 md:px-8">
        <span
            className="font-bold text-white text-3xl tracking-tight select-none mr-2"
            style={{ fontFamily: "Pacifico, cursive" }}
        >
          Vib<span className="font-normal">in</span>
        </span>
                <span className="text-xs text-white opacity-70 ml-1 mb-1">
          à votre rythme
        </span>
            </div>
        </footer>
    );
}

export default Footer;