import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function PingOverview() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.5,
    rootMargin: "0px 0px -20px 0px",
  });
  return (
    <section
      ref={sectionRef}
      className={`ping-overview ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ping-overview__container">
        <div className="ping-overview__grid">

          {/* 중앙 라벨 */}
          <div className="ping-overview__eyebrow-wrap">
            <p className="ping-overview__eyebrow">
              Overview<span>.</span>
            </p>
          </div>

          {/* 본문 (12컬럼 시작선 기준) */}
          <div className="ping-overview__content reveal reveal--delay-1">

            <h3 className="ping-overview__title">
              PING 문제 유형 기반 디자인 피드백 커뮤니티
            </h3>

            <p className="ping-overview__desc">
              기존의 디자인 커뮤니티는 결과물 공유 중심 구조가 많으며 디자인 과정에서 발생하는 문제를 해결하기 위한 구조화 된 피드백 환경은 부족합니다.
              PING은 이러한 문제를 해결하기 위해 문제 유형 기반 피드백 구조로 설계한 디자인 피드백 플랫폼입니다.  이 프로젝트는 사용자(디자이너)가 작업 중 발생한 문제를 디자인 화면에 직접 PIN을 찍어 정확한 위치와 함께 질문을 작성하고, 다른 사용자로부터 구체적인 피드백을 받아 기록하고 개선하는 구조로 설계되었습니다.
            </p>

            <div className="ping-overview__meta">
              <div className="ping-overview__meta-row">
                <span className="ping-overview__meta-label">PROJECT</span>
                <span className="ping-overview__meta-value">PING</span>
              </div>

              <div className="ping-overview__meta-row">
                <span className="ping-overview__meta-label">TYPE</span>
                <span className="ping-overview__meta-value">
                  UX/UI Design Feedback Community
                </span>
              </div>

              <div className="ping-overview__meta-row">
                <span className="ping-overview__meta-label">ROLE</span>
                <span className="ping-overview__meta-value">
                  UX 기획 / UI 설계 / Frontend / Backend
                </span>
              </div>

              <div className="ping-overview__meta-row">
                <span className="ping-overview__meta-label">STACK</span>
                <span className="ping-overview__meta-value">
                  Figma · React · Node.js · MySQL
                </span>
              </div>

              <div className="ping-overview__meta-row">
                <span className="ping-overview__meta-label">PERIOD</span>
                <span className="ping-overview__meta-value">
                  2026.01.05 - 2026.02.13
                </span>
              </div>
            </div>
          </div>

          {/* 버튼 */}
          <div className="ping-overview__cta reveal reveal--delay-2">
            <a
              href="https://www.ping.it.kr/"
              target="_blank"
              rel="noreferrer"
              className="ping-overview__button"
            >
              사이트 바로가기
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PingOverview;