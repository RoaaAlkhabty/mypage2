import { useRef } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../LanguageContext";

function Contact() {
  const form = useRef();
  const { isEnglish, translations } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sn77tub", // Service ID
        "template_oaxjlzm", // Template ID
        form.current,
        "IT9PG_3_Xkyp1O-pf" // Public Key
      )
      .then(
        () => {
          alert(
            isEnglish
              ? "✅ Message sent successfully!"
              : "✅ تم إرسال الرسالة بنجاح!"
          );
        },
        () => {
          alert(
            isEnglish
              ? "❌ Error occurred, please try again."
              : "❌ حدث خطأ، حاول مرة أخرى."
          );
        }
      );
  };

  return (
    <section id="contact" className="bg-light py-5">
      <div className="container text-center" data-aos="fade-up">
        <h2
          className="mb-4 fw-bold"
          style={{
            background: "linear-gradient(to right, #007bff, #6610f2)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {isEnglish
            ? translations.contact.title_en
            : translations.contact.title_ar}
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto shadow p-4 rounded bg-white w-100"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control p-3 shadow-sm"
              placeholder={isEnglish ? "Full Name" : "الاسم الكامل"}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control p-3 shadow-sm"
              placeholder={isEnglish ? "Email Address" : "البريد الإلكتروني"}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              className="form-control p-3 shadow-sm"
              rows="4"
              placeholder={isEnglish ? "Your Message" : "رسالتك"}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-100 px-3 py-2 fw-bold shadow-sm"
            style={{
              background: "linear-gradient(to right, #007bff, #6610f2)",
              border: "none",
              color: "#fff",
            }}
          >
            {isEnglish ? "Send" : "إرسال"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
