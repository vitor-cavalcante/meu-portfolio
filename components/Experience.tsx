export default function Experience() {
  const experiences = [
    {
      company: "Guará Moda Infantil",
      role: "Coordenador de TI",
      period: "2023 - Presente",
      description:
        "Liderança de infraestrutura técnica e planejamento digital. Responsável pela estratégia de SEO, otimização de performance web e gestão de processos B2B administrativos.",
      tags: ["Gestão de TI", "SEO", "Estratégia Digital", "B2B"],
      type: "tech",
    },
    {
      company: "GrupoSC - Distribuidora de Medicamentos",
      role: "Consultor de Governança de TI",
      period: "2021 - 2023",
      description:
        "Desenvolvimento de processos inteligentes via plataforma SESUITE – ITSM. Especialista em administração de mudanças, segurança da informação e análise de dados via SQL para redução de custos operacionais.",
      tags: ["SESUITE-ITSM", "SQL", "Governança"],
      type: "tech",
    },
    {
      company: "Universidade Presbiteriana Mackenzie",
      role: "Assistente de Laboratório",
      period: "2018 - 2019",
      description:
        "Suporte técnico especializado em microbiologia e virologia. Gestão de protocolos laboratoriais e manutenção de acervos biológicos (herbário).",
      tags: ["Microbiologia", "Virologia", "Herbário"],
      type: "bio",
    },
    {
      company: "ICB-USP (Biomedicina)",
      role: "Pesquisador / Assistente",
      period: "2017 - 2017",
      description:
        "Pesquisa em Biologia Celular com foco em microRNAs e oncologia. Manipulação de precisão com nitrogênio líquido e elaboração de relatórios técnicos complexos.",
      tags: ["Biologia Celular", "microRNA", "Pesquisa"],
      type: "bio",
    },
  ];

  return (
    <section
      id="experiencia"
      className="border-t border-slate-900 bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-16 flex items-center gap-4 text-3xl font-bold text-white">
          <span className="h-8 w-1 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
          Experiência Profissional
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border-l border-slate-800 pl-8 transition-all duration-300 hover:border-slate-700"
            >
              {/* INDICADOR DE TIMELINE COM GLOW */}
              <div
                className={`absolute -left-[5.5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-slate-950 transition-all duration-500 ${
                  exp.type === "tech"
                    ? "bg-slate-700 group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]"
                    : "bg-slate-700 group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                }`}
              ></div>

              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-50/90 transition-colors">
                    {exp.role}
                  </h3>
                  <p
                    className={`font-semibold text-sm tracking-wide transition-colors ${
                      exp.type === "tech"
                        ? "text-blue-400/90"
                        : "text-emerald-400/90"
                    }`}
                  >
                    {exp.company}
                  </p>
                </div>
                <span className="mt-2 font-mono text-xs font-semibold text-slate-500 md:mt-0 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
                  {exp.period}
                </span>
              </div>

              <p className="mb-6 max-w-2xl text-[13px] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className={`rounded-md border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tighter transition-all duration-300 ${
                      exp.type === "tech"
                        ? "border-blue-500/10 bg-blue-500/5 text-blue-400/80 group-hover:border-blue-500/30 group-hover:text-blue-400"
                        : "border-emerald-500/10 bg-emerald-500/5 text-emerald-400/80 group-hover:border-emerald-500/30 group-hover:text-emerald-400"
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
