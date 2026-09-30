import React from 'react';
import { X } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop overlay listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Compact Modal Card */}
      <div
        className="relative w-full max-w-sm bg-white rounded-2xl p-5 sm:p-6 shadow-2xl z-10 border-2 border-[#ea880f] text-center flex flex-col select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 font-bold w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition cursor-pointer"
          aria-label="Fechar"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <div>
          <span className="inline-block bg-amber-500 text-white font-poppins font-extrabold text-[11px] tracking-wider uppercase px-3 py-0.5 rounded-full mb-2">
            OFERTA ESPECIAL
          </span>
        </div>

        {/* Title */}
        <h2
          id="discount-title"
          className="text-xl sm:text-2xl font-poppins font-black text-black uppercase tracking-wide leading-tight mb-1.5"
        >
          ESPERE! QUE TAL UM DESCONTO?
        </h2>

        {/* Short Copy */}
        <p className="text-xs sm:text-sm font-poppins text-slate-600 leading-relaxed mb-3">
          Leve o <strong className="text-slate-900">Plano Completo + Todos os Bônus Exclusivos</strong> por um valor especial agora:
        </p>

        {/* Price Box */}
        <div className="flex flex-col items-center justify-center gap-0.5 mb-4 bg-emerald-50 py-3 px-4 rounded-xl border border-emerald-200">
          <span className="text-sm line-through text-red-600 font-poppins font-bold">
            De R$27,00
          </span>
          <strong className="text-3xl sm:text-4xl font-poppins font-black text-[#15803d] leading-none">
            R$19,90
          </strong>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-3 bg-[#ea880f] hover:bg-[#d87c0a] text-white font-poppins font-black text-sm sm:text-base tracking-tight uppercase rounded-xl shadow-md shadow-amber-600/25 transition transform hover:-translate-y-0.5 cursor-pointer leading-tight inline-block text-center"
          >
            QUERO O COMPLETO COM DESCONTO
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-600 font-poppins font-bold text-xs uppercase border border-slate-200 rounded-xl transition cursor-pointer inline-block text-center"
          >
            NÃO, QUERO FICAR COM O BÁSICO
          </button>
        </div>
      </div>
    </div>
  );
};
