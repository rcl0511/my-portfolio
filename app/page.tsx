"use client";
import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Mail, Github, GraduationCap, 
  Calendar, Layout, Server, Cpu, Database, Pill, Monitor 
} from "lucide-react";
// 분리한 컴포넌트 임포트
import { PROJECTS_DATA, ProjectCard } from "@/components/ProjectComponent";
import { SkillCard } from "@/components/ui/HelperComponents";

export default function CompletePortfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 font-sans leading-relaxed">
      
      {/* --- A. HERO SECTION (복구된 멘트) --- */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold mb-8 tracking-widest border border-emerald-100"
          >
            FRONTEND · HEALTHCARE · IOT
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 text-slate-900"
          >
            PRACTICAL <br /> 
            <span className="text-emerald-500">PROBLEM</span> SOLVER
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              "만들고 끝내는 것이 아니라, <br />
              <span className="text-slate-900 font-semibold underline decoration-emerald-400 decoration-4 underline-offset-4 uppercase">실제 문제 해결 → 검증 → 확장</span>까지 <br /> 비즈니스 가치를 설계합니다."
            </p>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              의약품 도매업체 전산관리 실무(2년)를 통한 현장 감각과 <br />
              AI·헬스케어·IoT를 아우르는 엔지니어링 역량을 보유하고 있습니다.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-emerald-600 text-white font-bold transition-all text-xs tracking-widest rounded-full shadow-lg shadow-slate-200">
              VIEW PROJECTS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-2 px-8 py-4 border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold transition-all text-xs tracking-widest rounded-full">
              RESUME (PDF) <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- B. PERSONAL INFO & WORK EXPERIENCE --- */}
      {/* --- B. PROFILE & PROFESSIONAL --- */}
<section className="py-32 px-6 md:px-20 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-20">
      
      {/* 좌측: 인적사항 & 경력 (Sticking Layout) */}
      <div className="lg:w-1/3 space-y-16">
        <div>
          <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-10">Identity</h2>
          <div className="space-y-8">
            <div className="group">
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 group-hover:text-emerald-400 transition-colors">Name / Education</p>
              <p className="text-xl font-bold text-slate-900">류채린 <span className="text-slate-400 font-light mx-2">/</span> <span className="text-lg">숙명여대 IT공학</span></p>
              <p className="text-sm text-slate-400 mt-1">2026. 02 Graduated</p>
            </div>
            
            <div className="flex gap-10">
              <div className="group">
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 group-hover:text-emerald-400 transition-colors">Contact</p>
                <a href="mailto:rcl0511@naver.com" className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 hover:border-emerald-500 transition-all">rcl0511@naver.com</a>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 group-hover:text-emerald-400 transition-colors">Social</p>
                <a href="https://github.com/rcl0511" target="_blank" className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 hover:border-emerald-500 transition-all">Github</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-10">Experience</h2>
          <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 p-2 bg-white border border-slate-100 shadow-sm rounded-full z-10 text-emerald-500">
                <Monitor size={14} />
              </div>
              <p className="text-[10px] font-bold text-emerald-500 font-mono">2022 — 2025</p>
              <h4 className="font-bold text-slate-900 mt-1">의약품 도매업체 전산관리</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">거래처 데이터 정규화 및 명세서 PDF 파싱 자동화 로직 설계·운영</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 p-2 bg-white border border-slate-100 shadow-sm rounded-full z-10 text-emerald-500">
                <Pill size={14} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 font-mono">2024.03 — 09</p>
              <h4 className="font-bold text-slate-900 mt-1">약국 전산 및 운영 관리</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">약국 청구 시스템 전산 처리 및 의약품 재고 최적화 관리</p>
            </div>
          </div>
        </div>
      </div>

      {/* 우측: 스킬 (Bento Box Style) */}
      <div className="lg:w-2/3">
        <h2 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-10 lg:text-right">Stack & Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard 
            title="Frontend" 
            icon={<Layout size={24} />} 
            skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]} 
            desc="컴포넌트 중심의 설계와 효율적인 상태 관리 기반 UI 구현"
          />
          <SkillCard 
            title="Backend / AI" 
            icon={<Server size={24} />} 
            skills={["FastAPI", "Flask", "Python", "REST API"]} 
            desc="경량 프레임워크 기반 API 설계 및 데이터 전처리 자동화"
          />
          <SkillCard 
            title="Embedded / IoT" 
            icon={<Cpu size={24} />} 
            skills={["C", "ESP32", "BLE GATT", "Wi-Fi AP"]} 
            desc="하드웨어 제어 및 저전력 블루투스 통신 프로토콜 최적화"
          />
          <SkillCard 
            title="Database & Dev" 
            icon={<Database size={24} />} 
            skills={["MySQL", "Git", "Figma", "Vercel"]} 
            desc="안정적인 DB 설계와 협업 툴을 통한 프로젝트 매니징"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- C. PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.4em] mb-24">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- D. CONTACT --- */}
      <footer id="contact" className="py-32 px-6 md:px-20 bg-white text-center border-t border-slate-100">
        
        <p className="mt-20 text-[10px] text-slate-300 font-mono uppercase tracking-[0.5em]">© 2026 Chaerin Ryu. All Rights Reserved.</p>
      </footer>
    </main>
  );
}