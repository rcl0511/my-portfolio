// app/projects/sosai/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Github, ExternalLink, Calendar, Layers,
  Percent, Sparkles, CheckCircle2, ShieldCheck, Workflow, 
  ChevronLeft, ChevronRight, Database, BrainCircuit, 
  MicVocal, ServerCrash, ShieldAlert, Info
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

      {/* 2. HERO SECTION - 그리드 비율 조절 (5:7) 및 노트북 확대 */}
      <section className="relative overflow-visible bg-slate-950 pt-12 md:pt-24 pb-12 md:pb-24 px-4 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <HeroNavigation currentProjectId="sosai" />

        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex gap-2 mb-6">
              <Badge text="Medical Data Driven AI" color="sky" />
              <Badge text="Production Ready" color="blue" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
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

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <DesktopMockup url={project.links?.demo || ""} />
          </div>
        </div>
      </section>

      {/* 3. 핵심 데이터 흐름 */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-16 relative z-10">
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
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          
          <article>
            <SectionHeader title="Context" subtitle="기획 의도" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100">
                문제점
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                응급 상황에서 비전문가는 증상을 정확히 판단하기 어렵고, 당황으로 인해 잘못된 처치나 골든타임 손실이 발생합니다. 기존 텍스트 위주의 매뉴얼은 긴박한 현장에서 활용도가 낮다는 문제점이 있습니다.
              </p>
            </div>
          </article>

          {/* AI 설계 원칙 - 수직 바 헤더로 변경 */}
          <article>
            <SectionHeader title="Design Principles" subtitle="AI 설계 원칙" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
              <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-2 text-amber-700 mb-4 font-bold text-sm">
                  <ShieldAlert size={18} /> AI 응급 대응 원칙
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-amber-900/75 font-medium">
                  <li className="flex gap-2"><span>•</span> 생명 위협 징후 감지 시 119 신고 최우선 안내</li>
                  <li className="flex gap-2"><span>•</span> 짧고 명확한 단계별 행동 지침</li>
                  <li className="flex gap-2"><span>•</span> 전문 용어 배제, 쉬운 행동 가이드</li>
                  <li className="flex gap-2"><span>•</span> 의식 유무 등 상황 확인 질문 병행</li>
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
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>MongoDB 사용자 데이터(연령·성별·질환) 즉시 분석</span></li>
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>환자 맞춤형 응급 처치 문구 생성</span></li>
                  </ul>
                }
              />
              <ApproachItem 
                num="02" 
                title="OpenAI 기반 지능형 문구 보강"
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>표준 응급 처치 매뉴얼 데이터 학습</span></li>
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>LLM 기반 상황 맞춤형 음성 안내 가공</span></li>
                  </ul>
                }
              />
              <ApproachItem 
                num="03" 
                title="Voice-First UX 설계"
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>긴박한 상황 고려: 시각 의존도 최소화</span></li>
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>gTTS 활용 단계별 실시간 음성 가이드 제공</span></li>
                  </ul>
                }
              />
              <ApproachItem 
                num="04" 
                title="실서비스 수준의 인프라 구성"
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>AWS EC2 &amp; Nginx 기반 안정적 배포 환경</span></li>
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>환경 변수 보안, CORS 정책, systemd 장애 대응 로직 적용</span></li>
                  </ul>
                }
              />
            </div>
          </article>

          {/* Core Highlights - 슬림 가로형 카드 */}
          <article>
            <div className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-[28px] p-7 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={18} />
                <h3 className="text-xl font-black tracking-tight">Core Highlights · 성과</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ResultBadge label="Award" value="보건의료 창업아이디어대회 입상" />
                <ResultBadge label="Infrastructure" value="AWS 실서비스 배포 완료" />
                <ResultBadge label="Safety" value="응급 AI 특허 출원 중" />
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Architecture" subtitle="시스템 아키텍처" />
            <ArchitectureDiagram />
          </article>

          <article>
            <SectionHeader title="Engineering Stack" subtitle="사용된 기술 스택" />
            <div className="space-y-6">
              <TechTable tech={project.tech ?? []} />
              <div className="p-6 bg-slate-100 rounded-2xl text-sm text-slate-600 font-medium flex items-start gap-4">
                <Info size={24} className="shrink-0 text-sky-500 mt-0.5" />
                <span>Nginx 리버스 프록시와 SSL 설정을 통해 보안 통신을 구현하고, AWS EC2 내에서 안정적인 API 환경을 구축</span>
              </div>
            </div>
          </article>

          {/* 통합 요약 카드 - 병렬 그리드 및 헤더 통일 */}
          <article>
            <SectionHeader title="Integrated Summary" subtitle="발전 가능성 · 한계" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Future Work</p>
                <ul className="space-y-3 text-base text-slate-700 font-medium">
                  <li className="flex gap-3"><span className="text-sky-600 font-black">•</span><span>시나리오 확장(심정지/골절/화상)</span></li>
                  <li className="flex gap-3"><span className="text-sky-600 font-black">•</span><span>개인화 로직 고도화(약물/알레르기)</span></li>
                  <li className="flex gap-3"><span className="text-sky-600 font-black">•</span><span>오프라인/저전력 대응(캐싱)</span></li>
                  <li className="flex gap-3"><span className="text-sky-600 font-black">•</span><span>실생활 적용: 아기 응급 대응 도우미</span></li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Limitations</p>
                <p className="text-base text-slate-700 font-medium leading-relaxed bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                  AWS 비용 문제로 인해 현재 서버 운영은 일시 중단됨.
                </p>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="My Contributions" subtitle="수행 역할 및 구현 포인트" />
            <div className="bg-slate-900 rounded-[32px] p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sky-400 font-black text-xs uppercase tracking-[0.3em] mb-6">Development Role</h3>
                <p className="text-lg font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200/90 font-medium">
                  <CheckLine icon={<Database size={16} />} text="DB 연동 및 사용자 데이터 기반 위험도 분석" />
                  <CheckLine icon={<BrainCircuit size={16} />} text="OpenAI LLM 기반 맞춤형 가이드 생성" />
                  <CheckLine icon={<MicVocal size={16} />} text="gTTS를 활용한 Voice-First UX 설계" />
                  <CheckLine icon={<ServerCrash size={16} />} text="AWS EC2 + Nginx + systemd 인프라 구축" />
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
                { label: "Timeline", value: "2025.03 - 2025.06", icon: <Calendar size={16}/> },
                { label: "Platform", value: "Web / React SPA · FastAPI", icon: <Layers size={16}/> },
                { label: "Contribution", value: "100% (Solo Project)", icon: <Percent size={16}/> }
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
      <div className="flex items-end gap-3 mb-1.5">
        <div className="w-1 h-7 bg-sky-600 rounded-full group-hover:h-8 transition-all duration-300" />
        <p className="text-[26px] md:text-[30px] font-[900] text-slate-700 tracking-tight leading-none">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-4 pl-[18px]">
        <h2 className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-slate-400 uppercase shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
      </div>
    </div>
  );
}

