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

      {/* 2. HERO SECTION */}
      <section className="relative bg-slate-950 min-h-[calc(100vh-57px)] flex flex-col justify-center overflow-hidden px-4 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <HeroNavigation currentProjectId="sosai" />

        <div className="relative w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-5">
            <div className="flex gap-2 mb-6">
              <Badge text="2025.03 - 2025.06" color="sky" />
              <Badge text="Solo Project" color="blue" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              응급 상황에서 음성으로 단계별 행동 지침을 제공하는<br />
              AI 기반 응급 대응 웹 서비스.
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



      {/* 4. MAIN CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-12 py-16">
        <div className="space-y-24">
          
          <article>
            <SectionHeader title="Context" subtitle="기획 의도" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md space-y-8">
              {/* 기획 의도 헤드라인 */}
              <p className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                "환자가 말을 할 수 없을 때,
                <span className="text-sky-600"> 서비스가 대신 말합니다"</span>
              </p>

              <div className="border-t border-slate-100" />

              {/* 문제점 */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100">
                  Problem
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
                  낙마, 기절, 급성 심정지 등으로 사람이 쓰러지면 <span className="text-slate-900 font-semibold">환자는 본인의 상태를 설명할 수 없습니다.</span><br/> 주변 사람들이 발견하더라도 환자의 지병이나 정확한 처치법을 몰라 당황하며 골든타임을 허비하는 경우가 많습니다.
                </p>
              </div>

              <div className="border-t border-slate-100" />

              {/* 해결 방향 */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-100">
                  Solution
                </div>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-black flex items-center justify-center">1</span>
                    <div>
                      <p className="text-slate-900 font-bold mb-1">위기 감지 및 주변 전파</p>
                      <p className="text-slate-500 text-sm leading-relaxed">웨어러블 기기를 통해 추락이나 기절 등 <span className="text-slate-700 font-medium">생체 데이터의 급격한 변화를 감지</span>하면 즉시 사이렌을 울려 주변에 위급 상황을 알립니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-black flex items-center justify-center">2</span>
                    <div>
                      <p className="text-slate-900 font-bold mb-1">구조자를 위한 '보이스 리더'</p>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">주변 사람이 다가오면, 화면을 읽을 필요 없이 <span className="text-slate-700 font-medium">음성(TTS)으로 현재 환자에게 필요한 처치를 계속 방송</span>합니다.</p>
                      <div className="flex items-end gap-2">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center">
                          <MicVocal size={14} className="text-sky-600" />
                        </div>
                        <div className="relative bg-sky-50 border border-sky-100 rounded-2xl rounded-bl-none px-4 py-3 w-full">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            이 환자는 당뇨 병력이 있습니다. 현재 의식이 없으므로 절대 입에 설탕물이나 음식을 넣지 마세요.<br />
                            호흡을 확인하신 후, 숨을 쉬지 않는다면 즉시 가슴 압박을 시작해 주세요.
                          </p>
                          <p className="text-[10px] text-slate-400 mt-1 text-right">SOSAI · TTS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-black flex items-center justify-center">3</span>
                    <div>
                      <p className="text-slate-900 font-bold mb-1">구급대원을 위한 데이터 브릿지</p>
                      <p className="text-slate-500 text-sm leading-relaxed">환자의 평소 지병·복용 약물·혈액형 정보를 구급대원에게 즉시 전달할 수 있는 상태로 대기하여, <span className="text-slate-700 font-medium">현장 도착 후 처치 시간을 획기적으로 단축</span>합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Approach" subtitle="WHY & HOW" />
            <div className="space-y-3">

              {/* 01 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 text-xs font-black flex items-center justify-center shrink-0">1</span>
                  <h4 className="font-black text-slate-900 text-base">의료 맥락 인지 파이프라인</h4>
                </div>
                <div className="space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-500 mb-1.5">고려한 점</p>
                    <p className="text-slate-600">응급 상황에서 환자는 직접 상태를 설명할 수 없습니다. 범용 매뉴얼은 특정 환자(당뇨, 혈액 응고 장애 등)에게 오히려 치명적인 처치를 유발할 위험이 있다는 점을 고려했습니다.</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-500 mb-1.5">설계 방향</p>
                    <p className="text-slate-600">사전 등록된 개인 의료 정보(혈액형·지병·복용약)를 AI 호출 첫 단계 컨텍스트로 주입하여, <span className="font-semibold text-slate-800">환자에게 금지된 처치를 배제한 맞춤형 안내</span>를 생성하도록 설계했습니다. 구급대원에게는 병력 데이터를 즉시 전달해 현장 처치 속도를 높이는 것도 함께 고려했습니다.</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">구현</p>
                    <p className="text-slate-500">MongoDB 조회 → OpenAI 시스템 프롬프트 주입 → 안전 가이드 우선 생성</p>
                  </div>
                </div>
              </div>

              {/* 02 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 text-xs font-black flex items-center justify-center shrink-0">2</span>
                  <h4 className="font-black text-slate-900 text-base">고신뢰성 LLM 오케스트레이션</h4>
                </div>
                <div className="space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-500 mb-1.5">고려한 점</p>
                    <p className="text-slate-600">의료 도메인에서 LLM 할루시네이션은 잘못된 처치로 직결됩니다. 또한 전문 용어로 생성된 답변은 패닉 상태의 비전문가가 현장에서 즉각 실행하기 어렵다는 점을 고려했습니다.</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-500 mb-1.5">설계 방향</p>
                    <p className="text-slate-600">표준 응급 처치 매뉴얼을 시스템 프롬프트의 기준으로 삼아 생성 범위를 엄격히 제한했습니다. 출력을 <span className="font-semibold text-slate-800">구조화된 JSON으로 강제 파싱</span>함으로써 응답 일관성을 확보하고, 의학 용어를 현장에서 즉시 실행 가능한 구어체로 변환하도록 설계했습니다.</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">구현</p>
                    <p className="text-slate-500">시스템 프롬프트 → JSON 파싱 → 위험도·행동지침 분리 렌더링</p>
                  </div>
                </div>
              </div>

              {/* 03 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 text-xs font-black flex items-center justify-center shrink-0">3</span>
                  <h4 className="font-black text-slate-900 text-base">저지연 음성 중심 인터페이스</h4>
                </div>
                <div className="space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-500 mb-1.5">고려한 점</p>
                    <p className="text-slate-600">응급 현장에서 구조자의 시선은 환자에게 고정되어야 합니다. 화면을 보는 행위 자체가 골든타임을 낭비하며, 단일 TTS 엔진은 네트워크 상황에 따라 지연이 발생할 수 있다는 점을 고려했습니다.</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-500 mb-1.5">설계 방향</p>
                    <p className="text-slate-600">시각 의존도를 완전히 제거한 <span className="font-semibold text-slate-800">Voice-First UX</span>를 핵심 설계 원칙으로 삼았습니다. 브라우저 내장 Web Speech API와 백엔드 gTTS를 하이브리드로 운용해 지연을 최소화하고, 심리적 안정 멘트를 병행 송출해 구조자가 처치를 끝까지 완수하도록 설계했습니다.</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">구현</p>
                    <p className="text-slate-500">Web Speech API + gTTS 하이브리드 · 텍스트 생성 즉시 스트리밍 변환</p>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* Achievement */}
          <article>
            <SectionHeader title="Achievement" subtitle="성과 및 수상" />
            <div className="space-y-4">
              {/* Award */}
              <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 to-indigo-600 rounded-[32px] p-8 shadow-xl">
                <span className="absolute top-4 right-8 w-2 h-2 rounded-full bg-white/60 animate-ping" />
                <span className="absolute top-10 right-16 w-1.5 h-1.5 rounded-full bg-white/40 animate-ping [animation-delay:0.4s]" />
                <span className="absolute bottom-6 right-12 w-1 h-1 rounded-full bg-white/50 animate-ping [animation-delay:0.8s]" />
                <span className="absolute top-6 left-1/2 w-1 h-1 rounded-full bg-white/30 animate-ping [animation-delay:1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse pointer-events-none" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Sparkles size={18} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-200 mb-1">Award</p>
                    <p className="font-black text-white text-base mb-2">HIRA 보건의료 창업아이디어대회 입상</p>
                    <p className="text-sm text-sky-100 leading-relaxed">심사위원들은 <span className="text-white font-medium">환자 개인 의료 데이터를 실시간 AI 컨텍스트에 결합</span>하는 방식의 독창성에 주목했습니다. <br/>단순 정보 제공을 넘어, 비전문가가 골든타임 내에 정확한 처치를 수행할 수 있도록 설계된 음성 지원 인터페이스를 높이 평가받았습니다.</p>
                  </div>
                </div>
              </div>
              {/* Patent */}
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-sky-600 rounded-[32px] p-8 shadow-xl">
                <span className="absolute top-5 right-10 w-2 h-2 rounded-full bg-white/60 animate-ping [animation-delay:0.3s]" />
                <span className="absolute top-12 right-20 w-1.5 h-1.5 rounded-full bg-white/40 animate-ping [animation-delay:0.7s]" />
                <span className="absolute bottom-5 right-8 w-1 h-1 rounded-full bg-white/50 animate-ping [animation-delay:1.1s]" />
                <span className="absolute top-8 left-1/3 w-1 h-1 rounded-full bg-white/30 animate-ping [animation-delay:0.5s]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse pointer-events-none" />
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                      <ShieldCheck size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-indigo-200 mb-1">Patent</p>
                      <p className="font-black text-white text-base mb-1">응급 AI 특허 출원 <span className="text-sm font-medium text-indigo-200">(2025.09.02)</span></p>
                      <p className="text-sm text-sky-100 leading-relaxed">출원번호 : <span className="text-white font-medium">10-2025-0123730호</span></p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a href="/assets/특허명세서.PDF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/20 rounded-full text-xs font-bold text-white transition-all">
                      <Info size={13} /> 특허 명세서 <ExternalLink size={11} className="opacity-60" />
                    </a>
                    <a href="/assets/특허증.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/20 rounded-full text-xs font-bold text-white transition-all">
                      <ShieldCheck size={13} /> 특허증 <ExternalLink size={11} className="opacity-60" />
                    </a>
                  </div>
                </div>
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

            </div>
          </article>

          

          <article>
            <SectionHeader title="My Contributions" subtitle="수행 역할 및 구현 포인트" />
            <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sky-400 font-black text-xs uppercase tracking-[0.3em] mb-5">Solo Project · 기여율 100%</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <CheckLine icon={<Database size={16} />} text="DB 의료 데이터 설계 및 연동" />
                  <CheckLine icon={<BrainCircuit size={16} />} text="LLM 시스템 프롬프트 설계" />
                  <CheckLine icon={<MicVocal size={16} />} text="gTTS + Web Speech API 하이브리드 TTS 구현" />
                  <CheckLine icon={<ShieldCheck size={16} />} text="특허 출원 명세서 작성 참여" />
                  <CheckLine icon={<Sparkles size={16} />} text="보건의료 창업아이디어대회 기획 및 발표" />
                </div>
              </div>
              <Workflow className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>


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
      <p className="text-xs font-bold text-sky-200 uppercase mb-2 tracking-widest">{label}</p>
      <p className="text-sm md:text-base font-bold leading-snug whitespace-pre-line">{value}</p>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: "sky" | "blue" }) {
  const styles = {
    sky: "bg-sky-500/20 border-sky-400/50 text-sky-300",
    blue: "bg-blue-500/20 border-blue-400/50 text-blue-300",
  };
  return (
    <span className={`px-4 py-1.5 rounded-full border text-sm font-bold uppercase tracking-widest ${styles[color]}`}>
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
    { group: "Infra", keywords: ["aws", "ec2", "nginx", "systemd", "mongodb"] },
    { group: "3rd Party APIs", keywords: ["openai", "gtts"] },
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