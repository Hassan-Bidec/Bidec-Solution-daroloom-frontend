"use client";
import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaBook } from "react-icons/fa";

const CategoryDetail = () => {
  const tabs = ["البحث بالرواة", "البحث بالمصادر", "الرقم العالمي", "البحث بالعبارة"];
  const categories = {
    Electronics: ["Mobile", "Laptop", "Headphones"],
    Books: ["Fiction", "Science", "History"],
    Fashion: ["Shirts", "Shoes", "Watches"],
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);

  const list1 = [{ label: "خيار 1" }, { label: "خيار 2" }, { label: "خيار 3" }];
  const list2 = [{ label: "نتيجة 1" }, { label: "نتيجة 2" }, { label: "نتيجة 3" }, { label: "نتيجة 4" }];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFilteredItems([]);
    setSearchTerm("");
  };
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (selectedCategory && categories[selectedCategory]) {
      const results = categories[selectedCategory].filter((item) =>
        item.toLowerCase().includes(term)
      );
      setFilteredItems(results);
    }
  };
  return (
    <div className="w-full flex flex-col items-center mt-10 space-y-8 px-3 sm:px-6">

      {/* 🔹 Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {tabs.map((tab, key) => (
          <button
            key={key}
            className="px-6 sm:px-8 md:px-12 py-2 text-black font-bold rounded-md border border-gray-400 shadow-sm 
             hover:bg-[#206D69] hover:text-white transition-all duration-200 text-sm sm:text-base"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 Search Bar */}
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%] md:w-[70%] lg:w-[57%] max-w-4xl bg-white border border-gray-800 rounded-md px-3 py-2 shadow-md sm:ml-0  gap-2 mr-0 sm:gap-4">
        <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2 text-white bg-[#206D69] font-bold rounded-md border border-[#206D69] shadow-md hover:bg-[#1a5a56] transition w-full sm:w-auto">
          <span>بحث</span>
          <FaSearch className="text-white text-lg" />
        </button>

        <input
          type="text"
          placeholder="ابحث بعبارة (الأعمال بالنيات) أو (إنما الأعمال)"
          className="flex-grow bg-transparent outline-none text-right px-2 sm:px-4 text-gray-800 placeholder-gray-600 w-full sm:w-auto"
        />
      </div>

      {/* 🔹 Green Line Divider */}
      <div className="w-full sm:w-[90%] mx-auto bg-[#206D69] py-1 px-2 rounded-md"></div>

      {/* 🔹 Two Buttons with Dropdown Lists */}
      <div className="w-full flex items-center justify-between px-10 py-4 relative">
        {/* 🔹 Left Side: Two Search Bars */}
        <div className="flex gap-3 w-1/2 justify-end">

          <div className="relative flex items-center border  rounded-md px-2 py-1 w-[50%] bg-white">
            <div className="flex items-center gap-1 border-r border-gray-500 pr-2 relative">
              <FaChevronDown
                className="text-[#0C6251] text-xs cursor-pointer"
                onClick={() => setShowList2(!showList2)}
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


          <div className="relative flex items-center border rounded-md px-2 py-1 w-[50%] bg-white">
            <div className="flex items-center gap-1 border-r border-gray-500 pr-2 relative">
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
              className="flex-grow text-right text-sm  outline-none px-1"
            />
            <FaSearch className="text-[#0C6251] text-sm ml-1" />

          </div>
        </div>

        {/* 🔹 Right Side Text */}
        <div className="w-1/2 text-right text-sm text-black">
          <p>البحث بالمصادر ٢٣٤١٥٠ حديثًا</p>
        </div>
      </div>

      {/* 🔹 Main Content */}
      <div className="w-full max-w-6xl p-2 pt-4 pb-4 rounded-md flex flex-col lg:flex-row gap-4 mt-4 bg-gray-100">

        {/* Left Content */}
        <div className="flex-1 bg-white rounded-md shadow-inner p-4 overflow-y-auto h-[400px] sm:h-[450px] lg:h-[500px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-gray-200 pb-4 mb-4 text-right leading-relaxed">
              <p className="text-[#206D69] font-semibold">
                عنوان الحديث: حديث "إنما الأعمال بالنيات"
              </p>
              <p className="text-gray-700 mt-2">
                هذا حديث رواه البخاري ومسلم رضي الله عنهما، وفيه أن الأعمال بالنيات.
              </p>
              <p className="text-sm text-gray-500 mt-1">الرقم العالمي: 27615</p>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[35%] rounded-md shadow-md border border-gray-200 p-4 h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col">
          <div className="flex flex-col sm:flex-row items-center border border-gray-400 rounded-md overflow-hidden mb-3 gap-2">
            <button className="flex items-center justify-center gap-2 px-5 py-2 text-white bg-[#206D69] font-bold rounded-md border border-[#206D69] shadow-md hover:bg-[#1a5a56] transition w-full sm:w-auto">
              <span>بحث</span>
              <FaSearch className="text-white" />
            </button>
            <input
              type="text"
              placeholder="ابحث بعبارة (الأعمال بالنيات)"
              className="flex-grow text-right px-3 py-2 outline-none placeholder-gray-600 w-full sm:w-auto"
            />
          </div>

          <div
            className="overflow-y-auto flex-1 space-y-2 pr-1 custom-scrollbar"
            style={{ direction: "rtl", scrollbarGutter: "stable" }}
          >
            <div style={{ direction: "ltr" }}>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 text-black rounded-md p-3 shadow-md hover:bg-[#1a5a56] hover:text-white cursor-pointer"
                >
                  <span className="text-right text-sm font-medium">
                    باب ما جاء أي خصال الإيمان أفضل
                  </span>
                  <FaBook className="text-white text-xl bg-[#206D69] w-10 h-10 p-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20"></div>
    </div>
  );
};

export default CategoryDetail;
