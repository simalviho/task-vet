/* eslint-disable */
import Image from "next/image";
import React from "react";
import footer from "../../public/images/footer-one-bg.png";

type FooterBannerProps = object;

const FooterBanner: React.FC<FooterBannerProps> = () => {
  return (
    <div className="bg-[#2b74dd] w-full relative">
      <div className="absolute z-20 inset-0 left-0 aspect-auto w-full">
        <Image src={footer} alt="404 page image" fill objectFit="contain" />
      </div>
      <div className="relative xl:px-[137px] md:px-8 px-4 py-12 text-white flex flex-col items-center justify-center z-90">
        <h1 className="text-[36px] text-center font-semibold"></h1>

        <h1 className="lg:text-[36px] mb-8 text-[28px] relative before:absolute before:w-19 before:h-[2px] before:bg-white before:left-[40%] before:-bottom-2 text-white text-center font-semibold">
          Ücretsiz Deneyin
        </h1>
        <span className="mb-5 text-center">
          Veteriner kliniğiniz için Türkiye'nin en çok sevilen ve en gelişmiş
          klinik yazılımını deneyin.
        </span>
        <div className="flex lg:flex-row flex-col items-center gap-5">
          <button className="px-8 uppercase py-2 text-lg whitespace-nowrap bg-white rounded-full text-lg text-[#2b74dd]">
            Hemen Ücretsiz Deneyin
          </button>
          <button className="px-8 py-2 text-lg whitespace-nowrap border border-white rounded-full text-lg text-white">
            Tanıtım Videosu
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
