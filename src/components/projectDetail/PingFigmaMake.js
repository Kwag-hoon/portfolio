import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

import figmaMakeImage from "../../assets/projects/ping/figma_make02.png";

const FIGMA_MAKE_URL = "https://truce-cyprus-08433833.figma.site";

function PingFigmaMake() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.25,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`ping-figma-make ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ping-figma-make__container">
        <div className="ping-figma-make__content">
          <h3 className="ping-figma-make__title">
            Figma Make<span>.</span>
          </h3>

          <div className="ping-figma-make__text">
            <p>
              PING은 기존에 유사한 형태로 참고할 수 있는 서비스가 부족했기 때문에, 팀원들이 초기 기획만으로 화면 구조와 기능 흐름을 직관적으로 이해하기 어려운 프로젝트였습니다.
            </p>

            <p>
              기획 기간이 약 1주일로 제한된 상황에서, 정교한 와이어프레임과 전체 스토리보드를 모두 작성한 뒤 개발을 시작하기에는 시간이 부족했습니다. 따라서 Figma Make를 활용해 서비스의 핵심 화면과 흐름을 빠르게 시각화하고, 이를 팀원들이 공유할 수 있는 기준 화면으로 활용했습니다.
            </p>

            <p>
              AI가 생성한 화면을 최종 결과물로 사용하는 것이 아니라, 업로드·PIN 지정·질문 작성·피드백 작성·기록 저장으로 이어지는 핵심 구조를 빠르게 검토하는 용도로 활용했습니다. 이후 디자인 시스템을 통일하고, 각 팀원이 맡은 기능 단위로 와이어프레임과 스토리보드를 빠르게 정리할 수 있도록 제작 기준을 마련했습니다.
            </p>

            <p>
              이를 통해 짧은 기획 기간 안에서도 팀 전체가 같은 방향을 이해한 상태에서 디자인과 개발을 병행할 수 있었습니다.
            </p>
          </div>

          <a
            href={FIGMA_MAKE_URL}
            target="_blank"
            rel="noreferrer"
            className="ping-figma-make__button"
          >
            Prototype 바로가기
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <a
          href={FIGMA_MAKE_URL}
          target="_blank"
          rel="noreferrer"
          className="ping-figma-make__visual"
          aria-label="Figma Make 프로토타입 새 창으로 보기"
        >
          <img
            src={figmaMakeImage}
            alt="Figma Make를 활용해 시각화한 PING 초기 프로토타입 화면"
            className="ping-figma-make__image"
          />
        </a>
      </div>
    </section>
  );
}

export default PingFigmaMake;