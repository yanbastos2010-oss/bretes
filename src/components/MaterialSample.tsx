import React, { useState, useRef } from 'react';

const sampleImages = [
  {
    src: "https://i.ibb.co/5ghw1Fwz/100-Projetos-Profissionais-de-Viveiros-para-Aves-2.webp",
    alt: "Prévia 1 dos projetos profissionais de viveiros para aves"
  },
  {
    src: "https://i.ibb.co/sdkBrxhG/100-Projetos-Profissionais-de-Viveiros-para-Aves-4.webp",
    alt: "Prévia 2 dos projetos profissionais de viveiros para aves"
  },
  {
    src: "https://i.ibb.co/tPhs2BSY/100-Projetos-Profissionais-de-Viveiros-para-Aves.webp",
    alt: "Prévia 3 dos projetos profissionais de viveiros para aves"
  },
  {
    src: "https://i.ibb.co/5h3XmWCT/100-Projetos-Profissionais-de-Viveiros-para-Aves-1.webp",
    alt: "Prévia 4 dos projetos profissionais de viveiros para aves"
  },
  {
    src: "https://i.ibb.co/xrk0J2W/100-Projetos-Profissionais-de-Viveiros-para-Aves-3.webp",
    alt: "Prévia 5 dos projetos profissionais de viveiros para aves"
  }
];

export const MaterialSample: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 16 : 300;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < sampleImages.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToImage = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = container.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-block">
      <h2>VEJA UMA PEQUENA AMOSTRA DO MATERIAL</h2>
      <div className="mt-7">
        <div className="carousel-shell">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
          >
            {sampleImages.map((img, idx) => (
              <div key={idx} className="sample-slide">
                <img
                  src={img.src}
                  alt={img.alt}
                  width="1414"
                  height="2000"
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "auto" : "low"}
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
            {sampleImages.map((_, idx) => (
              <span
                key={idx}
                onClick={() => scrollToImage(idx)}
                className={`dot ${activeIndex === idx ? 'dot-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
