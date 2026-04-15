import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(24, 111, 210, 0.32), rgba(255, 255, 255, 0.03)), url("/img/pexels-siljeao-264851155-35560482.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="about-hero section"
      >
        <h1 className="text-primary">نحن نبني تجربة تسوق ذكية 🚀</h1>
        <p>
          منصة عربية حديثة تهدف لتقديم تجربة تسوق سريعة، آمنة، وسهلة لكل
          المستخدمين.
        </p>
      </section>

      {/* 1 LEFT TEXT / RIGHT ANIMATION */}
      <section className="about-row section">
        <div className="text left">
          <h2>
            <i className="fa-solid fa-arrows-down-to-people"></i> مهمتنا
          </h2>
          <p>
            نعمل على تحسين تجربة التسوق عبر الإنترنت من خلال توفير منتجات
            موثوقة، وخدمة سريعة، وتجربة مستخدم سلسة تناسب الجميع.
          </p>
        </div>

        <div className="animation right">
          {/* مكان الأنيميشن */}
          <div className="anim-box">
            <dotlottie-wc
              src="https://lottie.host/27c77862-dbaf-4c94-91a8-411c404bcae0/RVXJFA1OtR.lottie"
              style={{ width: 300, height: 300 }}
              autoPlay=""
              loop=""
            />
          </div>
        </div>
      </section>

      {/* 2 RIGHT TEXT / LEFT ANIMATION */}
      <section className="about-row reverse section">
        <div className="text right">
          <h2>
            <i className="fa-solid fa-eye"></i> رؤيتنا
          </h2>
          <p>
            أن نكون من أكبر منصات التجارة الإلكترونية في العالم العربي مع
            التركيز على الجودة والثقة والسرعة في الأداء.
          </p>
        </div>

        <div className="animation left">
          <div className="anim-box">
            <dotlottie-wc
              src="https://lottie.host/781a4b9f-eb64-4b1c-a56b-895d4cf477e7/V6PJYHKRRY.lottie"
              style={{ width: 300, height: 300 }}
              autoPlay=""
              loop=""
            />
          </div>
        </div>
      </section>

      {/* 3 LEFT TEXT / RIGHT ANIMATION */}
      <section className="about-row section">
        <div className="text left">
          <h2>
            <i className="fa-solid fa-person-circle-question"></i> لماذا نحن
          </h2>
          <p>
            لأننا نوفر تجربة متكاملة تشمل السرعة، الأمان، دعم العملاء، وأسعار
            تنافسية تناسب الجميع.
          </p>
        </div>

        <div className="animation right">
          <div className="anim-box">
            <dotlottie-wc
              src="https://lottie.host/39cf463e-dd56-4f92-8bd7-7598084ab017/eo4CqKKeTP.lottie"
              style={{ width: 300, height: 300 }}
              autoPlay=""
              loop=""
            />
          </div>
        </div>
      </section>
      {/* 4 LEFT TEXT / RIGHT ANIMATION */}
      <section className="about-row reverse section">
        <div className="text left">
          <h2>
            <i className="fa-solid fa-users"></i> فريق العمل
          </h2>
          <p>
            فريقنا… حيث يتحول التعاون إلى إنجاز معًا نصنع الفرق ونحقق النجاح
            نعمل بروح واحدة نحو هدف واحد التميز ليس خيارًا… بل أسلوب عملنا قوة
            فريقنا في وحدة رؤيتنا
          </p>
        </div>

        <div className="animation right">
          <div className="anim-box">
            <dotlottie-wc
              src="https://lottie.host/dc9a2f8e-78cf-4845-81bd-64495df1b879/rtahCF7sV9.lottie"
              style={{ width: 300, height: 300 }}
              autoPlay=""
              loop=""
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features section">
        <h2 style={{ color: "#1ea3e1" }}>
          <i className="fa-solid fa-face-grin-stars"></i> مميزاتنا
        </h2>

        <div className="features-grid">
          <div className="feature">
            <i className="fa-solid fa-award"></i> سرعة عالية
          </div>
          <div className="feature">
            <i className="fa-solid fa-file-shield"></i> أمان كامل
          </div>
          <div className="feature">
            <i className="fa-solid fa-magnifying-glass-dollar"></i> أسعار منافسة
          </div>
          <div className="feature">
            <i className="fa-solid fa-people-carry-box"></i> شحن سريع
          </div>
          <div className="feature">
            <i className="fa-solid fa-handshake-angle"></i> دعم 24/7
          </div>
          <div className="feature">
            <i className="fa-solid fa-arrows-rotate"></i> استرجاع سهل
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats section">
        <div className="stat">
          <h3>10K+</h3>
          <p>
            <i className="fa-regular fa-user"></i> عميل سعيد
          </p>
        </div>
        <div className="stat">
          <h3>5K+</h3>
          <p>
            <i className="fa-solid fa-box-open"></i> منتج
          </p>
        </div>
        <div className="stat">
          <h3>99%</h3>
          <p>
            <i className="fa-solid fa-users"></i> رضا العملاء
          </p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>
            دعم فني <i className="fa-solid fa-hand-holding-medical"></i>
          </p>
        </div>
      </section>
    </div>
  );
}
