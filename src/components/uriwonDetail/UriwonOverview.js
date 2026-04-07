import React from "react";
import ProjectOverview from "../project/ProjectOverview";

function UriwonOverview() {
  const overviewMeta = [
    { label: "PROJECT", value: "디자인유리원" },
    { label: "TYPE", value: "Corporate Website" },
    { label: "ROLE", value: "기획 · UX/UI 디자인 · 퍼블리싱 · 배포" },
    { label: "STACK", value: "Figma · HTML · CSS3 · JavaScript · Cafe24" },
    { label: "PERIOD", value: "2023.05 - 2023.07" },
  ];

  return (
    <ProjectOverview
      className="uriwon-overview"
      eyebrow="Overview"
      title="디자인유리원 웹사이트 구축 프로젝트"
      description=" 디자인유리원의 브랜드 정체성을 웹 공간에 새롭게 정의하고, 포트폴리오 중심의 사용자 경험을 설계한 프로젝트입니다. 단순한 사이트 구축을 넘어 브랜드 소개와 작업물이 유기적으로 연결될 수 있도록 전체 기획부터 디자인, 퍼블리싱, 최종 배포까지 전 과정을 단독으로 전담하였습니다.
      특히 카페24 솔루션을 활용하되, 기존 템플릿의 한계를 극복하기 위해 약 50% 이상의 코드를 직접 커스터마이징했습니다. 이를 통해 가독성과 시각적 완성도를 높였으며, 검색 유입을 고려한 SEO 최적화와 콘텐츠 탐색 흐름을 재구성하여 브랜드의 전문성을 효과적으로 전달하는 데 집중했습니다."
      meta={overviewMeta}
      buttonText="사이트 바로가기"
      buttonHref="https://designuriwon.com/default/"
    />
  );
}

export default UriwonOverview;