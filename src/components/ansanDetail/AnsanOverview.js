import React from "react";
import ProjectOverview from "../project/ProjectOverview";

function AnsanOverview() {
  const overviewMeta = [
    { label: "PROJECT", value: "안산미래연구원" },
    { label: "TYPE", value: "Public Institution Website" },
    { label: "ROLE", value: "UX/UI 기획 · 메인 디자인 · 서브 디자인" },
    { label: "STACK", value: "Figma" },
    { label: "PERIOD", value: "2025.05 - 2025.06" },
  ];

  return (
    <ProjectOverview
      className="ansan-overview"
      eyebrow="Overview"
      title="안산미래연구원 신규 구축 프로젝트"
      description="안산미래연구원 홈페이지는 기존에 정보 구조와 시각적 체계가 충분히 정리되어 있지 않아, 기관의 역할과 연구 콘텐츠를 효과적으로 전달하기 어려운 상태였습니다. 본 프로젝트에서는 공공기관 웹사이트에 맞는 신뢰감 있는 UI와 명확한 정보 구조를 기반으로 메인 화면과 주요 서브 페이지를 새롭게 설계했습니다. 사용자가 연구원 소개, 연구 정보, 발간물, 참여 콘텐츠에 보다 쉽게 접근할 수 있도록 흐름을 정리하고, 콘텐츠 전달력과 가독성을 높이는 방향으로 디자인했습니다."
      meta={overviewMeta}
      buttonText="사이트 바로가기"
      buttonHref="https://ansan.re.kr/"
    />
  );
}

export default AnsanOverview;