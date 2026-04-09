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
  const reflectionText = `디자인을 넘어 구조, SEO, 사용자 흐름까지 함께 설계해야 실질적인 결과를 만들 수 있다는 것을 경험한 프로젝트였습니다.

  이번 프로젝트는 단순히 웹사이트를 구축하는 작업이 아니라, 브랜드를 정의하고 사용자 유입 구조까지 함께 설계하는 과정이었습니다.
  특히 디자인유리원은 기존 웹 환경이 없는 상태에서 시작했기 때문에, 정보 구조를 어떻게 나누고, 어떤 흐름으로 연결할 것인지에 대한 초기 설계가 전체 사용자 경험을 결정짓는 핵심 요소였습니다.

  또한 검색 유입을 고려한 구조 설계를 통해 단순히 보여주는 사이트가 아니라 실제 방문으로 이어지는 유입 구조를 만드는 것이 중요하다는 점을 체감할 수 있었습니다.

  이 과정을 통해 디자인은 결과를 꾸미는 것이 아니라, 사용자의 행동과 흐름을 설계하는 역할이라는 점을 다시 한번 확인했습니다.


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