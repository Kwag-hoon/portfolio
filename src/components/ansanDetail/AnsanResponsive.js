import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

import desktopImg from "../../assets/projects/ansan/Maindesign.jpg";
import tabletImg from "../../assets/projects/ansan/tablet-ansan.jpg";
import mobileImg from "../../assets/projects/ansan/mobile-ansan.jpg";

function ResponsiveDesign() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.08,
    rootMargin: "0px 0px -10% 0px",
  });

  const responsiveItems = [
    {
      id: "desktop",
      label: "1920px",
      image: desktopImg,
      alt: "안산미래연구원 반응형 PC 디자인",
    },
    {
      id: "tablet",
      label: "1024px",
      image: tabletImg,
      alt: "안산미래연구원 반응형 태블릿 디자인",
    },
    {
      id: "mobile",
      label: "767px~",
      image: mobileImg,
      alt: "안산미래연구원 반응형 모바일 디자인",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`ansan-responsive ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ansan-responsive__container">
        <div className="ansan-responsive__header reveal">
          <h3 className="ansan-responsive__title">
            Responsive<span>.</span>
          </h3>
        </div>

        <div className="ansan-responsive__grid">
          {responsiveItems.map((item, index) => (
            <div
              key={item.id}
              className={`ansan-responsive__item ansan-responsive__item--${item.id}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <p className="ansan-responsive__label">{item.label}</p>

              <div className="ansan-responsive__image">
                <img src={item.image} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResponsiveDesign;