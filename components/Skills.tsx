export default function Skills() {
  const skillGroups = [
    {
      title: "TI & Governança",
      skills: ["Gestão de Projetos", "ITSM (SESUITE)", "Infraestrutura", "B2B"],
      color: "blue",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    },
    {
      title: "Desenvolvimento",
      skills: ["C++", "Python", "JavaScript", "SQL"],
      color: "emerald",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    },
    {
      title: "Marketing Digital",
      skills: [
        "SEO Estratégico",
        "Google Analytics",
        "Digital Planning",
        "Performance",
      ],
      color: "cyan",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-8 w-1 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></span>
          Hard Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all duration-500 hover:bg-slate-900/80 hover:border-slate-700 ${group.glow}`}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                {/* Indicador de cor dinâmico */}
                <span
                  className={`h-2 w-2 rounded-full bg-${group.color}-400`}
                ></span>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800 rounded-lg transition-all duration-300 group-hover:border-slate-600 hover:text-white hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
