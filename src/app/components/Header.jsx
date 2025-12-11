"use client";
import React, { useState, useEffect } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ar");

  // Ensure dir attribute changes when language changes
  useEffect(() => {
  document.documentElement.dir = "ltr"; 
}, [lang]);


  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <header
      className="absolute top-0 left-0 w-full flex items-center justify-center z-20"
      style={{
        backgroundImage: "url('/union.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "140px",
        overflow: "visible",
      }}
    >
      {/* Main container */}
      <div className="relative text-center text-white flex flex-col items-center justify-center w-full min-h-screen sm:min-h-[70vh] md:min-h-[80vh] px-2 sm:px-4">
        {/* Logo */}
        <img
          className="w-[100px] sm:w-[120px] lg:w-[200px] xl:w-[220px] object-contain sm:-mt-3"
          src="/logo.png"
          alt="Logo"
        />
      </div>

      {/* Language Toggle */}
      <div className="absolute top-2 right-4 z-10">
        <div className="flex items-center p-1 bg-transparent border border-white rounded-full shadow-inner gap-2">
          <button
            onClick={() => toggleLanguage("en")}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300
              ${
                lang === "ar"
                  ? "bg-white text-black hover:bg-[#206D69] font-semibold shadow"
                  : "text-white hover:bg-[#206D69]"
              }`}
          >
            EN
          </button>

          <button
            onClick={() => toggleLanguage("ar")}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300
              ${
                lang === "en"
                  ? "bg-white text-black hover:bg-[#206D69] font-semibold shadow"
                  : "text-white hover:bg-[#206D69]"
              }`}
          >
            العربية
          </button>
        </div>
      </div>
    </header>
  );
}
