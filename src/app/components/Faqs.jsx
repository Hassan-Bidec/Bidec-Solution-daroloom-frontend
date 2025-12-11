"use client";
import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaBook } from "react-icons/fa";

const Faqs = () => {
  const tabs = ["البحث بالرواة", "البحث بالمصادر", "الرقم العالمي", "البحث بالعبارة"];

  const faqData = [
    "باب ما جاء في خصال الإيمان الأفضل",
    "باب ما جاء أن الدين يسَر وأن أحب الدين إلى الله الخشية الصادقة",
    "باب ما جاء أن حب النبي صلى الله عليه وسلم من الإيمان",
    "باب ما جاء في وجوب الإيمان برسالة النبي صلى الله عليه وسلم إلى جميع الناس ونُصح العامل بما له",
    "باب ما جاء في خصال الإيمان الأفضل",
    "باب ما جاء أن الدين يسَر وأن أحب الدين إلى الله الخشية الصادقة",
    "باب ما جاء أن حب النبي صلى الله عليه وسلم من الإيمان",
    "باب ما جاء في وجوب الإيمان برسالة النبي صلى الله عليه وسلم إلى جميع الناس ونُصح العامل بما له",
    "باب ما جاء في خصال الإيمان الأفضل",
    "باب ما جاء أن الدين يسَر وأن أحب الدين إلى الله الخشية الصادقة",
    "باب ما جاء أن حب النبي صلى الله عليه وسلم من الإيمان",
    "باب ما جاء في وجوب الإيمان برسالة النبي صلى الله عليه وسلم إلى جميع الناس ونُصح العامل بما له",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const AlertFunction = () => {
    alert("alert");
  };

  return (
    <div className="w-full flex flex-col items-center -mt-20 space-y-8 px-3 sm:px-6">
      
      {/* 🔹 Tabs Row */}
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
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%] md:w-[70%] lg:w-[57%] max-w-4xl bg-white border border-gray-800 rounded-md px-3 py-2 shadow-md sm:ml-0 lg:ml-[32%] gap-2 sm:gap-4">
        <button
          onClick={AlertFunction}
          className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2 text-white bg-[#206D69] font-bold rounded-md border border-[#206D69] shadow-md hover:bg-[#1a5a56] transition w-full sm:w-auto"
        >
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

      {/* 🔹 FAQ Section */}
      <div className="w-full sm:w-[95%] lg:w-[100%] max-w-4xl flex flex-col space-y-2 bg-gray-100 p-2 sm:p-3">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md shadow-sm bg-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-3 sm:px-4 py-3 text-right text-gray-800 font-medium focus:outline-none"
            >
              {faq}
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaBook className="text-white text-xl bg-[#206D69] w-8 sm:w-10 h-8 sm:h-10 p-1.5 sm:p-2" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-3 sm:px-4 py-2 text-gray-700 border-t border-gray-200 text-sm sm:text-base">
                هذا هو المحتوى التفصيلي لهذا الباب.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
