import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

function Home() {
  const [gradient, setGradient] = useState(0);
  const [stars, setStars] = useState([]);
  const { isEnglish, toggleLanguage, translations } = useLanguage();

  useEffect(() => {
    const numStars = 50;
    const tempStars = [];
    for (let i = 0; i < numStars; i++) {
      tempStars.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 6 + 3,
        delay: Math.random() * 5,
      });
    }
    setStars(tempStars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient((prev) => (prev + 1) % 360);
    }, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-center text-white position-relative overflow-hidden"
      style={{
        background: `linear-gradient(${gradient}deg, #0d1b2a, #1b263b)`,
        height: "100vh",
        transition: "background 0.5s linear",
      }}
    >
      <div className="stars">
        {stars.map((star, index) => (
          <span
            key={index}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <img
          src="/images/اسمي.jpg"
          alt="Roa Ahmed"
          className="rounded-circle shadow-lg mb-4"
          width="150"
          height="150"
          data-aos="fade-down"
          style={{ border: "4px solid white", objectFit: "cover" }}
        />

        <h1
          className="fw-bold"
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
        >
          {isEnglish ? translations.home.title_en : translations.home.title_ar}
        </h1>
        <p
          className="lead"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.5)" }}
        >
          {isEnglish ? translations.home.desc_en : translations.home.desc_ar}
        </p>

        <a
          href="#portfolio"
          className="btn btn-light mt-4 px-4 py-2 fw-bold shadow-lg d-block mx-auto"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {isEnglish ? translations.home.works_en : translations.home.works_ar}
        </a>

        <a
          href="roaa.pdf"
          download
          className="btn btn-outline-light mt-3 px-4 py-2 fw-bold shadow-lg d-block mx-auto"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          {isEnglish ? translations.home.cv_en : translations.home.cv_ar}
        </a>

        <button
          onClick={toggleLanguage}
          className="btn btn-warning mt-3 px-4 py-2 fw-bold shadow-lg d-block mx-auto"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          {isEnglish ? "العربية" : "English"}
        </button>
      </div>

      <style jsx>{`
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 1;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: twinkle 3s infinite alternate;
        }
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
