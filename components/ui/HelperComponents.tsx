// UI 헬퍼 컴포넌트들

export function InfoItem({ icon, label, value, link }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-slate-50 rounded-xl text-slate-400 border border-slate-100">{icon}</div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
        {link ? (
          <a href={link} target="_blank" className="text-slate-900 font-bold hover:text-blue-600 underline underline-offset-2">{value}</a>
        ) : ( <p className="text-slate-900 font-bold">{value}</p> )}
      </div>
    </div>
  );
}

export function WorkItem({ icon, title, period, desc }: any) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
      <div className="mt-1 p-2 bg-blue-50 rounded-lg text-blue-600 h-fit">{icon}</div>
      <div>
        <p className="text-slate-900 font-bold text-sm">{title}</p>
        <p className="text-blue-600 text-[10px] font-mono mb-1">{period}</p>
        <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function SkillCard({ title, icon, skills, desc }: any) {
  return (
    <div className="p-8 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 rounded-[32px] group">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-500 shadow-sm mb-6 transition-colors">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((s: string) => (
          <span key={s} className="px-3 py-1 bg-white border border-slate-100 text-[10px] font-bold text-slate-400 rounded-full group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
