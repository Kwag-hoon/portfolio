import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import mainImg from "../../assets/projects/kings/king_main.png";

function KingsMainDesign() {
  const [sectionRef, isVisible] = useScrollReveal({
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });
  return (
    <section
      ref={sectionRef}
      className={`kings-main-design ${isVisible ? "is-visible" : ""}`}
    >
      <div className="kings-main-design__container">
        <div className="kings-main-design__header reveal">
          <h3 className="kings-main-design__title">
            Main Design<span>.</span>
          </h3>
          <p className="kings-main-design__desc">
            대학 및 연구기관 웹사이트 특성에 맞춰
            <br />
            안정적인 정보 전달과 명확한 화면 구성을 중심으로 설계했습니다.
          </p>
        </div>

        <div className="kings-main-design__image-wrap reveal reveal--delay-1">
          <img
            src={mainImg}
            alt="한국원자력대학원대학교 메인 디자인"
            className="kings-main-design__image"
          />
        </div>
      </div>
    </section>
  );
}

export default KingsMainDesign;