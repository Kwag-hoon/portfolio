import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

import backBehance from "../../assets/projects/ping/back-behance.jpg";
import backNotion from "../../assets/projects/ping/back-notion.jpg";
import backStackoverflow from "../../assets/projects/ping/back-Stackoverflow.png";
import workflowDetailD from "../../assets/projects/ping/workflow-detail-d.jpg";

function PingBackground() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.3,
    rootMargin: "0px 0px -20px 0px",
  });

  const backgroundCards = [
    {
      id: 1,
      title: "포트폴리오 중심 플랫폼",
      subtitle: "예: Behance, Dribbble",
      image: backBehance,
      alt: "Behance and Dribbble portfolio platform example",
      features: ["결과물 중심", "완성 후 업로드", "채용·노출 중심"],
      limits: ["과정 공유 부족", "문제 해결 맥락 부족"],
    },
    {
      id: 2,
      title: "커뮤니티형 플랫폼",
      subtitle: "예: Notion이나 디자이너 카페",
      image: backNotion,
      alt: "Notion community platform example",
      features: ["자유로운 질문과 답변", "다양한 의견 공유", "커뮤니티 기반 소통"],
      limits: ["문제유형 분류체계 부족", "피드백 기록과 재활용 어려움"],
    },
    {
      id: 3,
      title: "Q & A 플랫폼",
      subtitle: "예: StackOverflow",
      image: backStackoverflow,
      alt: "StackOverflow Q and A platform example",
      features: ["질문 중심", "해결 중심 구조", "답변 축적 가능"],
      limits: ["디자인 시각 맥락 전달에 한계", "위치 기반 피드백 구조 부족"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`ping-background ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ping-background__container">
        <div className="ping-background__header reveal">
          <h3 className="ping-background__title">Background <span>.</span></h3>
        </div>

        <div className="ping-background__grid">
          <div className="ping-background__left">
            {backgroundCards.map((card, index) => (
              <article
                className={`ping-background__card ping-background__card--light reveal reveal--delay-${
                  index + 1
                }`}
                key={card.id}
              >
                <div className="ping-background__text">
                  <h4 className="ping-background__card-title">{card.title}</h4>
                  <p className="ping-background__card-subtitle">
                    {card.subtitle}
                  </p>
                </div>

                <div className="ping-background__image">
                  <img src={card.image} alt={card.alt} />
                </div>

                <div className="ping-background__list-group">
                  <div className="ping-background__list">
                    <strong>특징 :</strong>
                    <ul>
                      {card.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="ping-background__list">
                    <strong>한계 :</strong>
                    <ul>
                      {card.limits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="ping-background__card ping-background__card--point reveal reveal--delay-3">
            <h4 className="ping-background__point-title">
              기존 플랫폼의 한계
            </h4>

            <div className="ping-background__point-image">
              <img src={workflowDetailD} alt="PING workflow detail" />
            </div>

            <p className="ping-background__point-desc">
              기존 플랫폼은 결과 공유 또는 자유 게시 구조에 집중되어 있으며,
              디자인 과정의 구체적 문제에 대한 구조는 부족
            </p>

            <strong className="ping-background__point-accent">
              → PING은 과정 중심 문제 해결 구조를 설계했습니다.
            </strong>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PingBackground;