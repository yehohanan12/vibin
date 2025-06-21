import React from "react";

export default function Subscribe() {
    return (
        <div className="subscribe relative flex flex-col items-center justify-center h-[295px] text-center px-6">
            <div className="rectangle-2 absolute inset-0 bg-[rgba(32,60,134,0.05)] rounded-lg"></div>

            <div className="learn-more relative z-10 font-bebas text-[18.26px] text-[#ffebdd] mb-6">
                Newsletter
            </div>

            <div className="group-1051 relative z-10 w-[283.1px] h-[57.08px]">
                <input
                    type="email"
                    placeholder=""
                    className="fill bg-white border border-[#e7e8f2] rounded-[6.85px] w-full h-full px-4 py-3 text-black box-border"
                />
                {/*
          Je ne peux pas deviner ce que sont fill2, arrows-down-top-move-1 SVGs,
          donc je ne les inclus pas. Tu peux les remettre en <img /> ici si tu veux.
        */}
                <div className="label absolute top-[35%] left-[17%] w-[24.85%] text-[#ffebdd] opacity-60 text-left text-[16px] font-helvetica select-none pointer-events-none">
                    Adresse mail
                </div>
            </div>

            <div className="hello-we-are-flair relative z-10 mt-6 text-[#ffebdd] text-[13.7px] opacity-60 leading-[23.3px] font-helvetica max-w-[90%]">
                Les conseils, des actus et des vibrations en avant-première.
                <br />
                Rejoins la communauté qui célèbre le plaisir sans tabou.
            </div>
        </div>
    );
}
