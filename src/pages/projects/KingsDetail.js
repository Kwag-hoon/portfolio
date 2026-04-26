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
  KINGS 홈페이지 신규 구축 프로젝트는 단순한 웹사이트 개편을 넘어, 국가적 전문 교육기관의 디지털 아이덴티티를 제로베이스에서 재정립한 과정이었습니다. 공공기관 프로젝트 특유의 엄격한 보안 지침과 웹 접근성 표준을 철저히 준수하면서도, 사용자가 방대한 학사 정보와 연구 성과에 직관적으로 도달할 수 있는 **'최적의 정보 위계(Hierarchy)'**를 설계하는데 역량을 집중했습니다.

특히, 18명의 교수진별 독립적인 연구실 홈페이지를 아우르는 통합 관리 시스템(CMS)을 구축하여 운영 효율성을 극대화했으며, 반응형 웹 기술을 도입해 다양한 글로벌 접속 환경에서도 일관된 브랜드 경험을 제공하도록 설계했습니다. 이 과정에서 디자인의 역할은 시각적 미감을 넘어, 복잡한 공공 데이터를 사용자가 신뢰할 수 있는 구조로 시각화하고 연결하는 전략적 도구임을 다시 한번 정립했습니다.

RFP(제안요청서)의 복잡한 요구사항을 실질적인 서비스 로직으로 치환하여 입찰 1위라는 성과를 거두었으며, 기획적 통찰이 공공 서비스의 공익적 가치와 사용자의 편의성을 어떻게 연결할 수 있는지를 실무적으로 입증한 유의미한 프로젝트였습니다.

`;
  return (
    <main>
      <ProjectHero
        image={heroImg}
        imageAlt="한국원자력대학원대학교 프로젝트 메인 이미지"
        eyebrow="Project Management · Web Planning"
        subtitle="KINGS Website Project"
        title="한국전력 원자력대학원대학교 홈페이지 구축"
        description="웹 아이덴티티 확립, 반응형 웹, CMS 도입, 글로벌 홍보 강화"
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