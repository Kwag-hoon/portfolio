import React, { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

import workflowBase from "../../assets/projects/ping/workflow-base.svg";
import markerA from "../../assets/projects/ping/marker--a.svg";
import markerB from "../../assets/projects/ping/marker--b.svg";
import markerC from "../../assets/projects/ping/marker--c.svg";
import markerD from "../../assets/projects/ping/marker--d.svg";
import markerE from "../../assets/projects/ping/marker--e.svg";
import markerF from "../../assets/projects/ping/marker--f.svg";

function PingWorkflowHero() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [activeStep, setActiveStep] = useState(null);

  const workflowSteps = [
    {
      id: "A",
      title: "문제지점 발견",
      desc: "디자인 과정 중 개선이\n필요한 지점을 발견",
      marker: markerA,
      modifier: "a",
    },
    {
      id: "B",
      title: "작업물 업로드",
      desc: "작업 중 피드백이 필요한 작업물 업로드",
      marker: markerB,
      modifier: "b",
    },
    {
      id: "C",
      title: "PIN으로\n문제 위치 지정",
      desc: "구체적인 위치에 핀을 찍어 질문과\n피드백의 맥락 형성",
      marker: markerC,
      modifier: "c",
    },
    {
      id: "D",
      title: "질문 및 피드백 작성",
      desc: "한 사용자가 해당 PIN 기준으로\n피드백 작성",
      marker: markerD,
      modifier: "d",
    },
    {
      id: "E",
      title: "피드백 자동 기록",
      desc: "My Design, Feedback에 자동 저장\n+ 수정 과정 반복 가능",
      marker: markerE,
      modifier: "e",
    },
    {
      id: "F",
      title: "개선 후 재업로드",
      desc: "수정 후 다시 업로드\n+ 다음 단계로 구조 형성",
      marker: markerF,
      modifier: "f",
    },
  ];

  const handleMoveToDetail = (step) => {
    setActiveStep(step);

    const target = document.getElementById(`workflow-step-${step.toLowerCase()}`);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`ping-workflow-hero ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ping-workflow-hero__container">
        <div className="ping-workflow-hero__grid">
          <div className="ping-workflow-hero__copy reveal reveal--delay-1">
            <h3 className="ping-workflow-hero__title">
              PING 핵심 워크플로우<span>.</span>
            </h3>

            <p className="ping-workflow-hero__desc">
              PING은 업로드 중심이 아닌, <br />
              <em>문제지정 → 피드백 → 기록 → 개선</em>
              의 순환구조로 설계되었습니다.
            </p>
          </div>

          <div className="ping-workflow-hero__diagram reveal reveal--delay-2">
            <img
              src={workflowBase}
              alt="PING 핵심 워크플로우 구조도"
              className="ping-workflow-hero__base"
            />

            {workflowSteps.map((step) => (
              <button
                key={step.id}
                type="button"
                className={`ping-workflow-hero__marker ping-workflow-hero__marker--${step.modifier} ${
                  activeStep === step.id ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => handleMoveToDetail(step.id)}
              >
                <img src={step.marker} alt="" aria-hidden="true" />

                <span
                  className={`ping-workflow-hero__marker-content ping-workflow-hero__marker-content--${step.modifier}`}
                >
                  <strong className="ping-workflow-hero__marker-id">
                    {step.id}
                  </strong>

                  <span className="ping-workflow-hero__marker-title">
                    {step.title}
                  </span>

                  <small className="ping-workflow-hero__marker-desc">
                    {step.desc}
                  </small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PingWorkflowHero;