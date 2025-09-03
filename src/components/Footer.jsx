import { useLanguage } from "../LanguageContext";

function Footer() {
  const { isEnglish } = useLanguage();

  return (
    <footer
      className="text-center py-4 text-white"
      style={{
        background: "linear-gradient(to right, #010914ff, #0f0d02ff)",
      }}
    >
      {/* الأيقونات */}
      <div className="mb-3 d-flex justify-content-center gap-3 flex-wrap">
        <a
          href="https://github.com/RoaaAlkhabty"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle border border-light fs-5"
          style={{
            width: "45px",
            height: "45px",
            transition: "0.3s",
            color: "#fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="https://wa.me/+967739932213"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle border border-light fs-5"
          style={{ width: "45px", height: "45px", transition: "0.3s", color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#25d366")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <i className="bi bi-whatsapp"></i>
        </a>

        <a
          href="https://t.me/Roaa7i0"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle border border-light fs-5"
          style={{ width: "45px", height: "45px", transition: "0.3s", color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0088cc")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <i className="bi bi-telegram"></i>
        </a>

        <a
          href="https://www.facebook.com/share/1EFTcnEAWi/"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle border border-light fs-5"
          style={{ width: "45px", height: "45px", transition: "0.3s", color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1877f2")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <i className="bi bi-facebook"></i>
        </a>

        <a
          href="https://instagram.com/filiayagher2001"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle border border-light fs-5"
          style={{ width: "45px", height: "45px", transition: "0.3s", color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e4405f")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>

      {/* حقوق النشر */}
      <p className="mb-0 small">
        {isEnglish
          ? "© 2025 All Rights Reserved - "
          : "© 2025 جميع الحقوق محفوظة - "}
        <strong>{isEnglish ? "Roaa Alkhapty" : "رؤى الخبتي"}</strong>
      </p>
    </footer>
  );
}

export default Footer;
