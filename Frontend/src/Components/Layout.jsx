import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HEADER_HEIGHT = 90;

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      {/* === HEADER FULL WIDTH === */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: "transparent", // fond transparent pour laisser voir l'image
          borderBottom: "none", // ❌ supprime la ligne blanche
        }}
      >
        <Header />
      </header>

      {/* === MAIN CONTENT (avec marge haute pour ne pas être caché) === */}
      <main style={{ marginTop: `${HEADER_HEIGHT}px` }} className="w-full">
        {children}
      </main>

      {/* === FOOTER === */}
      <footer className="w-full mt-auto bg-transparent">
        <Footer />
      </footer>
    </div>
  );
}
