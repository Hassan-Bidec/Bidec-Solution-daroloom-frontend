"use client";
import { Router } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
  import { useRouter } from 'next/navigation';  

const Banner = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "ar"; 
const router = useRouter();
const tabs = [
  { label: "ال بحث بالموضوعات", path: "/search/topics" },
  { label: "البحث بالرواة", path: "/rawwi" },
  { label: "البحث بالمصادر", path: "/masdar" },
  { label: "الرقم العالمي", path: "/RaqamUlAli" },
  { label: "البحث بالعبارة", path: "/search/phrase" },
];


  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-white overflow-visible m-0 p-0 mt-[50px] z-1 min-h-[60vh] sm:min-h-[80vh] md:min-h-[]"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Main Text */}
      <div className="text-center mt-20 md:mt-55 px-4 leading-relaxed max-w-[90%] md:max-w-[65%] mx-auto">
  <h2
    className={`mb-6 leading-snug text-center md:w-[600px] w-full mx-auto`}
    style={{
      fontFamily: isEnglish ? "Amiri Quran" : "adwa-assalaf",
      fontSize: isEnglish ? "2.5rem" : "3rem",
    }}
  >
    {t("من أوسع وأضخم أعمال الحديث النبويﷺ")}
  </h2>

  <p
    className={`text-center w-full leading-relaxed`}
    style={{
      fontFamily: "Poppins",
      fontSize: isEnglish ? "1.25rem" : "1.5rem",
    }}
  >
    {t(
      "تحت إشراف سماحة الشيخ المفتي والمحدث محمد تقي العثماني حفظه الله تعالى بجامعة دار العلوم كراتشي باكستان"
    )}
  </p>
</div>


      {/* Floating Box */}
      <div className="relative md:-bottom-20 w-full max-w-[720px] bg-white md:h-[260px] rounded-xl shadow-2xl flex flex-col items-center justify-center z-10  md:p-6">
        {/* Left Top Corner Small Image */}
        <img
          src="/leftimg.png"
          alt="Left Deco"
          className="absolute top-0 left-0 w-10 h-10 md:w-18 md:h-18 object-contain"
        />

        {/* Right Top Corner Small Image */}
        <img
          src="/rightimg.png"
          alt="Right Deco"
          className="absolute top-0 right-0 w-10 h-10 md:w-18 md:h-18 object-contain"
        />

        {/* Title */}
        <h1
          className="text-black font-semibold mb-4 md:mb-6"
          style={{ fontSize: isEnglish ? "1.2rem" : "1.5rem" }}
        >
          {t("البحث في الموسوعة")}
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
         {tabs.map((tab, key) => (
  <button
    key={key}
    onClick={() => router.push(tab.path)}
    className="px-2 sm:px-5 py-1 text-black font-bold rounded-md border shadow-md hover:bg-[#206D69] hover:text-white transition"
  >
    {t(tab.label)}
  </button>
))}

        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-[80%] max-w-[90%] border border-gray-800 rounded-md px-2 py-2 md:py-1 shadow-md gap-2 md:gap-0">
          <button className="flex items-center justify-center gap-2 px-5 py-2 md:py-1 text-white bg-[#206D69] font-bold rounded-md border border-[#206D69] shadow-md hover:bg-[#1a5a56] transition w-full md:w-auto">
            <span>{t("بحث")}</span>
            <FaSearch className="text-white text-lg" />
          </button>

          <input
            type="text"
            placeholder={t("ابحث بعبارة (الأعمال بالنيات) أو (إنما الأعمال)")}
            className={`flex-grow bg-transparent outline-none text-right px-3 text-gray-800 placeholder-gray-600 w-full md:w-auto ${isEnglish ? "text-sm" : "text-base"
              }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
