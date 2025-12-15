"use client";
import React, { useState, useEffect } from "react";
import { FaBook, FaSearch } from "react-icons/fa";

const RaqamUlAli = ({ items: propItems }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; 

  const defaultItems = [
    { title: "أُمُّ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رضي الله عنها" },
    { title: "أَبِي إِسْحَاقَ الْهَمْدَانِيِّ عن امرأةٍ من همدان" },
    { title: "رُمَيْثَةَ بِنْتِ حَكِيمٍ رضي الله عنها" },
    { title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه" },
    { title: "أَبِي سَلَمَةَ الأَسْلَمِيِّ عَنْ عَمِّهِ رحمه الله" },
    { title: "ثُوَيْبَانَ أَوْ أَبِي أَسْمَاءَ رضي الله عنه" },
    { title: "عَبْدَ اللَّهِ بْنِ عُبَيْدِ اللَّهِ بْنِ أَبِي مُلَيْكَةَ رحمه الله" },
    { title: "عُبَيْدَةَ اللَّيْثِيِّ رحمه الله" },
    { title: "لَيْلَى أُمِّ عِمَارَةَ الأَنْصَارِيَّةِ رحمهما الله" },
    { title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه" },
    // zarurat ho to aur items add karo
  ];

  const items = propItems?.length ? propItems : defaultItems;

  // Pagination calculation
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="min-h-screen bg-white px-4 sm:px-10">
      {/* 🔹 Top Tabs */}
      <div className="flex flex-wrap justify-center gap-3 py-4">
        {["البحث بالرواة", "الرقم العالمي", "البحث بالعبارة"].map((tab, idx) => (
          <button
            key={idx}
            className="px-6 py-1 border border-[#0C6251] rounded-md hover:bg-[#0C6251] hover:text-white text-black transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 Total count */}
      <p className="text-right text-sm text-black mb-4">
        البحث بالمصادر {totalItems} حديثًا
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 bg-white p-6 rounded-md shadow-sm text-right font-[Scheherazade] text-[18px] leading-loose">
          <div className="bg-white rounded-md p-4 border border-gray-100 shadow">
            <img src="/detail.png" alt="Detail" />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-gray-100 rounded-md shadow-md p-5 space-y-4">
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

          {/* Accordion Items (Paginated) */}
          <div className="space-y-2">
            {currentItems.map((item, i) => (
              <div key={i} className="bg-white rounded-md shadow-sm cursor-pointer">
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-end items-center bg-gray-50 p-3 rounded-md text-[#0C6251] hover:bg-[#0C6251] hover:text-white transition"
                >
                  <span className="text-sm md:text-base px-2">{item.Hadees_Title}</span>
                  <FaBook className="text-white text-lg bg-[#206D69] w-7 h-7 p-1 rounded" />
                </div>
                {/* {openIndex === i && (
                  <div className="p-3 text-gray-700 bg-gray-50">
                    {item.Hadees_Title || "تفاصيل غير متوفرة"}
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className={`px-4 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#206D69] text-white hover:bg-[#1a5a56]"
              }`}
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#206D69] text-white hover:bg-[#1a5a56]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="mb-30"></div>
    </div>
  );
};

export default RaqamUlAli;
