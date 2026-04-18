import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import UriwonOverview from "../../components/uriwonDetail/UriwonOverview";
import UriwonProblem from "../../components/uriwonDetail/UriwonProblem";
import UriwonMaindesign from "../../components/uriwonDetail/UriwonMaindesign";
import UriwonSubdesign from "../../components/uriwonDetail/UriwonSubdesign";


import ProjectReflection from "../../components/projectDetail/ProjectReflection";
import reflectionImg from "../../assets/projects/designuriwon/uriwon_reflection.png";

import heroImg from "../../assets/projects/designuriwon/uriwon_hero1.jpg";
import '../../styles/uriwondetail.scss';

function DesignuriwonDetail() {
  const reflectionText = `디자인유리원 프로젝트는 브랜딩의 정의부터 실질적인 사용자 유입 구조 설계까지, 웹 서비스의 **'엔드 투 엔드(End-to-End) 프로세스'**를 관통하며 전략적 설계의 중요성을 입증한 과정이었습니다. 단순히 시각적으로 아름다운 웹사이트를 구축하는 것에 그치지 않고, 존재하지 않던 브랜드의 디지털 접점을 제로베이스에서부터 체계적으로 수립하는 데 집중했습니다.

  특히 초기 정보 구조(IA) 설계 단계에서 브랜드의 전문성이 사용자에게 직관적으로 전달될 수 있도록 탐색 흐름을 최적화했으며, 이는 곧 전체 사용자 경험(UX)의 완성도를 결정짓는 핵심 동력이 되었습니다. 또한, 검색 엔진 최적화(SEO)를 고려한 마크업과 유입 구조 설계를 병행함으로써, '보여지는 사이트'를 넘어 실제 비즈니스 타겟이 유입되는 '기능하는 채널'로서의 가치를 구현하는 데 주력했습니다.

  이번 프로젝트를 통해 디자인의 본질은 결과물을 꾸미는 것에 있는 것이 아니라, 사용자의 행동을 유도하고 비즈니스 흐름을 설계하는 전략적 도구라는 점을 다시 한번 정립할 수 있었습니다. 기획적 통찰과 기술적 커스텀 역량이 결합될 때 비로소 실질적인 성과를 만드는 인터페이스가 완성된다는 것을 확신한 프로젝트였습니다.
`;
  return (
    <main>
      <ProjectHero
        image={heroImg}
        imageAlt="디자인유리원 프로젝트 메인 이미지"
        eyebrow="Web UX/UI + SEO + Front-End Implementation"
        subtitle="Design uriwon Website Project"
        title=""
        description="브랜드 정의부터 SEO 구조 설계, 프론트엔드 구현까지 진행한 프로젝트"
        align="center"
        theme="dark"
        className="uriwon-project__hero"
      />
      <UriwonOverview />
      <UriwonProblem />
      <UriwonMaindesign />
      <UriwonSubdesign />


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

export default DesignuriwonDetail;