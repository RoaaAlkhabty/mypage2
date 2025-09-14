import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // تأكد من استيراد CSS الخاص بـ AOS

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة التأثير بالمللي ثانية
      once: true,     // التأثير يحدث مرة واحدة عند التمرير
      mirror: false,  // التأثير لا يعكس عند تمرير العنصر للخارج
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
