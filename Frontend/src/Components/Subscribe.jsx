import React from "react";

export default function Subscribe() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 py-6 bg-[rgba(32,60,134,0.05)] rounded-lg">
      {/* Titre */}
      <div className="font-bebas text-[20px] text-[#ffebdd] mb-4 uppercase tracking-wider">
        Newsletter
      </div>

      {/* Champ email + bouton */}
      <div className="relative w-full max-w-[280px] flex overflow-hidden rounded-[6.85px] border border-[#e7e8f2] bg-white">
        <input
          type="email"
          className="w-full h-[57px] px-4 py-3 text-black text-sm placeholder-transparent focus:outline-none"
          placeholder="Adresse mail"
        />
        <button className="px-4 bg-orange-800 text-white text-lg font-bold hover:bg-orange-700 transition">
          ➜
        </button>
        <label
          className="absolute top-[50%] left-4 transform -translate-y-1/2 text-[#ffebdd] text-[14px] opacity-60 pointer-events-none font-helvetica"
        >
          Adresse mail
        </label>
      </div>

      {/* Description */}
      <p className="mt-6 text-[17.7px] text-[#ffebdd] opacity-60 leading-[23.3px] font-helvetica max-w-xs">
        Les conseils, des actus et des vibrations en avant-première.
        <br />
        Rejoins la communauté qui célèbre le plaisir sans tabou.
      </p>
    </div>
  );
}
