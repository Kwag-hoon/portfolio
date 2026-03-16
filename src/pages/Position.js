import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import diagram from "../assets/diagram02.svg";
import "../styles/position.scss";

const workSkills = [
  {
    title: "Product Strategy",
    items: ["문제 정의", "서비스 전략 수립", "비즈니스 구조 설계"],
  },
  {
    title: "Information Architecture",
    items: ["정보 구조 설계", "사용자 흐름 설계", "기능 구조 정의"],
  },
  {
    title: "UX Planning",
    items: ["Wireframe", "사용자 경험 설계", "프로토타이핑"],
  },
  {
    title: "Technical Understanding",
    items: ["React 기반 UI 구현", "API 연동 이해", "컴포넌트 구조 설계"],
  },
];

const techStacks = [
  {
    title: "Frontend",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3(SCSS)", "PHP"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST API", "MySQL"],
  },
  {
    title: "Design",
    items: ["Figma", "Wireframe", "Prototype"],
  },
  {
    title: "Deployment",
    items: ["AWS", "SEO", "Web Performance"],
  },
];

function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default function Position() {
  const [heroRef, heroVisible] = useReveal();
  const [capRef, capVisible] = useReveal();
  const [workRef, workVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <main className="position-page">
      <section className="position-hero section-space">
        <div className="container">
          <div
            ref={heroRef}
            className={`grid grid--12 position-hero__grid reveal-group ${heroVisible ? "is-visible" : ""
              }`}
          >
            <div className="position-hero__title-wrap reveal-item delay-0">
              <h2 className="position-hero__title">
                Position<span className="point">.</span>
              </h2>
            </div>

            <div className="position-hero__desc-wrap reveal-item delay-1">
              <p className="position-hero__desc">
                아이디어를 기능으로, 기능을 실제 서비스로 연결하는 구조를 설계합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities section-space">
        <div className="container">
          <div
            ref={capRef}
            className={`grid grid--12 capabilities__grid reveal-group ${capVisible ? "is-visible" : ""
              }`}
          >
            <div className="capabilities__text">
              <h3 className="section-title reveal-item delay-0">
                Core Capabilities<span className="point">.</span>
              </h3>

              <p className="reveal-item delay-1">
                제품은 전략, 구조, 경험, 기술이 연결될 때
                <br />
                지속적으로 운영 가능한 시스템이 됩니다.
              </p>

              <p className="reveal-item delay-2">
                저는 문제 정의부터 구조 설계,
                <br />
                그리고 실제 구현까지 연결하는 역할을 수행합니다.
              </p>
            </div>

            <div className="capabilities__diagram reveal-item delay-3">
              <img
                src={diagram}
                alt="Core capabilities diagram"
                className="capabilities__diagram-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="work-skills section-space">
        <div className="container">
          <div
            ref={workRef}
            className={`reveal-group ${workVisible ? "is-visible" : ""}`}
          >
            <h3 className="section-title section-title--center reveal-item delay-0">
              Work Skills<span className="point">.</span>
            </h3>

            <div className="grid grid--12 work-skills__cards">
              {workSkills.map((skill, index) => (
                <article
                  key={skill.title}
                  className={`work-skills__card skill-card reveal-item delay-${index + 1
                    }`}
                >
                  <h4 className="skill-card__title">{skill.title}</h4>
                  <ul className="skill-card__list">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="grid grid--12 tech-stack">
              {techStacks.map((stack, index) => (
                <div
                  key={stack.title}
                  className={`tech-stack__col reveal-item delay-${index + 1}`}
                >
                  <h4 className="tech-stack__title">{stack.title}</h4>

                  <ul className="tech-stack__list">
                    {stack.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="position-cta section-space section-space--last">
        <div className="container">
          <div
            ref={ctaRef}
            className={`position-cta__inner reveal-group ${ctaVisible ? "is-visible" : ""
              }`}
          >
            <h3 className="position-cta__text reveal-item delay-0">
              설계는 문서가 아니라
              <br />
              <span>운영 가능한 구조</span>가 되어야 합니다.
            </h3>

            <Link to="/process" className="position-cta__button reveal-item delay-1">
              Process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}