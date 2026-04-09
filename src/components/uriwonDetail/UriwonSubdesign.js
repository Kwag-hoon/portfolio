import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

import subPage01 from "../../assets/projects/designuriwon/sub_page01.jpg";
import subPage02 from "../../assets/projects/designuriwon/sub_page02.jpg";
import subPage03 from "../../assets/projects/designuriwon/sub_page03.jpg";

function UriwonSubDesign() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`uriwon-sub-design ${isVisible ? "is-visible" : ""}`}
    >
      <div className="uriwon-sub-design__container">
        <div className="uriwon-sub-design__header reveal">
          <h3 className="uriwon-sub-design__title">
            SubDesign<span>.</span>
          </h3>
          <p className="uriwon-sub-design__subtitle">
            이미지 중심 상세 페이지 구성
          </p>
        </div>

        <div className="uriwon-sub-design__grid">
          <div className="uriwon-sub-design__item uriwon-sub-design__item--1">
            <img
              src={subPage01}
              alt="디자인유리원 서브 디자인 페이지 1"
              className="uriwon-sub-design__image"
            />
          </div>

          <div className="uriwon-sub-design__item uriwon-sub-design__item--2">
            <img
              src={subPage02}
              alt="디자인유리원 서브 디자인 페이지 2"
              className="uriwon-sub-design__image"
            />
          </div>

          <div className="uriwon-sub-design__item uriwon-sub-design__item--3">
            <img
              src={subPage03}
              alt="디자인유리원 서브 디자인 페이지 3"
              className="uriwon-sub-design__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UriwonSubDesign;