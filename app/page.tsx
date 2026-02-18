// app/(site)/page.tsx  (또는 app/page.tsx)
// ✅ CompletePortfolio “전체 코드” (정리본)
// - PROJECTS_DATA는 components/projects.data.ts에서 가져옴
// - ProjectCard UI는 components/ProjectComponent.tsx에서 가져옴

"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { PROJECTS_DATA } from "@/components/projects.data";
import { ProjectCard } from "@/components/ProjectComponent";

import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Layout,
  Server,
  Cpu,
  Database,
  Pill,
  Monitor,
  Code,
  Zap,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function CompletePortfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans leading-relaxed">
      {/* --- A. HERO SECTION --- */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex flex-col justify-center px-4 sm:px-6 md:px-20 py-12 md:py-0 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute top-1/4 right-0 md:right-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-200 rounded-full blur-[120px] opacity-30 -z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-indigo-200 rounded-full blur-[100px] opacity-20 -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-6 md:mb-10 text-slate-900"
            >
              <span className="text-blue-600">FRONTEND</span> <br />
              WEB DEVELOPER
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl space-y-6"
            >
              <div className="space-y-2">
                {/* 메인 멘트: 굵기 대비를 통해 가독성 향상 */}
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 font-bold leading-tight">
                  사용자의 눈높이에서 <br className="sm:hidden" />
                  <span className="relative inline-block">
                    비즈니스 가치
                    {/* 핵심 키워드 아래에만 깔끔한 파란색 포인트 바 */}
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-blue-400/30 -z-10"></span>
                  </span>
                  를 설계합니다.
                </p>

                {/* 보조 설명: 메인 멘트보다 채도를 낮추고 크기를 조절해 시선 분산 방지 */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium tracking-tight">
                  실제 문제 해결부터 {" "}
                  <span className="text-slate-900 decoration-blue-400/60 underline underline-offset-4 decoration-2">
                    서비스의 지속 가능한 확장
                  </span>
                  까지
                </p>
              </div>

              {/* 서브 문구: 경계선을 활용해 안정감 부여 */}
              <p className="text-slate-500 text-sm sm:text-base md:text-lg border-l-2 border-blue-400/50 pl-4 leading-relaxed">
                유연한 설계와 철저한 검증으로 <br className="block sm:hidden" />
                서비스의 내일을 준비합니다.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 mt-12">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-blue-700 text-white font-bold transition-all text-xs tracking-widest rounded-full shadow-lg shadow-slate-200"
              >
                VIEW PROJECTS{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-8 py-4 border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold transition-all text-xs tracking-widest rounded-full"
              >
                RESUME (PDF) <Download size={16} />
              </a>
            </div>
          </div>

          {/* 오른쪽 장식 영역 */}
          <div className="lg:col-span-5 hidden lg:block">
            <InteractiveHeroCards />
          </div>
        </div>
      </section>

      {/* --- B-1. PROFILE / IDENTITY / WORK --- */}
      <section
        id="profile"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              PROFILE
            </h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* 1) Identity */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">
                Identity
              </h3>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Name / Education
                  </p>
                  <p className="text-xl font-bold text-slate-900">
                    류채린{" "}
                    <span className="text-slate-400 font-light mx-2">/</span>{" "}
                    <span className="text-lg">숙명여대 IT공학</span>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    2026. 02 Graduated
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Contact
                    </p>
                    <a
                      href="mailto:rcl0511@naver.com"
                      className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 hover:border-blue-500 transition-all"
                    >
                      rcl0511@naver.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Social
                    </p>
                    <a
                      href="https://github.com/rcl0511"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 hover:border-blue-500 transition-all"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2) Activities / Awards / Training */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">
                Activities & Awards
              </h3>

              <ol className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold shrink-0">1.</span>
                  <span>제 2회 신한빅데이터 해커톤 장려</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold shrink-0">2.</span>
                  <span>2025 숙명여대 캡스톤 대회 대상</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold shrink-0">3.</span>
                  <span>숙명여대 기계인더피날러 1등</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold shrink-0">4.</span>
                  <span>HIRA 보건의료 창업아이디어 대회 입상</span>
                </li>
              </ol>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] mb-4">
                  Training
                </h4>
                <ol className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold shrink-0">1.</span>
                    <span>DLI : Fundamentals of Deep Learning 교육 이수</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* 3) Work */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">
                Work
              </h3>

              <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-200">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 p-2 bg-white border border-slate-200 shadow-sm rounded-full z-10 text-blue-600">
                    <Monitor size={14} />
                  </div>
                  <p className="text-[15px] font-bold text-blue-700 font-mono">
                    2022 — 2025
                  </p>
                  <h4 className="font-bold text-slate-900 mt-1">
                    의약품 도매업체 전산관리
                  </h4>
                  <p className="text-[15px] text-slate-600 mt-2 leading-relaxed">
                    거래처 자료관리 및 전산 시스템 운영,
                    <br />
                    반복 업무 자동화 아이디어 도출
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 p-2 bg-white border border-slate-200 shadow-sm rounded-full z-10 text-blue-600">
                    <Pill size={14} />
                  </div>
                  <p className="text-[15px] font-bold text-slate-600 font-mono">
                    2024.03 — 2024.09
                  </p>
                  <h4 className="font-bold text-slate-900 mt-1">
                    약국 전산 및 운영 관리
                  </h4>
                  <p className="text-[15px] text-slate-600 mt-2 leading-relaxed">
                    약국 청구 시스템 전산 처리
                    <br />
                    및 의약품 재고 관리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- B-2. STACK & CAPABILITIES --- */}
      <section
        id="stack"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-xl sm:text-xl md:text-3xl font-black tracking-tight text-slate-900">
                기술스택 & 역량
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
                Frontend 전문. Backend·배포는 필요한 만큼만 다루어 제품이 ‘돌아가게’
                만듭니다.
              </p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <SkillCard
              title="Frontend"
              skills={[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "JavaScript",
                "HTML5",
                "Kotlin",
                "Axios",
                "React Router",
              ]}
              desc="컴포넌트 중심 설계와 상태 관리 기반으로 사용자 흐름이 매끄러운 UI를 구현합니다."
              proof="실서비스 배포(Netlify/Vercel) + 모바일 UX 중심 화면 설계"
              variant="primary"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <SkillCard
                title="Backend"
                skills={[
                  "Java",
                  "Node.js",
                  "Python",
                  "Uvicorn",
                  "Spring Boot",
                  "FastAPI",
                  "OpenAI API",
                ]}
                desc="FastAPI + systemd + Nginx 배포 경험"
              />

              <SkillCard
                title="Database & Dev"
                skills={[
                  "MongoDB",
                  "SQLite",
                  "Git",
                  "Vercel",
                  "Nginx",
                  "Figma",
                  "Netlify",
                  "AWS EC2",
                  "Docker",
                  "ChromaDB",
                ]}
                desc="MongoDB 연동 + Git 기반 협업 + 배포 운영"
              />

              <SkillCard
                title="Embedded / IoT"
                skills={["Arduino", "ESP32", "C", "BLE GATT"]}
                desc="센서 데이터 수집부터 BLE/WiFi 통신, 제어까지 전체 플로우를 설계"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- C. PROJECTS SECTION --- */}
      <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-black text-6xl uppercase leading-none text-slate-900">
              PROJECT <span className="text-blue-600">.</span>
            </h2>
            <p className="text-xs font-bold tracking-[0.5em] text-slate-400 mt-2">
              주요 프로젝트
            </p>
          </div>

          {(() => {
            const appIds = new Set(["smart-barricade"]);
            const appProjects = PROJECTS_DATA.filter(
              (p) =>
                appIds.has(p.id) ||
                /iot|android|app/i.test(p.platform ?? "")
            );
            const webProjects = PROJECTS_DATA.filter((p) => !appProjects.includes(p));

            return (
              <div className="space-y-14 md:space-y-16">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-black tracking-tight text-slate-900">
                      Web / Service
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
                      WEB PROJECTS
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 text-left">
                    {webProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>

                {appProjects.length > 0 ? (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-sm font-black tracking-tight text-slate-900">
                        App / IoT
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
                        ANDROID · IOT
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 text-left">
                      {appProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })()}
        </div>
      </section>

      {/* --- D. CONTACT & FOOTER --- */}
      <footer
        id="contact"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-white text-center border-t border-slate-100"
      >
        <h2 className="text-3xl sm:text-xl md:text-6l font-black mb-6 md:mb-8 tracking-tighter text-slate-900 italic uppercase">
          아이디어를, 실제로 쓰이는 서비스로.
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          <a
            href="mailto:rcl0511@naver.com"
            className="p-4 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-sm"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://github.com/rcl0511"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm"
          >
            <Github size={24} />
          </a>
        </div>

        <p className="text-[10px] text-slate-300 font-mono uppercase tracking-[0.5em]">
          © 2026 Chaerin Ryu. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

// 
function SkillCard({
  title,
  skills,
  desc,
  proof,
  variant = "default",
}: any) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={[
        "p-5 sm:p-6 md:p-7 rounded-2xl group transition-all duration-300",
        isPrimary
          ? "bg-blue-50/80 border-2 border-blue-200 shadow-md shadow-blue-100/50"
          : "bg-white border border-slate-200 shadow-sm",
      ].join(" ")}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-5 mb-4 md:mb-5">
        <div className="flex-1">
          <h4 className={`mb-1.5 md:mb-2 ${isPrimary ? "text-lg md:text-xl font-bold text-blue-900" : "text-base md:text-lg font-semibold text-slate-800"}`}>{title}</h4>
          {proof ? (
            <p className={`text-xs md:text-sm leading-relaxed mt-1.5 whitespace-pre-line ${isPrimary ? "text-blue-800/90" : "text-slate-500"}`}>
              <span className={isPrimary ? "text-blue-700 font-semibold" : "text-slate-600 font-medium"}>Proof:</span> {proof}
            </p>
          ) : null}
          {desc ? (
            <p className={`text-sm leading-relaxed mt-2 md:mt-2.5 ${isPrimary ? "text-blue-900/80" : "text-slate-600"}`}>{desc}</p>
          ) : null}
        </div>

        {isPrimary ? (
          <span className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold tracking-widest border border-blue-600 shrink-0 self-start">
            PRIMARY
          </span>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((s: string) => (
          <span
            key={s}
            className={[
              "px-3 py-1 rounded-md text-[10px] md:text-xs font-medium transition-colors",
              isPrimary
                ? "bg-white border border-blue-200 text-blue-800"
                : "bg-slate-50 border border-slate-200 text-slate-600",
            ].join(" ")}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// 인터랙티브 Hero 카드 컴포넌트
function InteractiveHeroCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());
  const [typingText, setTypingText] = useState("");
  const [fullText, setFullText] = useState("");

  const morningFortunes = [
    "오늘 아침의 맑은 공기처럼 상쾌한 일들만 가득할 거예요.",
    "창가로 비치는 햇살이 당신의 오늘을 축복하는 것 같아요.",
    "기분 좋은 아침 인사가 오늘의 모든 문을 활짝 열어줄 거예요.",
    "오늘은 당신이 주인공이 되어 멋진 하루를 그려나가길 바랍니다.",
    "가벼운 발걸음으로 시작하는 오늘, 목적지까지 즐거움이 가득할 거예요.",
    "눈을 뜨며 느꼈던 작은 설렘이 현실이 되는 특별한 날입니다.",
    "오늘은 당신의 잠재력이 기분 좋게 깨어나는 아침이에요.",
    "어제보다 조금 더 밝은 미소로 오늘을 맞이해 보세요.",
    "오늘의 첫 번째 행운은 바로 당신이 기분 좋게 깨어났다는 사실입니다.",
    "새로운 시작을 응원하는 따뜻한 기운이 당신 곁에 머물고 있어요.",
  ];

  const afternoonFortunes = [
    "나른한 오후, 따뜻한 차 한 잔이 주는 작은 사치를 누려보세요.",
    "복잡한 업무 속에서도 잠시 창밖을 보며 숨을 고를 수 있는 날이에요.",
    "당신의 노력이 오후의 햇살처럼 서서히 결실을 맺고 있습니다.",
    "지칠 때쯤 들려오는 반가운 소식이 당신의 기운을 북돋아 줄 거예요.",
    "오후의 부드러운 빛이 당신의 대화를 더욱 따뜻하게 만들어줍니다.",
    "잠시 걷는 것만으로도 머릿속이 맑아지고 새로운 아이디어가 샘솟는 날이에요.",
    "바쁜 일상 속에서 발견하는 소소한 농담이 큰 웃음이 되는 오후입니다.",
    "당신의 다정함이 주변 사람들의 오후를 더 행복하게 만들고 있어요.",
    "가끔은 느리게 걷는 것이 가장 빠른 지름길이 되기도 합니다.",
    "지금 이 순간, 당신은 충분히 잘하고 있으니 스스로를 믿으셔도 좋아요.",
  ];

  const eveningFortunes = [
    "고생 많았던 오늘 하루, 당신의 수고가 예쁜 별빛으로 남길 바랍니다.",
    "집으로 돌아가는 길, 시원한 밤바람이 당신의 어깨를 다독여줄 거예요.",
    "오늘은 모든 걱정을 내려놓고 오직 당신만을 위한 평온한 밤이 되길.",
    "오늘 하루 마주친 고마운 얼굴들을 떠올리며 미소 짓는 저녁입니다.",
    "조용한 음악 한 곡이 오늘의 피로를 말끔히 씻어주는 밤이에요.",
    "완벽하지 않아도 괜찮아요. 당신의 오늘은 그 자체로 충분히 빛났습니다.",
    "내일을 위한 가장 좋은 준비는 오늘 밤 당신이 푹 쉬는 것입니다.",
    "오늘 당신이 건넨 따뜻한 말 한마디가 누군가의 밤을 밝히고 있어요.",
    "일기장의 마지막 줄에 '감사함'을 적으며 마무리할 수 있는 하루입니다.",
    "깊은 잠에 들어 기분 좋은 꿈속에서 내일의 희망을 미리 만나보세요.",
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getSlot = (hour: number) => {
      if (hour >= 5 && hour < 12) return "morning" as const;
      if (hour >= 12 && hour < 18) return "afternoon" as const;
      return "evening" as const;
    };

    const pickFortune = () => {
      const now = new Date();
      const slot = getSlot(now.getHours());

      const dayOfYear = Math.floor(
        (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
      );

      const slotOffset = slot === "morning" ? 0 : slot === "afternoon" ? 1 : 2;
      const source =
        slot === "morning"
          ? morningFortunes
          : slot === "afternoon"
            ? afternoonFortunes
            : eveningFortunes;

      const next = source[(dayOfYear + slotOffset) % source.length];
      setFullText(next);
    };

    pickFortune();
    const interval = setInterval(pickFortune, 60_000); // 1분마다 시간대 변경 체크
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!fullText) return;
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // 타이핑 완료 후 운세 텍스트 유지 (로딩 중으로 바꾸지 않음)
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);



  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const xPos = (e.clientX - centerX) / rect.width;
    const yPos = (e.clientY - centerY) / rect.height;
    x.set(xPos);
    y.set(yPos);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* 오늘의 운세 카드 */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="p-6 md:p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-indigo-200 shadow-xl cursor-pointer relative overflow-hidden group"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-xl">
              <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-xs font-black text-indigo-600 uppercase tracking-widest">
              오늘의 운세
            </div>
          </div>
          <div className="text-xs text-indigo-400 font-medium">
            {time.toLocaleDateString("ko-KR", { month: "long", day: "numeric" })}
          </div>
        </div>

        <div className="relative min-h-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base md:text-lg text-slate-800 leading-relaxed font-medium"
          >
            {typingText ? (
              <span className="whitespace-pre-wrap">{typingText}</span>
            ) : (
              <span className="text-slate-400">로딩 중...</span>
            )}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-indigo-600 font-bold"
            >
              |
            </motion.span>
          </motion.div>
        </div>

        <div className="mt-6 pt-6 border-t border-indigo-200/50">
          <div className="flex items-center gap-2 text-xs text-indigo-500">
            <Code className="w-3 h-3" />
            <span className="font-medium">매일 새로운 운세가 업데이트됩니다</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
