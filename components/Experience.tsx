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
        "Atuação no setor de Governança de TI. Desenvolvimento de formulários e processos inteligentes através da plataforma SESUITE – ITSM, atendimento e suporte aos colaboradores da empresa, administração de mudanças em processos, acessos e segurança, gerenciamento de relatórios através da linguagem SQL com a finalidade de otimizar processos e reduzir custos.",
      tags: ["SESUITE-ITSM", "SQL", "Governança"],
      type: "tech",
    },
    {
      company: "Mackenzie - Universidade Presbiteriana Mackenzie",
      role: "Assistente de Laboratório",
      period: "2018 - 2019",
      description:
        "Atuação em diversos laboratórios e setores do departamento de ciências biológicas, os quais: laboratório de microbiologia e virologia, laboratório de distúrbios do desenvolvimento e herbário.",
      tags: ["Microbiologia", "Virologia", "Herbário"],
      type: "bio",
    },
    {
      company:
        "(ICB-USP) - Instituto de Ciências Biomédicas da Universidade de São Paulo",
      role: "Assistente de Laboratório",
      period: "2017 - 2017",
      description:
        "Atuação em linha de pesquisa na área de Biologia Celular, com ênfase em microRNAs e câncer. Utilização de Cabine de Segurança Biológica, técnicas de pipetagem: micropipeta digital monocanal, manipulação de amostras celulares conservadas em nitrogênio líquido, elaboração de relatórios.",
      tags: ["Biologia Celular", "microRNA"],
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
          <span className="h-8 w-1 rounded-full bg-blue-500"></span>
          Experiência Profissional
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border-l border-slate-800 pl-8"
            >
              {/* A "BOLINHA" DINÂMICA */}
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
