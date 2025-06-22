import React from 'react';
import '../index.css';

const PRODUCTS = [
  { src: '/1.jpg', alt: 'Harmonix', title: 'Harmonix' },
  { src: '/4.jpg', alt: 'Slowburn', title: 'Slowburn' },
  { src: '/3.jpg', alt: 'ChocoTempo', title: 'ChocoTempo' },
  { src: '/2.jpg', alt: 'Smoothflow', title: 'Smoothflow' },
];

export default function HomePage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fond.jpg')" }}
    >
      {/* === SECTION HERO avec vidéo de fond === */}
      <section className="relative h-[600px] w-full overflow-hidden text-white">
        <video
          src="/videos/vibin.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Texte flottant au centre */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-[100px] md:text-[120px] font-bebas uppercase leading-tight text-white">
            DÉCOUVREZ VIB’IN
          </h1>
          <p className="text-3xl md:text-4xl font-helvetica italic text-white mt-4 leading-snug">
            L'harmonie parfaite <br /> entre musique et plaisir
          </p>
        </div>
      </section>

      {/* === SECTION BEST SELLERS === */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-[60px] font-bebas uppercase mb-16 text-white">
          BEST SELLERS
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {PRODUCTS.map((p, index) => (
            <div
              key={index}
              className="w-64 bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-[170px] h-[170px] object-contain mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-black mb-4">{p.title}</h3>
              <button className="mt-2 px-5 py-3 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
