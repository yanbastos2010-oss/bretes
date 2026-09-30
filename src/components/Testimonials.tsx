import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Marcos Vinícius',
    quote: 'Os projetos são muito bem organizados. Consegui escolher um modelo que se encaixava bem no espaço que eu tinha na propriedade.',
    rating: 5
  },
  {
    id: 't2',
    author: 'Antônio Carlos',
    quote: 'Me ajudou bastante a entender as medidas e planejar os materiais antes de começar a construção.',
    rating: 5
  },
  {
    id: 't3',
    author: 'Sebastião Rocha',
    quote: 'Material muito completo. Tem modelos diferentes e as informações são fáceis de entender.',
    rating: 5
  },
  {
    id: 't4',
    author: 'Edilson Souza',
    quote: 'Usei um dos projetos como referência e consegui adaptar a estrutura para a realidade da minha propriedade.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            O QUE DIZEM DO MATERIAL
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-amber-900/5 flex flex-col justify-between space-y-4"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-black italic font-desc font-normal leading-relaxed">
                "{t.quote}"
              </p>

              {/* Author */}
              <p className="text-xs sm:text-sm font-extrabold text-black pt-2">
                — {t.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
