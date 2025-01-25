import Banner from "@/components/Banner/Banner";
import ListSection from "@/components/Sections/ListSection";
import Image from "next/image";
import pc from "../public/images/pc.png";
import vet from "../public/images/vet.png";
import Include from "@/components/Sections/Include";
import MobileBanner from "@/components/Sections/MobileBanner";
import Faq from "@/components/Sections/Faq";
import News from "@/components/Sections/News";
import FooterBanner from "@/components/Sections/FooterBanner";
import { FaLocationDot } from "react-icons/fa6";

const listOne = [
  {
    id: 1,

    tag: "Veteriner Tabip",
    title: "Veteriner Klinik Yönetim Yazılımı",
    subTitle: "Siz kliniğiniz ile ilgilenin, gerisini bize bırakın.",
    items: [
      {
        id: 1,
        title: "Hasta Yönetimi",
        text: "Muayene ettiğiniz tüm hastalarının detaylı takibini yapabilirsiniz.",
      },
      {
        id: 2,
        title: "Aşı Takvimi",
        text: "Hastalarınıza otomatik aşı takvimi oluşturun ve müşterilerinize bildirim gönderin.",
      },
      {
        id: 3,
        title: "Ürün Satışı ve Stok",
        text: "Detaylı iletişim bilgileri,randevu geçmişi, ödeme detayları ve gelişmiş salon yönetim özellikleri ile müşteri ilişkilerinizi güçlendirin.",
      },
      {
        id: 4,
        title: "Hasta Yönetimi",
        text: "Muayene ettiğiniz tüm hastalarının detaylı takibini yapabilirsiniz.",
      },
      {
        id: 5,
        title: "Aşı Takvimi",
        text: "Hastalarınıza otomatik aşı takvimi oluşturun ve müşterilerinize bildirim gönderin.",
      },
      {
        id: 6,
        title: "Ürün Satışı ve Stok",
        text: "Detaylı iletişim bilgileri,randevu geçmişi, ödeme detayları ve gelişmiş salon yönetim özellikleri ile müşteri ilişkilerinizi güçlendirin.",
      },
    ],
  },
  {
    id: 2,

    tag: "Yeni nesil teknoloji ve veri işleme",
    title: "Veteriner Takip Programı",
    subTitle: "Veri işleme teknolojisi ile üzerinizdeki yükleri azaltın !",
    items: [
      {
        id: 1,
        title: "Bulut Teknoloji",
        text: "Muayene ettiğiniz tüm hastalarının detaylı takibini yapabilirsiniz.",
      },
      {
        id: 2,
        title: "Özel Hatırlatmalar",
        text: "Hastalarınıza otomatik aşı takvimi oluşturun ve müşterilerinize bildirim gönderin.",
      },
      {
        id: 3,
        title: "Müşteri Sadakati",
        text: "Detaylı iletişim bilgileri,randevu geçmişi, ödeme detayları ve gelişmiş salon yönetim özellikleri ile müşteri ilişkilerinizi güçlendirin.",
      },
      {
        id: 4,
        title: "Gelişmiş Raporlama",
        text: "Muayene ettiğiniz tüm hastalarının detaylı takibini yapabilirsiniz.",
      },
    ],
  },
];

const howWork = [
  {
    id: 1,
    title: "Ücretsiz Kaydolun",
    text: "Çok kısa bilgiler ile işletmeniz için ücretsiz üyelik oluşturun...",
  },
  {
    id: 1,
    title: "Hesabınızı Doğrulayın",
    text: "Cep telefonunuza gelen sms ile hesabınızı doğrulayın ve kurulumunu tamamlayın.",
  },
  {
    id: 1,
    title: "Hazırsınız!",
    text: "İşte bu kadar !İlk randevunuzu oluşturmak için hazırız.",
  },
];

const locations = [
  {
    id: 1,
    title: "Düzce Veteriner Klinikleri",
  },
  {
    id: 2,
    title: "Osmaniye Veteriner Klinikleri",
  },
  {
    id: 3,
    title: "Şırnak Veteriner Klinikleri",
  },
  {
    id: 4,
    title: "Düzce Veteriner Klinikleri",
  },
  {
    id: 5,
    title: "Osmaniye Veteriner Klinikleri",
  },
  {
    id: 6,
    title: "Şırnak Veteriner Klinikleri",
  },
  {
    id: 7,
    title: "Düzce Veteriner Klinikleri",
  },
  {
    id: 8,
    title: "Osmaniye Veteriner Klinikleri",
  },
  {
    id: 9,
    title: "Şırnak Veteriner Klinikleri",
  },
];

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="border-t border-gray-200 py-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 xl:pl-[137px] md:pl-8 px-4 overflow-hidden">
          <ListSection data={listOne[0]} />
          <div className="relative lg:aspect-[1024/660] lg:h-[660px] aspect-[510/328] h-full">
            <Image src={pc} alt="404 page image" fill objectFit="contain" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 xl:px-[137px] md:px-8 px-4 mt-20 overflow-hidden">
          <div className="relative lg:flex hidden aspect-[540/610] h-[610px]">
            <Image src={vet} alt="404 page image" fill objectFit="contain" />
          </div>
          <ListSection data={listOne[1]} />
          <div className="relative lg:hidden flex aspect-[540/610] h-full">
            <Image src={vet} alt="404 page image" fill objectFit="contain" />
          </div>
        </div>
      </div>
      <Include />
      <div className="xl:px-[137px] md:px-8 px-4 pt-10 mb-8">
        <h1 className="lg:text-[36px] mb-8 text-[28px] relative before:absolute before:w-19 before:h-[2px] before:bg-[#2b75dd] w-min whitespace-nowrap mx-auto before:left-[30%] before:-bottom-2 text-[#233D63] text-center font-medium">
          Nasıl Çalışır ?
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-8 lg:gap-y-0 gap-y-12 items-start">
          {howWork.map((e, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <h4
                className={`text-2xl text-center font-semibold mb-2.5 ${
                  idx === 0
                    ? "text-[#f2b55d]"
                    : idx === 1
                    ? "text-[#8395ea]"
                    : "text-[#39b5b1]"
                }`}
              >
                {e.title}
              </h4>
              <span className="text-base text-center text-[#4a4b4e] leading-6">
                {e.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <MobileBanner />
      <Faq />
      <News />
      <ul className="border-t border-gray-300 xl:px-[137px] md:px-8 px-4 py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
        {locations.map((e, idx) => (
          <li
            className="text-[#57667E] flex items-center gap-x-2 md:mx-auto mr-auto"
            key={idx}
          >
            <FaLocationDot className="w-3 h-3 text-[#2b75dd]" />
            {e.title}
          </li>
        ))}
      </ul>
      <FooterBanner />
    </div>
  );
}
