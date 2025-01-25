"use client";
import React, { useState } from "react";
import { FaCheckDouble, FaLayerGroup, FaMobile } from "react-icons/fa";
import svg1 from "../../public/images/svg1.svg";
import svg2 from "../../public/images/svg2.svg";
import svg3 from "../../public/images/svg3.svg";
import Image from "next/image";

type IncludeProps = object;

const sections = [
  {
    id: 1,
    title: "Öne çıkan özellikler",
    icon: <FaMobile />,
    items: [
      {
        id: 1,
        icon: svg1,
        title: "Akıllı Randevu Yönetimi",
        text: "Müşteri ve tedarikçilerinizin bakiyesini anında görün, ödeme ve tahsilatlarınızı takip edin.",
      },
      {
        id: 2,
        icon: svg2,
        title: "Otomatik Hatırlatıcılar",
        text: "Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.",
      },
      {
        id: 3,
        icon: svg3,
        title: "Gelişmiş Raporlama",
        text: "İşletmenize ait tüm verilerin özel zaman aralıkları ve gelişmiş filtrelemeler ile detaylı analizlerini raporlayın.",
      },
    ],
  },
  {
    id: 2,
    icon: <FaLayerGroup />,
    title: "İşletmeniz için",
    items: [
      {
        id: 1,
        icon: svg1,
        title: "Akıllı Randevu Yönetimi",
        text: "Müşteri ve tedarikçilerinizin bakiyesini anında görün, ödeme ve tahsilatlarınızı takip edin.",
      },
      {
        id: 2,
        icon: svg3,
        title: "Otomatik Hatırlatıcılar",
        text: "Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.",
      },
      {
        id: 3,
        icon: svg2,
        title: "Gelişmiş Raporlama",
        text: "İşletmenize ait tüm verilerin özel zaman aralıkları ve gelişmiş filtrelemeler ile detaylı analizlerini raporlayın.",
      },
      {
        id: 4,
        icon: svg3,
        title: "Otomatik Hatırlatıcılar",
        text: "Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.",
      },
      {
        id: 5,
        icon: svg1,
        title: "Ön Görüşmeler",
        text: "Müşteri ve tedarikçilerinizin bakiyesini anında görün, ödeme ve tahsilatlarınızı takip edin.",
      },
      {
        id: 6,
        icon: svg2,
        title: "Çoklu Şube Modülü",
        text: "İşletmenize ait tüm verilerin özel zaman aralıkları ve gelişmiş filtrelemeler ile detaylı analizlerini raporlayın.",
      },
    ],
  },
  {
    id: 3,
    icon: <FaCheckDouble />,
    title: "Müşteriniz için",
    items: [
      {
        id: 1,
        icon: svg1,
        title: "Akıllı Randevu Yönetimi",
        text: "Müşteri ve tedarikçilerinizin bakiyesini anında görün, ödeme ve tahsilatlarınızı takip edin.",
      },
      {
        id: 2,
        icon: svg2,
        title: "Otomatik Hatırlatıcılar",
        text: "Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.",
      },
    ],
  },
];

const Include: React.FC<IncludeProps> = () => {
  const [select, setSelect] = useState<number>(2);
  const data = sections.filter((e) => e.id === select);

  return (
    <div>
      <div className="xl:px-[137px] md:px-8 px-4 bg-[#2b75dd] py-12 flex flex-col items-center justify-center text-white flex items-center justify-center">
        <h1 className="lg:text-[36px] text-[28px]  w-min whitespace-nowrap mx-auto relative before:absolute before:w-19 before:h-[2px] before:bg-white before:left-[40%] before:-bottom-2 text-center font-semibold">
          İçinde Neler Var ?
        </h1>
        <p className="text-center mt-8">
          Bir veteriner kliniğini ne kadar zor olduğunu biliyoruz, içeride sizi
          bu yükten kurtarmak için çalışan onlarca çok fazla özelliğimiz var;{" "}
        </p>
        <div className="mt-12">
          <div className="flex items-center w-full justify-evenly gap-x-8">
            {sections.map((e, idx) => (
              <div
                onClick={() => setSelect(e.id)}
                key={idx}
                className={`text-white cursor-pointer flex items-center gap-x-2 font-medium text-base ${
                  e.id === select ? "border-b-2 border-white pb-2" : " pb-2"
                }`}
              >
                <span>{e.icon}</span>
                <span className="md:flex hidden">{e.title}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-md grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-5 py-10 mt-8">
            {data[0].items.map((e, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[61px_1fr] lg:gap-x-8 gap-x-4"
              >
                <div className="relative aspect-square w-[61px]">
                  <Image
                    src={e.icon}
                    alt="404 page image"
                    fill
                    objectFit="contain"
                  />
                </div>
                <div className="text-[#343a40] flex flex-col items-start gap-y-2">
                  <h4 className="leading-6 text-xl text-[#233D63] font-semibold">
                    {e.title}
                  </h4>
                  <span className="leading-7 text-[#57667E]">{e.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-[#2b75dd] mx-auto flex -mt-6 px-6 py-3 text-white rounded-full">
        Bu kadar değil, daha fazlası var
      </button>
    </div>
  );
};

export default Include;
