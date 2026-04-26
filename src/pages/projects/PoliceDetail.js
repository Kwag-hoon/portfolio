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
  치안대학원 홈페이지 구축 프로젝트는 공공기관이 요구하는 **'엄격한 기술 표준'**과 대학원 서비스에 필요한 **'사용자 편의성'**을 유기적으로 결합하는 과정이었습니다. 기획자(PM)로서 단순히 기능적인 웹사이트를 만드는 것을 넘어, 경찰 교육기관이 지닌 공적 신뢰성을 디지털 환경에서 어떻게 시각화하고 전달할 것인가에 대한 해답을 찾는 데 집중했습니다.

특히, 대학원 특유의 복잡한 학사 일정과 연구 데이터를 사용자의 시나리오에 맞춰 재배치하는 '정보 큐레이션' 단계에 공을 들였습니다. 입찰 제안 단계에서부터 기관의 특수성을 깊이 있게 분석하여 최적의 흐름을 설계했고, 이를 통해 실질적인 성과로 이어지는 경험을 했습니다.

이 프로젝트를 통해 디자인의 심미성만큼이나 중요한 것은 **'데이터의 무결성과 보안'**이며, 기획자는 이러한 보이지 않는 가치를 사용자 인터페이스 위로 안전하게 끌어올리는 설계자여야 함을 다시 한번 입증했습니다.
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