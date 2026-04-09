import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import ProjectReflection from "../../components/projectDetail/ProjectReflection";
import PoliceOverview from "../../components/policeDetail/PoliceOverview";
import PoliceMainDesign from "../../components/policeDetail/policeMaindesign";

import heroImg from "../../assets/projects/police/police-hero.jpg";
import reflectionImg from "../../assets/projects/police/police-reflection.png";
import '../../styles/policedetail.scss';

function PoliceDtail() {
  const reflectionText = `
  PM으로서 초기 웹사이트 구축 프로젝트로,
공공기관 웹서비스에서 정보 구조와 접근성의 중요성을 이해하게 된 경험이었습니다.

특히 다양한 사용자 환경을 고려하여
정보를 체계적으로 구성하고 전달하는 과정의 필요성을 체감했습니다.

또한 프로젝트 전반을 관리하며
일정 조율과 커뮤니케이션의 중요성을 경험했고,
공공 프로젝트에서 요구되는 기준과 흐름을 이해할 수 있었습니다.

이 경험을 통해
웹사이트를 단순히 디자인하는 것을 넘어,
사용자 환경과 서비스 목적을 함께 고려하는 시각을 갖게 되었습니다.

`;
  return (
    <main>
      <ProjectHero
        image={heroImg}
        imageAlt="치안대학원 프로젝트 메인 이미지"
        eyebrow="Project Management · Web Planning"
        subtitle=""
        title="경찰대학 치안대학원 홈페이지 구축"
        description={`치안대학원 웹서비스 제공을 위해 정보 구조를 재정비하고, 프로젝트 전반을 관리하며 웹사이트 구축을 진행한 프로젝트`}
        align="center"
        theme="dark"
        className="police-project__hero"
      />
      <PoliceOverview />
      <PoliceMainDesign />

      <ProjectReflection
        title="Reflection"
        body={reflectionText}
        image={reflectionImg}
        imageAlt="Uriwon 프로젝트 회고 대표 이미지"
        listHref="/projects"
      />

    </main>
  );
}

export default PoliceDtail;