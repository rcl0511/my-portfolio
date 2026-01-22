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
      "DB에 저장된 사용자 의료 데이터(연령·성별·기저질환)를 분석하여 위험도 해석",
      "OpenAI LLM을 통해 환자 맞춤형 응급 처치 가이드를 자연어로 생성",
      "gTTS를 활용한 Voice-First UX를 설계/ 음성 대응 환경 제공",

    ],
    role:
      "기여율 85%",

    links: {
      github: "https://github.com/rcl0511/OPENSOURCECOLABO",
      demo: "https://sosaii.netlify.app/",
    },
  },

  {
    id: "smart-barricade",
    title: "Smart Barricade",
    type: "Team Project",
    period: "2025.09 - 2025.12",
    contribution: "50%",
    platform: "IoT / Android",
    isPatent: false,
    tech: ["ESP32", "BLE GATT", "Kotlin", "Load Cell", "Arduino"],
    summary:
      "군중 밀집 상황을 하중 데이터로 정량화해 사고를 사전에 예방하는 IoT 기반 스마트 안전 시스템.",
    problem:
      "군중 밀집으로 인한 사고가 반복적으로 발생하지만, 기존 바리케이드는 정적 구조물로 군중 압력에 능동적으로 대응하지 못합니다. 회전·전도 안정성이 낮고, 시각적 안내 수단이 부족하며, 비상 상황에서 구조 인력의 신속한 진입이 어렵다는 한계를 가집니다.",
    solution: [
      "로드셀 기반 실시간 하중 감지로 군중 압력을 정량화",
      "하중 증가 시 지지대 자동 확장으로 전도 안전율 1.5배 이상 향상",
      "LED 기반 시각 안내 및 BLE/WiFi 통신으로 원격 모니터링 및 제어",
      "안드로이드 앱을 통한 실시간 데이터 시각화 및 수동/자동 제어",
    ],
    role:
      "임베디드 통신 로직 설계 및 BLE GATT 프로토콜 최적화를 담당",
    features: [
      "Android 앱 내 실시간 하중 변화 시각화 대시보드 구현",
      "BLE와 Wi-Fi 병행 환경에서의 데이터 통신 안정성 확보",
      "캡스톤 디자인 대상 수상 및 지역 우수 성과 전시회 대표 참가",
    ],
    links: {
      github: "https://github.com/rcl0511/smart-barricade-app",
      video: "#",
    },
  },

  {
    id: "onliner",
    title: "Onliner",
    type: "Solo Project",
    period: "2024",
    contribution: "100%",
    platform: "WEB",
    isPatent: false,
    tech: ["React", "React Router DOM", "Axios", "Google Maps API", "Spring Boot", "Java", "Spring Data JPA", "MariaDB/MySQL", "Apache PDFBox", "Apache POI", "WebSocket", "Netlify", "Render", "Docker"],
    summary:
      "병원 포털과 도매업체 포털을 분리해 운영하는 의약품 거래/명세서 관리 SaaS. 역할 기반 권한 분기, PDF 파싱, 실시간 채팅(WebSocket), 배송 추적까지 포함한 통합 관리 시스템.",
    problem:
      "수천 장의 거래명세서를 수작업으로 확인하고 입력하는 과정에서 과도한 시간이 소요되고, 오타 등 휴먼 에러로 인한 재고 관리 손실이 발생했습니다.",
    solution: [
      "병원/도매업체 포털 분리 및 역할 기반 권한 분기",
      "WebSocket 기반 실시간 채팅 시스템 구축",
      "PDF 파싱 및 Excel 일괄 처리로 업무 자동화",
      "멀티테넌트 구조로 업체별 독립 데이터 관리",
    ],
    role:
      "현업 업무 프로세스 분석부터 문제 정의, 설계 및 전 과정을 단독 수행",
    features: [
      "실제 의약품 도매업체 현업에 적용하여 실질적인 피드백 반영",
      "기존 수작업 대비 업무 처리 시간 약 70% 단축 성과 달성",
      "예외 상황(비정형 폰트, 규격 외 폼)에 대한 처리 로직 추가로 데이터 정확도 향상",
    ],
    links: {
      github: "https://github.com/rcl0511/onliner",
      demo: "https://onlinerr.netlify.app/vendor/dashboard",
      video: "#",
    },
  },

  {
    id: "baseball-news",
    title: "Fastball",
    type: "Team Project",
    period: "2025",
    contribution: "33%",
    platform: "Web / React SPA · FastAPI (Netlify + Railway)",
    isPatent: false,
    tech: [
      "React",
      "FastAPI",
      "Uvicorn",
      "PostgreSQL",
      "SQLite",
      "LangChain",
      "HuggingFace (llama-ko)",
      "FAISS",
      "ChromaDB",
      "Claude API",
      "Docker",
    ],
    summary:
      "LLM과 RAG를 결합하여 스포츠 기사 작성을 자동화하는 AI 기반 기사 생성 시스템. 기자는 반복적인 데이터 정리와 초안 작성 시간을 절약하고 더 가치 있는 업무에 집중할 수 있습니다.",
    problem:
      "언론진흥재단에 따르면 기자들은 하루 평균 14건 이상의 기사를 작성합니다. 특히 스포츠 기자는 매일 수많은 경기를 취재하며 기사를 작성하는데, 야구는 승패, 주요 기록, 하이라이트들이 비슷한 포맷을 반복해서 다루는 경우가 많습니다. 이러한 반복적인 데이터 정리와 초안 작성에 최소 30분 이상의 시간이 소요되며, 이는 기자의 시간과 에너지를 소모하는 비효율적인 작업입니다. 기존의 자동화 도구들은 정해진 템플릿에 데이터만 채워 넣는 방식이어서 획일적이고 딱딱한 기사가 만들어지는 한계가 있었습니다.",
    solution: [
      "LLM과 RAG를 결합하여 단순히 데이터를 나열하는 것을 넘어 문맥을 이해하고 더 자연스러운 문체로 기사를 생성",
      "당일 경기 데이터를 CSV 형태로 수집하고, Claude에서 자연어 문장으로 변환 후 임베딩 모델로 벡터화하여 ChromaDB에 저장",
      "ChromaDB와 PostgreSQL을 활용하여 리랭커로 기사와 관련된 정보만 우선적으로 적용",
      "두 소스의 데이터를 7:3 비율로 Claude에 전달하여 자연스럽고 맥락 있는 야구 기사 생성",
      "웹사이트 내에서 데이터 업로드부터 기사 생성까지 모든 과정이 원스톱으로 이루어져 빠르고 직관적인 사용자 경험 제공",
    ],
    role:
      "프론트엔드 개발 담당",
    features: [
      "LLM과 RAG 결합을 통한 자연스러운 문체의 기사 자동 생성",
      "ChromaDB와 PostgreSQL을 활용한 하이브리드 검색 시스템",
      "리랭커를 통한 관련성 높은 정보 우선 적용으로 기사 품질 향상",
      "웹 기반 원스톱 워크플로우로 기사 작성 시간 대폭 단축",
      "Netlify(FE) + Railway(BE) 기반의 실서비스 배포",
    ],
    links: {
      github: "https://github.com/rcl0511/auto_reporting_system",
      demo: "https://sportsnewsai.netlify.app/",
      video: "https://www.youtube.com/watch?v=s00JOhgCsVM",
    },
  },
];