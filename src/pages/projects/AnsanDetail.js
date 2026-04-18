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

  const reflectionText = `안산미래연구원 프로젝트는 공공 서비스의 핵심 가치가 화려한 심미성보다 **'정보의 명확한 위계'**와 **'직관적인 접근성'**에 있음을 다시 한번 관철하는 계기가 되었습니다. 사용자가 기관의 정체성을 즉각적으로 파악하고 방대한 데이터 속에서 원하는 정보에 도달할 수 있도록, 정교한 콘텐츠 분류와 유기적인 연결 설계에 모든 역량을 집중했습니다..

  특히 연구성과, 시민참여, 기관 소개 등 성격이 판이한 데이터를 하나의 사용자 흐름(User Flow) 안에 통합하여, 디자인이 단순한 장식이 아닌 복잡한 정보의 최적화된 시각화 도구임을 설계 결과물로 증명했습니다.

  다만, 외부 환경의 변화와 프로젝트 정책상의 사유로 인해 메인 및 서브 UI 설계 단계에서 과업을 마무리해야 했던 점은 기획자로서 큰 아쉬움으로 남습니다. 설계된 로직이 실제 최종 배포와 운영 단계에서 사용자 피드백을 통해 고도화되는 과정을 함께하지 못했으나, 본 프로젝트를 통해 구축한 **'정보 접근성 중심의 설계 가이드'**는 향후 공공 프로젝트의 지속 가능한 구조를 고민하는 데 중요한 밑거름이 되었습니다.`;
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