"use client";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface AccordionProps {
  data: {
    title: string;
    text: string;
    id: number;
  };
  isOpen: boolean; // Açık mı değil mi kontrol ediliyor
  onToggle: () => void; // Tıklandığında çağrılan fonksiyon
}

const Accordion: React.FC<AccordionProps> = ({ data, isOpen, onToggle }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white w-full shadow-md">
      <div
        onClick={onToggle}
        className="flex lg:px-6 lg:py-5 p-3 items-center border-b border-gray-300 justify-between cursor-pointer"
      >
        <h4 className={` ${isOpen ? "text-[#2b75dd]" : "text-[#233D63]"}`}>
          {data.title}
        </h4>
        <FaAngleRight
          className={`w-4 h-4 transform transition-transform duration-600 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-600 ease-in-out relative before:absolute before:w-1 before:h-full before:bg-[#2b75dd] before:left-0 before:bottom-0 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <div className="border-b border-gray-300  p-5">{data.text}</div>
      </div>
    </div>
  );
};

export default Accordion;
