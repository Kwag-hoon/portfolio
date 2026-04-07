import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
function UriwonProblem() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.5,
    rootMargin: "0px 0px -20px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`uriwon-problem-solution ${isVisible ? "is-visible" : ""}`}
    >
      <div className="uriwon-problem-solution__container">
        <div className="uriwon-problem-solution__grid">
          {/* 중앙 라벨 */}
          <div className="uriwon-problem-solution__eyebrow-wrap reveal">
            <p className="uriwon-problem-solution__eyebrow">
              Problem &amp; Solution<span>.</span>
            </p>
          </div>

          {/* pairs */}
          <div className="uriwon-problem-solution__pairs">
            <div className="uriwon-problem-solution__pair reveal reveal--delay-1">
              <article className="uriwon-problem-solution__card uriwon-problem-solution__card--light">
                <h4 className="uriwon-problem-solution__card-title">디지털 접점 부족</h4>
                <p className="uriwon-problem-solution__card-desc">
                  오프라인 중심 운영으로 인해 브랜드의 공식적인 정보를 전달할 웹 기반 채널이 전무
                </p>
              </article>

              <div className="uriwon-problem-solution__pair-arrow">↓</div>

              <article className="uriwon-problem-solution__card uriwon-problem-solution__card--dark">
                <h4 className="uriwon-problem-solution__card-title">디지털 아이덴티티 정의</h4>
                <p className="uriwon-problem-solution__card-desc">
                  파편화된 브랜드 이미지를 웹 환경에 맞춰 재정립하고, 템플릿의 50% 이상을 직접 커스터마이징하여 디자인유리원만의 독창적인 비주얼 시스템을 구축
                </p>
              </article>
            </div>

            <div className="uriwon-problem-solution__pair reveal reveal--delay-2">
              <article className="uriwon-problem-solution__card uriwon-problem-solution__card--light">
                <h4 className="uriwon-problem-solution__card-title">
                  검색 최적화 미비
                </h4>
                <p className="uriwon-problem-solution__card-desc">
                  검색 노출을 유도할 수 있는 키워드나 정보 구조가 설계되지 않아 잠재 고객의 접근이 어려움
                </p>
              </article>

              <div className="uriwon-problem-solution__pair-arrow">↓</div>

              <article className="uriwon-problem-solution__card uriwon-problem-solution__card--dark">
                <h4 className="uriwon-problem-solution__card-title">SEO 기반 정보 아키텍처</h4>
                <p className="uriwon-problem-solution__card-desc">
                  단순 노출을 넘어 실제 유입으로 이어지도록 검색 엔진 최적화(SEO)를 고려한 마크업과 정보 구조를 설계하여 브랜드 채널의 접근성을 강화
                </p>
              </article>
            </div>

            <div className="uriwon-problem-solution__pair reveal reveal--delay-3">
              <article className="uriwon-problem-solution__card uriwon-problem-solution__card--light">
                <h4 className="uriwon-problem-solution__card-title">탐색 경험 부재</h4>
                <p className="uriwon-problem-solution__card-desc">
                  단순 나열식의 작업물 관리로 인해, 브랜드의 전문성을 효과적으로 전달할 수 있는 체계적인 포트폴리오 구조 필요
                </p>
              </article>

              <div className="uriwon-problem-solution__pair-arrow">↓</div>

              <article className="uriwon-problem-solution__card uriwon-problem-solution__card--dark">
                <h4 className="uriwon-problem-solution__card-title">업무 중심 사용자 경험</h4>
                <p className="uriwon-problem-solution__card-desc">
                  사용자의 시선 흐름을 분석하여 '브랜드 인지 → 포트폴리오 탐색 → 문의'로 이어지는 직관적인 UX를 설계하고, 작업물의 몰입도를 높이는 최적의 레이아웃을 구현
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UriwonProblem;
