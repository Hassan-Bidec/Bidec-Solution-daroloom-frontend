"use client"
import { useTranslation } from "react-i18next";
import Banner from "./Banner";

export default function Qirat() {
  const {t} = useTranslation()
  return (
    <div className="min-h-screen py-12 mt-50">
 

      {/* Top Stats Section with connecting lines */}
     <div className="flex  flex-wrap justify-center items-center text-center mb-16 relative gap-10">
  {/* Box 1 */}
  <div className="relative flex flex-col items-center">
    <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
      <div className="text-2xl font-semibold text-teal-700">2029</div>
      <div className="text-gray-700 mt-1">{t("المصادر المستنْدمة")}</div>
    </div>
    <div className="hidden md:block absolute top-1/2 right-[-40px] w-10 h-[2px] bg-teal-700"></div>
  </div>

  {/* Box 2 */}
  <div className="relative flex flex-col items-center">
    <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
      <div className="text-2xl font-semibold text-teal-700">11451</div>
      <div className="text-gray-700 mt-1">{t("عدد طرق الأحاديث")}</div>
    </div>
    <div className="hidden md:block absolute top-1/2 right-[-40px] w-10 h-[2px] bg-teal-700"></div>
  </div>

  {/* Box 3 */}
  <div className="relative flex flex-col items-center">
    <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
      <div className="text-2xl font-semibold text-teal-700">1020</div>
      <div className="text-gray-700 mt-1">{t("عدد الأحاديث المرفوعة")}</div>
    </div>
    <div className="hidden md:block absolute top-1/2 right-[-40px] w-10 h-[2px] bg-teal-700"></div>
  </div>

  {/* Box 4 */}
  <div className="relative flex flex-col items-center">
    <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
      <div className="text-2xl font-semibold text-teal-700">7414</div>
      <div className="text-gray-700 mt-1">{t("الموضوعات والعناوين")}</div>
    </div>
  </div>
</div>

     
      <div className="text-center mb-12">
        <div className="flex justify-center mb-7">
          <img
            src="/headingimg.png" 
            alt="decorative center icon"
            className="w-30 mt-5"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {t("قِرَاءَةُ الْمُدَوَّنَةِ")}
        </h2>
        {/* <div className="w-16 h-1 bg-teal-700 mx-auto rounded-full"></div> */}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-10 rtl text-right px-6">
        {/* Card 1 */}
        <div className="max-w-sm text-center">
          <div className="bg-teal-700 text-white w-8 h-8 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
            1
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            المدونة الجامعة الكبرى
          </h3>
          <p className="text-gray-600 mb-3">
            في مائة مجلدٍ تقريبًا على المقْياس الكبير
          </p>
          <a href="#" className="text-teal-700 hover:underline font-medium">
            
           {t("شاهد المزيد")}
          </a>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm text-center">
          <div className="bg-teal-700 text-white w-8 h-8 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
            2
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            المدونة الجامعة الوسطى
          </h3>
          <p className="text-gray-600 mb-3">
            في خمس وأربعين مجلدًا تقريبًا على المقْياس الكبير
          </p>
          <a href="#" className="text-teal-700 hover:underline font-medium">
           {t("شاهد المزيد")}
            
          </a>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm text-center">
          <div className="bg-teal-700 text-white w-8 h-8 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
            3
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            المدونة الجامعة الصغرى
          </h3>
          <p className="text-gray-600 mb-3">
            في اثني عشر مجلدًا تقريبًا على المقْياس الكبير
          </p>
          <a href="#" className="text-teal-700 hover:underline font-medium">
                       {t("شاهد المزيد")}

          </a>
        </div>
      </div>
    </div>
  );
}
