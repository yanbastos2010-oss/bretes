import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-10 text-center shadow-sm border border-emerald-800/10 space-y-4 relative">
          
          {/* Top Green Shield Badge Icon */}
          <div className="w-14 h-14 bg-[#1f6330] rounded-full flex items-center justify-center text-white mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>

          {/* Guarantee Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black tracking-tight">
            Garantia Incondicional de 14 Dias
          </h2>

          {/* Guarantee Description */}
          <p className="text-xs sm:text-sm md:text-base text-black max-w-2xl mx-auto font-desc font-normal leading-relaxed">
            Se durante esse período você entender que os projetos não atenderam às suas expectativas, basta solicitar o reembolso e devolveremos 100% do valor pago, sem burocracia.
          </p>

        </div>
      </div>
    </section>
  );
};
