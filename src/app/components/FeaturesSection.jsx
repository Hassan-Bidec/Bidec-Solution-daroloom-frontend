"use client"
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const {t} = useTranslation()
  return (
    <div className="relative bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-right rtl overflow-hidden">
      {/* Decorative Frame (Full Width, No Scroll) */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mb-10 hidden sm:block">
  <img
    src="/Frame.png"
    alt="decoration"
    className="w-full h-20 object-cover mt-1 mb-10"
  />
</div>





      {/* Heading Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/headingimg.png"
          alt="decoration"
          className="w-24 sm:w-32 md:w-40 h-14 object-contain"
        />
      </div>

      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        {t("المُمَيِّزَاتُ الهَامَّةُ")}
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 font-bold leading-relaxed text-gray-800">
        {/* Right Column (Kaaba + Text) */}
        <div className="md:w-1/2 space-y-6">
          <ul
            className="space-y-3 text-right [direction:rtl]"
            style={{
              fontFamily: "adwa-assalaf",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "32px",
              listStyleType: "none",
            }}
          >
            {[
              "عدد الأحاديث المرفوعة 210000 في أكثر من 23000 باب، وبرواية مع الأسباب والشروح 400000",
              "الشرح الكامل لجميع الأحاديث المرفوعة زادًا وإسنادًا وتمييزًا، بأسلوب حديث سهل نافع، خرج مصححًا، هذه المدونة هي عمل المستبصرين، تخرج منها سائر خدمات الأمة المحدثة بإذن الله.",
              "جمع الأحاديث على أكبر القياسات في أكبر عدد من الكتب، مع مصدر حديثي معتمد.",
              "تخريج موحد لجميع الأحاديث تحت موضوع واحد مستمر في صفحات المجموع الكبير.",
              "إعداد وحفظ قاعدة البيانات على الكمبيوتر.",
            ].map((text, i) => (
              <li key={i} className="relative pr-6 sm:pr-8">
                <span className="absolute right-0 text-teal-700">•</span>
                <span className="block">{t(`${text}`)}</span>
              </li>
            ))}
          </ul>

          {/* Kaaba Image */}
          <div className="flex justify-center md:justify-end mt-6">
            <img
              src="/madina.png"
              alt="Kaaba"
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover h-auto"
            />
          </div>
        </div>

        {/* Left Column (Masjid + Text) */}
        <div className="md:w-1/2 space-y-6">
          {/* Masjid Image */}
          <div className="flex justify-center md:justify-start mb-6">
            <img
              src="/kabaa.png"
              alt="Masjid Nabawi"
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover h-auto"
            />
          </div>

          <ul
            className="space-y-3 text-right [direction:rtl]"
            style={{
              fontFamily: "adwa-assalaf",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "32px",
              listStyleType: "none",
            }}
          >
            {[
              "الترتيب للأحاديث المرفوعة المنسوبة إلى النبي صلى الله عليه وسلم بدون تكرار، لتكون أول مرة في العالم الحديثي الكبير الرواة، المخرجة شروحها فقط.",
              "ذكر الحكم على كل حديث من الصحة والضعف والعلل.",
              "توزيع الأحاديث على المجلدات والوحدات.",
              "ترجمة الحديث إلى اللغة الإنجليزية مع المحافظة على نفس الترتيب العربي.",
              "إخراج الشرح بعد عرض حديث النبي صلى الله عليه وسلم مباشرةً، مما يسهل الفهم والتدبر.",
            ].map((text, i) => (
              <li key={i} className="relative pr-6 sm:pr-8">
                <span className="absolute right-0 text-teal-700">•</span>
                <span className="block">{t(`${text}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
