import React from "react";
import news from "../../public/images/news.jpg";
import NewsCard from "../Cards/NewsCard";

interface NewsProps {}

const newsData = [
  {
    id: 1,
    date: "21 Ocak",
    title: "En İyi Hayvan Filmleri",
    text: "Hayvanların yer aldığı filmler, çoğu zaman büyüleyici hikayeleri ve duygusal bağlarıyla izleyici...",
    image: news,
  },
  {
    id: 2,
    date: "22 Ocak",
    title: "En İyi Hayvan Filmleri",
    text: "Hayvanların yer aldığı filmler, çoğu zaman büyüleyici hikayeleri ve duygusal bağlarıyla izleyici...",
    image: news,
  },
  {
    id: 3,
    date: "23 Ocak",
    title: "En İyi Hayvan Filmleri",
    text: "Hayvanların yer aldığı filmler, çoğu zaman büyüleyici hikayeleri ve duygusal bağlarıyla izleyici...",
    image: news,
  },
];

const News: React.FC<NewsProps> = () => {
  return (
    <div className="xl:px-[137px] md:px-8 px-4 py-12">
      <h1 className="lg:text-[36px]  w-min whitespace-nowrap mx-auto mb-8 text-[28px] relative before:absolute before:w-19 before:h-[2px] before:bg-[#2b75dd] before:left-[30%] before:-bottom-2 text-[#2b75dd] text-center font-semibold">
        Haberdar Olun
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-start">
        {newsData.map((e, idx) => (
          <NewsCard key={idx} data={e} />
        ))}
      </div>
    </div>
  );
};

export default News;
