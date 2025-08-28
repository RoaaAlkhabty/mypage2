import { useState } from "react";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "مول رؤيا",
      img: "hj2.png",
      description: "موقع لمول يقوم بعرض المنتجات وايضا امكانية حجزها عبر الموقع",
      more: "يمكنك تصفح المنتجات، الحجز أونلاين، ومتابعة العروض اليومية.",
      link: "https://royaa-wine.vercel.app/"
    },
    {
      title: "مقهى كاواي",
      img: "hj1.png",
      description: "موقع لمقهى كاواي يقدم قائمة الطعام، الحجز أونلاين، وصور للمقهى بطريقة جذابة.",
      more: "يعرض الموقع قائمة الطعام، حجز الطاولات، وصور لكل قسم من المقهى.",
      link: "https://kawaiicafe.vercel.app/"
    },
    {
      title: "مجمع رؤيا للمنصات التعليمية",
      img: "hj.png",
      description: "مجمع رؤيا للمنصات التعليمية يقوم بجلب 47 منصة تعليمية لتخصصات البرمجة، الطب، المحاسبة، وإدارة الأعمال.",
      more: "الموقع يحتوي على تصنيفات متعددة وروابط سريعة لكل منصة تعليمية.",
      link: "https://he-one-theta.vercel.app/"
    },
    {
      title: "كروت عمل",
      img: "كرت.jpg",
      description: "اقوم بالعمل على تصميم كروت شخصية مع الشعار باستخدام الجوال او برنامج الفوتوشوب",
      more: "تصميم كروت عمل"
    },

    {
      title: "ثيمات",
      img: "ثيم.png",
      description: "اقوم بالعمل على تصميم ثيمات سوا تخرج او اعياد ميلاد وغيرها بطريقة ملفته وابداعية .",
      more: "تصميم ثيمات مميزة"
    },
    {
      title: "برشورات",
      img: "برشور2.jpg",
      description:  "تصميم برشورات احترافية بالوان متناسقة ورائعة .",
      more: "تصميم برشورات احترافية"
    },
    {
      title: "دعوات زفاف",
      img: "دعوة.jpg",
      description:  "تصميم دعوات زفاف ابتكارية  مصممة بأشكال جذابة وتصاميم جديدة .",
      more: "تصميم دعوات زفاف مبتكرة وغير مقلدة"
    },
    {
      title: "جرائد",
      img: "جريده.jpg",
      description:  "تصميم جرائد اعياد ميلاد بطريقة لطيفه وانيقة .",
      more: "تصميم جرائد لطيفة"
    },
    {
      title: "صور للطبيعة",
      img: "ت.jpg",
      description:  "عندي حب التصوير فاقوم بالتقاط صور للطبيعة بطريقة جيدة .",
      more: "من منتزه السكون مدينة التربة"
    }
  ];

  return (
    <section id="portfolio" className="text-center py-5">
      <div className="container">
        <h2 className="mb-5" data-aos="fade-up">
          أعمالي
        </h2>
        <div className="row g-4">
          {projects.map((project, i) => (
            <div
              className="col-md-4"
              data-aos="flip-left"
              data-aos-delay={i * 200}
              key={i}
            >
              <div
                className="card shadow-sm h-100 hover-card position-relative"
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                {/* صورة المشروع */}
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                  style={{ transition: "transform 0.3s" }}
                />
                {/* overlay مع أيقونات */}
                <div
                  className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-light"
                      onClick={() => setSelectedProject(project)}
                      title="معاينة"
                    >
                      👁
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light"
                      title="زيارة المشروع"
                    >
                      🔗
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* نافذة منبثقة */}
        {selectedProject && (
          <div
            className="modal-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-content p-4 bg-white rounded"
              style={{ maxWidth: "600px", width: "90%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selectedProject.title}</h3>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                style={{ width: "100%", borderRadius: "5px", marginBottom: "1rem" }}
              />
              <p>{selectedProject.more}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-primary mt-3"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
