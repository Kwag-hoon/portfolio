import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const iaData = [
  {
    key: "research",
    title: "연구성과",
    theme: "purple",
    groups: [
      {
        name: "연구보고서",
        children: ["연구보고서", "AI영상보고서", "이슈브리프"],
      },
      {
        name: "미디어",
        children: ["카드뉴스", "인포그래픽", "기획영상"],
      },
    ],
  },
  {
    key: "news",
    title: "아리소식",
    theme: "green",
    groups: [
      { name: "공지사항" },
      { name: "연구원소식" },
      { name: "채용공고" },
      { name: "보도자료" },
    ],
  },
  {
    key: "citizen",
    title: "시민참여",
    theme: "sky",
    groups: [
      { name: "시민연구단\n아리(ARI)랑 놀자" },
      { name: "정책제안" },
      { name: "시민 Q&A" },
      { name: "후원하기" },
    ],
  },
  {
    key: "about",
    title: "아리소개",
    theme: "blue",
    groups: [
      {
        name: "연구원소개",
        children: ["원장인사말", "미션 비전 가치", "CI"],
      },
      {
        name: "조직도",
        children: ["조직도", "부서소개", "연구진소개"],
      },
      {
        name: "정보공개",
        children: ["경영공시", "기부금공시"],
      },
      {
        name: "오시는길",
      },
    ],
  },
];

function AnsanIa() {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.25,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className={`ansan-ia ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ansan-ia__container">
        <div className="ansan-ia__heading reveal reveal--delay-1">
          <p className="ansan-ia__eyebrow">
            IA<span>.</span>
          </p>
          <p className="ansan-ia__desc">
            콘텐츠 흐름의 연결.  연구 → 결과 → 공유 → 참여
          </p>
        </div>

        <div className="ansan-ia__tree">
          <div className="ansan-ia__main-wrap reveal reveal--delay-2">
            <div className="ansan-ia__main">MAIN</div>
            <span className="ansan-ia__main-line" />
          </div>

          <div className="ansan-ia__branches">
            {iaData.map((branch, branchIndex) => (
              <div
                className={`ansan-ia__branch ansan-ia__branch--${branch.key} reveal reveal--delay-${branchIndex + 3}`}
                key={branch.title}
              >
                <div
                  className={`ansan-ia__branch-title ansan-ia__branch-title--${branch.theme}`}
                >
                  {branch.title}
                </div>

                <span className="ansan-ia__branch-line" />

                <div className="ansan-ia__groups">
                  {branch.groups.map((group) => (
                    <div className="ansan-ia__group" key={group.name}>
                      <div
                        className={`ansan-ia__group-title ansan-ia__group-title--${branch.theme} ${group.children ? "has-children" : ""
                          }`}
                      >
                        {group.name}
                      </div>

                      {group.children && (
                        <div className="ansan-ia__children">
                          {group.children.map((child) => (
                            <div
                              className={`ansan-ia__child ansan-ia__child--${branch.theme}`}
                              key={child}
                            >
                              {child}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnsanIa;