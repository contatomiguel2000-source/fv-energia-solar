"use client";

import { useRef, useState } from "react";

export function MissionVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-ink">
      <video ref={ref} src={src} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
      <span className="absolute h-20 w-20 rounded-full border border-white/30 bg-black/25 backdrop-blur-[5px]" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
        className="relative z-[3] flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/30 text-sun backdrop-blur-[11px]"
      >
        {playing ? (
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M4 2.5v11l9.5-5.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
