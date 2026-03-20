export default function EducationEn() {
  const academicPath = [
    {
      degree: "Systems Analysis and Development",
      institution: "Mackenzie Presbyterian University",
      period: "2021 - 2023",
      description:
        "Focused on software architecture, full-stack development, and IT governance.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      degree: "Biological Sciences",
      institution: "Mackenzie Presbyterian University",
      period: "2016 - 2019",
      description:
        "Solid scientific foundation in data analysis, critical thinking, and applied research methodologies.",
      color: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-8 w-1 bg-blue-500 rounded-full"></span>
          Academic Background
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {academicPath.map((edu, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.color} rounded-t-2xl`}
              ></div>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {edu.period}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                {edu.degree}
              </h3>
              <p className="text-blue-400 font-medium mb-4">
                {edu.institution}
              </p>
              <p className="text-slate-400 leading-relaxed italic">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
