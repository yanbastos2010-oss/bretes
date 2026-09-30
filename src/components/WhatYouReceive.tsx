import React from 'react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    id: 'b1',
    iconName: 'b1',
    title: 'Mais de 100 Projetos Profissionais de Bretes para Gado',
    description: 'Projetos completos para diferentes tamanhos de criação e propriedades, ideais para sítios, chácaras, fazendas e propriedades rurais.'
  },
  {
    id: 'b2',
    iconName: 'b2',
    title: 'Plantas Baixas Otimizadas',
    description: 'Layouts planejados para facilitar o manejo dos animais, aproveitar melhor o espaço disponível e organizar toda a estrutura do brete.'
  },
  {
    id: 'b3',
    iconName: 'b3',
    title: 'Projetos Estruturais',
    description: 'Projetos completos com medidas detalhadas da estrutura, corredores, portões, áreas de contenção e demais partes necessárias para a construção.'
  },
  {
    id: 'b4',
    iconName: 'b4',
    title: 'Memorial Descritivo',
    description: 'Informações e especificações técnicas para facilitar a execução do projeto e reduzir erros durante a construção.'
  },
  {
    id: 'b5',
    iconName: 'b5',
    title: 'Lista Completa de Materiais',
    description: 'Veja os principais materiais necessários para cada projeto e planeje melhor sua construção antes de começar.'
  },
  {
    id: 'b6',
    iconName: 'b6',
    title: 'Projetos para Diferentes Necessidades',
    description: 'Modelos de diferentes tamanhos e configurações para criação de gado de corte, gado leiteiro, pequenas propriedades e estruturas de manejo maiores.'
  }
];

export const WhatYouReceive: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'b1':
        return (
          <svg
            className="icon-receber w-6 h-6 text-emerald-700"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z"></path>
            <path d="M8 4v16M4 9h16M13 9v11M13 15h7"></path>
          </svg>
        );
      case 'b2':
        return (
          <svg
            className="icon-receber w-6 h-6 text-emerald-700"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 5h18M5 5v14h14V5"></path>
            <path d="M5 12h14M12 5v14"></path>
          </svg>
        );
      case 'b3':
        return (
          <svg
            className="icon-receber w-6 h-6 text-emerald-700"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11 12 4l9 7"></path>
            <path d="M5 10v10h14V10"></path>
            <path d="M9 20v-6h6v6"></path>
          </svg>
        );
      case 'b4':
        return (
          <svg
            className="icon-receber w-6 h-6 text-emerald-700"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 3h7l4 4v14H7z"></path>
            <path d="M14 3v5h5M10 12h6M10 16h6"></path>
          </svg>
        );
      case 'b5':
        return (
          <svg
            className="icon-receber w-6 h-6 text-emerald-700"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3h12v18H6z"></path>
            <path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"></path>
          </svg>
        );
      case 'b6':
        return (
          <svg
            className="icon-receber w-6 h-6 text-emerald-700"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3 3 8l9 5 9-5-9-5Z"></path>
            <path d="M3 13l9 5 9-5"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            O QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-amber-900/5 flex flex-col justify-start hover:shadow-md transition-shadow"
            >
              {/* Green Icon Circle Badge */}
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-4">
                {getIcon(benefit.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-heading text-black leading-snug">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-poppins text-zinc-600 leading-relaxed mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
