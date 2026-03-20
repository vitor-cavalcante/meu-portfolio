"use client";

export default function EducationEn() {
  const academicPath = [
    {
      degree: "Systems Analysis and Development",
      institution: "Mackenzie Presbyterian University",
      period: "2021 - 2023",
      description:
        "Focused on software architecture, full-stack development, and IT governance protocols.",
      color: "from-blue-500 to-cyan-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
    {
      degree: "Biological Sciences",
      institution: "Mackenzie Presbyterian University",
      period: "2016 - 2019",
      description:
        "Solid scientific foundation in data analysis, critical thinking, and applied research methodologies.",
      color: "from-emerald-500 to-teal-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-8 w-1 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
          Academic Background
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {academicPath.map((edu, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-500 hover:bg-slate-900/60 hover:border-slate-700 hover:-translate-y-1 ${edu.glow}`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.color} rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
              ></div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  {edu.period}
                </span>
                <span className="text-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  {index === 0 ? "💻" : "🧬"}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-50 transition-colors">
                {edu.degree}
              </h3>
              <p
                className={`font-semibold mb-4 text-sm ${index === 0 ? "text-blue-400" : "text-emerald-400"}`}
              >
                {edu.institution}
              </p>
              <p className="text-slate-400 leading-relaxed italic text-sm border-l-2 border-slate-800 pl-4 group-hover:border-slate-700 transition-colors">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
