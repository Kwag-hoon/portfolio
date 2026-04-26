import React from "react";
import ProjectOverview from "../project/ProjectOverview";

function KingsOverview() {
  const overviewMeta = [
    { label: "PROJECT", value: "한국원자력대학원대학교" },
    { label: "TYPE", value: "University Website" },
    { label: "ROLE", value: "Project Manager" },
    { label: "PERIOD", value: "2018.12 - 2019.03" },
  ];

  return (
    <ProjectOverview
      className="kings-overview"
      eyebrow="Overview"
      title="한국전력 원자력대학원대학교 홈페이지 구축"
      description={`기존 홈페이지는 노후화된 구조와 비효율적인 정보 구성으로 인해 사용자가 원하는 정보를 찾기 어려운 상태였습니다.

      본 프로젝트에서는 전체 콘텐츠 구조를 재정비하고,
      페이지 구성 및 흐름을 정리하여 정보 전달력을 개선했습니다.

      또한 프로젝트 전반을 관리하며 일정 조율과 커뮤니케이션을 통해
      웹사이트가 안정적으로 구축될 수 있도록 운영했습니다.`}
      meta={overviewMeta}
      buttonText="사이트 바로가기"
      buttonHref="https://www.kings.ac.kr/"
    />
  );
}

export default KingsOverview;