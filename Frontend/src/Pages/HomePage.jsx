import React from 'react';
import '../index.css';

const PRODUCTS = [
    { src: '/Harmonix.jpg', alt: 'Harmonix', title: 'Vibro Pink' },
    { src: '/Slowburn.jpg', alt: 'Slowburn', title: 'Plaisir Max' },
    { src: '/Chocotempo.jpg', alt: 'ChocoTempo', title: 'Plaisir Max' },
    { src: '/Smoothflow.jpg', alt: 'Smoothflow', title: 'Plaisir Max' },
];

export default function TestPage() {
    return (
        <div className="flex flex-col">
            {/* === SECTION HERO === */}
            <section className="bg-red-900 text-white text-center py-24 px-4">
                <h1 className="text-4xl font-bold mb-4 text-white">DÉCOUVREZ VIB’IN</h1>
                <p className="text-lg text-white">L'harmonie parfaite entre musique et plaisir</p>
            </section>

            {/* === SECTION BEST SELLERS === */}
            <section className="py-16 px-4 text-center">
                <h2 className="text-3xl font-semibold mb-8 text-white">BEST SELLERS</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {PRODUCTS.map((p, index) => (
                        <div
                            key={index}
                            className="w-48 bg-white border border-gray-200 rounded-lg shadow-sm p-4"
                        >
                            <img
                                src={p.src}
                                alt={p.alt}
                                className="w-full h-auto rounded-md mb-4"
                            />
                            <h3 className="text-xl font-medium mb-2">{p.title}</h3>
                            <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                                Ajouter au panier
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
