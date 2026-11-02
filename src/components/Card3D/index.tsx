import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

interface Card3DProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  projectHref?: string;
  backCardTitle: string;
  backCardDescription: string;
}

export default function Card3D({
  imgSrc,
  imgAlt,
  projectHref,
  backCardTitle,
  backCardDescription,
}: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article className="relative h-80 w-full max-w-80 [perspective:1000px]">
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-white shadow-lg [backface-visibility:hidden]">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            aria-label={`Ver detalhes de ${backCardTitle}`}
            className="absolute right-3 bottom-3 rounded-md bg-[#06072a]/90 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-300 hover:text-[#06072a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Detalhes
          </button>
        </div>

        <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-[#6dd4fd] to-[#2800b3] p-6 text-white shadow-xl [backface-visibility:hidden] dark:from-white dark:to-[#2800b3]">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <h3 className="text-xl font-bold">{backCardTitle}</h3>
            <p className="mt-4 text-sm leading-6">{backCardDescription}</p>
            {projectHref ? (
              <a
                href={projectHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-md bg-white px-4 py-2 text-sm font-bold text-[#2800b3] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Abrir projeto
              </a>
            ) : (
              <p className="mt-5 text-sm font-bold text-cyan-100">
                Projeto em construção
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsFlipped(false)}
            className="mt-4 self-start rounded-md border border-white/60 px-3 py-1.5 text-sm transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Voltar
          </button>
        </div>
      </div>
    </article>
  );
}