function DesktopMockup({ url }: { url: string }) {
  const scale = 0.85; 
  return (
    <div className="relative w-full max-w-[1200px] xl:max-w-[1400px] transition-all duration-700">
      <div className="absolute -inset-10 bg-sky-500 rounded-[3rem] blur-[120px] opacity-15 pointer-events-none" />
      <div className="relative bg-slate-900 rounded-[32px] p-2 md:p-4 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/70 rounded-[22px] mb-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <div className="ml-4 h-3 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="aspect-[16/10] bg-black rounded-[24px] overflow-hidden relative">
          <iframe
            src={url}
            className="absolute inset-0 border-none"
            style={{
              width: `${100 / scale}%`,
              height: `${100 / scale}%`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              // 선명도 개선 속성
              imageRendering: "-webkit-optimize-contrast",
            }}
            title="desktop-demo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function ResultBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md">
      <p className="text-[10px] font-bold text-sky-200 uppercase mb-2 tracking-widest">{label}</p>
      <p className="text-[11px] md:text-xs font-medium tracking-tighter leading-none">{value}</p>
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

function DataFlowCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl inline-block">{icon}</div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ApproachItem({ num, title, content }: { num: string; title: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-sky-100 transition-colors">
      <span className="text-2xl font-black text-slate-200">{num}</span>
      <div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <div className="text-sm text-slate-600 font-medium">{content}</div>
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

function PrimaryButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-black text-sm transition-all shadow-lg active:scale-95">
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
    { group: "Frontend", keywords: ["react", "next", "tailwind", "netlify"] },
    { group: "Backend", keywords: ["fastapi", "python"] },
    { group: "Infra", keywords: ["aws", "ec2", "nginx", "systemd"] },
    { group: "AI & Data", keywords: ["openai", "mongodb", "gtts"] },
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
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-400">{b.group}</div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white text-slate-700 rounded-lg text-[10px] font-bold border border-slate-200 shadow-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
      <h4 className="text-sm font-black text-slate-900 mb-6 uppercase tracking-widest">System Structure</h4>
      <img src="/assets/sosai-architecture.png" alt="Architecture" className="w-full h-auto rounded-xl border border-slate-200 shadow-sm mb-6" />
      <p className="text-xs text-slate-500 font-medium">NGINX 리버스 프록시 및 OpenAI·gTTS 기반 AI 가이드 시스템 아키텍처</p>
    </div>
  );
}

function HeroNavigation({ currentProjectId }: { currentProjectId: string }) {
  return (
    <>
      <Link href="#" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
        <ChevronLeft size={32} className="text-white" />
      </Link>
      <Link href="#" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
        <ChevronRight size={32} className="text-white" />
      </Link>
    </>
  );
}