import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sn77tub",   // Service ID
        "template_oaxjlzm",  // Template ID
        form.current,
        "IT9PG_3_Xkyp1O-pf"   // Public Key
      )
      .then(
        (result) => {
          alert("✅ تم إرسال الرسالة بنجاح!");
        },
        (error) => {
          alert("❌ حدث خطأ، حاول مرة أخرى.");
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
          تواصل معي
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-75 mx-auto shadow p-4 rounded bg-white"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input type="text" name="name" className="form-control p-3 shadow-sm" placeholder="الاسم الكامل" required />
          </div>

          <div className="mb-3">
            <input type="email" name="email" className="form-control p-3 shadow-sm" placeholder="البريد الإلكتروني" required />
          </div>

          <div className="mb-3">
            <textarea name="message" className="form-control p-3 shadow-sm" rows="4" placeholder="رسالتك"></textarea>
          </div>

          <button
            type="submit"
            className="btn px-5 py-2 fw-bold shadow-sm"
            style={{
              background: "linear-gradient(to right, #007bff, #6610f2)",
              border: "none",
              color: "#fff",
            }}
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

//template_oaxjlzm
//service_sn77tub
//IT9PG_3_Xkyp1O-pf