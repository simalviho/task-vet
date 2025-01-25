import React from "react";
import mobile from "../../public/images/mobile.png";
import Image from "next/image";

type MobileBannerProps = object;

const MobileBanner: React.FC<MobileBannerProps> = () => {
  return (
    <div className="bg-[linear-gradient(30deg,_#560082,_#0010cc)] grid lg:grid-cols-[1fr_400px] grid-cols-1 items-center xl:px-[137px] md:px-8 px-4 gap-12 lg:pt-0 pt-12 w-full">
      <div className="text-white flex flex-col lg:items-start items-center ">
        <h2 className="text-3xl lg:text-left text-center mb-2 font-medium">
          Mobil uygulamalarımızı gördünüz mü?
        </h2>
        <p className="leading-6 lg:text-left text-center">
          Veteriner hekimler ve müşterileriniz için özel olarak geliştirimiş
          uygulamalarımız ile tüm işlemlerinize aralıksız devam edin.
        </p>
      </div>
      <div className="relative lg:ml-auto mx-auto aspect-[350/328] lg:w-[350px] w-[231px] mt-5 h-full">
        <Image src={mobile} alt="404 page image" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default MobileBanner;
