export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-slate-950 py-24 border-t border-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="flex items-center gap-4 text-3xl font-bold text-white mb-12">
          <span className="h-8 w-1 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
          Projetos
        </h2>

        {/* Card de Placeholder com Efeito Glow */}
        <div className="group relative overflow-hidden rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 p-12 text-center transition-all duration-500 hover:border-blue-500/50 hover:bg-slate-900/40">
          {/* Luzes de fundo dinâmicas */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] transition-opacity group-hover:opacity-100 opacity-50"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Ícone com pulso de brilho */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
              🚀
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Novas experiências em construção
            </h3>

            <p className="mx-auto max-w-lg text-slate-400 leading-relaxed">
              Atualmente mergulhado no desenvolvimento de ambientes e mecânicas
              na
              <span className="text-blue-400 font-medium">
                {" "}
                Unreal Engine 5
              </span>{" "}
              e explorando soluções em
              <span className="text-emerald-400 font-medium">
                {" "}
                Bioinformática
              </span>
              . Em breve, esta seção exibirá estudos de caso, repositórios e
              protótipos funcionais.
            </p>

            {/* Indicador de Status/Loading */}
            <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/50 border border-slate-800">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] [animation-delay:-0.3s]"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] [animation-delay:-0.5s]"></span>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                Compiling assets...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
