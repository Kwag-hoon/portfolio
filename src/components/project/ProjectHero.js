import React from "react";
import PropTypes from "prop-types";

function ProjectHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  description,
  align = "center",
  theme = "default",
  className = "",
}) {
  const sectionClassName = [
    "project-hero",
    `project-hero--align-${align}`,
    `project-hero--theme-${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="project-hero__media">
        <img
          src={image}
          alt={imageAlt}
          className="project-hero__image"
        />
      </div>

      <div className="project-hero__overlay">
        <div className="project-hero__inner">
          <div className="project-hero__text">
            {eyebrow && <p className="project-hero__eyebrow">{eyebrow}</p>}

            <h2 className="project-hero__title">
              {subtitle && <span>{subtitle}</span>}
              <span>{title}</span>
            </h2>

            {description && (
              <p className="project-hero__description">{description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectHero.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
  theme: PropTypes.oneOf(["default", "dark", "light"]),
  className: PropTypes.string,
};

ProjectHero.defaultProps = {
  imageAlt: "",
  eyebrow: "",
  subtitle: "",
  description: "",
  align: "center",
  theme: "default",
  className: "",
};

export default ProjectHero;