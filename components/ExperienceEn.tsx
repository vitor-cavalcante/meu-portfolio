export default function ExperienceEn() {
  const experiences = [
    {
      company: "Guará Moda Infantil",
      role: "IT Coordinator",
      period: "2023 - Present",
      description:
        "Leadership of technical infrastructure and digital planning. Responsible for SEO strategy, web performance optimization, and management of administrative B2B processes.",
      tags: ["IT Management", "SEO", "Digital Strategy", "B2B"],
      type: "tech",
    },
    {
      company: "GrupoSC - Pharmaceutical Distributor",
      role: "IT Governance Consultant",
      period: "2021 - 2023",
      description:
        "Acted within the IT Governance department. Development of smart forms and processes via SESUITE – ITSM platform; employee support and assistance; change management for processes, access, and security; SQL-based report management aimed at process optimization and cost reduction.",
      tags: ["SESUITE-ITSM", "SQL", "Governance"],
      type: "tech",
    },
    {
      company: "Mackenzie Presbyterian University",
      role: "Laboratory Assistant",
      period: "2018 - 2019",
      description:
        "Worked across various laboratories and sectors of the Biological Sciences department, including: Microbiology and Virology lab, Developmental Disorders lab, and the Herbarium.",
      tags: ["Microbiology", "Virology", "Herbarium"],
      type: "bio",
    },
    {
      company:
        "ICB-USP - Institute of Biomedical Sciences, University of São Paulo",
      role: "Laboratory Assistant",
      period: "2017 - 2017",
      description:
        "Worked on a research line in the field of Cell Biology, with an emphasis on microRNAs and cancer. Utilization of Biological Safety Cabinets, pipetting techniques (single-channel digital micropipette), handling of cell samples preserved in liquid nitrogen, and report preparation.",
      tags: ["Cell Biology", "microRNA"],
      type: "bio",
    },
  ];

  return (
    <section
      id="experience"
      className="border-t border-slate-900 bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-16 flex items-center gap-4 text-3xl font-bold text-white">
          <span className="h-8 w-1 rounded-full bg-blue-500"></span>
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border-l border-slate-800 pl-8"
            >
              {/* THE DYNAMIC DOT */}
              <div
                className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  exp.type === "tech"
                    ? "bg-slate-700 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                    : "bg-slate-700 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                }`}
              ></div>

              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-slate-100">
                    {exp.role}
                  </h3>
                  <p
                    className={`font-medium transition-colors ${
                      exp.type === "tech" ? "text-blue-400" : "text-emerald-400"
                    }`}
                  >
                    {exp.company}
                  </p>
                </div>
                <span className="mt-2 font-mono text-sm text-slate-500 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-400">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      exp.type === "tech"
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                        : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {tag}
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
