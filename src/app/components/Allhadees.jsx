"use client";
import React, { useState } from "react";
import { FaBook, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";


export const Allhadees = () => {
      const { t } = useTranslation();
      const categories = {
            Electronics: ["Mobile", "Laptop", "Headphones"],
            Books: ["Fiction", "Science", "History"],
            Fashion: ["Shirts", "Shoes", "Watches"],
        };
    
        const [selectedCategory, setSelectedCategory] = useState("");
        const [searchTerm, setSearchTerm] = useState("");
        const [filteredItems, setFilteredItems] = useState([]);
        const [showList1, setShowList1] = useState(false);
        const [showList2, setShowList2] = useState(false);
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
        const items = [
            { title: "باب في بيان العمل بالنيات", content: "شرح مختصر عن النية والعمل الصالح." },
            { title: "باب في بيان التوبة", content: "التوبة باب مفتوح دائمًا لعباد الله." },
            { title: "باب في بيان الصبر على البلاء", content: "الصبر عند البلاء من علامات الإيمان." },
            { title: "باب في بيان الشكر", content: "الشكر لله على النعم من أعظم العبادات." },
            { title: "باب في بيان الخوف والرجاء", content: "يجب على المؤمن أن يجمع بين الخوف والرجاء." },
            { title: "باب في بيان الزهد في الدنيا", content: "الزهد في الدنيا من صفات العارفين بالله." },
            { title: "باب في بيان الزهد في الدنيا", content: "الزهد في الدنيا من صفات العارفين بالله." },
            { title: "باب في بيان الزهد في الدنيا", content: "الزهد في الدنيا من صفات العارفين بالله." },
            { title: "باب في بيان محاسبة النفس", content: "حاسب نفسك قبل أن تُحاسب." },
        ];
    
        const btn = [
            t("The Minor Comprehensive Compilation"),
            t("The Middle Comprehensive Compilation"),
            t("The Grand Comprehensive Compilation"),
            t("World number"),
          ];
        const [openIndex, setOpenIndex] = useState(null);
    
  return (
    <div className="min-h-screen bg-white">
               {/* 🔹 Top Green Section */}
               <div className="text-white rounded-lg text-center w-[95%] mx-auto mt-10">
                   {/* 🔹 Tabs Section */}
                   <div className="flex flex-wrap justify-center gap-3 py-3 ">
                       {btn.map((item, key) => (
                           <button
                               key={key}
                               className="text-black px-10 py-1 rounded-md hover:text-white hover:bg-[#0C6251]  border border-[#0C6251] transition"
                           >
                               {item}
                           </button>
                       ))}
                   </div>
               </div>
               <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[87%] mx-auto bg-[#206D69] py-1 px-2 rounded-md"></div>
   
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
                               placeholder={t('Search by narrators')}
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
                               placeholder={t('Research by topic')}
                               className="flex-grow text-right text-sm  outline-none px-1"
                           />
                           <FaSearch className="text-[#0C6251] text-sm ml-1" />
   
                       </div>
                   </div>
   
                   {/* 🔹 Right Side Text */}
                   <div className="w-1/2 text-right text-sm text-black">
                       <p>{t('Search by sources')}</p>
                   </div>
               </div>
   
   
               {/* 🔹 Main Two-Column Layout */}
               <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                   {/* LEFT — Arabic Text */}
                   <div className="md:col-span-2 border-8 border-gray-100 rounded-md p-6 text-right leading-loose font-[Scheherazade] text-[18px] bg-white shadow-sm">
                       <div className="space-y-4">
   
                           <div className="bg-white  rounded-md p-4 border-b border-gray-200 shadow-sm">
   
                               <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                                   <p className="font-bold text-[#0C6251]">الشرح الصحيح</p>
                                   <p>رقم الحديث <span className="text-black">27615</span></p>
                               </div>
   
                               {/* Content */}
                               <div className="text-right leading-loose font-[Scheherazade] text-[18px] text-black">
                                   <p className="mb-3">
                                       حدثنا <span className="text-[#0C6251]">عبد الله بن يوسف</span> قال حدثنا مالك عن نافع عن عبد الله بن عمر رضي الله عنهما...
                                   </p>
                               </div>
   
   
                               <div className="text-sm text-gray-700 mb-2">
                                   <span className="font-bold text-[#0C6251]">1.1</span> الإيمان / 11 [556] كتاب الإيمان
                               </div>
   
                               {/* Footer */}
                               <div className="text-right text-gray-500 text-sm">
                                   <p>حديث صحيح</p>
                               </div>
                           </div>
   
                           {/* 🔹 Hadith Box 2 */}
                           <div className="bg-white border-b border-gray-200 rounded-md p-4 shadow-sm">
                               <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                                   <p className="font-bold text-[#0C6251]">كتاب الإيمان / باب بيان الإيمان والإسلام والإحسان وبيان فضل العلم</p>
                                   <p>رقم الحديث <span className="text-black">6424</span></p>
                               </div>
   
                               <div className="text-right leading-loose font-[Scheherazade] text-[18px] text-black">
                                   <p className="mb-3">
                                       عن عمر رضي الله عنه قال بينما نحن جلوس عند رسول الله ﷺ ذات يوم إذ طلع علينا رجل شديد بياض الثياب...
                                   </p>
   
                               </div>
   
   
                               <div className="text-sm text-gray-700 mb-2">
                                   <span className="font-bold text-[#0C6251]">1.2</span> الإيمان / 125 [131] باب
                               </div>
   
                               <div className="text-right text-gray-500 text-sm">
                                   <p>رواه مسلم في صحيحه</p>
                               </div>
                           </div>
                           <div className="bg-white border-b border-gray-200 rounded-md p-4 shadow-sm">
                               <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                                   <p className="font-bold text-[#0C6251]">كتاب الإيمان / باب بيان الإيمان والإسلام والإحسان وبيان فضل العلم</p>
                                   <p>رقم الحديث <span className="text-black">6424</span></p>
                               </div>
   
                               <div className="text-right leading-loose font-[Scheherazade] text-[18px] text-black">
                                   <p className="mb-3">
                                       عن عمر رضي الله عنه قال بينما نحن جلوس عند رسول الله ﷺ ذات يوم إذ طلع علينا رجل شديد بياض الثياب...
                                   </p>
   
                               </div>
   
   
                               <div className="text-sm text-gray-700 mb-2">
                                   <span className="font-bold text-[#0C6251]">1.2</span> الإيمان / 125 [131] باب
                               </div>
   
                               <div className="text-right text-gray-500 text-sm">
                                   <p>رواه مسلم في صحيحه</p>
                               </div>
                           </div>
                       </div>
   
                   </div>
   
                   {/* RIGHT — Accordion Section */}
   
                   <div className="bg-gray-100 rounded-md shadow-md p-5 space-y-5">
                       {/* Tabs */}
                       {/* <div className="grid grid-cols-2 gap-2">
               {tabs.map((tab, key) => (
                 <button
                   key={key}
                   className="px-2 py-1 text-[12px] font-bold text-black rounded-md border hover:bg-[#206D69] hover:text-white transition"
                 >
                   {tab}
                 </button>
               ))}
             </div> */}
   
                       {/* Search Bar */}
                       <div className="flex items-center bg-white border border-gray-300 rounded-md shadow px-2 py-2">
                           <button className="flex items-center gap-2 px-3 py-1 text-white bg-[#206D69] font-bold rounded-md hover:bg-[#1a5a56] transition">
                               <span>{t('research')}</span>
                               <FaSearch className="text-white text-sm" />
                           </button>
                           <input
                               type="text"
                               placeholder={t("Search by phrase (Al-a‘mālu bin-niyyāt ) Or (Innamal-aamaal)")}
                               className="flex-grow bg-transparent outline-none text-right text-gray-800 placeholder-gray-600 text-sm px-2"
                           />
                       </div>
   
                       {/* Accordion List */}
                       <div className="space-y-2">
                           {items.map((item, i) => (
                               <div key={i} className="bg-white border rounded-md shadow-sm cursor-pointer">
                                   <div
                                       onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                       className="flex justify-between items-center p-3 text-[#0C6251] hover:bg-gray-100 rounded-[5px]  "
                                   >
                                       {openIndex === i ? (
                                           <FaChevronUp className="text-gray-600" />
                                       ) : (
                                           <FaChevronDown className="text-gray-600" />
                                       )}
                                       <span className="text-sm md:text-base">{item.title}</span>
                                       <FaBook className="text-white text-xl bg-[#206D69] w-10 h-9 p-2" />
   
   
                                   </div>
   
                                   {openIndex === i && (
                                       <div className="p-3 pt-0 text-gray-600 text-sm border-t">{item.content}</div>
                                   )}
                               </div>
                           ))}
                       </div>
                   </div>
                   <div className="mb-20"></div>
               </div>
           </div>
  )
}

export default Allhadees