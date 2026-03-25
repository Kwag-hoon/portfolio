import React from "react";

function DetailTripleSection({ eyebrow, items = [], showNumber = false }) {
  return (
    <section className="detail-triple">
      <div className="detail-triple__container">
        <div className="detail-triple__grid">

          {/* 중앙 라벨 core value*/}
          <div className="detail-triple__eyebrow-wrap">
            <p className="detail-triple__eyebrow">
              {eyebrow}
              <span>.</span>
            </p>
          </div>

          {/* 3열 콘텐츠  Strategy & Concept   */}
          <div className="detail-triple__items">
            {items.map((item, index) => (
              <div className="detail-triple__item" key={index}>
                
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