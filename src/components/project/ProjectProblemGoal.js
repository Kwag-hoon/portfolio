import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function ProjectProblemGoal({ data }) {
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={`project-problem-goal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="project-problem-goal__container">
        <h3 className="project-problem-goal__title">
          Problem & Goal<span>.</span>
        </h3>

        <div className="project-problem-goal__grid">
          {data.map((item, index) => (
            <div
              key={index}
              className={`project-problem-goal__item reveal reveal--delay-${index}`}
            >
              {/* Problem 카드 */}
              <div className="project-problem-goal__problem">
                <h4>{item.problemTitle}</h4>
                <p>{item.problemDesc}</p>
              </div>

              {/* Arrow */}
              <div className="project-problem-goal__arrow">↓</div>

              {/* Goal 원형 */}
              <div className="project-problem-goal__goal">
                <span>{item.goal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectProblemGoal;