import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function ProjectOverview({
  eyebrow = "Overview",
  title,
  description,
  meta = [],
  buttonText,
  buttonHref,
  className = "",
}) {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.5,
    rootMargin: "0px 0px -20px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`project-overview ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      <div className="project-overview__container">
        <div className="project-overview__grid">
          <div className="project-overview__eyebrow-wrap">
            <p className="project-overview__eyebrow">
              {eyebrow}
              <span>.</span>
            </p>
          </div>

          <div className="project-overview__content reveal reveal--delay-1">
            <h3 className="project-overview__title">{title}</h3>

            <p className="project-overview__desc">{description}</p>

            <div className="project-overview__meta">
              {meta.map((item) => (
                <div className="project-overview__meta-row" key={item.label}>
                  <span className="project-overview__meta-label">{item.label}</span>
                  <span className="project-overview__meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {buttonText && buttonHref && (
            <div className="project-overview__cta reveal reveal--delay-2">
              <a
                href={buttonHref}
                target="_blank"
                rel="noreferrer"
                className="project-overview__button"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;