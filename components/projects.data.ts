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
    type: "Solo Project",
    period: "2025.03 - 2025.06",
    contribution: "100%",
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
      "응급 상황에서 음성으로 \n단계별 행동 지침을 제공하는 \nAI 기반 응급 대응 웹 서비스.",
    problem:
      "응급 상황에서 비전문가는 증상을 정확히 판단하기 어렵고, 당황으로 인해 잘못된 처치나 골든타임 손실이 발생합니다. 기존 텍스트 위주의 매뉴얼은 긴박한 현장에서 활용도가 낮다는 문제점이 있습니다.",
    solution: [
      "DB에 저장된 사용자 의료 데이터(연령·성별·기저질환)를 분석하여 위험도 해석",
      "OpenAI LLM을 통해 환자 맞춤형 응급 처치 가이드를 자연어로 생성",
      "gTTS를 활용한 Voice-First UX를 설계/ 음성 대응 환경 제공",

    ],
    role:
      "기여율 100%",

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
      "군중 밀집 상황에서 \n사고를 사전에예방하는 \nIoT 기반 스마트 안전 시스템.",
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
      "의약품 도매업체는 매달 수천 장의 거래명세서를 수작업으로 정리하고 누락된 명세서를 확인하는 과정에서 과도한 시간이 소요되고, 다시 도장을 받기 위한 시간 지체, 전화주문을 전산에 입력하는 과정에서 발생하는 오류 등 휴먼 에러로 인한 재고 관리 손실이 발생했습니다.",
    solution: [
      "멀티테넌트 구조 - 업체별 독립 데이터 관리",
      "WebSocket 기반 실시간 채팅 시스템 구축",
      "PDF 파싱 및 Excel 일괄 처리로 업무 자동화",
      
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
    id: "baroit",
    title: "설스터디 (Blaybus)",
    type: "Team Project",
    period: "2026.02.01 - 2026.02.10",
    contribution: "Frontend",
    platform: "Web / React SPA",
    isPatent: false,
    tech: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "React Router v7",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "TipTap",
      "Radix UI",
      "Axios",
      "html2pdf.js",
      "docx",
      "file-saver",
      "Lucide React",
    ],
    summary:
      "멘토-멘티 간 학습 과정을 관리·점검·피드백하는 \n웹 기반 학습 코칭 도구. 과제 등록부터 \n학습 분석·리포트까지 하나의 플랫폼으로 연결.",
    problem:
      "멘토는 멘티의 학습 현황과 과제·피드백·일정을 한눈에 관리하고 싶고, 멘티는 과제·피드백·학습 일정·성과를 한곳에서 점검하고 싶습니다. 실제 코칭 현장에서 바로 사용할 수 있는 MVP가 필요했습니다.",
    solution: [
      "역할 분리: /mentor · /mentee 라우트와 레이아웃을 완전 분리해 역할 기반 UX/권한 명확화",
      "Mock 우선 개발: Mock API 기본 + 환경 변수로 실 API 전환 지원",
      "Auth 분리: VITE_USE_MOCK_AUTH로 로그인만 실 API 연동 가능",
      "서버/클라이언트 상태 분리: React Query(서버) + Zustand(UI/세션)",
      "API 레이어 일원화: axiosInstance + 인터셉터로 토큰/401/에러 처리",
    ],
    role:
      "프론트엔드 개발 참여 (라우팅·권한 구조, 상태/데이터 분리, 리포트 내보내기, UI/UX 구현)",
    features: [
      "멘토/멘티 역할별 완결 UX (멘토 사이드바, 멘티 탭바)",
      "과제·피드백 라이프사이클(등록→제출→피드백→알림) 커버",
      "학습 분석·리포트 화면 + PDF/DOCX 다운로드",
      "Mock ↔ 실 API 유연 전환 (Auth만 실 API 등 조합 가능)",
      "JWT 인증·401 refresh·전역 에러 배너로 일관된 인증 UX",
      "타임테이블·캘린더·할일·뱃지·테마 등 멘티 경험 강화",
    ],
    links: {
      demo: "https://baroit.netlify.app/login",
    },
  },

  {
    id: "baseball-news",
    title: "Fastball",
    type: "Team Project",
    period: "2025",
    contribution: "33%",
    platform: "Web / React SPA · FastAPI (Netlify + Railway + AWS)",
    isPatent: false,
    tech: [
      "React",
      "FastAPI",
      "Uvicorn",
      "AWS EventBridge",
      "AWS Lambda",
      "PostgreSQL (RDS)",
      "SQLite",
      "LangChain",
      "HuggingFace (llama-ko)",
      "FAISS",
      "ChromaDB",
      "Claude API",
      "Docker",
      "Netlify",
      "Railway",
    ],
    summary:
      "LLM + RAG 기반 야구 기사 자동 생성 플랫폼. 반복 업무 시간을 30분에서 수분으로 단축하여 기자가 본질적 업무에 집중할 수 있도록 지원합니다.",
    problem:
      "기자들은 하루 평균 14건 이상의 기사를 작성하며, 반복적인 데이터 정리와 초안 작성에 최소 30분 이상 소요됩니다. 기존 템플릿 기반 도구는 획일적이고 딱딱한 기사만 생성하는 한계가 있었습니다.",
    solution: [
      "AWS Lambda + EventBridge를 통한 일일 경기 데이터 자동 수집 및 저장",
      "ChromaDB(70%)와 PostgreSQL(30%)을 결합한 하이브리드 RAG 검색 시스템",
      "Claude API 기반 문맥 이해형 기사 생성 (리랭커로 관련성 높은 정보만 선별)",
      "React + FastAPI 기반 원스톱 웹 플랫폼 (데이터 업로드 → 기사 생성 → 실시간 미리보기)",
    ],
    role:
      "프론트엔드 개발 (React UI/UX 구현, API 통신, 실시간 미리보기, 워크플로우 설계)",
    features: [
      "문맥 이해 기반 자연스러운 기사 자동 생성 (LLM + RAG)",
      "하이브리드 DB 검색 시스템 (ChromaDB 70% + PostgreSQL 30%)",
      "AWS 기반 완전 자동화 데이터 수집 파이프라인",
      "원스톱 웹 워크플로우로 작성 시간 90% 단축 (30분 → 수분)",
      "리랭커를 통한 정보 품질 최적화",
      "실서비스 배포 (Netlify + Railway + AWS)",
    ],
    links: {
      github: "https://github.com/rcl0511/auto_reporting_system",
      demo: "https://sportsnewsai.netlify.app/",
      
    },
  },
];