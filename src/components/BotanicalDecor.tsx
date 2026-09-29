import React from 'react';

/**
 * Delicados traços botânicos em SVG (estilo aquarela botânica e gravura minimalista)
 * para enriquecer as composições editoriais sem sobrecarregar a página.
 */

export function OliveBranch({ className = "w-24 h-24 text-[#46553D]/30" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Caule principal curvilíneo */}
      <path d="M 50 115 C 48 85, 52 50, 45 10" />
      
      {/* Folhas ao longo do caule */}
      <path d="M 48 95 C 32 90, 26 80, 32 72 C 38 68, 48 82, 48 95 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M 50 85 C 66 80, 72 70, 66 62 C 60 58, 50 72, 50 85 Z" fill="currentColor" fillOpacity="0.12" />
      
      <path d="M 49 68 C 30 62, 25 50, 33 42 C 40 38, 49 54, 49 68 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M 48 55 C 66 48, 70 36, 62 28 C 55 24, 47 42, 48 55 Z" fill="currentColor" fillOpacity="0.12" />
      
      <path d="M 47 38 C 34 30, 32 20, 39 14 C 45 10, 47 25, 47 38 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M 46 22 C 58 14, 58 6, 52 2 C 47 2, 45 12, 46 22 Z" fill="currentColor" fillOpacity="0.12" />
      
      {/* Fruto de oliva discreto */}
      <circle cx="38" cy="74" r="3" fill="currentColor" fillOpacity="0.25" stroke="none" />
      <circle cx="58" cy="50" r="3.2" fill="currentColor" fillOpacity="0.25" stroke="none" />
    </svg>
  );
}

export function BotanicalDivider({ className = "my-8" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-[#46553D]/40 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#46553D]/30" />
      <svg className="w-5 h-5 text-[#46553D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8 6 6 12 12 22C18 12 16 6 12 2Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M12 5V19" />
        <path d="M8 10C10 11 12 12 12 12" />
        <path d="M16 10C14 11 12 12 12 12" />
        <path d="M8 15C10 16 12 17 12 17" />
        <path d="M16 15C14 16 12 17 12 17" />
      </svg>
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#46553D]/30" />
    </div>
  );
}
