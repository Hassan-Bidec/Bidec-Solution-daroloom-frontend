"use client";
import React, { useState } from "react";
import { FaChevronDown, FaLink, FaSearch } from "react-icons/fa";

const KitabulIman = () => {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const btn = ["المدينة الصغرى", "المدينة الوسطى", "المدينة الكبرى", "الرقم العالمي"];

  const items = [
    { title: "أُمُّ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رضي الله عنها", content: "الصبر عند البلاء من علامات الإيمان." },
    { title: "رُمَيْثَةَ بِنْتِ حَكِيمٍ رضي الله عنها", content: "يجب على المؤمن أن يجمع بين الخوف والرجاء." },
    { title: "بَسْرِ الْمَازِنِيِّ رضي الله عنه", content: "الزهد في الدنيا من صفات العارفين بالله." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 🔹 Tabs Section */}
      <div className="text-center  w-[95%] mx-auto">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 py-3">
          {btn.map((item, key) => (
            <button
              key={key}
              className="text-black px-6 py-1 rounded-md hover:text-white cursor-pointer hover:bg-[#0C6251] border border-[#0C6251] transition text-sm sm:text-base"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Divider Line */}
      <div className="w-full sm:w-[90%] mx-auto bg-[#206D69] py-1 px-2 rounded-md"></div>


      {/* 🔹 Search Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 px-4 sm:px-8 md:px-10 py-4">
        {/* Left Search Bars */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-1/2 justify-end">
          {/* Search 1 */}
          <div className="relative flex items-center border rounded-md px-2 py-1 bg-white w-full sm:w-1/2">
            <div className="flex items-center gap-1 border-r border-gray-400 pr-2 relative">
              <FaChevronDown
                className="text-[#0C6251] text-xs cursor-pointer"
                onClick={() => setShowList1(!showList1)}
              />
              {showList1 && (
                <ul className="absolute top-6 right-0 bg-white border border-gray-300 rounded-md shadow-md w-28 text-right text-sm z-10">
                  <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">الراوي ١</li>
                  <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">الراوي ٢</li>
                  <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">الراوي ٣</li>
                </ul>
              )}
            </div>
            <input
              type="text"
              placeholder="بحسب الراوي"
              className="flex-grow text-right text-sm bg-transparent outline-none px-1"
            />
            <FaSearch className="text-[#0C6251] text-sm ml-1" />
          </div>

          {/* Search 2 */}
          <div className="relative flex items-center border rounded-md px-2 py-1 bg-white w-full sm:w-1/2">
            <div className="flex items-center gap-1 border-r border-gray-400 pr-2 relative">
              <FaChevronDown
                className="text-[#0C6251] text-xs cursor-pointer"
                onClick={() => setShowList2(!showList2)}
              />
              {showList2 && (
                <ul className="absolute top-6 right-0 bg-white border border-gray-300 rounded-md shadow-md w-28 text-right text-sm z-10">
                  <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">العقيدة</li>
                  <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">العبادات</li>
                  <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">الأخلاق</li>
                </ul>
              )}
            </div>
            <input
              type="text"
              placeholder="بحسب الموضوع"
              className="flex-grow text-right text-sm bg-transparent outline-none px-1"
            />
            <FaSearch className="text-[#0C6251] text-sm ml-1" />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-right text-sm text-black">
          <p className="text-center md:text-right">البحث بالمصادر ٢٣٤١٥٠ حديثًا</p>
        </div>
      </div>

      {/* 🔹 Main Layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* LEFT — Arabic Text */}
        <div className="md:col-span-2 border border-gray-200 rounded-md p-4 sm:p-6 bg-white shadow-sm text-right">
          <div className="space-y-4">
            {/* Hadith Box 1 */}
            <div className="bg-white rounded-md p-4 border border-gray-100 shadow">
              <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mb-2">
                <p className="font-bold text-[#0C6251]">الشرح الصحيح</p>
                <p>رقم الحديث <span className="text-black">27615</span></p>
              </div>
              <p className="text-[18px] font-[Scheherazade] text-black leading-relaxed">
                حدثنا <span className="text-[#0C6251]">عبد الله بن يوسف</span> قال حدثنا مالك عن نافع عن عبد الله بن عمر رضي الله عنهما...
              </p>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-bold text-[#0C6251]">1.1</span> الإيمان / 11 [556] كتاب الإيمان
              </div>
              <p className="text-gray-500 text-sm mt-1">حديث صحيح</p>
            </div>

            {/* Hadith Box 2 */}
            <div className="bg-white rounded-md p-4 border border-gray-100 shadow">
              <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mb-2">
                <p className="font-bold text-[#0C6251]">كتاب الإيمان / باب بيان الإيمان والإسلام والإحسان وبيان فضل العلم</p>
                <p>رقم الحديث <span className="text-black">6424</span></p>
              </div>
              <p className="text-[18px] font-[Scheherazade] text-black leading-relaxed">
                عن عمر رضي الله عنه قال بينما نحن جلوس عند رسول الله ﷺ ذات يوم إذ طلع علينا رجل شديد بياض الثياب...
              </p>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-bold text-[#0C6251]">1.2</span> الإيمان / 125 [131] باب
              </div>
              <p className="text-gray-500 text-sm mt-1">رواه مسلم في صحيحه</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Accordion */}
        <div className="bg-gray-100 rounded-md shadow-md p-4 sm:p-5 space-y-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md shadow px-2 py-2">
            <button className="flex items-center gap-2 px-3 py-1 text-white bg-[#206D69] font-bold rounded-md hover:bg-[#1a5a56] transition text-sm">
              <span>بحث</span>
              <FaSearch className="text-white text-sm" />
            </button>
            <input
              type="text"
              placeholder="ابحث بعبارة (الأعمال بالنيات)"
              className="flex-grow bg-transparent outline-none text-right text-gray-800 placeholder-gray-600 text-sm px-2"
            />
          </div>

          {/* Accordion Items */}
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-md shadow-sm">
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-end items-center bg-gray-50 p-3 rounded-md text-[#0C6251] hover:bg-[#0C6251] hover:text-white transition cursor-pointer"
                >
                  <span className="text-sm md:text-base px-2">{item.title}</span>
                  <FaLink className="text-white text-lg bg-[#206D69] w-6 h-6 p-1 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default KitabulIman;
