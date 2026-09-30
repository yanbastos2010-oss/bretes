import React, { useState } from 'react';
import { FaqItem } from '../types';
import { Plus, X } from 'lucide-react';

const faqItems: FaqItem[] = [
  {
    id: 'f1',
    question: 'Como recebo o material?',
    answer: 'O acesso é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento.'
  },
  {
    id: 'f2',
    question: 'O acesso é vitalício?',
    answer: 'Sim! O acesso é vitalício. Você pode baixar todos os arquivos para o seu computador, celular ou tablet e consultar sempre que precisar.'
  },
  {
    id: 'f3',
    question: 'Posso baixar os arquivos?',
    answer: 'Sim, todos os projetos e bônus estão em formato PDF e planilhas prontas para download e impressão.'
  },
  {
    id: 'f4',
    question: 'Os projetos servem para diferentes tamanhos de criação e propriedades?',
    answer: 'Sim! O material conta com modelos variados para gado de corte, gado leiteiro, sítios, chácaras, pequenas propriedades e fazendas com estruturas maiores de manejo.'
  },
  {
    id: 'f5',
    question: 'Posso adaptar os projetos para a minha propriedade?',
    answer: 'Com certeza. Os projetos servem como guia completo com todas as medidas da estrutura, e você pode adaptar conforme o espaço disponível e a necessidade do seu manejo.'
  },
  {
    id: 'f6',
    question: 'Os projetos possuem medidas detalhadas?',
    answer: 'Sim, todos os projetos acompanham plantas baixas, medidas detalhadas de corredores, portões, mourões, áreas de contenção, além de memorial descritivo e lista de materiais.'
  },
  {
    id: 'f7',
    question: 'Posso acessar pelo celular?',
    answer: 'Sim, os arquivos podem ser visualizados em qualquer dispositivo (celular, tablet, computador) ou impressos para levar direto para a obra.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqItems.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-black text-sm sm:text-base hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="shrink-0 text-slate-700">
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 text-xs sm:text-sm text-black font-desc font-normal leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
