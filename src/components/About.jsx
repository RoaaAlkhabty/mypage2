import { useState } from "react";
import { useLanguage } from "../LanguageContext";

function About() {
  const [showMore, setShowMore] = useState(false);
  const { isEnglish, translations } = useLanguage();

  return (
    <section id="about" className="bg-light text-center py-5">
      <div className="container" data-aos="fade-up">
        <h2
          className="mb-4 fw-bold"
          style={{
            background: "linear-gradient(to right, #007bff, #6610f2)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          data-aos="zoom-in"
        >
          {isEnglish ? translations.about.title_en : translations.about.title_ar}
        </h2>

        <img
          src="/images/يي.jpg"
          alt="Roa Ahmed"
          className="rounded-circle shadow mb-4"
          width="160"
          height="160"
          data-aos="fade-down"
          style={{ border: "4px solid #fff", objectFit: "cover" }}
        />

        <h3 className="mb-3 text-primary" data-aos="fade-right">
          {isEnglish ? "Roaa Al-Khabty" : "رؤى الخبتي"}
        </h3>

        <p className="lead" data-aos="fade-left">
          {/* الوصف الأول دائمًا */}
          {isEnglish ? translations.about.desc1_en : translations.about.desc1_ar}
          {/* الوصف الثاني يظهر عند الضغط على زر */}
          {showMore &&
            (isEnglish
              ? translations.about.desc2_en
              : translations.about.desc2_ar)}
        </p>

        <button
          onClick={() => setShowMore(!showMore)}
          className="btn btn-primary mt-3 mb-4 shadow-sm"
          data-aos="zoom-in"
        >
          {showMore
            ? isEnglish
              ? translations.about.showLess_en
              : translations.about.showLess_ar
            : isEnglish
            ? translations.about.showMore_en
            : translations.about.showMore_ar}
        </button>
      </div>
    </section>
  );
}

export default About;
