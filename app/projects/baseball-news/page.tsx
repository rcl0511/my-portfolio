// app/projects/baseball-news/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Github, ExternalLink, Calendar, Layers,
  Percent, Sparkles, Database, Brain, Search, Zap,
  Monitor, ServerCrash, ChevronLeft, ChevronRight,
  FileText, Workflow, Info, BrainCircuit, CheckCircle2
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ==========================================================================
   TYPES
   ========================================================================== */
type PageProps = { params: Promise<{ id: string }> };

/* ==========================================================================
   MAIN PAGE
   ========================================================================== */
export default async function FastballPage({ params }: PageProps) {
  const { id } = await params;

  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "baseball-news");
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 md:px-20 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION - 노트북 크기 극대화 및 선명도 개선 */}
      <section className="relative overflow-visible bg-slate-950 pt-12 md:pt-24 pb-12 md:pb-24 px-4 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-indigo-600 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-600 rounded-full blur-[130px]" />
        </div>

        <HeroNavigation currentProjectId="baseball-news" />

        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex gap-2 mb-6">
              <Badge text="LLM + RAG" color="indigo" />
              <Badge text="졸업프로젝트" color="blue" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              Fastball
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              LLM과 RAG를 결합하여 스포츠 기사 작성을 자동화하는 <br className="hidden md:block" />
              AI 기반 기사 생성 시스템
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.github && (
                <OutlineButton href={project.links.github} icon={<Github size={18} />}>
                  소스코드
                </OutlineButton>
              )}
              {project.links?.demo && (
                <PrimaryButton href={project.links.demo} icon={<ExternalLink size={18} />}>
                  실제 웹사이트 바로가기
                </PrimaryButton>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <DesktopMockup url={project.links?.demo || ""} />
          </div>
        </div>
      </section>

      {/* 3. 핵심 기능 카드 */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DataFlowCard 
            icon={<Search className="text-indigo-500" />}
            title="Hybrid RAG Search"
            desc="ChromaDB(70%) + PostgreSQL(30%) 최적 비율 검색"
          />
          <DataFlowCard 
            icon={<Brain className="text-purple-500" />}
            title="Contextual Gen"
            desc="Claude API 기반 문맥 이해형 기사 생성"
          />
          <DataFlowCard 
            icon={<Zap className="text-blue-500" />}
            title="Auto Pipeline"
            desc="AWS Lambda 기반 자동 데이터 수집 및 가공"
          />
        </div>
      </section>

      {/* 4. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          
          <article>
            <SectionHeader title="Context & Problem" subtitle="기획 의도" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100">
                문제점
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                언론진흥재단 조사에 따르면 기자들은 하루 평균 <span className="font-black text-indigo-600">14건 이상</span>의 기사를 작성하며, 
                반복적인 데이터 정리와 초안 작성에 <span className="font-black text-rose-600">최소 30분 이상</span> 소요됩니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-slate-700 font-medium">단순 반복적 데이터 처리에 과도한 시간 소모</p>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-200">
                  <p className="text-xs font-black text-indigo-600 uppercase tracking-wider mb-2">Solution</p>
                  <p className="text-sm text-slate-700 font-medium">AI 자동화로 고부가가치 심층 취재 집중 여력 확보</p>
                </div>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Approach" subtitle="왜 이렇게 설계했는가" />
            <div className="space-y-4">
              <ApproachItem num="01" title="자동화된 데이터 파이프라인" content="AWS EventBridge와 Lambda를 활용해 매일 KBO 경기 데이터를 수집하고 최신 상태를 유지합니다." />
              <ApproachItem num="02" title="하이브리드 RAG 아키텍처" content="벡터 기반 시맨틱 검색과 구조화된 데이터 검색을 결합하여 정보의 정확성과 다양성을 모두 확보했습니다." />
              <ApproachItem num="03" title="문맥 이해 기반 자연어 생성" content="Claude API를 연동하여 단순 수치 나열이 아닌, 경기 흐름을 파악한 자연스러운 문장 기사를 생성합니다." />
              <ApproachItem num="04" title="원스톱 통합 워크플로우" content="데이터 수집부터 생성, 편집, 최종 배포까지 단일 웹 인터페이스에서 완결되는 시스템을 구축했습니다." />
            </div>
          </article>



          <article>
            <SectionHeader title="Solution Architecture" subtitle="시스템 아키텍처" />
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-sm text-center">
              <img 
                src="/assets/fastball-architecture.png" 
                alt="Fastball Architecture" 
                className="w-full h-auto rounded-2xl border border-slate-100 shadow-md mb-6" 
              />
              <p className="text-sm text-slate-500 font-medium">AWS 기반의 스케줄링 수집 시스템과 RAG 파이프라인 통합 구조</p>
            </div>
          </article>

          <article>
            <SectionHeader title="Engineering Stack" subtitle="사용된 기술 스택" />
            <TechTable tech={project.tech ?? []} />
          </article>

          {/* Limitations & Potential - 통합 요약 카드 */}
          <article>
            <SectionHeader title="Integrated Summary" subtitle="아쉬운점 및 발전 가능성" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Limitations</p>
                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                  <li className="flex gap-2 text-rose-700"><span>•</span> 데이터 품질 편차에 따른 품질 변동</li>
                  <li className="flex gap-2 text-rose-700"><span>•</span> 고성능 모델 사용에 따른 운영비용 부담</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Business Scalability</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  본 프로젝트는 현재 프로토타입 단계이나, 실시간 경기 전산망과 연동 시 <strong>스포츠 미디어 인프라를 혁신할 솔루션</strong>으로 확장될 가치가 큽니다.
                </p>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="My Contributions" subtitle="수행 역할 및 구현 포인트" />
            <div className="bg-slate-900 rounded-[32px] p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em] mb-6">Development Role</h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200/90 font-medium">
                  <CheckLine icon={<Monitor size={16} />} text="React 기반 프론트엔드 인터페이스 구축" />
                  <CheckLine icon={<Zap size={16} />} text="실시간 미리보기 및 UX 최적화" />
                  <CheckLine icon={<BrainCircuit size={16} />} text="FastAPI 백엔드 설계 및 LLM 통신 구현" />
                  <CheckLine icon={<Workflow size={16} />} text="전체 기사 생성 워크플로우 설계" />
                </div>
              </div>
              <Workflow className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard 
              title="Project Snapshot"
              items={[
                { label: "Timeline", value: "2024.03 - 2024.06", icon: <Calendar size={16}/> },
                { label: "Platform", value: "Web / React · FastAPI", icon: <Layers size={16}/> },
                { label: "Contribution", value: "Team (Frontend Dev)", icon: <Percent size={16}/> }
              ]}
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ==========================================================================
   UI COMPONENTS
   ========================================================================== */

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 w-full group">
      <div className="flex items-end gap-3 mb-2">
        <div className="w-1 h-7 bg-indigo-600 rounded-full group-hover:h-8 transition-all duration-300" />
        <p className="text-[26px] md:text-[30px] font-black tracking-tight text-slate-800 leading-none">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-4 pl-[18px]">
        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-slate-400 shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
      </div>
    </div>
  );
}

function DesktopMockup({ url }: { url: string }) {
  const thumbnailUrl = `https://image.thum.io/get/width/2400/crop/1200/${url}`;
  return (
    <div className="relative w-full transition-all duration-700">
      <div className="absolute -inset-10 bg-indigo-500 rounded-[3rem] blur-[120px] opacity-15 pointer-events-none" />
      <div className="relative bg-slate-900 rounded-[20px] md:rounded-[30px] p-1.5 md:p-2 border-[1px] border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 backdrop-blur-md mb-1">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="ml-4 h-3 flex-1 rounded-full bg-white/5" />
        </div>
        <div className="aspect-[16/10] bg-white rounded-[16px] overflow-hidden relative">
          <img
            src={thumbnailUrl}
            alt="dashboard-preview"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}

function ResultBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <p className="text-[10px] font-bold text-indigo-100 uppercase mb-2 tracking-tighter">{label}</p>
      <p className="text-sm font-bold leading-relaxed">{value}</p>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: "indigo" | "blue" }) {
  const styles = {
    indigo: "bg-indigo-500/10 border-indigo-400/20 text-indigo-400",
    blue: "bg-blue-500/10 border-blue-400/20 text-blue-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${styles[color]}`}>
      {text}
    </span>
  );
}

function DataFlowCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl text-indigo-600">{icon}</div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ApproachItem({ num, title, content }: { num: string; title: string; content: string }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 transition-colors">
      <span className="text-2xl font-black text-slate-200">{num}</span>
      <div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-600 font-medium">{content}</p>
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
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{it.label}</p>
              <p className="font-bold text-slate-900 leading-tight truncate">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrimaryButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-sm transition-all shadow-lg active:scale-95">
      {icon} {children}
    </a>
  );
}

function OutlineButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-sm transition-all active:scale-95">
      {icon} {children}
    </a>
  );
}

function CheckLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-indigo-300">{icon}</div>
      <p className="text-[13px] font-semibold text-slate-100">{text}</p>
    </div>
  );
}

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Frontend", keywords: ["react"] },
    { group: "Backend", keywords: ["fastapi", "uvicorn"] },
    { group: "AI & LLM", keywords: ["langchain", "huggingface", "claude", "llama"] },
    { group: "Database & Vector", keywords: ["postgresql", "sqlite", "chromadb", "faiss"] },
    { group: "DevOps", keywords: ["docker"] },
  ];
  const buckets = mapping.map(m => ({ group: m.group, items: tech.filter(t => m.keywords.some(k => t.toLowerCase().includes(k))) })).filter(r => r.items.length > 0);

  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-slate-100">
        {buckets.map((b) => (
          <div key={b.group} className="grid grid-cols-12 gap-4 p-7 items-center hover:bg-slate-50 transition-colors">
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{b.group}</div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white text-slate-700 rounded-xl text-[10px] font-bold border border-slate-200 shadow-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroNavigation({ currentProjectId }: { currentProjectId: string }) {
  const featuredProjects = PROJECTS_DATA.filter(p => ["sosai", "smart-barricade", "onliner", "baseball-news"].includes(p.id));
  const currentIndex = featuredProjects.findIndex(p => p.id === currentProjectId);
  if (currentIndex === -1) return null;
  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <>
      {prevProject && (
        <Link href={`/projects/${prevProject.id}`} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
          <ChevronLeft size={32} className="text-white" />
        </Link>
      )}
      {nextProject && (
        <Link href={`/projects/${nextProject.id}`} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
          <ChevronRight size={32} className="text-white" />
        </Link>
      )}
    </>
  );
}