import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import AnsanOverview from "../../components/ansanDetail/AnsanOverview";
import ProjectProblemGoal from "../../components/project/ProjectProblemGoal";
import AnsanIa from "../../components/ansanDetail/AnsanIa";
import problemGoalData from "../../data/problemGoalData";


import heroImg from "../../assets/projects/ansan/ansan_hero.jpg";
import "../../styles/ansandetail.scss";

function AnsanDetail() {
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




    </main>
  );
}

export default AnsanDetail;