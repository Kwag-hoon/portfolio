import React from "react";
import gridIcon from "../../assets/icon/grid-outline.svg";

function ProjectReflection({
  title = "Reflection",
  body = "",
  image,
  imageAlt = "프로젝트 회고 이미지",
  onListClick,
  listHref,
}) {
  const buttonContent = (
    <>
      <img
        src={gridIcon}
        alt=""
        aria-hidden="true"
        className="project-reflection__button-icon"
      />
      <span className="project-reflection__button-text">목록보기</span>
    </>
  );

  return (
    <section className="project-reflection">
      <div className="project-reflection__container">
        <div className="project-reflection__header">
          <h3 className="project-reflection__title">
            {title}
            <span>.</span>
          </h3>
        </div>

        <div className="project-reflection__content">
          <div className="project-reflection__copy">
            <p>{body}</p>
          </div>

          <div className="project-reflection__image-wrap">
            <img
              src={image}
              alt={imageAlt}
              className="project-reflection__image"
            />
          </div>
        </div>

        <div className="project-reflection__nav">
          {listHref ? (
            <a href={listHref} className="project-reflection__button">
              {buttonContent}
            </a>
          ) : (
            <button
              type="button"
              className="project-reflection__button"
              onClick={onListClick}
            >
              {buttonContent}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectReflection;