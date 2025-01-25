import Image, { StaticImageData } from "next/image";
import React from "react";

interface NewsCardProps {
  data: {
    id: number;
    date: string;
    title: string;
    text: string;
    image: StaticImageData;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative aspect-[350/196] rounded-md overflow-hidden w-full mb-4">
        <Image src={data.image} alt="404 page image" fill objectFit="contain" />
        <div className="absolute bg-white w-min h-min font-medium text-sm rounded-md inset-0 top-2 text-center p-2 left-2 flex flex-col items-center justify-center">
          <span>{data.date}</span>
        </div>
      </div>
      <h4 className="text-[#233D63] text-xl font-medium mb-2.5">
        {data.title}
      </h4>
      <p className="text-[#57667E] text-sm leading-7 mb-6">
        {data.text.slice(0, 80)}...
      </p>
      <span className="text-sm cursor-pointer text-[#2b75dd]">
        Devamını okuyun
      </span>
    </div>
  );
};

export default NewsCard;
