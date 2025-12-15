// "use client"
// import { useTranslation } from "react-i18next";
// import Banner from "./Banner";

// export default function Qirat() {
//   const {t} = useTranslation()
//   return (
//     <div className="min-h-screen py-12 mt-50">


//       {/* Top Stats Section with connecting lines */}
//      <div className="flex  flex-wrap justify-center items-center text-center mb-16 relative gap-10">
//   {/* Box 1 */}
//   <div className="relative flex flex-col items-center">
//     <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
//       <div className="text-2xl font-semibold text-teal-700">2029</div>
//       <div className="text-gray-700 mt-1">{t("المصادر المستنْدمة")}</div>
//     </div>
//     <div className="hidden md:block absolute top-1/2 right-[-40px] w-10 h-[2px] bg-teal-700"></div>
//   </div>

//   {/* Box 2 */}
//   <div className="relative flex flex-col items-center">
//     <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
//       <div className="text-2xl font-semibold text-teal-700">11451</div>
//       <div className="text-gray-700 mt-1">{t("عدد طرق الأحاديث")}</div>
//     </div>
//     <div className="hidden md:block absolute top-1/2 right-[-40px] w-10 h-[2px] bg-teal-700"></div>
//   </div>

//   {/* Box 3 */}
//   <div className="relative flex flex-col items-center">
//     <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
//       <div className="text-2xl font-semibold text-teal-700">1020</div>
//       <div className="text-gray-700 mt-1">{t("عدد الأحاديث المرفوعة")}</div>
//     </div>
//     <div className="hidden md:block absolute top-1/2 right-[-40px] w-10 h-[2px] bg-teal-700"></div>
//   </div>

//   {/* Box 4 */}
//   <div className="relative flex flex-col items-center">
//     <div className="border-2 border-teal-700 rounded-xl p-6 w-52 bg-white shadow-sm z-10 h-32 flex flex-col justify-center">
//       <div className="text-2xl font-semibold text-teal-700">7414</div>
//       <div className="text-gray-700 mt-1">{t("الموضوعات والعناوين")}</div>
//     </div>
//   </div>
// </div>


//       <div className="text-center mb-12">
//         <div className="flex justify-center mb-7">
//           <img
//             src="/headingimg.png" 
//             alt="decorative center icon"
//             className="w-30 mt-5"
//           />
//         </div>
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">
//           {t("قِرَاءَةُ الْمُدَوَّنَةِ")}
//         </h2>
//         {/* <div className="w-16 h-1 bg-teal-700 mx-auto rounded-full"></div> */}
//       </div>

//       {/* Blog Cards */}
//       <div className="flex flex-wrap justify-center gap-10 rtl text-right px-6">
//         {/* Card 1 */}
//         <div className="max-w-sm text-center">
//           <div className="bg-teal-700 text-white w-8 h-8 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
//             1
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             المدونة الجامعة الكبرى
//           </h3>
//           <p className="text-gray-600 mb-3">
//             في مائة مجلدٍ تقريبًا على المقْياس الكبير
//           </p>
//           <a href="#" className="text-teal-700 hover:underline font-medium">

//            {t("شاهد المزيد")}
//           </a>
//         </div>

//         {/* Card 2 */}
//         <div className="max-w-sm text-center">
//           <div className="bg-teal-700 text-white w-8 h-8 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
//             2
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             المدونة الجامعة الوسطى
//           </h3>
//           <p className="text-gray-600 mb-3">
//             في خمس وأربعين مجلدًا تقريبًا على المقْياس الكبير
//           </p>
//           <a href="#" className="text-teal-700 hover:underline font-medium">
//            {t("شاهد المزيد")}

//           </a>
//         </div>

//         {/* Card 3 */}
//         <div className="max-w-sm text-center">
//           <div className="bg-teal-700 text-white w-8 h-8 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
//             3
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             المدونة الجامعة الصغرى
//           </h3>
//           <p className="text-gray-600 mb-3">
//             في اثني عشر مجلدًا تقريبًا على المقْياس الكبير
//           </p>
//           <a href="#" className="text-teal-700 hover:underline font-medium">
//                        {t("شاهد المزيد")}

//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }







"use client";
import { useTranslation } from "react-i18next";

