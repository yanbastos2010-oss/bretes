import React, { useState, useRef } from 'react';

const sampleImages = [
  {
    src: "/01-modulo-1-bretes-simples-e-economicos.png",
    alt: "01 - Módulo 1: Bretes Simples e Econômicos"
  },
  {
    src: "/02-modulo-2-bretes-com-tronco-de-contencao.png",
    alt: "02 - Módulo 2: Bretes com Tronco de Contenção"
  },
  {
    src: "/03-modulo-3-vacinacao-e-manejo-sanitario.png",
    alt: "03 - Módulo 3: Vacinação e Manejo Sanitário"
  },
  {
    src: "/04-modulo-4-apartacao-e-embarque.png",
    alt: "04 - Módulo 4: Apartação e Embarque"
  },
  {
    src: "/05-modulo-5-bretes-completos-de-manejo.png",
    alt: "05 - Módulo 5: Bretes Completos de Manejo"
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
                  width="360"
                  height="640"
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "auto" : "low"}
                  decoding="async"
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
