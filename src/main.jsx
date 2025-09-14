import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// استيراد مكتبات CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./index.css";

// مزود اللغة للتبديل بين العربية والإنجليزية
import { LanguageProvider } from "./LanguageContext";

// إنشاء الجذر وعرض التطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
