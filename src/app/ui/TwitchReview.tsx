'use client';

import { useState, useEffect, useCallback } from 'react';

interface TwitchVideo {
  id: number;
  videoId: string;
  title: string;
  category: string;
}

const videos: TwitchVideo[] = [
  { id: 1, videoId: '2816590445', title: '🍅 Pomodoro en vivo: sesión de código', category: 'Pomodoro' },
];

export default function TwitchReview() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [parent, setParent] = useState<string>('');

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    setParent(window.location.hostname);
  }, []);

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
          Pomodoros en Twitch
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-md mx-auto">
          Sesiones de código en vivo transmitidas por Twitch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveId(v.videoId)}
            className="group text-left rounded-2xl overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(145,71,255,0.35)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
            }}
          >
            {/* Preview */}
            <div
              className="relative w-full aspect-video overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(145,71,255,0.25), rgba(15,15,20,0.9))' }}
            >
              <svg className="w-10 h-10 text-purple-300/70 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2 2 7v14h6v3l3-3h4l6-6V2H4Zm17 11-4 4h-4l-3 3v-3H6V4h15v9Z" />
                <path d="M14 7h2v6h-2zM9 7h2v6H9z" />
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                >
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
                    color: 'rgba(190,150,255,0.9)',
                    background: 'rgba(145,71,255,0.1)',
                    border: '1px solid rgba(145,71,255,0.25)',
                  }}
                >
                  {v.category}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-200 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                {v.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">Twitch</p>
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
              {parent && (
                <iframe
                  src={`https://player.twitch.tv/?video=${activeId}&parent=${parent}&autoplay=true`}
                  allowFullScreen
                  className="w-full h-full"
                  title="Twitch video"
                />
              )}
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
