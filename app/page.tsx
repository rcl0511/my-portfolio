// app/(site)/page.tsx  (또는 app/page.tsx)
// ✅ CompletePortfolio “전체 코드” (정리본)
// - PROJECTS_DATA는 components/projects.data.ts에서 가져옴
// - ProjectCard UI는 components/ProjectComponent.tsx에서 가져옴

"use client";

import React from "react";
import { motion } from "framer-motion";

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
} from "lucide-react";

export default function CompletePortfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans leading-relaxed">
      {/* --- A. HERO SECTION --- */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold mb-8 tracking-widest border border-blue-100"
          >
            FRONTEND · HEALTHCARE · IOT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 text-slate-900"
          >
            WEB <br />
            <span className="text-blue-600">DEVELOPER</span> PORTFOLIO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              "만들고 끝내는 것이 아니라, <br />
              <span className="text-slate-900 font-semibold underline decoration-blue-400 decoration-4 underline-offset-4 uppercase">
                실제 문제 해결 → 검증 → 확장
              </span>
              까지 <br /> 비즈니스 가치를 설계합니다."
            </p>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              의약품 도매업체 전산관리 실무 경험을 바탕으로, <br />
              사용자 흐름이 자연스러운 웹 서비스를 만들고 헬스케어 문제를 기술로 해결하는 데 관심이 많습니다.
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
      </section>

      {/* --- B. PROFILE & PROFESSIONAL --- */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* 좌측: 인적사항 & 경력 */}
            <div className="lg:w-1/3 space-y-16">
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
                      거래처 자료관리 및 전산 시스템 운영, 반복 업무 자동화 아이디어 도출
                    </p>
                  </div>

                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 p-2 bg-white border border-slate-100 shadow-sm rounded-full z-10 text-blue-600">
                      <Pill size={14} />
                    </div>
                    <p className="text-[15px] font-bold text-slate-400 font-mono">
                      2024.03 — 09
                    </p>
                    <h4 className="font-bold text-slate-1000 mt-1">
                      약국 전산 및 운영 관리
                    </h4>
                    <p className="text-[15px] text-slate-500 mt-2 leading-relaxed">
                      약국 청구 시스템 전산 처리 및 의약품 재고 최적화 관리
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측: 스킬 */}
            <div className="lg:w-2/3">
              <h2 className="text-[20px] font-black text-slate-300 uppercase tracking-[0.3em] mb-10 lg:text-right">
                Stack & Capabilities
              </h2>

              <p className="text-sm text-slate-400 mb-10 lg:text-right">
                Frontend를 중심으로, Backend·AI·IoT·배포까지 제품이 ‘돌아가게’
                만드는 올라운더입니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCard
                  title="Frontend"
                  icon={<Layout size={24} />}
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

                <SkillCard
                  title="Backend / AI"
                  icon={<Server size={24} />}
                  skills={[
                    "FastAPI",
                    "Python",
                    "REST API",
                    "Uvicorn",
                    "Spring Boot",
                    "Java",
                    "Node.js",
                    "LangChain",
                    "Claude API",
                    "OpenAI API",
                    "HuggingFace",
                  ]}
                  desc="프론트 요구사항을 API로 빠르게 제품화하고 운영 환경까지 연결합니다."
                  proof="FastAPI + systemd + Nginx(리버스프록시) 배포 경험"
                />

                <SkillCard
                  title="Embedded / IoT"
                  icon={<Cpu size={24} />}
                  skills={[
                    "Arduino",
                    "ESP32",
                    "BLE GATT",
                    "Wi-Fi AP",
                    "Load Cell",
                    "C",
                  ]}
                  desc="센서 데이터 수집부터 BLE/WiFi 통신, 제어까지 전체 플로우를 설계합니다."
                  proof="BLE GATT + Wi-Fi AP 동시 지원 구조 설계"
                />

                <SkillCard
                  title="Database & Dev"
                  icon={<Database size={24} />}
                  skills={[
                    "MongoDB",
                    "PostgreSQL",
                    "SQLite",
                    "ChromaDB",
                    "FAISS",
                    "Git",
                    "Figma",
                    "Vercel",
                    "Netlify",
                    "AWS EC2",
                    "Nginx",
                    "Docker",
                    "systemd",
                    "SBERT",
                    "gTTS",
                  ]}
                  desc="데이터 구조/협업/배포까지 개발 전 과정을 ‘돌아가게’ 만드는 역량이 있습니다."
                  proof="MongoDB 연동 + Git 기반 협업 + 배포 운영"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- C. PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-24">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- D. CONTACT & FOOTER --- */}
      <footer
        id="contact"
        className="py-32 px-6 md:px-20 bg-white text-center border-t border-slate-100"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 italic uppercase">
          Let&apos;s Build the Future
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
  icon,
  skills,
  desc,
  proof,
  variant = "default",
}: any) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={[
        "p-8 rounded-[32px] group transition-all duration-500",
        isPrimary
          ? "bg-white border border-blue-200 shadow-2xl shadow-blue-100/60 hover:shadow-blue-200/60"
          : "bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div
            className={[
              "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-sm transition-colors",
              isPrimary
                ? "bg-blue-50 text-blue-700"
                : "bg-white text-slate-400 group-hover:text-blue-600",
            ].join(" ")}
          >
            <div className="scale-125 md:scale-150">
              {icon}
            </div>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h4>
            {proof ? (
              <p className="text-base md:text-[16px] font-bold text-slate-400 mt-2">
                <span className="text-blue-600">Proof:</span> {proof}
              </p>
            ) : null}
          </div>
        </div>

        

        {isPrimary ? (
          <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-base md:text-[16px] font-black tracking-widest border border-blue-100">
            PRIMARY
          </span>
        ) : null}
      </div>

      <p className="text-[15px] text-slate-500 leading-relaxed mb-6">{desc}</p>

      <div className="flex flex-wrap gap-3">
        {skills.map((s: string) => (
          <span
            key={s}
            className={[
              "px-4 py-2 rounded-full text-base md:text-[16px] font-bold transition-colors",
              isPrimary
                ? "bg-blue-50 border border-blue-100 text-blue-700"
                : "bg-white border border-slate-100 text-slate-400 group-hover:text-blue-600 group-hover:border-blue-100",
            ].join(" ")}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
