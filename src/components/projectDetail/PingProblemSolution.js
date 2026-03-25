import React, { useEffect, useRef, useState } from "react";

function PingProblemSolution() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(target);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ping-problem-solution ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ping-problem-solution__container">
        <div className="ping-problem-solution__grid">
          {/* 중앙 라벨 */}
          <div className="ping-problem-solution__eyebrow-wrap">
            <p className="ping-problem-solution__eyebrow">
              Problem &amp; Solution<span>.</span>
            </p>
          </div>

          {/* 제목 */}
          <div className="ping-problem-solution__heading">
            <h3 className="ping-problem-solution__title">
              왜 이 서비스를 만들었는가?
            </h3>
          </div>

          {/* pairs */}
          <div className="ping-problem-solution__pairs">
            <div className="ping-problem-solution__pair ping-reveal ping-reveal--delay-1">
              <article className="ping-problem-solution__card ping-problem-solution__card--light">
                <h4 className="ping-problem-solution__card-title">결과 중심의 전시</h4>
                <p className="ping-problem-solution__card-desc">
                  Behance, Dribbble 등 기존 플랫폼은 완성된{" "}
                  <span className="ping-problem-solution__card-desc--accent">
                    결과물 위주의 공유
                  </span>
                  로 인해, 제작 과정에서의 고민과 문제 해결의 노하우가 공유되기 어렵습니다.
                </p>
              </article>

              <div className="ping-problem-solution__pair-arrow">↓</div>

              <article className="ping-problem-solution__card ping-problem-solution__card--dark">
                <h4 className="ping-problem-solution__card-title">과정 중심의 업로드</h4>
                <p className="ping-problem-solution__card-desc">
                  작업이 완료되기 전이라도 중간 과정을 업로드하고 질문을 던질 수 있는 환경을 제공합니다.
                </p>
              </article>
            </div>

            <div className="ping-problem-solution__pair ping-reveal ping-reveal--delay-2">
              <article className="ping-problem-solution__card ping-problem-solution__card--light">
                <h4 className="ping-problem-solution__card-title">
                  단발적이고 휘발되는 피드백
                </h4>
                <p className="ping-problem-solution__card-desc">
                  댓글 형태의 자유로운 피드백은 구체적인 위치 지정이 어렵고, 나중에 다시 찾아보기 힘든{" "}
                  <span className="ping-problem-solution__card-desc--accent">
                    휘발성 정보를 양산
                  </span>
                  합니다.
                </p>
              </article>

              <div className="ping-problem-solution__pair-arrow">↓</div>

              <article className="ping-problem-solution__card ping-problem-solution__card--dark">
                <h4 className="ping-problem-solution__card-title">PIN 기반의 정밀 피드백</h4>
                <p className="ping-problem-solution__card-desc">
                  이미지 위의 특정 위치에 '핀'을 찍어 질문하고 답변함으로써, 모호한 표현 대신 시각적이고 구체적인 소통이 가능하게
                  합니다
                </p>
              </article>
            </div>

            <div className="ping-problem-solution__pair ping-reveal ping-reveal--delay-3">
              <article className="ping-problem-solution__card ping-problem-solution__card--light">
                <h4 className="ping-problem-solution__card-title">학습 구조의 부재</h4>
                <p className="ping-problem-solution__card-desc">
                  주니어 디자이너가 자신의 문제를 정의하고 선배들의 구체적인 가이드를 받을 수 있는 체계적인 커뮤니티가 부족합니다.
                </p>
              </article>

              <div className="ping-problem-solution__pair-arrow">↓</div>

              <article className="ping-problem-solution__card ping-problem-solution__card--dark">
                <h4 className="ping-problem-solution__card-title">피드백 자동 아카이빙</h4>
                <p className="ping-problem-solution__card-desc">
                  주고받은 모든 피드백은 사용자별 'My Design'과 'Feedback' 메뉴에 저장되며, 이는 곧 개인의 성장 기록이 됩니다.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PingProblemSolution;