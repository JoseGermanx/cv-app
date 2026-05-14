'use client';

import { useState, useEffect, useCallback } from 'react';

interface Video {
  id: number;
  videoId: string;
  title: string;
  channel: string;
  category: string;
}

const videos: Video[] = [
  { id: 1,  videoId: 'yykGfNJHBPc', title: '🚀 Aprendiendo React Router como un Framework Parte 1', channel: 'React', category: 'Frontend' },
  { id: 2,  videoId: 'SMIul7Aolnk', title: '🚀 Aprendiendo React Router como un Framework Parte 2', channel: 'React', category: 'Frontend' },
  { id: 3,  videoId: 'UVUhZUx-OtE', title: '🚀 Aprendiendo React Router como un Framework Parte 3', channel: 'React', category: 'Frontend' },
];

const categoryAccent: Record<string, string> = {
  Automatización: 'rgba(251,191,36,0.8)',
  IA:             'rgba(167,139,250,0.8)',
  DevOps:         'rgba(52,211,153,0.8)',
  Backend:        'rgba(34,211,238,0.8)',
  Frontend:       'rgba(96,165,250,0.8)',
};

export default function YoutubeReview() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (activeId) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [activeId, close]);

  useEffect(() => {
    document.body.style.overflow = activeId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeId]);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight gradient-text inline-block">
          Revisando Herramientas
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-md mx-auto">
          Videos sobre las herramientas que estoy explorando.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveId(v.videoId)}
            className="group text-left rounded-2xl overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(96,165,250,0.25)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
            }}
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'rgba(0,0,0,0.45)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                  style={{
                    color: categoryAccent[v.category] ?? 'rgba(148,163,184,0.8)',
                    background: (categoryAccent[v.category] ?? 'rgba(148,163,184,0.8)').replace('0.8', '0.1'),
                    border: `1px solid ${(categoryAccent[v.category] ?? 'rgba(148,163,184,0.8)').replace('0.8', '0.25')}`,
                  }}
                >
                  {v.category}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-200 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                {v.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">{v.channel}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(7,9,15,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={close}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title="YouTube video"
              />
            </div>
            <button
              onClick={close}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150"
              style={{ background: 'rgba(15,15,20,0.85)', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.25)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(15,15,20,0.85)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
              }}
              aria-label="Cerrar"
            >
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
