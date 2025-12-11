"use client";
import React, { useState } from "react";
import {
  FaBook,
  FaSearch,
} from "react-icons/fa";

const RaqamUlAli = () => {
  const categories = {
    Electronics: ["Mobile", "Laptop", "Headphones"],
    Books: ["Fiction", "Science", "History"],
    Fashion: ["Shirts", "Shoes", "Watches"],
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = ["البحث بالرواة", "الرقم العالمي", "البحث بالعبارة"];
  const btn = ["المدينة الصغرى", "المدينة الوسطى", "المدينة الكبرى", "الرقم العالمي"];

  const items = [
    { title: "أُمُّ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رضي الله عنها", content: "" },
    { title: "أَبِي إِسْحَاقَ الْهَمْدَانِيِّ عَنْ امْرَأَةٍ مِنْ هَمْدَانَ رضي الله عنها", content: "" },
    { title: "رُمَيْثَةَ بِنْتِ حَكِيمٍ رضي الله عنها", content: "" },
    { title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه", content: "" },
    { title: "أَبِي سَلَمَةَ الأَسْلَمِيِّ عَنْ عَمِّهِ رحمه الله", content: "" },
    { title: "ثُوَيْبَانَ أَوْ أَبِي أَسْمَاءَ رضي الله عنه", content: "" },
    { title: "عَبْدَ اللَّهِ بْنِ عُبَيْدِ اللَّهِ بْنِ أَبِي مُلَيْكَةَ رحمه الله", content: "" },
    { title: "عُبَيْدَةَ اللَّيْثِيِّ رحمه الله", content: "" },
    { title: "لَيْلَى أُمِّ عِمَارَةَ الأَنْصَارِيَّةِ رحمهما الله", content: "" },
    { title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه", content: "" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* 🔹 Top Green Section */}
      <div className="text-white rounded-lg text-center w-[95%] mx-auto mt-10">
        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-center gap-3 py-3">
          {btn.map((item, key) => (
            <button
              key={key}
              className="text-black px-10 py-1 rounded-md hover:text-white hover:bg-[#0C6251] border border-[#0C6251] transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-[90%] mx-auto bg-[#206D69] py-1 px-2 rounded-md"></div>

      {/* 🔹 Tabs + Search Count Section */}
      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between px-10 py-4 relative">

        {/* 🔥 MOBILE: Counter text moves ABOVE tabs */}
        <p className="block md:hidden w-full text-center text-sm text-black mb-2">
          البحث بالمصادر ٢٣٤١٥٠ حديثًا
        </p>

        {/* 🔹 Tabs Section */}
     <div className="text-white rounded-lg text-center w-[95%] mx-auto mt-3 md:mt-10">

  <div
    className="
      grid 
      grid-cols-2        /* Mobile: 2 per row */
      md:grid-cols-3     /* Laptop: 3 per row */
      gap-3 
      py-3
      place-items-center /* Buttons center aligned */
    "
  >
    {tabs.map((item, key) => (
      <button
        key={key}
        className="
          text-black 
          px-8 md:px-10
          py-1
          rounded-md
          hover:text-white 
          hover:bg-[#0C6251]
          border 
          border-[#0C6251]
          transition
          whitespace-nowrap
        "
      >
        {item}
      </button>
    ))}
  </div>

</div>



        {/* 🔥 DESKTOP: original position (unchanged) */}
        <div className="hidden md:block w-1/2 text-right text-sm text-black">
          <p>البحث بالمصادر ٢٣٤١٥٠ حديثًا</p>
        </div>
      </div>

      {/* 🔹 Main Layout */}
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="md:col-span-2 border-8 border-gray-100 rounded-md p-6 text-right leading-loose font-[Scheherazade] text-[18px] bg-white shadow-sm">
          <div className="space-y-4">
            <div className="bg-white rounded-md p-4 border-b border-gray-200 shadow-sm">
              <img src="/detail.png" />
            </div>
          </div>
        </div>

        {/* 🔹 Right Sidebar */}
        <div className="bg-gray-100 rounded-md shadow-md p-5 space-y-5">

          {/* Search Bar */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md shadow px-2 py-2">
            <button className="flex items-center gap-2 px-3 py-1 text-white bg-[#206D69] font-bold rounded-md hover:bg-[#1a5a56] transition">
              <span>بحث</span>
              <FaSearch className="text-white text-sm" />
            </button>

            <input
              type="text"
              placeholder="ابحث بعبارة (الأعمال بالنيات)"
              className="flex-grow bg-transparent outline-none text-right text-gray-800 placeholder-gray-600 text-sm px-2"
            />
          </div>

          {/* Accordion List */}
          <div className="space-y-1">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-md shadow-sm cursor-pointer">
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-end items-center bg-gray-50 p-3 rounded-md text-[#0C6251] hover:bg-[#0C6251] hover:text-white transition"
                >
                  <span className="text-sm md:text-base px-2">{item.title}</span>
                  <FaBook className="text-white text-lg bg-[#206D69] w-7 h-7 p-1 rounded" />
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="mb-20"></div>
      </div>
    </div>
  );
};

export default RaqamUlAli;
