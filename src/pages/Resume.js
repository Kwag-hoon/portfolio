// src/pages/Resume/Resume.jsx

import { useEffect, useRef } from 'react';
import '../styles/resume.scss';
import {
  workExperience,
  education,
  certificates,
} from '../data/resumeData';

function Resume() {
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const certRef = useRef(null);

  useEffect(() => {
    const targets = [
      heroRef.current,
      workRef.current,
      educationRef.current,
      certRef.current,
    ].filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="resume-page section-space section-space--last" id="resume">
      <div className="container">
        <div className="resume-hero reveal-group" ref={heroRef}>
          <div className="resume-hero__grid grid">

            <div className="resume-hero__title-wrap reveal-item delay-0">
              <h2 className="resume-hero__title">
                Resume<span className="point">.</span>
              </h2>
            </div>

          </div>
        </div>

        <div className="resume-layout grid">
          <div className="resume-layout__col resume-layout__col--left">
            <section className="resume-section reveal-group" ref={workRef}>
              <h3 className="resume-section__title reveal-item delay-0">
                Work experience<span className="point">.</span>
              </h3>

              <div className="timeline timeline--work">
                {workExperience.map((item, index) => (
                  <article
                    className={`timeline-item reveal-item delay-${index % 5}`}
                    key={`${item.company}-${index}`}
                  >
                    <div className="timeline-item__dot" aria-hidden="true" />

                    <div className="timeline-item__inner">
                      <h4 className="timeline-item__heading">{item.company}</h4>

                      <div className="timeline-item__period">{item.period}</div>

                      {item.roles.map((role, roleIndex) => (
                        <div
                          className="timeline-item__role-block"
                          key={`${item.company}-role-${roleIndex}`}
                        >
                          <p className="timeline-item__role">{role.title}</p>

                          <ul className="timeline-item__desc">
                            {role.description.map((text, descIndex) => (
                              <li key={`${item.company}-${roleIndex}-${descIndex}`}>
                                {text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="resume-layout__col resume-layout__col--right">
            <section className="resume-section reveal-group" ref={educationRef}>
              <h3 className="resume-section__title reveal-item delay-0">
                Education<span className="point">.</span>
              </h3>

              <div className="timeline timeline--education">
                {education.map((item, index) => (
                  <article
                    className={`timeline-item reveal-item delay-${index % 5}`}
                    key={`${item.title}-${index}`}
                  >
                    <div className="timeline-item__dot" aria-hidden="true" />

                    <div className="timeline-item__inner">
                      <h4 className="timeline-item__heading">{item.title}</h4>

                      <div className="timeline-item__period">{item.period}</div>

                      {item.lines?.length > 0 && (
                        <ul className="timeline-item__edu-lines">
                          {item.lines.map((line, lineIndex) => (
                            <li key={`${item.title}-${lineIndex}`}>{line}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="resume-section resume-section--certificate reveal-group"
              ref={certRef}
            >
              <h3 className="resume-section__title reveal-item delay-0">
                Certificate<span className="point">.</span>
              </h3>

              <div className="timeline timeline--certificate">
                {certificates.map((item, index) => (
                  <article
                    className={`timeline-item reveal-item delay-${index % 5}`}
                    key={`${item.title}-${index}`}
                  >
                    <div className="timeline-item__dot" aria-hidden="true" />

                    <div className="timeline-item__inner">
                      <h4 className="timeline-item__heading">{item.title}</h4>
                      <div className="timeline-item__period timeline-item__period--compact">
                        {item.year}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;