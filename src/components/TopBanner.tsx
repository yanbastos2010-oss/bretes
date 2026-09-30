import React, { useMemo } from 'react';

export const TopBanner: React.FC = () => {
  const formattedDate = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }, []);

  return (
    <div className="w-full bg-[#cc2b2b] text-white py-2 px-2 text-center font-bold text-[10px] min-[360px]:text-xs sm:text-sm tracking-wide shadow-inner overflow-hidden whitespace-nowrap">
      <span className="whitespace-nowrap">OFERTA ESPECIAL VÁLIDA SOMENTE HOJE — {formattedDate}</span>
    </div>
  );
};
