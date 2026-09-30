import React from 'react';
import { BonusItem } from '../types';

const bonusList: BonusItem[] = [
  {
    id: 'bon1',
    number: 1,
    title: 'Planilha de Custos da Construção',
    imageUrl: '/bonus-1.png',
    description: 'Organize os principais gastos do seu brete antes de começar a obra e tenha maior controle sobre seu investimento.',
    originalPrice: 'De R$27',
    discountedPrice: 'GRÁTIS'
  },
  {
    id: 'bon2',
    number: 2,
    title: 'Guia Completo de Materiais para Construção',
    imageUrl: '/bonus-2.png',
    description: 'Veja quais materiais podem ser utilizados na construção de bretes resistentes, incluindo madeiras, ferragens, mourões, tubos, portões e outros componentes.',
    originalPrice: 'De R$37',
    discountedPrice: 'GRÁTIS'
  },
  {
    id: 'bon3',
    number: 3,
    title: 'Checklist Completo da Construção',
    imageUrl: '/bonus-3.png',
    description: 'Acompanhe as principais etapas da construção e confira os itens necessários antes, durante e depois da execução do seu brete.',
    originalPrice: 'De R$27',
    discountedPrice: 'GRÁTIS'
  }
];

export const ExclusiveBonuses: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f5ee] py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            BÔNUS EXCLUSIVOS
          </h2>
        </div>

        {/* 3x1 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto justify-items-center">
          {bonusList.map((bonus) => (
            <div
              key={bonus.id}
              className="w-full max-w-[320px] bg-white rounded-xl px-4 py-3 shadow-sm border border-amber-900/5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-1.5">
                {/* Bonus Image */}
                {bonus.imageUrl && (
                  <div className="w-full h-44 overflow-hidden flex items-center justify-center">
                    <img
                      src={bonus.imageUrl}
                      alt={bonus.title}
                      width="400"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Bonus Title */}
                <h3 className="text-sm sm:text-base font-heading text-black leading-snug">
                  {bonus.title}
                </h3>

                {/* Bonus Description */}
                <p className="text-xs text-black font-desc font-normal leading-snug">
                  {bonus.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="pt-2 mt-2 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold font-price">
                <span className="line-through text-red-600 font-bold font-price">
                  {bonus.originalPrice}
                </span>
                <span className="text-[#15803d] font-black uppercase font-price">
                  {bonus.discountedPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Summary Box */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#fbf8f1] to-[#f4eee2] rounded-2xl p-6 sm:p-8 text-center border border-amber-900/10 shadow-sm space-y-1">
          <p className="text-xs font-heading text-black uppercase tracking-widest">
            TOTAL EM BÔNUS
          </p>
          <p className="text-sm sm:text-base line-through text-red-600 font-bold font-price">
            De R$111
          </p>
          <p className="text-2xl sm:text-3xl font-black text-[#15803d] uppercase tracking-wide font-price">
            HOJE: GRÁTIS
          </p>
        </div>

      </div>
    </section>
  );
};
