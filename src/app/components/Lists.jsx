"use client";
import React, { useState } from "react";
import { FaBook, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

/**
 * Lists.jsx
 * Multi-level RTL accordion that visually matches :
 * - Outer rounded cards for each "book"
 * - Book header with chevron
 * - When a book opens, a list of chapters appears
 * - Each chapter row shows a left decorative green circle + long thin green line,
 *   and the chapter title aligned to the right (Arabic RTL layout)
 * - Clicking a chapter expands its nested topics
 *
 * Notes:
 * - This component uses inline SVG for the green circular decal so you don't need an external image.
 * - Replace text/data with your real data as needed.
 * - Tailwind classes are used for spacing/colors. Tweak sizes if you need pixel-perfect adjustments.
 */

const sampleData = [
  {
    title: "باب ما جاء أي خصال الإيمان أفضل",
    chapters: [
      {
        name: "باب في بيان العمل بالنيات",
        topics: [
          "شرح مختصر عن النية والعمل الصالح",
          "باب فضل الإيمان والإسلام وتوحيده سبحانه وتعالى والنجاة به",
          "أحكام النية في العبادة",
        ],
      },
      {
        name: "باب في بيان التوبة",
        topics: ["باب التوبة وفضائلها", "كيفية التوبة الصحيحة", "آداب التوبة"],
      },
      {
        name: "باب في بيان الشكر",
        topics: ["الشكر لله", "آداب الشكر", "أمثلة على الشكر"],
      },
    ],
  },
  {
    title: "باب ما جاء أن الدين يسر وأن أحب الدين إلى الله الحنيفيّة السمحة",
    chapters: [
      {
        name: "باب في الطهارة وأنواعها",
        topics: ["أنواع الطهارة", "أحكام الوضوء", "أحكام الغسل"],
      },
      {
        name: "باب النجاسات",
        topics: ["أنواع النجاسات", "طرق التطهير", "الممنوعات عند الطهارة"],
      },
    ],
  },
  {
    title: "باب ما جاء أن حب النبي صلى الله عليه وسلم من الإيمان",
    chapters: [
      {
        name: "باب في أوقات الصلاة",
        topics: ["مواقيت الصلاة", "العوامل التي تبطل الصلاة", "كلام الإمام والمأموم"],
      },
      {
        name: "باب في شروط الصلاة",
        topics: ["الطهارة للشروط", "النية في الصلاة", "ستر العورة في الصلاة"],
      },
      {
        name: "باب في السنن والرواتب",
        topics: ["الرواتب المؤكدة", "سنن الفجر والظهر", "سنن الوتر"],
      },
    ],
  },
  {
    title: "باب ما جاء في وجوب الإيمان برسالة النبي صلى الله عليه وسلم إلى جميع الناس ونسخ الملل بملته",
    chapters: [
      {
        name: "باب حول نصاب الزكاة",
        topics: ["تعريف النصاب", "مصادر المال الخاضع للزكاة", "متى تستحق الزكاة"],
      },
      {
        name: "باب من تجب عليه الزكاة",
        topics: ["الفريضة على المسلم", "الاستثناءات", "حكم العقبات"],
      },
    ],
  },
  {
    title: "باب ما جاء أي خصال الإيمان أفضل",
    chapters: [
      {
        name: "باب في فضل الصيام",
        topics: ["فضل شهر رمضان", "صيام التطوع", "النية في الصيام"],
      },
      {
        name: "باب مفطرات الصوم",
        topics: ["الآكل والشارب", "الإفطار بعذر", "الكفارة والقضاء"],
      },
    ],
  },
  {
    title: "باب ما جاء أن الدين يسر وأن أحب الدين إلى الله الحنيفيّة السمحة",
    chapters: [
      {
        name: "باب في مناسك الحج",
        topics: ["الإحرام", "الطواف", "السعي بين الصفا والمروة"],
      },
      {
        name: "باب في أنواع الحج",
        topics: ["التمتع والقِران والإفراد", "آداب المشاعر", "أحكام الأضحية"],
      },
    ],
  },
  {
    title: "باب ما جاء أن حب النبي صلى الله عليه وسلم من الإيمان",
    chapters: [
      {
        name: "باب في آداب الحديث",
        topics: ["آداب الكلام مع الآخرين", "آداب المسجد", "آداب الطعام والشراب"],
      },
      {
        name: "باب في التعامل مع الوالدين",
        topics: ["بر الوالدين", "أدب الحوار مع الكبار", "الإحسان في الأقوال والأفعال"],
      },
    ],
  },
  {
    title: "باب ما جاء في وجوب الإيمان برسالة النبي صلى الله عليه وسلم إلى جميع الناس ونسخ الملل بملته",
    chapters: [
      {
        name: "باب في البيع والشراء",
        topics: ["شروط البيع الصحيح", "المبايعات المحرمة", "البضاعة والعيوب"],
      },
      {
        name: "باب في الكفالة والودائع",
        topics: ["حكم الكفالة", "شروط الوديعة", "حقوق الطرفين"],
      },
    ],
  },
  {
    title: "باب ما جاء أي خصال الإيمان أفضل",
    chapters: [
      {
        name: "باب في النكاح",
        topics: ["شروط النكاح", "مهر الزوجة", "حقوق وواجبات الزوجين"],
      },
      {
        name: "باب في الطلاق",
        topics: ["أحكام الطلاق", "العدة", "الصلح والرجعة"],
      },
    ],
  },
  {
    title: "کتاب المواريث",
    chapters: [
      {
        name: "باب في الفرائض",
        topics: ["حصص الورثة", "حالات الحجب", "الميراث في الأسرة"],
      },
      {
        name: "باب في التركات والوصايا",
        topics: ["الوصية المشروطة", "حدود الوصية", "تنفيذ التركة"],
      },
    ],
  },
];


export default function Lists({ data = sampleData }) {
  const [openBooks, setOpenBooks] = useState(new Set());
  const [openChapters, setOpenChapters] = useState({});
  const tabs = ["البحث بالمصادر", "الرقم العالمي", "البحث بالعبارة"];

  const toggleBook = (idx) => {
    const newSet = new Set(openBooks);
    if (newSet.has(idx)) newSet.delete(idx);
    else newSet.add(idx);
    setOpenBooks(newSet);
  };

  const toggleChapter = (bookIdx, chapIdx) => {
    setOpenChapters((prev) => {
      const prevForBook = new Set(prev[bookIdx] || []);
      if (prevForBook.has(chapIdx)) prevForBook.delete(chapIdx);
      else prevForBook.add(chapIdx);
      return { ...prev, [bookIdx]: prevForBook };
    });
  };

  return (
    <>
      {/* 🔹 Tabs & Search */}
      <div className="w-full flex flex-col items-center mt-10 space-y-8 px-4 sm:px-6 md:px-0">
        {/* Tabs */}
     
     
      <div className="w-full pr-15">
      {/* 🔹 Tabs Row */}
      <div className="flex flex-wrap justify-end  gap-2 sm:gap-3">
        {tabs.map((tab, key) => (
          <button
            key={key}
            className="px-6 sm:px-8 md:px-12 py-2 text-black font-bold  rounded-md border border-gray-400 shadow-sm 
            hover:bg-[#206D69] z-20 cursor-pointer 
 hover:text-white transition-all duration-200 text-sm sm:text-base"
          >
            {tab}
          </button>
        ))}
      </div>
</div>
        {/* Search */}
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%] md:w-[70%] lg:w-[57%] max-w-4xl bg-white border border-gray-800 rounded-md px-3 py-2 shadow-md sm:ml-0 lg:ml-[32%] gap-2 sm:gap-4">
          <button
            
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

        {/* Divider */}
        <div className="w-[90%] mx-auto bg-[#206D69] py-1 px-2 rounded-md"></div>
      </div>

      {/* 🔹 Books List */}
<div className="py-8 px-5 max-w-[87%] mt-3 mx-auto bg-gray-200 rounded-xl" dir="rtl">
        <div className="space-y-4">
          {data.map((book, bIdx) => {
            const bookOpen = openBooks.has(bIdx);
            return (
              <div key={bIdx} className="rounded-lg border border-gray-200 bg-gray-500 shadow-sm overflow-hidden">
                {/* Book header */}
                <div
                  onClick={() => toggleBook(bIdx)}
                  className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-50 transition"
                  aria-expanded={bookOpen}
                >
                  <div className="flex items-center gap-3">
                    <FaBook className="text-white text-lg bg-[#206D69] w-7 h-7 p-1 rounded" />
                    <span className=" text-[#0C6251] font-medium text-sm md:text-base">{book.title}</span>
                  </div>
                  <div className="flex items-center">
                    {bookOpen ? <FaChevronUp className="text-[#0C6251] text-sm" /> : <FaChevronDown className="text-[#0C6251] text-sm" />}
                  </div>
                </div>

                {/* Chapters */}
                <div className={`border-t border-gray-100 bg-white transition-all duration-200 ${bookOpen ? "max-h-[2000px] ease-in" : "max-h-0 overflow-hidden"}`}>
                  <div className="divide-y divide-gray-100">
                    {book.chapters.map((chapter, cIdx) => {
                      const openSet = openChapters[bIdx] || new Set();
                      const chapOpen = openSet.has(cIdx);
                      return (
                        <div key={cIdx} className="space-y-0">
                          <div
                            onClick={() => toggleChapter(bIdx, cIdx)}
                            className="flex flex-col sm:flex-row items-center justify-between cursor-pointer bg-gray-50 transition"
                          >
                            <div className="w-full sm:w-auto flex flex-col">
                              <div className="flex items-center gap-4 justify-end sm:justify-end mr-0 sm:mr-15" dir="ltr">
                                <div className="text-sm text-[#0C6251]">{chapter.name}</div>
                                <div className="w-2 h-2 rounded-full bg-[#0C6251]"></div>
                              </div>
                              <img src="/greenline.png" className="w-full py-2 px-4 sm:px-8 sm:mr-5" />
                            </div>
                          </div>

                          <div className={`transition-all duration-200 ${chapOpen ? "max-h-[800px]" : "max-h-0 overflow-hidden"}`}>
                            <ul className="space-y-2 bg-gray-50">
                              {chapter.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-center gap-3 mr-0 sm:mr-15 text-sm text-gray-700 border-b border-gray-200 pb-2 pr-4">
                                  <svg className="w-1 h-1 flex-shrink-0" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#000000" />
                                  </svg>
                                  <span className="flex-1">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-20"></div>
        </div>
      </div>
    </>
  );
}