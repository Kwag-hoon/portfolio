import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import mainImage from "../../assets/projects/designuriwon/Main.jpg";

function UriwonMaindesign() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`uriwon-main-design ${isVisible ? "is-visible" : ""}`}
    >
      <div className="uriwon-main-design__container">
        <div className="uriwon-main-design__header reveal">
          <h3 className="uriwon-main-design__title">
            Main Design<span>.</span>
          </h3>
          
        </div>
        <div className="uriwon-main-design__grid">
          <div className="uriwon-main-design__image-wrap">
            <img
              src={mainImage}
              alt="디자인유리원 메인 디자인"
              className="uriwon-main-design__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UriwonMaindesign;
