import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showSearch, setShowSearch] = useState(false);

  const sections = [
    { name: "الرئيسية", href: "#home" },
    { name: "من أنا", href: "#about" },
    { name: "الأعمال", href: "#portfolio" },
    { name: "تواصل", href: "#contact" },
  ];

  // تحديث الوقت كل ثانية
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // تحديث القسم النشط عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "#home";
      sections.forEach((section) => {
        const element = document.querySelector(section.href);
        if (element) {
          const top = element.offsetTop - 80;
          if (window.scrollY >= top) {
            current = section.href;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-navbar ${
        scrolled ? "navbar-dark shadow-sm" : "navbar-light"
      }`}
      style={{
        transition: "all 0.3s ease",
        background: scrolled
          ? "linear-gradient(to right, #0d6efd, #6610f2)"
          : "rgba(255,255,255,0.9)",
      }}
    >
      <div className="container">
        {/* شعار الموقع */}
        <a className="navbar-brand fw-bold" href="#home">
          موقعي الشخصي
        </a>

        {/* زر التبديل للهواتف */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* القائمة */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {sections.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link position-relative ${
                    activeSection === item.href ? "active-link" : ""
                  }`}
                  href={item.href}
                  style={{ transition: "color 0.3s" }}
                >
                  {item.name}
                  <span className="hover-underline"></span>
                </a>
              </li>
            ))}
          </ul>

          
            {/* عرض الوقت */}
          <div className="d-flex align-items-center ms-3">
            <span className="ms-9 small fw-bold">{time}</span>
          </div>
        </div>
      </div>

      {/* CSS داخلي */}
      <style jsx>{`
        .nav-link {
          color: inherit;
        }
        .nav-link:hover,
        .nav-link.active-link {
          color: #0d6efd !important;
        }
        .nav-link .hover-underline {
          content: "";
          display: block;
          height: 2px;
          width: 0;
          background: #0d6efd;
          transition: width 0.3s;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .nav-link:hover .hover-underline,
        .nav-link.active-link .hover-underline {
          width: 100%;
        }
        .transition-navbar {
          backdrop-filter: blur(6px);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
