// app/projects/smart-barricade/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Layers,
  Percent,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  Wifi,
  Bluetooth,
  Cpu,
  Gauge,
  Wrench,
  Workflow,
  Info,
  Radar,
  Cable,
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ========================================================================== */
export default async function SmartBarricadePage() {
  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "smart-barricade");
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">
      {/* 1) NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>
          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2) HERO */}
      <section className="relative overflow-visible bg-slate-950 pt-20 pb-20 px-6 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-emerald-600 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-cyan-600 rounded-full blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-s font-black tracking-widest shadow-lg shadow-emerald-300/40">
                🏆 2025 SMU 캡스톤 디자인 경진대회 대상(교내)
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-s font-black tracking-widest shadow-lg shadow-emerald-300/40">
                🏆 2025 기계인더피날레(과 대회) 1등
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-s font-black tracking-widest shadow-lg shadow-emerald-300/40">
                대학 성과발표 대표 참가
              </span>
            </div>

            <div className="flex gap-2 mb-6">
              <MiniBadge text="Pressure → 판단 → 물리 제어" color="emerald" />
              <MiniBadge text="BLE + WiFi SoftAP" color="sky" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              무단 침입·차량 진입·위험 접근을 <b>물리적 압력(하중)</b>으로 감지하고,
              위험 판단 후 <b>액추에이터 제어(EXTEND/RETRACT)</b>까지 이어지는 현장
              대응형 IoT 안전 바리케이드.
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.github && (
                <OutlineButton href={project.links.github} icon={<Github size={18} />}>
                  소스코드
                </OutlineButton>
              )}
              <PrimaryButton
  href="https://github.com/rcl0511/smart-barricade-app/releases/tag/02"
  icon={<ExternalLink size={18} />}
>
  앱 다운받기
