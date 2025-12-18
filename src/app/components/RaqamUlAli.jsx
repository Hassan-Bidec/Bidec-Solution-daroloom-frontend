"use client";
import React, { useState } from "react";
import { FaBook, FaSearch } from "react-icons/fa";

const RaqamUlAli = ({ items: propItems }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Tabs State
  const [activeTopTab, setActiveTopTab] = useState("البحث بالرواة");
  const [activeSubTab, setActiveSubTab] = useState("الحد الأعلى");

  const itemsPerPage = 20;

  const defaultItems = [
    { Hadees_Title: "أُمُّ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رضي الله عنها" },
    { Hadees_Title: "أَبِي إِسْحَاقَ الْهَمْدَانِيِّ عن امرأةٍ من همدان" },
    { Hadees_Title: "رُمَيْثَةَ بِنْتِ حَكِيمٍ رضي الله عنها" },
    { Hadees_Title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه" },
    { Hadees_Title: "أَبِي سَلَمَةَ الأَسْلَمِيِّ عَنْ عَمِّهِ رحمه الله" },
    { Hadees_Title: "ثُوَيْبَانَ أَوْ أَبِي أَسْمَاءَ رضي الله عنه" },
    { Hadees_Title: "عَبْدَ اللَّهِ بْنِ عُبَيْدِ اللَّهِ بْنِ أَبِي مُلَيْكَةَ رحمه الله" },
    { Hadees_Title: "عُبَيْدَةَ اللَّيْثِيِّ رحمه الله" },
    { Hadees_Title: "لَيْلَى أُمِّ عِمَارَةَ الأَنْصَارِيَّةِ رحمهما الله" },
    { Hadees_Title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه" },
  ];

  const items = propItems?.length ? propItems : defaultItems;

  // Pagination
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  

  return (
    <div className="min-h-screen bg-white px-4 sm:px-10">

      {/* 🔹 TABS (IMAGE LIKE) */}

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {[
            "البحث بالمصادر",
            "البحث بالرواة",
            "البحث بالعبارة",
            "الرقم العالمي",
            "البحث بالموضوعات",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTopTab(tab)}
              className={`px-4 py-1 text-sm rounded-md border transition z-20
                ${
                  activeTopTab === tab
                    ? "border-[#0C6251] text-[#0C6251] hover:bg-[#0C6251] hover:text-white cursor-pointer"
                    : "border-[#0C6251] text-[#0C6251] hover:bg-[#0C6251] hover:text-white cursor-pointer "
                }`}
            >
              {tab}
            </button>
          ))}
    
        {/* Row 2 */}
            </div>
     <div className="border-b-6 border-[#0C6251] pb-4 mb-4"> 
</div>
  <div className="flex flex-wrap justify-start gap-3 absolute w-[400px]">
  {["الحد الأدنى", "الحد الأوسط", "الحد الأعلى"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveSubTab(tab)}
      className={`px-6 py-1 text-sm rounded-md border transition z-20 cursor-pointer
        ${
          activeSubTab === tab
          ? "border-[#0C6251] text-[#0C6251] hover:bg-[#0C6251] hover:text-white cursor-pointer"
                    : "border-[#0C6251] text-[#0C6251] hover:bg-[#0C6251] hover:text-white cursor-pointer "
        }`}
    >
      {tab}
    </button>
  ))}
</div>

     

      {/* 🔹 Count */}
      <p className="text-right text-sm mb-4 relative">
        {activeTopTab} — {totalItems} حديثًا
      </p>

      {/* 🔹 MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 bg-white p-6 rounded-md shadow-sm text-right font-[Scheherazade] text-[18px]">
          <div >
            <img src="/detail.png" alt="Detail" />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-gray-100 rounded-md shadow-md p-5 space-y-4">

          {/* Search */}
          <div className="flex items-center bg-white border rounded-md px-2 py-2">
            <button className="flex items-center gap-2 px-3 py-1 text-white bg-[#206D69] rounded-md">
              بحث <FaSearch />
            </button>
            <input
              type="text"
              placeholder="ابحث بعبارة (الأعمال بالنيات)"
              className="flex-grow bg-transparent outline-none text-right px-2 text-sm"
            />
          </div>

          {/* Accordion */}
          <div className="space-y-2">
            {currentItems.map((item, i) => (
              <div key={i} className="bg-white rounded-md shadow-sm">
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-end items-center p-3 cursor-pointer text-[#0C6251] hover:bg-[#0C6251] hover:text-white transition"
                >
                  <span className="px-2 text-sm">{item.Hadees_Title}</span>
                  <FaBook className="bg-[#206D69] text-white w-7 h-7 p-1 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-4 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300"
                  : "bg-[#206D69] text-white"
              }`}
            >
              Previous
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-4 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-[#206D69] text-white"
              }`}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RaqamUlAli;
