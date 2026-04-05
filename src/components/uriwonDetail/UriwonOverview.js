import React from "react";
import ProjectOverview from "../project/ProjectOverview";

function UriwonOverview() {
  const overviewMeta = [
    { label: "PROJECT", value: "디자인유리원" },
    { label: "TYPE", value: "Corporate Website" },
    { label: "ROLE", value: "기획 · UX/UI 디자인 · 퍼블리싱 · 배포" },
    { label: "STACK", value: "HTML · CSS3 · JavaScript · Cafe24" },
    { label: "PERIOD", value: "2023.05 - 2023.07" },
  ];

  return (
    <ProjectOverview
      className="uriwon-overview"
      eyebrow="Overview"
      title="디자인유리원 웹사이트 구축 프로젝트"
      description="디자인유리원 웹사이트는 브랜드와 작업물을 효과적으로 전달할 수 있는 구조가 필요했으며, 이를 위해 전체 기획부터 디자인, 퍼블리싱, 배포까지 전 과정을 단독으로 수행한 프로젝트입니다. 카페24 템플릿을 일부 활용하되, 약 50% 이상을 직접 커스터마이징하여 사이트 구조와 UI를 재구성했습니다. 사용자가 브랜드 소개와 포트폴리오 콘텐츠를 자연스럽게 탐색할 수 있도록 정보 흐름을 정리하고, 가독성과 시각적 완성도를 높이는 데 집중했습니다."
      meta={overviewMeta}
      buttonText="사이트 바로가기"
      buttonHref="https://designuriwon.com/default/"
    />
  );
}

export default UriwonOverview;