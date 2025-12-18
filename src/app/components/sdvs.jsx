"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBook, FaChevronDown, FaLink, FaSearch } from "react-icons/fa";

const sdvs = ({ items }) => {
  // dropdown states ab use nahi ho rahe (future ke liye)
  // const [showList1, setShowList1] = useState(false);
  // const [showList2, setShowList2] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const { t } = useTranslation();


  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState("");
 const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState("");


  const narrators = [
    "امام بخاری",
    "امام مسلم",
    "امام ترمذی",
    "امام نسائی",
  ];


  useEffect(() => {
    console.log("Items received:", items);
  }, [items]);

  const btn = [
    "المدينة الصغرى",
    "المدينة الوسطى",
    "المدينة الكبرى",
    "الرقم العالمي",
  ];

  // Pagination calculation
  const totalItems = Array.isArray(items) ? items.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = Array.isArray(items)
    ? items.slice(startIndex, startIndex + itemsPerPage)
    : [];

  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="min-h-screen bg-white">
      {/* 🔹 Tabs Section */}
      <div className="text-center w-[95%] mx-auto ">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 py-3 ">
          {btn.map((item, key) => (
            <button
              key={key}
              className="text-black px-6 py-1 rounded-md transition z-20 cursor-pointer hover:text-white cursor-pointer hover:bg-[#0C6251] border border-[#0C6251] transition text-sm sm:text-base"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    {/* Search */}
   <div className="flex flex-col sm:flex-row items-center 
  w-full sm:w-[80%] md:w-[70%] lg:w-[57%] max-w-4xl 
  bg-white border border-gray-800 rounded-md px-3 py-2 
  shadow-md gap-2 sm:gap-4 mx-auto ">

  <button
    className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2 
    text-white bg-[#206D69] font-bold rounded-md border border-[#206D69] 
    shadow-md hover:bg-[#1a5a56] transition  cursor-pointer w-full sm:w-auto"
  >
    <span>بحث</span>
    <FaSearch className="text-white text-lg" />
  </button>

  <input
    type="text"
    placeholder="ابحث بعبارة (الأعمال بالنيات) أو (إنما الأعمال)"
    className="flex-grow bg-transparent outline-none text-right px-2 sm:px-4 
    text-gray-800 placeholder-gray-600 w-full sm:w-auto"
  />
</div>






      {/* 🔹 Divider */}
<div className="w-full sm:w-[90%] mx-auto bg-[#206D69] py-1 px-2 rounded-md mt-8"></div>

      {/* 🔹 Search Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 px-4 sm:px-8 md:px-10 py-4">
        {/* Left Search Bars */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-1/2 justify-end transition z-20 cursor-pointer">

        </div>


        {/* Right Text */}
        <div className="w-full md:w-1/2 text-right text-sm text-black">
          <p className="text-center md:text-right">
            البحث بالمصادر {totalItems} حديثًا
          </p>
        </div>
      </div>

      {/* 🔹 Main Layout */}
    
<div className="container ml-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5">
  {/* LEFT (actually right aligned now) */}
  <div className="md:col-span-2 border border-gray-200 rounded-md p-4 sm:p-6 bg-white shadow-sm text-right">
    <div className="space-y-4">
      <div className="bg-white rounded-md p-4 border border-gray-100 shadow">
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mb-2">
                  <p>  ابحث بعبارةالأعمال بالنيات أو إنما الأعمال
</p>
          <p className="font-bold text-[#0C6251]">الشرح الصحيح</p>
          <p>

            رقم الحديث <span className="text-black">27615</span>
          </p>
        </div>

        <p className="text-[18px] font-[Scheherazade] text-black leading-relaxed">
          حدثنا <span className="text-[#0C6251]">عبد الله بن يوسف</span> قال
          حدثنا مالك عن نافع عن عبد الله بن عمر رضي الله عنهما...
        </p>

        <p className="text-gray-500 text-sm mt-1">حديث صحيح</p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};

export default sdvs;
