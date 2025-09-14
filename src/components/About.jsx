import { useState } from "react";
import { useLanguage } from "../LanguageContext";

function About() {
  const [showMore, setShowMore] = useState(false);
  const { isEnglish, translations } = useLanguage();

  return (
    <section id="about" className="bg-light text-center py-5">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            {/* العنوان */}
            <h2
              className="mb-4 fw-bold"
              style={{
                background: "linear-gradient(to right, #007bff, #6610f2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              data-aos="zoom-in"
            >
              {isEnglish
                ? translations.about.title_en
                : translations.about.title_ar}
            </h2>

            {/* الصورة */}
            <img
              src={`${import.meta.env.BASE_URL}images/يي.jpg`}
              alt="Roa Ahmed"
              className="rounded-circle shadow-lg mb-4 img-fluid"
              style={{
                border: "4px solid white",
                objectFit: "cover",
                width: "150px",
                height: "150px",
                maxWidth: "100%",
              }}
              data-aos="fade-down"
            />

            {/* الاسم */}
            <h3 className="mb-3 text-primary" data-aos="fade-right">
              {isEnglish ? "Roaa Al-Khabty" : "رؤى الخبتي"}
            </h3>

            {/* الوصف */}
            <p className="lead px-2" data-aos="fade-left">
              {isEnglish
                ? translations.about.desc1_en
                : translations.about.desc1_ar}

              {showMore &&
                (isEnglish
                  ? translations.about.desc2_en
                  : translations.about.desc2_ar)}
            </p>

            {/* زر عرض المزيد */}
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
        </div>
      </div>
    </section>
  );
}

export default About;
