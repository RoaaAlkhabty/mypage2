import { createContext, useState, useContext } from "react";

// النصوص باللغتين
const translations = {
  home: {
    title_ar: "مرحبا، أنا رؤى الخبتي",
    title_en: "Hello, I'm Roaa Alkhapty",
    desc_ar: "مطورة ويب | مصممة واجهات تفاعلية",
    desc_en: "Web Developer | Interactive UI Designer",
    works_ar: "شاهد أعمالي",
    works_en: "View My Work",
    cv_ar: "تحميل السيرة الذاتية",
    cv_en: "Download CV",
  },
 about: {
  title_ar: "من أنا",
  title_en: "About Me",

  // الوصف الأول يظهر دائمًا
  desc1_ar: "أنا مطورة ويب شغوفة ببناء مواقع حديثة وسريعة.",
  desc1_en: "I am a web developer passionate about building modern and fast websites.",

  // الوصف الثاني يظهر عند الضغط على "عرض المزيد"
  desc2_ar: "أطمح لتقديم حلول رقمية متميزة بلمسة فنية تجمع بين الجمال والأداء العالي. لدي خبرة في تصميم وتطوير المواقع الإلكترونية باستخدام أحدث التقنيات، مع التركيز على تجربة المستخدم والتصميم المتجاوب.",
  desc2_en: "I aspire to provide outstanding digital solutions with an artistic touch that combines beauty and high performance. I have experience in designing and developing websites using the latest technologies, focusing on user experience and responsive design.",

  showMore_ar: "اعرض المزيد",
  showMore_en: "Show more",
  showLess_ar: "أخفِ التفاصيل",
  showLess_en: "Show less"
},

  portfolio: {
    title_ar: "أعمالي",
    title_en: "My Work",
  },
  contact: {
    title_ar: "تواصل معي",
    title_en: "Contact Me",
  },
};

// إنشاء context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => setIsEnglish((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// hook للاستخدام السهل
export const useLanguage = () => useContext(LanguageContext);
