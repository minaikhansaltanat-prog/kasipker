'use client';
import { useRef, useState } from 'react';

interface Props {
  src: string;
  name: string;
  role: string;
  fallbackDuration: string;
}

const BARS = [4, 7, 5, 11, 9, 6, 14, 8, 5, 12, 7, 13, 5, 10, 8, 12, 4, 9, 11, 5, 8, 14, 6, 10, 7];

function fmt(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export default function AudioPlayer({ src, name, role, fallbackDuration }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const el = audioRef.current;
    if (!el || !src) return;
    el.paused ? el.play() : el.pause();
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audioRef.current;
    if (!el || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    el.currentTime = pct * duration;
  };

  const progress = duration > 0 ? currentTime / duration : 0;
  const timeLabel = duration > 0 ? `${fmt(currentTime)} / ${fmt(duration)}` : fallbackDuration;

  return (
    <div className="card overflow-hidden">
      <div className="mb-5 rounded-2xl bg-brand-green-light p-4">
        {/* Controls row */}
        <div className="mb-3 flex items-center gap-3">
          {/* Play / Pause button */}
          <button
            onClick={toggle}
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white shadow-green transition-colors ${
              src
                ? 'bg-brand-green hover:bg-brand-green-dark cursor-pointer'
                : 'bg-brand-green/40 cursor-not-allowed'
            }`}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Waveform bars */}
          <div className="flex flex-1 items-center gap-[3px] h-10 overflow-hidden">
            {BARS.map((h, j) => (
              <div
                key={j}
                className={`w-1 rounded-full flex-shrink-0 ${
                  isPlaying ? 'audio-bar-playing' : ''
                } ${src ? 'bg-brand-green/70' : 'bg-brand-green/25'}`}
                style={{
                  height: `${h * 2.6}px`,
                  animationDelay: `${((j * 0.07) % 0.75).toFixed(2)}s`,
                  animationDuration: `${(0.55 + (j % 6) * 0.07).toFixed(2)}s`,
                }}
              />
            ))}
          </div>

          {/* Time label */}
          <span className="text-xs font-bold text-brand-green-dark flex-shrink-0 tabular-nums min-w-[52px] text-right">
            {timeLabel}
          </span>
        </div>

        {/* Progress bar — clickable */}
        <div
          className={`relative h-1.5 rounded-full bg-brand-green/20 ${src ? 'cursor-pointer' : ''}`}
          onClick={handleSeek}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-brand-green"
            style={{ width: `${progress * 100}%` }}
          />
          {src && progress > 0 && (
            <div
              className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-brand-green border-2 border-white shadow"
              style={{ left: `calc(${progress * 100}% - 6px)` }}
            />
          )}
        </div>

        {src && (
          <audio
            ref={audioRef}
            src={src}
            preload="none"
            className="hidden"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => { setIsPlaying(false); setCurrentTime(0); }}
            onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
          />
        )}
      </div>

      {/* Person info */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark font-bold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-extrabold text-brand-dark">{name}</p>
          <p className="text-xs text-brand-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}
