import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function DetailTripleSection({ eyebrow, items = [], showNumber = false }) {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.6,
    rootMargin: "0px 0px -20px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`detail-triple ${isVisible ? "is-visible" : ""}`}
    >
      <div className="detail-triple__container">
        <div className="detail-triple__grid">

          {/* 중앙 라벨 core value*/}
          <div className="detail-triple__eyebrow-wrap reveal">
            <p className="detail-triple__eyebrow">
              {eyebrow}
              <span>.</span>
            </p>
          </div>

          {/* 3열 콘텐츠  Strategy & Concept   */}
          <div className="detail-triple__items">
            {items.map((item, index) => (
              <div
                className={`detail-triple__item reveal reveal--delay-${index + 1}`}
                key={index}
              >

                {showNumber && (
                  <span className="detail-triple__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}

                <h4 className="detail-triple__title">
                  {item.title}
                </h4>

                <p className="detail-triple__desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default DetailTripleSection;