"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
   const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en"; // Check current language

  const links = [
    { href: "#", text: "الرئيسية" },
    { href: "#", text: "المدونة الجامعة الكبرى" },
    { href: "#", text: "المدونة الجامعة الوسطى" },
    { href: "#", text: "المدونة الجامعة الصغرى" },
  ];
  return (
    <footer className="relative bg-[#206D69] text-white py-12 mt-20 overflow-visible w-full">
      {/* 🔹 Left Decorative Image */}
      <img
        src="/vectorleft.png"
        alt="Left Decoration"
        className="absolute left-0 -mt-15  md:-top-20 w-[60px] md:w-[120px] object-contain z-0"
      />

      {/* 🔹 Right Decorative Image */}
      <img
        src="/vectorright.png"
        alt="Right Decoration"
        className="absolute right-0 -mt-15 md:-top-20 w-[60px] md:w-[120px] object-contain z-0"
      />

      {/* 🔹 Main Footer Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col items-center">
        {/* Grid content centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start text-center md:text-right justify-center w-full">
          {/* 1️⃣ معلومات التواصل */}
          <div className="leading-relaxed space-y-2">
            <h3 className="text-2xl font-bold mb-4 border-b border-white pb-2 inline-block">
              {t("معلومات التواصل")}
            </h3>
            <p>
              {t("دار العلوم كراتشي، شارع دار العلوم، كورانغي إندستريل إيريا، كراتشي، باكستان")}
            </p>
            <p>75180 : {t("الرمز البريدي")}</p>
            <p>‎00922135049774-6 : {t("رقم الهاتف")}</p>
            <p>‎00922135123434-6 : {t("رقم الهاتف")}</p>
            <p>‎0092213504192 ، 35032366 : {t("رقم الفاكس")}</p>
            <p>info@darululoomkarachi.edu.pk : {t("البريد الإلكتروني")}</p>
          </div>

        <div className="px-2 md:mr-10 lg:mr-40 text-center md:text-right">
      <h3
        className={`font-bold mb-4 border-b border-white pb-2 inline-block ${
          isEnglish ? "text-base" : "text-xl"
        }`}
      >
        {t("الروابط السريعة")}
      </h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className={`transition hover:text-gray-300 ${
                isEnglish ? "text-sm" : "text-lg"
              }`}
            >
              {t(link.text)}
            </Link>
          </li>
        ))}
      </ul>
    </div>

          
          <div className="relative z-10 w-[540] py-[110px] flex flex-col items-end bottom-0  right-45 -mt-25 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="bg-white text-[#206D69] rounded-xl shadow-xl p-6 w-full max-w-[90vw]">
              <h3 className="text-2xl font-bold mb-3 text-center md:text-right">
                {t("اكتشف المزيد")}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700 text-center md:text-right">
                {t("اكتشف لوريم إيبسوم في الموقع الأيقوني لوريم إيبسوم. استمتع بمرافق عالمية المستوى ومناظر خلابة.")}
              </p>
              <p>{t("اشترك في نشرتنا الإخبارية")}</p>

              <div className="flex flex-col sm:flex-row items-center bg-gray-100 border border-[#206D69] rounded-md overflow-hidden mt-2 w-full">
                <input
                  type="email"
                  placeholder={t("أدخل بريدك الإلكتروني")}
                  className="flex-grow px-3 py-2 text-right bg-[#206D69] outline-none text-white placeholder-gray-500 w-full"
                />
                <button className="text-black px-6 py-2 transition font-bold w-full sm:w-auto mt-2 sm:mt-0">
                  {t("إرسال")}
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-400 mt-10 pt-4 text-sm text-gray-200 w-full flex flex-col md:flex-row items-center md:justify-between">
          <p className="text-center md:text-left">
            {t("© جميع الحقوق محفوظة لجامعة دار العلوم كراتشي 2025")}
          </p>

          {/* Right Side Links */}
          <p className="mt-2 md:mt-0 text-center md:text-right cursor-pointer">
            {t("Privacy Policy / Terms & Conditions")}
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
