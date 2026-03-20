export default function Skills() {
  const skillGroups = [
    {
      title: "TI & Governança",
      skills: ["Gestão de Projetos", "ITSM (SESUITE)", "Infraestrutura", "B2B"],
      color: "blue",
    },
    {
      title: "Desenvolvimento",
      skills: ["C++", "Python", "JavaScript", "SQL"],
      color: "emerald",
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
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-8 w-1 bg-cyan-500 rounded-full"></span>
          Hard Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800 rounded-lg hover:border-slate-600 transition-colors"
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
