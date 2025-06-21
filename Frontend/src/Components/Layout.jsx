import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HEADER_HEIGHT = 72; // Hauteur du header (ajuste si besoin)

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-light">
            {/* Header fixé en haut */}
            <header
                className="fixed top-0 left-0 w-full z-50 flex justify-center bg-[#F1E8E8] shadow-md"
                style={{
                    height: HEADER_HEIGHT,
                    background: "url(<path-to-image>) #F1E8E8 50% / cover no-repeat"
                }}
            >
                <div className="w-full max-w-[1440px] px-4 sm:px-8 h-full flex items-center">
                    {/* Header doit s'afficher inline ici, PAS à l'intérieur d'un autre wrapper */}
                    <Header />
                </div>
            </header>

            {/* Décalage du contenu principal */}
            <main
                className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-8"
                style={{ paddingTop: HEADER_HEIGHT + 24 }}
            >
                {children}
            </main>

            {/* Footer aligné en bas */}
            <footer className="w-full flex justify-center bg-[#F1E8E8]">
                <div className="w-full max-w-[1440px] px-4 sm:px-8">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}