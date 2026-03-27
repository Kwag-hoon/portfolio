import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

import workflowDetailB from "../../assets/projects/ping/workflow-detail-b.jpg";
import workflowDetailC from "../../assets/projects/ping/workflow-detail-c.jpg";
import workflowDetailD from "../../assets/projects/ping/workflow-detail-d.jpg";
import workflowDetailE from "../../assets/projects/ping/workflow-detail-e.jpg";
import workflowDetailE1 from "../../assets/projects/ping/workflow-detail-e1.jpg";

function WorkflowSection({ id, className = "", children }) {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`ping-workflow-detail__section ${className} ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}

function PingWorkflowDetail() {
  return (
    <section className="ping-workflow-detail">
      <div className="ping-workflow-detail__container">
        {/* B */}
        <WorkflowSection
          id="workflow-step-b"
          className="ping-workflow-detail__section--b"
        >
          <div className="ping-workflow-detail__image-wrap reveal-item">
            <img
              src={workflowDetailB}
              alt="작업물 업로드 화면"
              className="ping-workflow-detail__image"
            />
          </div>

          <div className="ping-workflow-detail__content reveal-item reveal-item--delay-1">
            <div className="ping-workflow-detail__headline ping-workflow-detail__headline--pink">
              <span className="ping-workflow-detail__dot ping-workflow-detail__dot--pink" />
              <h4>B. 작업물 업로드</h4>
            </div>

            <p className="ping-workflow-detail__desc">
              디자인 과정 중 피드백이 필요하거나, 문제 지점이 있는 디자인 작업물을
              업로드하여 다른 users에게 피드백을 받을 수 있도록 하였습니다.
              문제 유형은 객관성과 혼돈을 줄이기 위해 구조화하여 선택형으로 만들었습니다.
            </p>

            <div className="ping-workflow-detail__subline ping-workflow-detail__subline--gray">
              <span className="ping-workflow-detail__subline-text">
                B-1. 문제 유형 선택
              </span>
            </div>
          </div>
        </WorkflowSection>

        {/* C */}
        <WorkflowSection
          id="workflow-step-c"
          className="ping-workflow-detail__section--c"
        >
          <div className="ping-workflow-detail__image-wrap reveal-item">
            <img
              src={workflowDetailC}
              alt="PIN으로 문제 위치를 지정하고 질문을 작성하는 화면"
              className="ping-workflow-detail__image"
            />
          </div>

          <div className="ping-workflow-detail__content reveal-item reveal-item--delay-1">
            <div className="ping-workflow-detail__headline ping-workflow-detail__headline--pink">
              <span className="ping-workflow-detail__dot ping-workflow-detail__dot--pink" />
              <h4>C. PIN으로 문제위치 지정 후, 질문 작성</h4>
            </div>

            <div className="ping-workflow-detail__subgroup ping-workflow-detail__subgroup--c1">
              <div className="ping-workflow-detail__subline ping-workflow-detail__subline--gray">
                <span className="ping-workflow-detail__subdot ping-workflow-detail__subdot--gray" />
                <span className="ping-workflow-detail__subline-text">
                  C-1. PIN으로 문제 위치지정
                </span>
              </div>
              <p className="ping-workflow-detail__subdesc">
                pin으로 지정한 좌표값은 DB 테이블에 저장되며, 피드백 작성 단계나,
                아카이브등 필요시 다시 호출 됩니다.
              </p>
            </div>

            <div className="ping-workflow-detail__subgroup ping-workflow-detail__subgroup--c2">
              <div className="ping-workflow-detail__subline ping-workflow-detail__subline--gray">
                <span className="ping-workflow-detail__subdot ping-workflow-detail__subdot--gray" />
                <span className="ping-workflow-detail__subline-text">
                  C-2. 질문 작성
                </span>
              </div>
              <p className="ping-workflow-detail__subdesc">
                업로드 한 이미지의 문제 지점에 마우스로 PIN을 찍고, 질문 작성.
              </p>
            </div>
          </div>
        </WorkflowSection>

        {/* D */}
        <WorkflowSection
          id="workflow-step-d"
          className="ping-workflow-detail__section--d"
        >
          <div className="ping-workflow-detail__image-wrap reveal-item">
            <img
              src={workflowDetailD}
              alt="피드백 작성 화면"
              className="ping-workflow-detail__image"
            />
          </div>

          <div className="ping-workflow-detail__content reveal-item reveal-item--delay-1">
            <div className="ping-workflow-detail__headline ping-workflow-detail__headline--pink">
              <span className="ping-workflow-detail__dot ping-workflow-detail__dot--pink" />
              <h4>D. 피드백 작성</h4>
            </div>

            <div className="ping-workflow-detail__subgroup ping-workflow-detail__subgroup--d1">
              <div className="ping-workflow-detail__subline ping-workflow-detail__subline--gray">
                <span className="ping-workflow-detail__subline-text">
                  D-1. 피드백 작성란
                </span>
              </div>
              <p className="ping-workflow-detail__subdesc">
                다른 사용자들이 피드백 작성 - 타 사용자들의 조언
              </p>
            </div>
          </div>
        </WorkflowSection>

        {/* E */}
        <WorkflowSection
          id="workflow-step-e"
          className="ping-workflow-detail__section--e"
        >
          <div className="ping-workflow-detail__image-wrap ping-workflow-detail__image-wrap--stack">
            <img
              src={workflowDetailE}
              alt="My page 자동 기록 화면"
              className="ping-workflow-detail__image ping-workflow-detail__image--left reveal-item"
            />
            <img
              src={workflowDetailE1}
              alt="My page 피드백 기록 화면"
              className="ping-workflow-detail__image ping-workflow-detail__image--right reveal-item reveal-item--delay-1"
            />
          </div>

          <div className="ping-workflow-detail__content ping-workflow-detail__content--bottom reveal-item reveal-item--delay-2">
            <div className="ping-workflow-detail__headline ping-workflow-detail__headline--plain">
              <h4>E. 자동 기록(My page)</h4>
            </div>

            <p className="ping-workflow-detail__desc">
              Upload 된 문제유형화 질문은 My-design에 저장되며, <br />
              내가 다른 사용자들의 질문에 답한 피드백은 My-feedback에 저장 됩니다.
            </p>
          </div>
        </WorkflowSection>
      </div>
    </section>
  );
}

export default PingWorkflowDetail;