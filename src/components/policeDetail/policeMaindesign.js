import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import mainImg from "../../assets/projects/police/police_main.png";

function PoliceMaindesign() {
  const [sectionRef, isVisible] = useScrollReveal({
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });
  return (
    <section
      ref={sectionRef}
      className={`police-main-design ${isVisible ? "is-visible" : ""}`}
    >
      <div className="police-main-design__container">
        <div className="police-main-design__header reveal">
          <h3 className="police-main-design__title">
            Main Design<span>.</span>
          </h3>
          <p className="police-main-design__desc">
            공공기관 웹사이트 특성에 맞춰 정보 전달 중심의 
            <br />
            안정적인 구조와 일관된 화면 구성을 적용했습니다.
          </p>
        </div>

        <div className="police-main-design__image-wrap reveal reveal--delay-1">
          <img
            src={mainImg}
            alt="치안대학원 메인 디자인"
            className="police-main-design__image"
          />
        </div>
      </div>
    </section>
  );
}

export default PoliceMaindesign;