</PrimaryButton>
            </div>
          </div>

          {/* 우측: 앱 화면(연결 상태 이미지) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end py-10">
            <PhoneImageMockup
              src="https://github.com/user-attachments/assets/948f4d8d-8437-471b-96db-5a611e0916a8"
              title="Connected State (BLE + WiFi AP)"
            />
          </div>
        </div>
      </section>

      {/* 3) REAL-TIME FLOW SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DataFlowCard
            icon={<Gauge className="text-emerald-600" />}
            title="Load Cell x3 (HX711)"
            desc="실시간 하중(W1,W2,W3) 측정 + 대표값 W 산출"
          />
          <DataFlowCard
            icon={<Bluetooth className="text-sky-600" />}
            title="BLE Notify / Write"
            desc="센서 스트림 수신 + MODE/EXTEND/RETRACT/STOP 제어"
          />
          <DataFlowCard
            icon={<Wifi className="text-indigo-600" />}
            title="WiFi SoftAP HTTP"
            desc="전시/실험 환경 대응: /status, /cmd 로컬 제어"
          />
        </div>
      </section>

      {/* 4) MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-24">
          {/* Context */}
          <article>
            <SectionHeader
              title="Context & Problem"
              subtitle="왜 이 시스템이 필요한가"
            />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line mb-10">
                {project.problem ??
                  "군중 밀집 상황에서 위험을 ‘정량화’하기 어렵고, 사후 대응에 의존하는 한계가 있습니다. Smart Barricade는 물리적 하중(압력) 데이터를 기반으로 위험을 감지하고, 현장 물리 제어(게이트/액추에이터)까지 연결합니다."}
              </p>

              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-800 mb-4 font-bold">
                  <ShieldAlert size={20} /> 설계 핵심
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[13px] text-emerald-900/70 font-medium">
                  <li className="flex gap-2">
                    <span>•</span> 압력/하중 기반 감지(시각 의존 X)
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 판단 → 액추에이터 제어까지 End-to-End
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> BLE + WiFi(AP)로 현장 연결 안정성 확보
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 노이즈/오작동 최소화를 위한 필터링
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Communication Overview */}
          <article>
            <SectionHeader
              title="Communication Overview"
              subtitle="BLE + WiFi SoftAP 통신 구조"
            />

            <div className="space-y-4">
              <ApproachItem
                num="01"
                icon={<Bluetooth size={18} className="text-sky-600" />}
                title="BLE (Real-time Stream + Control)"
                content={`ESP32 → Android: Notify
W,W1,W2,W3,overloaded,autoMode,actuatorState

Android → ESP32: Write
MODE:AUTO / MODE:MANUAL / EXTEND / RETRACT / STOP`}
              />
              <ApproachItem
                num="02"
                icon={<Wifi size={18} className="text-indigo-600" />}
                title="WiFi SoftAP (Local HTTP Control)"
                content={`SSID: SmartBarricade_AP
IP: 192.168.4.1

GET /status
GET /cmd?act=EXTEND`}
              />
            </div>

            <div className="mt-8 bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                Notify Field Spec
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SpecPill label="W" value="대표 하중값(총합/평균)" />
                <SpecPill label="W1,W2,W3" value="각 로드셀 측정값" />
                <SpecPill label="overloaded" value="0=정상 / 1=과부하" />
                <SpecPill label="autoMode" value="AUTO=1 / MANUAL=0" />
                <SpecPill label="actuatorState" value="0=STOP / 1=EXTEND / 2=RETRACT" />
              </div>

              <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-200 text-[13px] text-slate-600 font-medium leading-relaxed">
                Android 앱은 Notify 문자열을 <b>,</b> 기준으로 split하여 그래프/상태
                카드/알림 UI에 반영합니다.
              </div>
            </div>
          </article>

          {/* Architecture / Images */}
          <article>
            <SectionHeader
              title="UI & Monitoring"
              subtitle="앱 화면 / 연결 상태"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageCard
                title="UI (Lower Section)"
                desc="센서/모드/제어 영역(하단 UI)"
                src="https://github.com/user-attachments/assets/22065484-616c-4e60-b2a3-43a813b78a84"
              />
              <ImageCard
                title="Connected State"
                desc="BLE 연결 상태 및 모니터링"
                src="https://github.com/user-attachments/assets/948f4d8d-8437-471b-96db-5a611e0916a8"
              />
            </div>
          </article>

          {/* Engineering Stack */}
          <article>
            <SectionHeader
              title="Engineering Stack"
              subtitle="사용된 기술 스택"
            />
            <div className="space-y-6">
              <TechTable tech={project.tech ?? []} />
              <div className="p-6 bg-slate-100 rounded-2xl text-[18px] md:text-[20px] text-slate-600 font-medium flex items-start gap-4">
                <Info size={28} className="shrink-0 text-emerald-600 mt-0.5" />
                <span>
                  현장 통신을 위해 BLE와 WiFi(AP)를 병행하고, 하중 센서의 노이즈는
                  필터링(중앙값/평활화)로 안정화했습니다.
                </span>
              </div>
            </div>
          </article>

          {/* My Contributions */}
          <article>
            <SectionHeader
              title="My Contributions"
              subtitle="수행 역할 및 구현 포인트"
            />
            <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-6">
                  Development Role
                </h3>
                <p className="text-xl md:text-m font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role ??
                    "Android 앱(실시간 모니터링 UI) / BLE GATT 통신 최적화 / 센서 데이터 필터링 및 상태 표시 로직 구현"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] text-slate-200/90 font-medium">
                  <CheckLine icon={<Radar size={16} />} text="실시간 하중 시각화(그래프/상태)" />
                  <CheckLine icon={<Cable size={16} />} text="BLE Notify 파싱 + Write 제어" />
                  <CheckLine icon={<Workflow size={16} />} text="AUTO/MANUAL 모드 전환 UX" />
                  <CheckLine icon={<Wrench size={16} />} text="노이즈 억제(필터링) & 예외 처리" />
                </div>
              </div>

              <Cpu className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>

        {/* RIGHT */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard
              title="Project Snapshot"
              items={[
                { label: "Timeline", value: project.period, icon: <Calendar size={16} /> },
                { label: "Platform", value: project.platform, icon: <Layers size={16} /> },
                { label: "Contribution", value: project.contribution, icon: <Percent size={16} /> },
              ]}
            />

            <div className="bg-gradient-to-br from-emerald-600 to-cyan-700 rounded-[32px] p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles size={18} />
                <h3 className="font-bold uppercase text-[10px] tracking-widest">
                  Core Highlights
                </h3>
              </div>

              <div className="space-y-4">
                <ResultBadge
                  label="Sensor"
                  value="Load Cell x3 (HX711) 기반 실시간 하중 감지"
                />
                <ResultBadge
                  label="Control"
                  value="THRESHOLD 초과 시 자동 EXTEND + 유지 로직"
                />
                <ResultBadge
                  label="Comm"
                  value={
                    <>
                      BLE 실시간 스트림 + WiFi(AP) 로컬 HTTP 제어
                      <br />
                      (/status, /cmd)
                    </>
                  }
                />
              </div>
            </div>

            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                className="block bg-white rounded-[32px] border border-slate-200 p-7 hover:shadow-md transition-shadow"
                rel="noreferrer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                      Repository
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      View Source Code
                    </p>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                      GitHub에서 전체 코드 확인
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </a>
            ) : null}
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ========================================================================== */
/* INTERNAL UI */
/* ========================================================================== */

