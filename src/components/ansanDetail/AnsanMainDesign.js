import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import mainDesignImg from "../../assets/projects/ansan/Maindesign.jpg";

function MainDesign() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const sectionNotes = [
    {
      id: "1",
      title: "Hero 영역",
      lines: ["검색 기능 강조", "메시지 중심 구조", "슬라이드 구조"],
      modifier: "hero",
    },
    {
      id: "2",
      title: "연구원 역할 섹션",
      lines: [
        "카드 UI로 정보 단순화",
        "데이터적 시각화 + 숫자 기반 신뢰 요소 강화",
      ],
      modifier: "role",
    },
    {
      id: "3",
      title: "연구자료",
      lines: ["카테고리 기반 탐색 구조"],
      modifier: "research",
    },
    {
      id: "4",
      title: "시민참여",
      lines: ["CTA 중심 구조 설계"],
      modifier: "citizen",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`ansan-main-design ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ansan-main-design__container">

        {/* ✅ 타이틀 영역 */}
        <div className="ansan-main-design__header reveal">
          <h3 className="ansan-main-design__title">
            MainDesign<span>.</span>
          </h3>
        </div>

        {/* 이미지 */}
        <div className="ansan-main-design__image">
          <img src={mainDesignImg} alt="안산미래연구원 메인 디자인" />
        </div>

        {/* 오른쪽 주석 */}
        <div className="ansan-main-design__notes">
          {sectionNotes.map((item, index) => (
            <div
              key={item.id}
              className={`ansan-main-design__note ansan-main-design__note--${item.modifier}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <h3 className="ansan-main-design__note-title">
                <span className="ansan-main-design__note-number">
                  {item.id}.
                </span>
                {item.title}
              </h3>

              <ul className="ansan-main-design__note-list">
                {item.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MainDesign;