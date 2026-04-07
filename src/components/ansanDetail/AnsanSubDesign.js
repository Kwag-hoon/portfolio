import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import subDesignImg from "../../assets/projects/ansan/sub_report.jpg";

function SubDesign() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`ansan-sub-design ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ansan-sub-design__container">

        {/* 타이틀 */}
        <div className="ansan-sub-design__header reveal">
          <h3 className="ansan-sub-design__title">
            SubDesign<span>.</span>
          </h3>
        </div>

        {/* 이미지 */}
        <div className="ansan-sub-design__image">
          <img src={subDesignImg} alt="안산미래연구원 서브 디자인" />
        </div>

        {/* 오른쪽 설명 (이미지 기준 텍스트 그대로) */}
        <div className="ansan-sub-design__content">

          <h4 className="ansan-sub-design__content-title">
            Sub Design
          </h4>

          <div className="ansan-sub-design__text-group">
            <p className="ansan-sub-design__label">서브페이지 설계 방향</p>
            <ul className="ansan-sub-design__list">
              <li>리스트 ➝ 상세 ➝ 행동 (참여/다운로드)</li>
              <li>통일된 UI 패턴 유지</li>
              <li>정보 탐색 흐름 유지</li>
            </ul>
          </div>

          <div className="ansan-sub-design__text-group">
            <p className="ansan-sub-design__label">대표 유형</p>
            <ul className="ansan-sub-design__list">
              <li>연구자료 상세</li>
              <li>공지/소식 리스트</li>
              <li>시민참여 페이지</li>
            </ul>
          </div>

          <div className="ansan-sub-design__text-group ansan-sub-design__text-group--point">
            <p className="ansan-sub-design__label">👉 핵심</p>
            <p className="ansan-sub-design__point">
              일관성 + 반복성 ➝ 사용성 강화
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SubDesign;