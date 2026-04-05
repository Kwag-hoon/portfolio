import React from 'react';
import ProjectHero from "../../components/project/ProjectHero";
import UriwonOverview from "../../components/uriwonDetail/UriwonOverview";


import heroImg from "../../assets/projects/designuriwon/uriwon_hero1.jpg";
import '../../styles/uriwondetail.scss';

function DesignuriwonDetail(props) {
  return (
    <main>
      <ProjectHero
        image={heroImg}
        imageAlt="디자인유리원 프로젝트 메인 이미지"
        eyebrow="Design uriwon Website Project"
        subtitle="기획에서 디자인까지 현실로"
        title="디자인유리원그룹"
        description="웹사이트 신규 구축 프로젝트"
        align="center"
        theme="dark"
        className="uriwon-project__hero"
      />
      <UriwonOverview />
    </main>
  );
}

export default DesignuriwonDetail;