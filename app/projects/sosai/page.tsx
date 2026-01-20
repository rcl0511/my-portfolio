// app/projects/sosai/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Github, ExternalLink, Calendar, Layers,
  Percent, Sparkles, CheckCircle2, Wrench, ShieldCheck, Workflow, ChevronLeft, ChevronRight, Database,
  BrainCircuit, MicVocal, ServerCrash, ShieldAlert, Info, Layout, Server, Cpu
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ==========================================================================
   TYPES
   ========================================================================== */
type PageProps = { params: Promise<{ id: string }> };

/* ==========================================================================
   MAIN PAGE
   ========================================================================== */
export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;

  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "sosai");
  if (!project) return notFound();

  const isSOSAI = project.id === "sosai";

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-slate-900 font-sans selection:bg-sky-100 overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-visible bg-slate-950 pt-20 pb-20 px-6 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        {/* 프로젝트 네비게이션 아이콘 */}
        <HeroNavigation currentProjectId="sosai" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">
          <div className="lg:col-span-7">
            <div className="flex gap-2 mb-6">
              <Badge text="Medical Data Driven AI" color="sky" />
              <Badge text="Production Ready" color="blue" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              AI 기반 응급 상황 대응 및 지능형 음성 가이드 시스템
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.demo && (
                <PrimaryButton href={project.links.demo} icon={<ExternalLink size={18} />}>
                  주소 바로가기
                </PrimaryButton>
              )}
              {project.links?.github && (
                <OutlineButton href={project.links.github} icon={<Github size={18} />}>
                  소스코드
                </OutlineButton>
              )}
            </div>
          </div>

          {/* 노트북에서 핸드폰 목업으로 교체된 부분 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <MobileMockup url={project.links?.demo || ""} />
          </div>
        </div>
      </section>

      {/* 3. 핵심 데이터 흐름 */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DataFlowCard 
            icon={<Database className="text-sky-500" />}
            title="User Profile DB"
            desc="질환/복용약/과거력 기반 실시간 위험도 해석"
          />
          <DataFlowCard 
            icon={<BrainCircuit className="text-purple-500" />}
            title="Guide Engine"
            desc="표준 매뉴얼 + 개인화 맞춤 문구 생성"
          />
          <DataFlowCard 
            icon={<MicVocal className="text-blue-500" />}
            title="TTS Broadcast"
            desc="주변인 행동 유도를 위한 단계별 음성 안내"
          />
        </div>
      </section>

      {/* 4. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          
          <article>
            <SectionHeader title="Context & Design Principles" subtitle="기획 의도 및 설계 원칙" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line mb-10">
                {project.problem || "응급 상황에서 당황한 주변인이 정확한 처치를 할 수 있도록, 사용자의 의료 데이터를 기반으로 개인화된 가이드를 제공하는 것이 본 프로젝트의 핵심입니다."}
              </p>
              
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 mb-10">
                <div className="flex items-center gap-2 text-amber-700 mb-4 font-bold">
                  <ShieldAlert size={20} /> AI 응급 대응 원칙
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[13px] text-amber-800/80 font-medium">
                  <li className="flex gap-2"><span>•</span> 생명 위협 징후 감지 시 119 신고 최우선 안내</li>
                  <li className="flex gap-2"><span>•</span> 짧고 명확한 단계별 행동 지침으로 구성</li>
                  <li className="flex gap-2"><span>•</span> 전문 용어 배제 및 쉬운 행동 가이드 중심</li>
                  <li className="flex gap-2"><span>•</span> 의식 유무 등 실시간 상황 확인 질문 병행</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Approach" subtitle="왜 이렇게 설계했는가" />
            <div className="space-y-4">
              <ApproachItem 
                num="01" 
                title="데이터 기반 응급 판단 보조"
                content="MongoDB에 저장된 사용자 신체 정보(연령·성별 등) 및 질환 이력을 API 호출 즉시 분석하여 단순히 일반적인 처치가 아닌 '해당 환자에게 꼭 필요한' 맞춤형 문구를 생성합니다."
              />
              <ApproachItem 
                num="02" 
                title="OpenAI 기반 지능형 문구 보강"
                content="표준 응급 처치 매뉴얼 데이터를 바탕으로, LLM이 현재 상황과 사용자의 특이사항을 결합해 자연스러운 음성 안내 문구로 재가공합니다."
              />
              <ApproachItem 
                num="03" 
                title="Voice-First UX 설계"
                content="긴급 상황에서는 화면을 보기 어렵다는 점에 착안, gTTS를 활용한 단계별 음성 안내로 주변인의 행동을 직접 유도합니다."
              />
              <ApproachItem 
                num="04" 
                title="실서비스 수준의 인프라 구성"
                content="단순 데모가 아닌 실제 배포를 목표로, AWS EC2와 Nginx를 활용해 환경 변수 보안 관리, CORS 정책 설정, systemd 기반 장애 대응 로직을 모두 적용했습니다."
              />
            </div>
          </article>

          {/* Solution */}
          <article>
            <SectionHeader
              title="Solution"
              subtitle="해결 방안 및 시스템 설계"
            />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="space-y-6">
                {project.solution?.map((sol, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-black text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed flex-1">
                      {sol}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="Engineering Stack" subtitle="사용된 기술 스택" />
            <div className="space-y-6">
              <TechTable tech={project.tech ?? []} />
              <div className="p-6 bg-slate-100 rounded-2xl text-[10Px] md:text-[15px] text-slate-600 font-medium flex items-start gap-4">
                <Info size={28} className="shrink-0 text-sky-500 mt-0.5" />
                <span>Nginx 리버스 프록시와 SSL 설정을 통해 보안 통신을 구현하고, AWS EC2 내에서 안정적인 API 환경을 구축</span>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="My Contributions" subtitle="수행 역할 및 구현 포인트" />
            <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sky-400 font-black text-xs uppercase tracking-[0.3em] mb-6">
                  Development Role
                </h3>
                <p className="text-xl md:text-m font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] text-slate-200/90 font-medium">
                  <CheckLine
                    icon={<Database size={16} />}
                    text="MongoDB 연동 및 사용자 데이터 기반 위험도 분석"
                  />
                  <CheckLine
                    icon={<BrainCircuit size={16} />}
                    text="SBERT + OpenAI LLM 기반 맞춤형 가이드 생성"
                  />
                  <CheckLine
                    icon={<MicVocal size={16} />}
                    text="gTTS를 활용한 Voice-First UX 설계"
                  />
                  <CheckLine
                    icon={<ServerCrash size={16} />}
                    text="AWS EC2 + Nginx + systemd 인프라 구축"
                  />
                </div>
              </div>
              <Workflow className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>

 {/* --- 4. MAIN CONTENT --- */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard 
              title="Project Snapshot"
              items={[
                { label: "Timeline", value: project.period, icon: <Calendar size={16}/> },
                { label: "Platform", value: project.platform, icon: <Layers size={16}/> },
                { label: "Contribution", value: project.contribution, icon: <Percent size={16}/> }
              ]}
            />
            
            <div className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles size={18} />
                <h3 className="font-bold uppercase text-[10px] tracking-widest">Core Highlights</h3>
              </div>
              <div className="space-y-4">
                <ResultBadge 
                  label="Award" 
                  value={<>건강보험심사평가원(HIRA)<br />보건의료 창업아이디어대회 입상</>} 
                />
                <ResultBadge
                  label="Infrastructure"
                  value="AWS EC2 실서비스 배포" 
                />
                <ResultBadge
                  label="Safety" 
                  value={<>응급 대응 AI 서비스 구조 관련<br />국내 특허 출원 진행 중</>} 
                />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ==========================================================================
   UI COMPONENTS (INTERNAL)
   ========================================================================== */

function MobileMockup({ url }: { url: string }) {
  return (
    <div className="relative group w-full max-w-[320px] lg:max-w-[360px] transition-all duration-700">
      {/* 파란색 그림자 광원 효과 */}
      <div className="absolute -inset-4 bg-sky-500 rounded-[4rem] blur-3xl opacity-20 transition duration-1000"></div>
      
      {/* 핸드폰 프레임 */}
      <div className="relative bg-slate-900 rounded-[3.5rem] p-3.5 border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(14,165,233,0.3)] overflow-hidden">
        {/* 상단 노치/센서 영역 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20 flex justify-center items-end pb-1.5">
           <div className="w-10 h-1 bg-slate-700 rounded-full" />
        </div>

        {/* 화면 영역 (세로 비율 최적화) */}
        <div className="aspect-[9/19.5] bg-black rounded-[2.8rem] overflow-hidden relative">
          <iframe 
            src={url} 
            className="absolute inset-0 w-full h-full border-none"
            title="mobile-demo" 
            loading="lazy" 
          />
        </div>

        {/* 하단 홈 바 영역 */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
      </div>

      {/* 측면 버튼 디테일 */}
      <div className="absolute -left-2 top-24 w-2 h-12 bg-slate-800 rounded-l-md" />
      <div className="absolute -left-2 top-40 w-2 h-20 bg-slate-800 rounded-l-md" />
      <div className="absolute -right-2 top-32 w-2 h-24 bg-slate-800 rounded-r-md" />
    </div>
  );
}

function Badge({ text, color }: { text: string; color: "sky" | "blue" }) {
  const styles = {
    sky: "bg-sky-500/10 border-sky-400/20 text-sky-400",
    blue: "bg-blue-500/10 border-blue-400/20 text-blue-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${styles[color]}`}>
      {text}
    </span>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <p className="text-sky-500 font-black text-xs uppercase tracking-widest mb-2">{subtitle}</p>
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 shrink-0">{title}</h2>
        <div className="h-px w-full bg-slate-200" />
      </div>
    </div>
  );
}

function DataFlowCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-200 
                    shadow-[0_20px_50px_rgba(14,165,233,0.15)] 
                    hover:shadow-[0_20px_60px_rgba(14,165,233,0.3)] 
                    flex flex-col items-center text-center group 
                    hover:-translate-y-2 transition-all duration-300"> 
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ApproachItem({ num, title, content }: { num: string; title: string; content: string }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-sky-100 transition-colors">
      <span className="text-2xl font-black text-slate-200">{num}</span>
      <div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">{content}</p>
      </div>
    </div>
  );
}

function SummaryCard({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">{title}</h3>
      <div className="space-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400">{it.icon}</div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{it.label}</p>
              <p className="font-bold text-slate-900 leading-tight">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 상세 페이지 파일 하단의 ResultBadge 함수를 이렇게 수정하세요
function ResultBadge({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <p className="text-[10px] font-bold text-sky-200 uppercase mb-2 tracking-tighter">{label}</p>
      {/* text-sm 뒤에 leading-relaxed(줄간격)를 추가하면 더 보기 좋습니다 */}
      <p className="text-sm font-bold leading-relaxed">{value}</p>
    </div>
  );
}


function PrimaryButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-black text-sm transition-all shadow-lg shadow-sky-600/20 active:scale-95">
      {icon} {children}
    </a>
  );
}

function OutlineButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-sm transition-all active:scale-95">
      {icon} {children}
    </a>
  );
}

function CheckLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-sky-400 shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Frontend", keywords: ["react", "next", "tailwind", "framer", "netlify", "vite"] },
    { group: "Backend", keywords: ["fastapi", "uvicorn", "node", "express", "python"] },
    { group: "Infra & Ops", keywords: ["aws", "ec2", "nginx", "docker", "systemd", "ubuntu"] },
    { group: "AI & Data", keywords: ["openai", "mongodb", "atlas", "whisper", "pytorch", "torch", "gtts", "cnn"] },
  ];

  const buckets = mapping.map(m => ({
    group: m.group,
    items: tech.filter(t => m.keywords.some(k => t.toLowerCase().includes(k)))
  })).filter(r => r.items.length > 0);

  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-slate-100">
        {buckets.map((b) => (
          <div key={b.group} className="grid grid-cols-12 gap-4 p-7 items-center hover:bg-slate-50 transition-colors">
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {b.group}
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-4 py-1.5 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroNavigation({ currentProjectId }: { currentProjectId: string }) {
  const featuredProjects = PROJECTS_DATA.filter(
    (p) => p.id === "sosai" || p.id === "smart-barricade" || p.id === "onliner" || p.id === "baseball-news"
  );

  const currentIndex = featuredProjects.findIndex(
    (p) => p.id === currentProjectId
  );

  if (currentIndex === -1) return null;

  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <>
      {/* 왼쪽 화살표 */}
      {prevProject && (
        <Link
          href={`/projects/${prevProject.id}`}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all hover:scale-110"
        >
          <ChevronLeft size={32} className="text-white group-hover:text-indigo-200 transition-colors" />
        </Link>
      )}

      {/* 오른쪽 화살표 */}
      {nextProject && (
        <Link
          href={`/projects/${nextProject.id}`}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all hover:scale-110"
        >
          <ChevronRight size={32} className="text-white group-hover:text-indigo-200 transition-colors" />
        </Link>
      )}
    </>
  );
}