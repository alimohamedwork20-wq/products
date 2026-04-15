import React, { useState } from "react";
import "./Blog.css";
import LoadingBlog from "./LoadingBlog";

export default function Blog() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const data = [
    {
      id: 1,
      title: "أفضل منتجات 2026",
      text: "تعرف على أفضل المنتجات.",
      content:
        "في عام 2026 ظهرت منتجات قوية جدًا في السوق، خاصة في مجال الهواتف الذكية والأجهزة المنزلية...",
    },
    {
      id: 2,
      title: "نصائح قبل الشراء",
      text: "اختار صح.",
      content:
        "قبل ما تشتري أي منتج، لازم تقارن بين أكتر من موقع وتشوف تقييمات الناس...",
    },
    {
      id: 3,
      title: "أفضل العروض",
      text: "خصومات.",
      content:
        "العروض بتيجي في مواسم معينة زي الجمعة البيضاء أو بداية السنة...",
    },
    {
      id: 4,
      title: "موبايلات",
      text: "أفضل الهواتف.",
      content:
        "اختيار الموبايل بيعتمد على استخدامك: الكاميرا أو المعالج أو البطارية...",
    },
    {
      id: 5,
      title: "إلكترونيات",
      text: "أجهزة حديثة.",
      content: "الأجهزة الإلكترونية بقت جزء أساسي من حياتنا اليومية...",
    },
    {
      id: 6,
      title: "منزل",
      text: "أدوات.",
      content: "الأدوات المنزلية الحديثة بتوفر وقت ومجهود كبير...",
    },
    {
      id: 7,
      title: "أزياء",
      text: "موضة.",
      content: "موضة 2026 بتميل للبساطة والألوان الهادية...",
    },
    {
      id: 8,
      title: "عروض",
      text: "خصومات.",
      content: "تابع العروض الأسبوعية لأنها بتكون قوية جدًا...",
    },
    {
      id: 9,
      title: "لابتوبات",
      text: "أجهزة قوية.",
      content: "اللابتوب لازم يكون مناسب لاستخدامك سواء دراسة أو شغل...",
    },
    {
      id: 10,
      title: "إكسسوارات",
      text: "أدوات.",
      content: "الإكسسوارات بتفرق جدًا في تجربة الاستخدام اليومية...",
    },
    {
      id: 11,
      title: "مقارنات",
      text: "اختار الأفضل.",
      content: "المقارنة بين المنتجات بتساعدك تاخد قرار صح...",
    },
    {
      id: 12,
      title: "تسوق",
      text: "نصائح.",
      content: "حدد ميزانيتك واستخدم العروض والكوبونات...",
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">📰 Blog</h1>

      <div className="blog-container">
        {data.map((item) => (
          <BlogCard
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}

/* ===================== */
/*        CARD           */
/* ===================== */

function BlogCard({ item, isOpen, toggle }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="blog-card">
      {/* الصورة + loading */}
      <div className="image-wrapper">
        {!imgLoaded && <LoadingBlog />}

        <img
          src={process.env.PUBLIC_URL + `/img/blog${item.id}.jpg`}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "0.3s",
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* المحتوى */}
      {imgLoaded && (
        <>
          <h3>{item.title}</h3>
          <p>{item.text}</p>

          <button onClick={() => toggle(item.id)}>
            {isOpen ? "إخفاء" : "اقرأ المزيد"}
          </button>

          <div className={`collapse-box ${isOpen ? "open" : ""}`}>
            <p>{item.content}</p>
          </div>
        </>
      )}
    </div>
  );
}