function MiniBadge({
  text,
  color,
}: {
  text: string;
  color: "sky" | "emerald";
}) {
  const styles = {
    sky: "bg-sky-500/10 border-sky-400/20 text-sky-400",
    emerald: "bg-emerald-500/10 border-emerald-400/20 text-emerald-400",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${styles[color]}`}
    >
      {text}
    </span>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <p className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-2">
        {subtitle}
      </p>
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 shrink-0">
          {title}
        </h2>
        <div className="h-px w-full bg-slate-200" />
      </div>
    </div>
  );
}

function DataFlowCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-white p-8 rounded-[32px] border border-slate-200
                 shadow-[0_20px_50px_rgba(16,185,129,0.12)]
                 hover:shadow-[0_20px_60px_rgba(16,185,129,0.22)]
                 flex flex-col items-center text-center group
                 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-emerald-50 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ApproachItem({
  num,
  icon,
  title,
  content,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-emerald-100 transition-colors">
      <div className="shrink-0 flex flex-col items-center">
        <span className="text-2xl font-black text-slate-200">{num}</span>
        <div className="mt-3 w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="min-w-0">
        <h4 className="font-black text-slate-900 mb-2">{title}</h4>
        <pre className="whitespace-pre-wrap text-sm text-slate-600 leading-relaxed font-medium">
          {content}
        </pre>
      </div>
    </div>
  );
}

function SpecPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-slate-800 leading-relaxed">
        {value}
      </p>
    </div>
  );
}

function SummaryCard({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400">
              {it.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                {it.label}
              </p>
              <p className="font-bold text-slate-900 leading-tight break-words">
                {it.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultBadge({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <p className="text-[10px] font-bold text-emerald-100 uppercase mb-2 tracking-tighter">
        {label}
      </p>
      <p className="text-sm font-bold leading-relaxed">{value}</p>
    </div>
  );
}

function CheckLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-emerald-300">{icon}</div>
      <p className="text-[13px] font-semibold text-slate-100">{text}</p>
    </div>
  );
}

function ImageCard({
  title,
  desc,
  src,
}: {
  title: string;
  desc: string;
  src: string;
}) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {title}
        </p>
        <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

function PhoneImageMockup({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative group w-full max-w-[320px] lg:max-w-[360px] transition-all duration-700 hover:scale-105">
      <div className="absolute -inset-4 bg-emerald-500 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />

      <div className="relative bg-slate-900 rounded-[3.5rem] p-3.5 border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(16,185,129,0.35)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20 flex justify-center items-end pb-1.5">
          <div className="w-10 h-1 bg-slate-700 rounded-full" />
        </div>

        <div className="aspect-[9/19.5] bg-black rounded-[2.8rem] overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
      </div>

      <div className="absolute -left-2 top-24 w-2 h-12 bg-slate-800 rounded-l-md" />
      <div className="absolute -left-2 top-40 w-2 h-20 bg-slate-800 rounded-l-md" />
      <div className="absolute -right-2 top-32 w-2 h-24 bg-slate-800 rounded-r-md" />
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-black text-sm transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
    >
      {icon} {children}
    </a>
  );
}

function OutlineButton({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-sm transition-all active:scale-95"
    >
      {icon} {children}
    </a>
  );
}

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Mobile", keywords: ["kotlin", "android"] },
    { group: "Embedded", keywords: ["esp32", "arduino", "c"] },
    { group: "Comm", keywords: ["ble", "gatt", "wifi", "http"] },
    { group: "Sensing", keywords: ["load", "hx711", "sensor"] },
  ];

  const buckets = mapping
    .map((m) => ({
      group: m.group,
      items: tech.filter((t) => m.keywords.some((k) => t.toLowerCase().includes(k))),
    }))
    .filter((r) => r.items.length > 0);

  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-slate-100">
        {buckets.map((b) => (
          <div
            key={b.group}
            className="grid grid-cols-12 gap-4 p-7 items-center hover:bg-slate-50 transition-colors"
          >
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {b.group}
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* tech가 매핑에 덜 걸리는 경우 대비 */}
      {!buckets.length ? (
        <div className="p-7">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
