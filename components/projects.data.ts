// components/projects.data.ts

/* ==========================================================================
   PROJECT TYPE DEFINITION
   ========================================================================== */
export type Project = {
  id: string;          // URL 경로로 사용될 고유 ID
  title: string;       // 프로젝트 제목
  type: string;        // 프로젝트 유형 (Team Project / Solo Project 등)
  period: string;      // 수행 기간
  contribution: string; // 기여도 (%)
  platform: string;    // 플랫폼 및 환경
  isPatent?: boolean;  // 특허 관련 여부

  tech: string[];      // 사용 기술 스택 리스트
  summary: string;     // 프로젝트 한 줄 요약 (Hero 섹션용)

  problem?: string;    // 기획 배경 및 문제 정의
  solution?: string[]; // 해결 방안 및 시스템 설계 단계
  role?: string;       // 본인의 구체적인 역할 및 기여 내용
  features?: string[]; // 주요 기능 및 성과 지표

  links?: {
    github?: string;   // 깃허브 주소
    demo?: string;     // 라이브 데모 주소
    video?: string;    // 시연 영상 주소
  };
};

/* ==========================================================================
   PROJECTS DATA LIST
   ========================================================================== */
export const PROJECTS_DATA: Project[] = [
  {
    id: "sosai",
    title: "SOSAI",
    type: "Team Project",
    period: "2025.03 - 2025.06",
    contribution: "85%",
    platform: "Web / React SPA · FastAPI (AWS EC2)",
    isPatent: true,
    tech: [
      "React",
      "Netlify",
      "FastAPI",
      "Uvicorn",
      "AWS EC2",
      "MongoDB Atlas",
      "SBERT",
      "OpenAI API",
      "gTTS",
      "systemd",
      "Nginx",
    ],
    summary:
      "응급 상황에서 화면 없이도 음성으로 단계별 행동 지침을 제공하는 AI 기반 응급 대응 웹 서비스.",
    problem:
      "응급 상황에서 비전문가는 증상을 정확히 판단하기 어렵고, 당황으로 인해 잘못된 처치나 골든타임 손실이 발생합니다. 기존 텍스트 위주의 매뉴얼은 긴박한 현장에서 활용도가 낮다는 문제점이 있습니다.",
    solution: [
      "MongoDB에 저장된 사용자 의료 데이터(연령·성별·기저질환)를 API 호출 즉시 분석하여 위험도 해석",
      "SBERT 기반 의도 파악 후 OpenAI LLM을 통해 환자 맞춤형 응급 처치 가이드를 자연어로 생성",
      "gTTS를 활용한 Voice-First UX를 설계하여 화면을 보지 않고도 처치에 집중할 수 있는 환경 제공",
      "Nginx 리버스 프록시와 SSL 설정을 통해 보안 통신을 구현하고, AWS EC2에서 안정적으로 운영",
    ],
    role:
      "프론트엔드와 백엔드 전반을 주도적으로 개발했습니다. 특히 사용자 정보 기반 응급 대응 플로우 설계와 API 개발, AWS EC2 인프라 구축 및 systemd를 이용한 장애 자동 복구 로직 구현을 담당했습니다.",
    features: [
      "건강보험심사평가원(HIRA) 보건의료 창업아이디어대회 입상",
      "응급 대응 AI 서비스 구조 관련 국내 특허 출원 진행 중",
      "Netlify(FE) + AWS EC2(BE) 기반의 실서비스 배포 및 운영 최적화",
      "CORS 정책 관리 및 /etc 환경변수 분리를 통한 보안성 강화",
    ],
    links: {
      github: "https://github.com/rcl0511/OPENSOURCECOLABO",
      demo: "https://sosaii.netlify.app/",
    },
  },

  {
    id: "smart-barricade",
    title: "Smart Barricade",
    type: "Team Project",
    period: "2023.03 - 2023.06",
    contribution: "50%",
    platform: "IoT / Android",
    isPatent: false,
    tech: ["ESP32", "BLE GATT", "Kotlin", "Load Cell", "C"],
    summary:
      "군중 밀집 상황을 하중 데이터로 정량화해 사고를 사전에 예방하는 IoT 기반 스마트 안전 시스템.",
    problem:
      "축제·행사 현장에서 군중 밀집도를 실시간으로 판단할 수 있는 정량적 데이터가 부족했습니다. 기존의 육안 관찰 방식은 오차가 크고 사후 대응에 치중되어 있다는 한계가 있었습니다.",
    solution: [
      "펜스형 바리케이드 하단에 로드셀 센서를 장착하여 실시간 압력/하중 데이터 수집",
      "ESP32 마이크로컨트롤러를 통해 수집된 데이터를 BLE/Wi-Fi 프로토콜로 중앙 서버 및 앱 전송",
      "임계치 초과 시 즉각적인 경보음 작동 및 관리자 앱 Push 알림 시스템 구축",
    ],
    role:
      "임베디드 통신 로직 설계 및 BLE GATT 프로토콜 최적화를 담당했습니다. 센서 데이터의 노이즈를 줄이기 위해 C언어로 중앙값 필터링(Median Filter) 알고리즘을 구현했습니다.",
    features: [
      "Android 앱 내 실시간 하중 변화 시각화 대시보드 구현",
      "BLE와 Wi-Fi 병행 환경에서의 데이터 통신 안정성 확보",
      "캡스톤 디자인 대상 수상 및 지역 우수 성과 전시회 대표 참가",
    ],
    links: {
      github: "https://github.com/rcl0511",
      video: "#",
    },
  },

  {
    id: "business-automation",
    title: "Business Automation",
    type: "Solo Project",
    period: "2023",
    contribution: "100%",
    platform: "Desktop Automation",
    isPatent: false,
    tech: ["Node.js", "Python", "PDF Parsing", "Automation Script"],
    summary:
      "의약품 도매 실무의 반복 업무를 자동화해 처리 시간을 대폭 단축한 업무 자동화 시스템.",
    problem:
      "수천 장의 거래명세서를 수작업으로 확인하고 입력하는 과정에서 과도한 시간이 소요되고, 오타 등 휴먼 에러로 인한 재고 관리 손실이 발생했습니다.",
    solution: [
      "비정형 PDF 거래명세서 포맷에서 텍스트와 표 데이터를 추출하는 파싱 엔진 개발",
      "추출된 데이터를 DB 스키마에 맞게 정규화하고 중복을 제거하는 전처리 파이프라인 설계",
      "복잡한 반복 수작업을 원클릭으로 처리할 수 있는 통합 자동화 스크립트 제작",
    ],
    role:
      "현업 업무 프로세스 분석부터 문제 정의, 자동화 설계 및 파이썬 기반 스크립트 개발까지 전 과정을 단독으로 수행했습니다.",
    features: [
      "실제 의약품 도매업체 현업에 적용하여 실질적인 피드백 반영",
      "기존 수작업 대비 업무 처리 시간 약 70% 단축 성과 달성",
      "예외 상황(비정형 폰트, 규격 외 폼)에 대한 처리 로직 추가로 데이터 정확도 향상",
    ],
    links: {
      github: "https://github.com/rcl0511",
      video: "#",
    },
  },

  {
    id: "baseball-news",
    title: "Baseball News Generator",
    type: "Team Project",
    period: "2022",
    contribution: "100%",
    platform: "Desktop Tool",
    isPatent: false,
    tech: ["Python", "Rule-based NLP", "Data Processing"],
    summary:
      "야구 경기 데이터를 자연어 기사로 자동 변환하는 데이터 기반 기사 생성 프로그램.",
    problem:
      "스포츠 뉴스의 경우 정형화된 경기 데이터가 존재함에도 불구하고, 매번 기자가 동일한 패턴의 요약 기사를 작성하는 데 비효율적인 시간이 소요되었습니다.",
    solution: [
      "경기 결과 점수, 승리/패배 투수 정보, 주요 홈런 기록을 문장 템플릿과 매칭",
      "경기 상황(역전승, 대승, 접전 등)에 따라 적절한 형용사와 문장 구조를 선택하는 조건부 로직 구현",
      "데이터 수집부터 자연어 텍스트 파일 생성까지의 프로세스 자동화",
    ],
    role:
      "문장 생성 알고리즘 설계와 Data-to-Text 변환 로직을 담당했습니다. 야구 경기 규칙에 따른 수만 가지 경우의 수를 분석하여 조건문 기반 NLP 엔진을 구축했습니다.",
    features: [
      "데이터 기반 팩트 오류가 없는 정확한 경기 기사 초안 생성",
      "다양한 경기 상황 시나리오에 따른 동적 문장 출력",
      "Rule-based NLP에 대한 이해도를 높이고 데이터 핸들링 역량 강화",
    ],
    links: {
      github: "https://github.com/rcl0511",
      video: "#",
    },
  },
];