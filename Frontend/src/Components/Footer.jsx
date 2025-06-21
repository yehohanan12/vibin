import React from "react";
import logo from "../assets/Logo.svg";
import iconFacebook from "../assets/Facebook.svg";
import iconTwitter from "../assets/Twitter.svg";
import iconLinkedIn from "../assets/Linkedin.svg";
import Subscribe from "./Subscribe";

export default function Footer() {
    return (
        <footer className="bg-[#fd6f2f] text-white py-14 px-10 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-row justify-between gap-10">
                {/* Bloc gauche */}
                <div className="w-1/3 flex flex-col justify-between h-full min-h-[300px]">
                    <div>
                        <div className="font-bold text-lg mb-4">Menu</div>
                        <div className="hover:underline cursor-pointer mb-2">Accueil</div>
                        <div className="hover:underline cursor-pointer mb-2">Sextoy</div>
                        <div className="hover:underline cursor-pointer mb-2">Blog</div>
                        <div className="hover:underline cursor-pointer">Contact</div>
                    </div>
                    <div>
                        <img src={logo} alt="Logo Vibin" className="h-20 w-auto mt-6" />
                    </div>
                </div>

                {/* Bloc centre */}
                <div className="w-1/3 flex flex-col space-y-2">
                    <div className="font-bold text-lg mb-4">S.A.V</div>
                    <div className="hover:underline cursor-pointer mb-2">CGV</div>
                    <div className="hover:underline cursor-pointer">Retour</div>
                </div>

                {/* Bloc droite : Newsletter */}
                <div className="w-1/3 flex flex-col justify-between h-full min-h-[300px]">
                    <Subscribe />

                    <div className="flex space-x-6 mt-6 justify-center">
                        <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity duration-200">
                            <img className="h-6 w-auto" src={iconTwitter} alt="Twitter" />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-200">
                            <img className="h-6 w-auto" src={iconFacebook} alt="Facebook" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity duration-200">
                            <img className="h-6 w-auto" src={iconLinkedIn} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-white opacity-70">
                © {new Date().getFullYear()} Vibin. Tous droits réservés.
            </div>
        </footer>
    );
}
