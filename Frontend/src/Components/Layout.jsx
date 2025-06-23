import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HEADER_HEIGHT = 90;

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* === HEADER FIXE EN HAUT === */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: "transparent",
        }}
      >
        <Header />
      </header>

      {/* === MAIN === */}
      <main
        className="flex-1 w-full"
        style={{ marginTop: `${HEADER_HEIGHT}px` }}
      >
        {children}
      </main>

      {/* === FOOTER === */}
      <footer className="w-full bg-transparent">
        <Footer />
      </footer>
    </div>
  );
}
