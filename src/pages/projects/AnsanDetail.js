import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import AnsanOverview from "../../components/ansanDetail/AnsanOverview";
import ProjectProblemGoal from "../../components/project/ProjectProblemGoal";
import AnsanIa from "../../components/ansanDetail/AnsanIa";
import problemGoalData from "../../data/problemGoalData";
import ProjectReflection from "../../components/projectDetail/ProjectReflection";
import reflectionImg from "../../assets/projects/ansan/reflection.png";
import AnsanMainDesign from "../../components/ansanDetail/AnsanMainDesign";
import AnsanSubDesign from "../../components/ansanDetail/AnsanSubDesign";
import AnsanResponsive from "../../components/ansanDetail/AnsanResponsive";


import heroImg from "../../assets/projects/ansan/ansan_hero.jpg";
import "../../styles/ansandetail.scss";

function AnsanDetail() {

  const reflectionText = `안산미래연구원 프로젝트를 통해 공공기관 웹사이트에서 가장 중요한 것은 화려한 표현보다 명확한 정보 구조라는 점을 배웠습니다. 사용자는 기관의 성격을 빠르게 이해하고 필요한 정보로 자연스럽게 이동해야 하므로, 콘텐츠를 어떻게 분류하고 연결할지에 대한 설계가 전체 사용자 경험을 결정했습니다.

  이번 작업에서는 연구성과, 시민참여, 기관 소개 등 성격이 다른 정보를 하나의 흐름 안에서 정리하는 데 집중했습니다. 그 과정에서 디자인은 단순히 보기 좋게 만드는 작업이 아니라, 복잡한 정보를 사용자가 이해하기 쉬운 구조로 시각화하는 역할이라는 점을 확인할 수 있었습니다.

`;
  return (
    <main className="project-detail ansan-project">
      <ProjectHero
        image={heroImg}
        imageAlt="안산미래연구원 프로젝트 메인 이미지"
        eyebrow="Public Institution Website Project"
        subtitle="시민의 삶과 도시의 미래를 연결하는"
        title="안산미래연구원"
        description="공공기관 웹사이트 신규 구축 프로젝트"
        align="center"
        theme="dark"
        className="ansan-project__hero"
      />
      <AnsanOverview />
      <ProjectProblemGoal data={problemGoalData} />
      <AnsanIa />
      <AnsanMainDesign />
      <AnsanSubDesign />
      <AnsanResponsive />
      <ProjectReflection
        title="Reflection"
        body={reflectionText}
        image={reflectionImg}
        imageAlt="Ansan 프로젝트 회고 대표 이미지"
        listHref="/projects"
      />

    </main>
  );
}

export default AnsanDetail;