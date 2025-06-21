import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HEADER_HEIGHT = 90;

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fd6f2f" }}>
            {/* Header full width */}
            <header
                className="fixed top-0 left-0 right-0 z-50 shadow-md flex items-center border-b border-black"
                style={{
                    height: HEADER_HEIGHT,
                    backgroundColor: "#fd6f2f",
                    width: "100%",
                }}
            >
                {/* Ne pas limiter la largeur ici */}
                <Header />
            </header>

            {/* Main content with header offset */}
            <main
                className="flex-1 w-full mx-auto px-4 sm:px-8"
                style={{
                    paddingTop: HEADER_HEIGHT,
                    backgroundColor: "#fd6f2f",
                }}
            >
                {children}
            </main>

            {/* Footer full width */}
            <footer
                className="w-full mt-auto border-t border-black"
                style={{ backgroundColor: "#fd6f2f" }}
            >
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
