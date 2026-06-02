import { useMemo, useState } from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.scss';
import { projectTabs, projectsData } from '../data/projectsData';

function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const pageRef = useRef(null);
  const listRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projectsData;
    return projectsData.filter((project) => project.categories?.includes(activeTab));
  }, [activeTab]);

  useEffect(() => {
    const groups = [pageRef.current, listRef.current].filter(Boolean);
    if (!groups.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    groups.forEach((group) => observer.observe(group));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-page section-space section-space--last" id="projects">
      <div className="container">
        <div className="projects-hero reveal-group" ref={pageRef}>
          <div className="projects-hero__grid grid">
            <div className="projects-hero__title-wrap reveal-item delay-0">
              <h2 className="projects-hero__title">
                Projects<span className="point">.</span>
              </h2>
            </div>

            <div className="projects-hero__tabs-wrap reveal-item delay-1">
              <div
                className="projects-hero__tabs"
                role="tablist"
                aria-label="프로젝트 카테고리"
              >
                {projectTabs.map((tab) => {
                  const isActive = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`projects-hero__tab ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="projects-list reveal-group" ref={listRef}>
          <div className="projects-list__grid grid">
            {filteredProjects.map((project, index) => {
              const projectCardInner = (
                <>
                  <div className="project-card__thumb">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} 썸네일`}
                      className="project-card__thumb-image"
                    />
                  </div>

                  <div
                    className={`project-card__overlay project-card__overlay--${project.type}`}
                  >
                    <div className="project-card__overlay-inner">
                      <p className="project-card__eyebrow">
                        {project.eyebrow || 'WEB Platform'}
                      </p>

                      <h3 className="project-card__title">
                        {project.overlayTitle || project.title}
                      </h3>

                      <p className="project-card__description">
                        {project.overlayDescription || project.subtitle}
                      </p>

                      <p className="project-card__meta">{project.meta}</p>
                    </div>
                  </div>
                </>
              );

              return (
                <div
                  key={project.id}
                  className={`projects-list__item reveal-item delay-${index % 5}`}
                >
                  {project.pdfUrl ? (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card"
                      aria-label={`${project.title} PDF 포트폴리오 열기`}
                    >
                      {projectCardInner}
                    </a>
                  ) : (
                    <Link
                      to={project.href}
                      className="project-card"
                      aria-label={`${project.title} 상세 페이지 이동`}
                    >
                      {projectCardInner}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="projects-cta reveal-group is-visible">
          <div className="projects-cta__inner reveal-item delay-2">
            <Link to="/resume" className="projects-cta__button">
              Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;