export default function Qirat() {
  const { t } = useTranslation();

  const cards = [
    {
      number: 2029,
      text: "المصادر المستنْدمة",
    },
    {
      number: 11451,
      text: "عدد طرق الأحاديث",
    },
    {
      number: 1020,
      text: "عدد الأحاديث المرفوعة",
    },
    {
      number: 7414,
      text: "الموضوعات والعناوين",
    },
  ];




  return (
    <>
      <div className="md:mt-60">

        <div className="block md:hidden w-full px-6 mt-20 ">
          <div className="grid grid-cols-2  gap-0.5 ">


            <div className="border-2 border-teal-700 rounded-bl-4xl rounded-md  p-4 bg-white shadow-sm text-center">
              <div className="text-xl font-semibold text-teal-700">2029</div>
              <div className="text-gray-700 text-sm mt-1">{t("المصادر المستنْدمة")}</div>
            </div>


            <div className="border-2 border-teal-700 rounded-br-3xl rounded-md p-4 bg-white shadow-sm text-center">
              <div className="text-xl font-semibold text-teal-700">11451</div>
              <div className="text-gray-700 text-sm mt-1">{t("عدد طرق الأحاديث")}</div>
            </div>

            {/* Center Flower */}
            <div className="col-span-2 flex justify-center">
              <img src="/flower.png" className="w-10  absolute -mt-5" />
            </div>

            {/* Box 3 */}
            <div className="border-2 border-teal-700 rounded-md  rounded-tl-4xl p-4 bg-white shadow-sm text-center">
              <div className="text-xl font-semibold text-teal-700">1020</div>
              <div className="text-gray-700 text-sm mt-1">{t("عدد الأحاديث المرفوعة")}</div>
            </div>

            {/* Box 4 */}
            <div className="border-2 border-teal-700 rounded-md  rounded-tr-4xl p-4 bg-white shadow-sm text-center">
              <div className="text-xl font-semibold text-teal-700">7414</div>
              <div className="text-gray-700 text-sm mt-1">{t("الموضوعات والعناوين")}</div>
            </div>
          </div>
        </div>


        <div className="hidden md:flex justify-center items-center gap-10 mb-16 relative">

          {cards.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">

              {/* Top Dot */}
              <img
                src="/flower.png"
                alt="flower"
                className="w-6 h-6 absolute -top-4 z-10"
              />
              {/* Card */}
              <div className="border-2 border-teal-700 rounded-xl p-8 w-52 h-20 bg-white shadow-sm flex flex-col justify-center text-center">
                <div className="text-2xl font-semibold text-teal-700 tracking-widest ">
                  {item.number}
                </div>
                <div className="text-gray-700 mt-1">
                  {t(item.text)}
                </div>
              </div>

              {/* Horizontal Line (except last card) */}
              {index !== cards.length - 1 && (
                <div className="absolute top-1/2 -right-12 -translate-y-1/2">
                  <div className="w-12 h-6 border-b-4  border-teal-700 rounded-b-4xl"></div>
                </div>
              )}
            </div>
          ))}




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

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 rtl text-right mt-16">
      <div className="relative max-w-sm mx-auto
  border px-15 border-teal-600 rounded-xl p-6
  flex flex-row-reverse items-center gap-4 
  lg:block lg:text-center lg:border-none lg:p-0">

  {/* NUMBER */}
  <div className="flex-shrink-0
    bg-teal-700 text-white w-18 h-18 rounded-full
    flex items-center justify-center font-bold  
    lg:mx-auto lg:mb-3">
    1
  </div>

  {/* CONTENT */}
  <div className="flex-1">
    <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-1">
      المدونة الجامعة الكبرى
    </h3>

    <p className="text-gray-600 text-sm lg:text-base mb-2">
      في مائة مجلدٍ تقريبًا على المقْياس الكبير
    </p>

    <a
      href="#"
      className="inline-block bg-gray-200 text-gray-700
      text-xs px-3 py-1 rounded
      lg:bg-transparent lg:text-teal-700 lg:text-base">
      شاهد المزيد
    </a>
  </div>
</div>


        {/* CARD 2 */}
        <div className="relative max-w-sm mx-auto
  border border-teal-600 rounded-xl p-4
  flex flex-row-reverse items-center gap-4
  lg:block lg:text-center lg:border-none lg:p-0">

          {/* NUMBER */}
          <div className="flex-shrink-0
    bg-teal-700 text-white w-18 h-18 rounded-full
    flex items-center justify-center font-bold
    lg:mx-auto lg:mb-3">
            2
          </div>
          <div className="flex-1">
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-1">            المدونة الجامعة الوسطى
            </h3>
            <p className="text-gray-600 mb-3">
              في خمس وأربعين مجلدًا تقريبًا على المقْياس الكبير
            </p>
            <a
              href="#"
              className="inline-block bg-gray-200 text-gray-700
      text-xs px-3 py-1 rounded
      lg:bg-transparent lg:text-teal-700 lg:text-base">
              {t("شاهد المزيد")}
            </a>
          </div>
        </div>


        {/* CARD 3 */}
              <div className="relative max-w-sm mx-auto
  border px-7 border-teal-600 rounded-xl p-6
  flex flex-row-reverse items-center gap-4
  lg:block lg:text-center lg:border-none lg:p-0">

          {/* NUMBER */}
                <div className="flex-shrink-0
    bg-teal-700 text-white w-18 h-18 rounded-full
    flex items-center justify-center font-bold
    lg:mx-auto lg:mb-3">
            3
          </div>
          <div className="flex-1">
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-1">           
            المدونة الجامعة الصغرى
          </h3>
          <p className="text-gray-600 mb-3">
            في اثني عشر مجلدًا تقريبًا على المقْياس الكبير
          </p>
             <a
              href="#"
              className="inline-block bg-gray-200 text-gray-700
      text-xs px-3 py-1 rounded
      lg:bg-transparent lg:text-teal-700 lg:text-base">
              {t("شاهد المزيد")}
            </a>
        </div>
</div>












        {/* <div className="max-w-sm mx-auto text-center">
            <div className="bg-teal-700 text-white w-10 h-10 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
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
          </div> */}

        {/* CARD 2 */}
        {/* <div className="max-w-sm mx-auto text-center">
          <div className="bg-teal-700 text-white w-10 h-10 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
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
        </div> */}

        {/* CARD 3 */}
        {/* <div className="max-w-sm mx-auto text-center">
          <div className="bg-teal-700 text-white w-10 h-10 rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-3">
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
        </div> */}

      </div>

    </>

  );
}
