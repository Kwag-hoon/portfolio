import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import UriwonOverview from "../../components/uriwonDetail/UriwonOverview";
import UriwonProblem from "../../components/uriwonDetail/UriwonProblem";



import heroImg from "../../assets/projects/designuriwon/uriwon_hero1.jpg";
import '../../styles/uriwondetail.scss';

function DesignuriwonDetail(props) {
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


    </main>
  );
}

export default DesignuriwonDetail;