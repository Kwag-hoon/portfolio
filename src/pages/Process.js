import  { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import process01 from "../assets/process01.png";
import process02 from "../assets/process02.png";
import process03 from "../assets/process03.png";
import process04 from "../assets/process04.png";
import process05 from "../assets/process05.png";
import '../styles/process.scss';

const processItems = [
  {
    number: "01",
    title: "Framing",
    subtitle: "문제 정의 및 요구사항 구조화",
    desc: "사용자의 문제와 서비스의 목표를 정의하고 프로젝트의 요구사항을 구조화합니다.",
    details: [
      "사용자 요구사항 정의서",
      "문제 정의 문서",
      "프로젝트 목표 정의",
      "WBS",
    ],
    image: process01,
    align: "left",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "서비스 구조 설계",
    desc: "서비스 구조를 설계하고 우선순위를 정리해 기능 간 관계와 실행 기준을 구체화합니다.",
    details: ["IA", "기능 구조 정의", "사용자 흐름 설계", "Task Flow"],
    image: process02,
    align: "right",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "화면 설계 및 UI 구체화",
    desc: "설계한 구조를 기반으로 화면 단위의 UI를 구체화하고 사용자 경험을 시각적으로 정리합니다.",
    details: ["Wireframe", "UI Kit", "FigJam", "디자인 시스템"],
    image: process03,
    align: "left",
  },
  {
    number: "04",
    title: "Implementation",
    subtitle: "구현 및 협업 기준 정리",
    desc: "디자인 결과물을 실제 서비스 화면으로 연결하고 협업을 위한 기준과 명세를 정리합니다.",
    details: ["React 컴포넌트 설계", "API 및 데이터 구조 정의", "협업 문서화", "QA 반영"],
    image: process04,
    align: "right",
  },
  {
    number: "05",
    title: "Optimization",
    subtitle: "개선 및 완성도 고도화",
    desc: "구현 이후 구조와 사용성을 점검하고 반복 개선을 통해 완성도를 높입니다.",
    details: ["Logic 개선", "버그 수정", "성능 보완", "UI 개선"],
    image: process05,
    align: "left",
  },
];

function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const groups = sectionRef.current?.querySelectorAll(".reveal-group");
    if (!groups?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    groups.forEach((group) => observer.observe(group));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="container">
        <div className="process__header reveal-group">
          <div className="process__title-wrap reveal-item delay-0">
            <h2 className="process__title">Process<span className="point">.</span>

            </h2>
          </div>

          <div className="process__desc-wrap reveal-item delay-1">
            <p className="process__intro">
              문제를 구조화하고, 기능과 화면으로 연결해 실제 서비스로 구현하는
              과정을 설계합니다.
            </p>
          </div>
        </div>

        <div className="process__list">
          {processItems.map((item, index) => (
            <article
              key={item.number}
              className={`process__item process__item--${item.align} reveal-group`}
            >
              <div className="process__content">
                <div className={`process__text reveal-item delay-${index % 2}`}>
                  <span className="process__number">{item.number}</span>
                  <h3 className="process__subtitle">{item.title}</h3>
                  <p className="process__label">{item.subtitle}</p>
                  <p className="process__desc">{item.desc}</p>

                  <ul className="process__meta">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`process__image reveal-item delay-${(index % 2) + 1}`}
                >
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="process__cta reveal-group">
          <Link to="/projects" className="process__button reveal-item delay-0">
            <span className="process__button-text">Projects</span>
            <span className="process__button-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Process;