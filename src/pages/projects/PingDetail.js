import React from "react";
import PingHero from "../../components/projectDetail/PingHero";
import PingOverview from "../../components/projectDetail/PingOverview";
import PingProblemSolution from "../../components/projectDetail/PingProblemSolution";
import DetailTripleSection from "../../components/projectDetail/DetailTripleSection";
import PingIA from "../../components/projectDetail/PingIA";
import PingWorkflowHero from "../../components/projectDetail/PingWorkflowHero";
import PingWorkflowDetail from "../../components/projectDetail/PingWorkflowDetail";
import PingAdminSystem from "../../components/projectDetail/PingAdminSystem";
import ProjectReflection from "../../components/projectDetail/ProjectReflection";
import pingProjectImage from "../../assets/projects/ping/ping-Project.png";
import "../../styles/pingdetail.scss";

function PingDetail() {
  /* =========================
      Core Value 데이터
   ========================= */
  const coreValueData = [
    {
      title: "Framing (문제 정의)",
      desc: "단순히 예쁜 디자인이 아니라, 해결해야 할 문제를 먼저 정의하고 그에 맞는 피드백을 유도  합니다.",
    },
    {
      title: "Structure (구조화)",
      desc: "모든 데이터와 인터랙션은 '운영 가능한 구조' 위에서 설계되어 정보의 선순환을 만듭니다.",
    },
    {
      title: "Growth (성장)",
      desc: "피드백을 주고받는 과정 자체가 데이터로 축적되어 디자이너 개인의 자산이 되는 선순환 구조를 지향합니다.",
    },
  ];

  /* =========================
     Strategy & Concept 데이터
  ========================= */
  const strategyConceptData = [
    {
      title: "As-Is vs To-Be 전략",
      desc: "사용자가 현재 겪고 있는 문제와 개선되어야 할 방향을 명확히 구분하여 구조를 설계했습니다.",
    },
    {
      title: "입력 구조 최적화",
      desc: "모바일에서도 손쉽게 핀을 찍고 의견을 남길 수 있도록 입력 폼과 흐름을 단순화하고 직관적으로 설계했습니다.",
    },
    {
      title: "순환형 워크플로우 (Core Concept)",
      desc: "문제 발견 → 업로드 → PIN 지정 → 피드백 수렴 → 기록 및 개선으로 이어지는 6단계 선순환 구조를 서비스의 핵심 엔진으로 삼습니다.",
    },
  ];

  const reflectionText = `PING 프로젝트를 진행하면서 디자인 피드백이 단순히 의견을 주고받는 것이 아니라, 체계적으로 관리되고 기록될 때 비로소 성장의 자산이 된다는 점을 확인했습니다. 특히 PIN 기반 피드백 시스템을 설계하면서 '맥락'의 중요성을 다시 한번 확인했습니다. 정확한 위치, 시점, 의도가 함께 기록될 때 피드백은 단순한 코멘트를 넘어 학습 가능한 데이터가 됩니다.  

  사용자 리서치 과정에서 디자이너들이 피드백을 받는 것보다 '관리하는 것'에 더 큰 어려움을 겪고 있다는 점을 발견했고, 이를 해결하기 위해 이슈 기반 아카이빙과 타임라인 기록 시스템을 설계했습니다. 다만, 초기 사용자에게 PIN을 찍는 행위 자체가 낯설 수 있다는 점을 고려하여, 온보딩 프로세스와 가이드 설계에 더 많은 시간을 할애해야 했습니다.

 이 프로젝트를 통해 좋은 UX 설계는 사용자의 현재 행동을 개선하는 것뿐만 아니라, 데이터가 쌓였을 때 미래에 제공할 수 있는 가치까지 고려해야 한다는 것을 배웠습니다. 축적된 피드백 데이터를 기반으로 개인 성장 지표를 시각화하고, 디자인 패턴을 학습하는 기능까지 확장할 수 있는 구조를 설계한 것이, 이 프로젝트의 핵심 성과였습니다.

`;


  return (
    <main className="ping-detail">
      <PingHero />
      <PingOverview />
      <PingProblemSolution />
      {/* Core Value */}
      <DetailTripleSection
        eyebrow="Core Value"
        items={coreValueData}
        showNumber={true}
      />

      {/* Strategy & Concept */}
      <DetailTripleSection
        eyebrow="Strategy & Concept"
        items={strategyConceptData}
        showNumber={false}
      />
      {/* IA */}
      <PingIA />
      {/* Workflow Hero */}
      <PingWorkflowHero />
      {/* Workflow Detail */}
      <PingWorkflowDetail />
      {/* Admin System */}
      <PingAdminSystem />

      <ProjectReflection
        title="Reflection"
        body={reflectionText}
        image={pingProjectImage}
        imageAlt="PING 프로젝트 회고 대표 이미지"
        listHref="/projects"
      />
    </main>
  );
}

export default PingDetail;