import React from "react";
import { FaPaw } from "react-icons/fa6";

interface ListSectionProps {
  data: {
    id: number;
    tag: string;
    title: string;
    subTitle: string;
    items: {
      id: number;
      title: string;
      text: string;
    }[];
  };
}

const ListSection: React.FC<ListSectionProps> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col gap-1 items-start justify-center">
        <span className="text-[#2b75dd] text-sm">{data.tag}</span>
        <h2 className="lg:text-3xl pb-custom-px text-[#233D63] pb-containter text-2xl font-medium">
          {data.title}
        </h2>
        <p className="text-lg text-[#57667E]">{data.subTitle}</p>
      </div>
      <div className="flex flex-col gap-y-5 mt-6 pt-6 border-t border-gray-300">
        {data.items.map((e, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[40px_1fr] gap-4 items-start justify-center"
          >
            <div className="bg-[#ff754c] flex items-center justify-center rounded-full w-10 h-10">
              <FaPaw className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg text-[#233D63] font-medium">
                {e.title}
              </span>
              <span className="text-base text-[#57667E] leading-7">
                {e.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSection;
