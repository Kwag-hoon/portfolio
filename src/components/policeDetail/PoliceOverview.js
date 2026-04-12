import React from "react";
import ProjectOverview from "../project/ProjectOverview";

function PoliceOverview() {
  const overviewMeta = [
    { label: "PROJECT", value: "경찰대학 치안대학원 웹사이트 구축" },
    { label: "TYPE", value: "University Website" },
    { label: "ROLE", value: "Project Manager" },
    { label: "PERIOD", value: "2018.08 - 2019.12" },
  ];

  return (
    <ProjectOverview
      className="police-overview"
      eyebrow="Overview"
      title="경찰대학 치안대학원 웹사이트 구축"
      description={`치안대학원 웹서비스 제공을 위해 사용자 특성에 맞는
정보 구조 정비와 콘텐츠 체계화가 필요한 상황이었습니다.

본 프로젝트에서는 다양한 디바이스 환경에 대응할 수 있도록
웹사이트 구조를 재정비하고,
정보 접근성과 전달력을 개선하는 데 집중했습니다.

또한 프로젝트 전반을 관리하며 일정 조율과 커뮤니케이션을 통해
웹사이트가 안정적으로 구축될 수 있도록 운영했습니다.`}
      meta={overviewMeta}
      buttonText="사이트 바로가기"
      buttonHref="https://grad.police.ac.kr/"
    />
  );
}

export default PoliceOverview;