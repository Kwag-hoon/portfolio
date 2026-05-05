import React from "react";
import PingHero from "../../components/projectDetail/PingHero";
import PingOverview from "../../components/projectDetail/PingOverview";
import PingProblemSolution from "../../components/projectDetail/PingProblemSolution";
import DetailTripleSection from "../../components/projectDetail/DetailTripleSection";
import PingIA from "../../components/projectDetail/PingIA";
import PingWorkflowHero from "../../components/projectDetail/PingWorkflowHero";
import PingFigmaMake from "../../components/projectDetail/PingFigmaMake";

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

  const reflectionText = `PING 프로젝트는 디자인 피드백이 휘발성 의견에 그치지 않고, 체계적으로 관리될 때 비로소 조직과 개인의 핵심 자산이 될 수 있음을 입증한 과정이었습니다. 특히 PIN 기반 피드백 시스템을 설계하며 **'정보의 맥락(Context)'**이 지니는 가치를 재확인했습니다. 피드백의 위치, 시점, 의도가 데이터로 치밀하게 결합될 때, 단순한 코멘트는 분석과 학습이 가능한 유의미한 데이터셋으로 기능하게 됩니다.

  기획 단계의 리서치를 통해 디자이너들의 핵심 페인 포인트가 '피드백 관리의 부재'에 있음을 파악했고, 이를 해결하기 위해 문제유형 기반 아카이빙과 자동기록 시스템을 구축했습니다. 다만, 직접 React 구현까지 병행하는 과정에서 'PIN 인터랙션'이라는 생소한 사용자 경험을 안착시키기 위한 온보딩 프로세스와 가이드 설계에 더 깊은 리소스를 투입하지 못한 점은 전략적 아쉬움으로 남습니다. 이는 향후 프로젝트의 완성도를 결정짓는 최우선 고도화 과제로 정의하고 있습니다.

 이번 프로젝트는 단순히 사용자 행동을 개선하는 UX 설계를 넘어, 데이터의 누적이 미래에 창출할 확장성(Scalability)까지 고려한 설계의 중요성을 관철하는 계기가 되었습니다. 축적된 데이터를 기반으로 성장 지표를 시각화하고 디자인 패턴 학습 시스템으로 확장 가능한 구조를 구축한 것은, 기획적 통찰과 기술적 구현이 맞물려 만들어낸 핵심적인 성과입니다.

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
      {/* Figma Make */}
      <PingFigmaMake />
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