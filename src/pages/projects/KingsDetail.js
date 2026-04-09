import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import ProjectReflection from "../../components/projectDetail/ProjectReflection";
import KingsOverview from "../../components/kingsDetail/KingsOverview";
import KingsMaindesign from "../../components/kingsDetail/KingsMaindesign";

import reflectionImg from "../../assets/projects/kings/kings-reflection.png";
import heroImg from "../../assets/projects/kings/kings-hero.jpg";
import '../../styles/kingsdetail.scss';

function KingsDetail(props) {
  const reflectionText = `
  PM으로서 초기 웹사이트 구축 프로젝트로,
정보 구조와 화면 구성의 중요성을 이해하게 된 경험이었습니다.

특히 다양한 콘텐츠를 체계적으로 정리하고,
사용자가 원하는 정보를 빠르게 찾을 수 있도록
구조를 설계하는 과정의 필요성을 체감했습니다.

또한 프로젝트 전반을 관리하며
일정 조율과 커뮤니케이션의 중요성을 경험했고,
웹사이트 구축 과정에서 PM 역할의 책임과 흐름을 이해할 수 있었습니다.

이 경험을 통해
웹사이트를 단순히 시각적으로 구성하는 것이 아니라,
정보 구조와 흐름을 기반으로 설계해야 한다는 관점을 갖게 되었습니다.

`;
  return (
    <main>
      <ProjectHero
        image={heroImg}
        imageAlt="한국원자력대학원대학교 프로젝트 메인 이미지"
        eyebrow="Project Management · Web Planning"
        subtitle="KINGS Website Project"
        title="한국원자력대학원대학교 홈페이지 구축"
        description="노후화된 대학 홈페이지를 개선하기 위해 정보 구조를 재정비하고, 프로젝트 전반을 관리하며 웹사이트 구축을 진행한 프로젝트"
        align="center"
        theme="dark"
        className="kings-project__hero"
      />
      <KingsOverview />
      <KingsMaindesign />

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

export default KingsDetail;