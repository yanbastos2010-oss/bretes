import React from 'react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            ESCOLHA O PLANO IDEAL
          </h2>
        </div>

        {/* 2-Card Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          
          {/* Card 1: PLANO BÁSICO */}
          <div>
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 relative hover:border-slate-300 transition-all">
              
              <div className="space-y-6">
                <div className="text-center border-b border-slate-100 pb-4">
                  <h3 className="text-xl sm:text-2xl font-heading text-black uppercase tracking-wide">
                    PLANO BÁSICO
                  </h3>
                  <div className="mt-3">
                    <span className="text-[16px] line-through text-rose-600 font-extrabold font-price block">De R$47</span>
                    <strong className="text-[38px] leading-tight font-black text-[#15803d] font-price block">R$10,00</strong>
                  </div>
                </div>

                <ul className="space-y-3 text-[15px] font-poppins font-normal text-black">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Mais de 100 Projetos Profissionais de Bretes para Gado</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Acesso Digital e Vitalício</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Garantia de 14 dias</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                    <span>Bônus Exclusivos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-center border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectPlan('Plano Básico')}
                  className="w-full py-3.5 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-black font-cta text-base sm:text-lg font-bold uppercase transition-all duration-200 cursor-pointer inline-block text-center"
                >
                  QUERO O BÁSICO
                </button>
              </div>

            </article>
          </div>

          {/* Card 2: PLANO COMPLETO */}
          <div>
            <article className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#ea880f] shadow-xl flex flex-col justify-between space-y-6 relative">
              
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ea880f] text-white font-extrabold text-xs uppercase px-4 py-1 rounded-full shadow-md tracking-wider">
                MAIS ESCOLHIDO
              </div>

              <div className="space-y-6 pt-2">
                <div className="text-center border-b border-amber-100 pb-4">
                  <h3 className="text-xl sm:text-2xl font-heading text-black uppercase tracking-wide">
                    PLANO COMPLETO
                  </h3>
                  <div className="mt-3">
                    <span className="text-[16px] line-through text-rose-600 font-extrabold font-price block">De R$97</span>
                    <strong className="text-[52px] leading-tight font-black text-[#15803d] font-price block">R$27,00</strong>
                  </div>
                </div>

                <ul className="space-y-2.5 text-[15px] font-poppins font-normal text-black">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Mais de 100 Projetos Profissionais de Bretes para Gado</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Plantas Baixas Otimizadas e Projetos Estruturais</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Memorial Descritivo e Lista Completa de Materiais</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Acesso Digital e Vitalício</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Garantia de 14 dias</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Atualizações Mensais</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>Suporte Prioritário</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>🎁 BÔNUS 1: Planilha de Custos da Construção</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>🎁 BÔNUS 2: Guia Completo de Materiais para Construção</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"></path>
                    </svg>
                    <span>🎁 BÔNUS 3: Checklist Completo da Construção</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-center border-t border-amber-100">
                <button
                  type="button"
                  onClick={() => onSelectPlan('Plano Completo')}
                  className="w-full py-4 px-6 rounded-lg bg-[#ea880f] hover:bg-[#d87c0a] text-white font-cta text-base uppercase shadow-md shadow-amber-600/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-block text-center"
                >
                  QUERO O COMPLETO
                </button>
              </div>

            </article>
          </div>

        </div>

      </div>
    </section>
  );
};
