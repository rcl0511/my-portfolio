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
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              "만들고 끝내는 것이 아니라, <br className="hidden sm:block" />
              <span className="text-slate-900 font-semibold underline decoration-blue-400 decoration-2 sm:decoration-4 underline-offset-2 sm:underline-offset-4 uppercase">
                실제 문제 해결 → 검증 → 확장
              </span>
              까지 <br className="hidden sm:block" /> 비즈니스 가치를 설계합니다."
            </p>

            <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
              보이는 화면부터, 실제로 동작하는 서비스까지.<br />
              화면만 만드는 개발자가 아니라, 서비스가 돌아가게 합니다.
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

      {/* --- B. PROFILE & PROFESSIONAL --- */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-white overflow-hidden">
        {/* 마스코트 배경 장식 */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
            <img 
              src="/sookmyung-mascot.png" 
              alt="숙명여자대학교 마스코트" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* 좌측: 인적사항 & 경력 */}
            <div className="lg:w-1/4 space-y-12 md:space-y-16">
              {/* 숙명 로고 */}
              <div className="flex justify-center lg:justify-start mb-8">
               
              </div>

              <div>
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-10">
                  Identity
                </h2>

                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[15px] font-bold text-slate-300 uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">
                      Name / Education
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      류채린{" "}
                      <span className="text-slate-400 font-light mx-2">/</span>{" "}
                      <span className="text-lg">숙명여대 IT공학</span>
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      2026. 02 Graduated
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-8 xl:gap-10">
                    <div className="group">
                      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 group-hover:text-blue-400 transition-colors">
                        Contact
                      </p>
                      <a
                        href="mailto:rcl0511@naver.com"
                        className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 hover:border-blue-500 transition-all"
                      >
                        rcl0511@naver.com
                      </a>
                    </div>

                    <div className="group">
                      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 group-hover:text-blue-400 transition-colors">
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

              <div>
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-10">
                  Experience
                </h2>

                <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 p-2 bg-white border border-slate-100 shadow-sm rounded-full z-10 text-blue-600">
                      <Monitor size={14} />
                    </div>
                    <p className="text-[15px] font-bold text-blue-600 font-mono">
                      2022 — 2025
                    </p>
                    <h4 className="font-bold text-slate-1000 mt-1">
                      의약품 도매업체 전산관리
                    </h4>
                    <p className="text-[15px] text-slate-500 mt-2 leading-relaxed">
                      거래처 자료관리 및 전산 시스템 운영,<br/> 반복 업무 자동화 아이디어 도출
                    </p>
                  </div>

                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 p-2 bg-white border border-slate-100 shadow-sm rounded-full z-10 text-blue-600">
                      <Pill size={14} />
                    </div>
                    <p className="text-[15px] font-bold text-slate-400 font-mono">
                      2024.03 — 2024.09
                    </p>
                    <h4 className="font-bold text-slate-1000 mt-1">
                      약국 전산 및 운영 관리
                    </h4>
                    <p className="text-[15px] text-slate-500 mt-2 leading-relaxed">
                      약국 청구 시스템 전산 처리 <br/>및 의약품 재고 관리
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측: 스킬 */}
            <div className="lg:w-3/4">
              <h2 className="text-[18px] font-semibold text-slate-700 uppercase tracking-[0.2em] mb-8 lg:text-right">
                Stack & Capabilities
              </h2>

  

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

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6">
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
                    skills={[
                      "Arduino",
                      "ESP32",
                      "C",
                      "BLE GATT",
                    ]}
                    desc="센서 데이터 수집부터 BLE/WiFi 통신, 제어까지 전체 플로우를 설계"
                  />

                  
                </div>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 text-left">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
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
  const [fortuneIndex, setFortuneIndex] = useState(0);
  
  const fortunes = [
    "오늘도 좋은 분을 만날 수 있어서 반가운 하루입니다",
    "작은 미소 하나면 충분한 날이에요",
    "차분하지만 기분 좋은 하루가 되길 바랍니다",
    "좋은 대화는 언제나 좋은 인상을 남긴다고 믿어요",
    "오늘 하루, 서로에게 기분 좋은 기억이 되었으면 합니다",
    "조금의 여유가 큰 차이를 만드는 날이에요",
    "웃을 일이 하나쯤은 꼭 생길 하루입니다",
    "오늘의 만남이 좋은 시작이 되길 바랍니다",
    "괜히 마음이 편안해지는 하루가 될 것 같아요",
    "오늘은 말 한마디가 따뜻하게 전해지는 날이에요",
    "좋은 기운이 자연스럽게 이어지는 하루입니다",
    "천천히 가도 괜찮은 하루예요",
    "부담 없이 웃을 수 있는 시간이 기다리고 있어요",
    "소소한 즐거움이 은근히 많은 날입니다",
    "오늘의 분위기는 생각보다 더 좋을지도 몰라요",
    "편안한 대화가 좋은 인연을 만든다고 해요",
    "기분 좋은 여운이 오래 남는 하루가 되길 바랍니다",
    "오늘 하루는 스스로에게도 친절해도 좋아요",
  ];
  

  const fullText = fortunes[fortuneIndex];
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 날짜 기반으로 운세 인덱스 결정 (매일 같은 운세)
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    setFortuneIndex(dayOfYear % fortunes.length);
  }, []);

  useEffect(() => {
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
  }, [fortuneIndex, fullText]);



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
