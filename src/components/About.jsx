import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { title: "تطوير الويب", description: "أطوّر مواقع ويب باستخدام React, Vite, Bootstrap مع التركيز على الأداء وتجربة المستخدم المثالية." },
    { title: "تصميم الويب", description: "أصمّم واجهات مستخدم جذابة وسهلة الاستخدام مع الحفاظ على الهوية البصرية للمشروع." },
    { title: "التصوير الفوتوغرافي", description: "هوايتي التي أمارسها دائمًا مع التركيز على التصوير الطبيعي." },
    { title: "تحسين الأداء", description: "أحرص على أن تكون المواقع سريعة التحميل ومحسّنة لمحركات البحث." }
  ];

  const hobbies = [
    { title: "الاستماع للبودكاست", description: "احب الاستماع للبودكاست خاصه البودكاست التقني والبرمجي " },
    { title: "التصوير", description: "التقاط اللحظات الجميلة بطريقة إبداعية تضيف لمسة فنية للصور." },
    { title: "التصميم", description: "تصاميم فنية ومميزة تجمع بين الجمال والوظيفة بطريقة احترافية." },
    { title: "قراءة الكتب", description: "أحب قراءة الكتب خاصة التقنية وتطوير الذات لتوسيع المعرفة وتحسين المهارات." },
    { title: "الكتابة", description: "كتابة مقالات وعبارات وتجارب شخصية بطريقة واضحة وملهمة." },
    { title: "السفر", description: "استكشاف أماكن جديدة وثقافات مختلفة لتوسيع الآفاق وتجربة تجارب متنوعة." }
  ];

  return (
    <section id="about" className="bg-light text-center py-5">
      <div className="container" data-aos="fade-up">
        {/* العنوان الرئيسي */}
        <h2 className="mb-4 fw-bold" style={{ 
          background: "linear-gradient(to right, #007bff, #6610f2)", 
          WebkitBackgroundClip: "text", 
          color: "transparent" 
        }} data-aos="zoom-in">
          من أنا
        </h2>

        {/* صورة شخصية */}
        <img
          src="يي.jpg"  // ضع مسار صورتك هنا (مثلاً داخل public/images)
          alt="Roa Ahmed"
          className="rounded-circle shadow mb-4"
          width="160"
          height="160"
          data-aos="fade-down"
          style={{ border: "4px solid #fff", objectFit: "cover" }}
        />

        <h3 className="mb-3 text-primary" data-aos="fade-right">رؤى الخبتي</h3>

        <p className="lead" data-aos="fade-left">
          مبرمجة ومصممة مواقع ويب محترفة. أحب البرمجة، التصميم، التصوير، والإبداع.
          {showMore && " أطمح لتقديم حلول رقمية متميزة بلمسة فنية تجمع بين الجمال والأداء المتميز. لدي خبرة في تصميم وتطوير المواقع الإلكترونية باستخدام أحدث التقنيات، مع التركيز على تجربة المستخدم والتصميم المتجاوب."}
        </p>

        <button
          onClick={() => setShowMore(!showMore)}
          className="btn btn-primary mt-3 mb-4 shadow-sm"
          data-aos="zoom-in"
        >
          {showMore ? "أخفِ التفاصيل" : "اعرض المزيد"}
        </button>

        {/* المسيرة التعليمية */}
        <h4 className="mt-4 mb-3 text-success" data-aos="fade-up">المسيرة التعليمية</h4>
        <ul className="list-group list-group-flush text-start mx-auto" style={{ maxWidth: "600px" }}>
          <center>
          <li className="list-group-item" data-aos="fade-right">
            <strong>بكالوريوس علوم الحاسوب</strong> - جامعة تعز | معدل تراكمي: 93.59
          </li>
          <li className="list-group-item" data-aos="fade-left">
            <strong>الثانوية العامة</strong> - مدرسة الوحدة بنات، القسم العلمي | معدل: 94.63
          </li>
          </center>
        </ul>

        {/* المهارات */}
        <h4 className="mt-5 mb-3 text-info" data-aos="zoom-in">مهاراتي</h4>
        <div className="accordion mx-auto" id="skillsAccordion" style={{ maxWidth: "700px" }}>
          {skills.map((skill, index) => (
            <div className="accordion-item shadow-sm" key={index} data-aos="fade-up">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${activeSkill === index ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                >
                  {skill.title}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${activeSkill === index ? "show" : ""}`}>
                <div className="accordion-body text-start">
                  {skill.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الهوايات */}
        <h4 className="mt-5 mb-3 text-danger" data-aos="zoom-in">هواياتي</h4>
        <div className="row g-4 mx-auto" style={{ maxWidth: "900px" }}>
          {hobbies.map((hobby, i) => (
            <div className="col-md-4" key={i} data-aos="flip-left">
              <div 
                className="card h-100 shadow-sm border-0" 
                style={{ transition: "0.3s", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">{hobby.title}</h5>
                  <p className="card-text">{hobby.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
