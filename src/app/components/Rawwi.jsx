"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBook, FaChevronDown, FaLink, FaSearch } from "react-icons/fa";

const rawwi = ({ items }) => {
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

      {/* 🔹 Divider */}
      <div className="w-full sm:w-[90%] mx-auto bg-[#206D69] py-1 px-2 rounded-md "></div>

      {/* 🔹 Search Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 px-4 sm:px-8 md:px-10 py-4">
        {/* Left Search Bars */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-1/2 justify-end transition z-20 cursor-pointer">

       

          {/* Search 1 */}
          <div className="relative w-full sm:w-1/2 ">
            <div className="flex items-center border rounded-md px-2 py-1 bg-white">

              {/* Chevron (dropdown trigger) */}
              <div
                className="flex items-center gap-1 border-r border-gray-400 pr-2 "
                onClick={() => setOpen1(!open1)}
              >
                <FaChevronDown className="text-[#0C6251] text-xs" />
              </div>

              {/* Input (typing allowed) */}
              <input
                type="text"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="بحسب الراوي"
                className="flex-grow text-right text-sm bg-transparent outline-none px-1"
              />

              {/* Search icon (no dropdown) */}
              <FaSearch
                className="text-[#0C6251] text-sm ml-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Search value:", value1);
                }}
              />
            </div>

            {/* Dropdown */}
            {open1 && (
              <div className="absolute top-full right-0 mt-1 w-full bg-white border rounded-md shadow-md z-10">
                {narrators
                  .filter((name) =>
                    name.toLowerCase().includes(value1.toLowerCase())
                  )
                  .map((name, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm text-right hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setValue1(name);
                        setOpen1(false);
                      }}
                    >
                      {name}
                    </div>
                  ))}
              </div>
            )}
          </div>



          {/* Search 2 (same logic, different data) */}
          <div className="relative w-full sm:w-1/2">
            <div className="flex items-center border rounded-md px-2 py-1 bg-white">

              {/* Chevron (dropdown trigger) */}
              <div
                className="flex items-center gap-1 border-r border-gray-400 pr-2 cursor-pointer"
                onClick={() => setOpen2(!open2)}
              >
                <FaChevronDown className="text-[#0C6251] text-xs" />
              </div>

              {/* Input (typing allowed) */}
              <input
                type="text"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="بحسب الموضوع"
                className="flex-grow text-right text-sm bg-transparent outline-none px-1"
              />

              {/* Search icon (no dropdown) */}
              <FaSearch
                className="text-[#0C6251] text-sm ml-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Search value:", value2);
                }}
              />
            </div>

            {/* Dropdown */}
            {open2 && (
              <div className="absolute top-full right-0 mt-1 w-full bg-white border rounded-md shadow-md z-10">
                {narrators
                  .filter((name) =>
                    name.toLowerCase().includes(value2.toLowerCase())
                  )
                  .map((name, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm text-right hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setValue2(name);
                        setOpen2(false);
                      }}
                    >
                      {name}
                    </div>
                  ))}
              </div>
            )}
          </div>

        </div>


        {/* Right Text */}
        <div className="w-full md:w-1/2 text-right text-sm text-black">
          <p className="text-center md:text-right">
            البحث بالمصادر {totalItems} حديثًا
          </p>
        </div>
      </div>

      {/* 🔹 Main Layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* LEFT */}
        <div className="md:col-span-2 border border-gray-200 rounded-md p-4 sm:p-6 bg-white shadow-sm text-right">
          <div className="space-y-4">
            <div className="bg-white rounded-md p-4 border border-gray-100 shadow">
              <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mb-2">
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

        {/* RIGHT — Accordion */}
        <div className="bg-gray-100 rounded-md shadow-md p-4 sm:p-5 space-y-4">
          {/* Search */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md shadow px-2 py-2">
            <button className="flex items-center gap-2 px-3 py-1 text-white bg-[#206D69] font-bold rounded-md text-sm">
              <span>بحث</span>
              <FaSearch className="text-white text-sm" />
            </button>
            <input
              type="text"
              placeholder="ابحث بعبارة (الأعمال بالنيات)"
              className="flex-grow bg-transparent outline-none text-right text-gray-800 text-sm px-2"
            />
          </div>

          {/* Accordion Items (Paginated) */}
          {/* Accordion Items (Paginated) */}
          <div className="space-y-2">
            {currentItems.map((item, i) => (
              <div key={item.ravi_code || i} className="bg-white rounded-md shadow-sm">
                <div className="flex justify-end items-center p-3 cursor-pointer gap-2" >
                  {t(item.ravi_name || "Unknown Book")}
                  <FaBook className="text-white text-xl bg-[#206D69] w-10 h-10 p-2 " />

                </div>
              </div>
            ))}
          </div>


          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className={`px-4 py-1 rounded-md ${currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#206D69] text-white hover:bg-[#1a5a56]"
                }`}
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-1 rounded-md ${currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#206D69] text-white hover:bg-[#1a5a56]"
                }`}
            >
              Next
            </button>
          </div>
        </div>

        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default rawwi;
