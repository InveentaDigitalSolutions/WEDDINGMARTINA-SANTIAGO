import { ReactNode } from 'react';

export type IconName = 'plane' | 'hotel' | 'church' | 'leaf' | 'pin' | 'map' | 'train';

const PATHS: Record<IconName, ReactNode> = {
  // Paper plane — used for airport / travel
  plane: (
    <>
      <path d="M21.5 2.5 L2 11 L10 14 L13 22 L21.5 2.5 Z" />
      <path d="M10 14 L21.5 2.5" />
    </>
  ),
  // Three-story building with windows — hotel
  hotel: (
    <>
      <path d="M5 22 V 5 a1 1 0 0 1 1 -1 H 18 a1 1 0 0 1 1 1 V 22" />
      <path d="M3 22 H 21" />
      <path d="M9 9 H 10" />
      <path d="M14 9 H 15" />
      <path d="M9 13 H 10" />
      <path d="M14 13 H 15" />
      <path d="M11 22 V 17 H 13 V 22" />
    </>
  ),
  // Cross + classic church silhouette
  church: (
    <>
      <path d="M12 2 V 8" />
      <path d="M9.5 4.5 H 14.5" />
      <path d="M4 22 V 13 L 12 8 L 20 13 V 22" />
      <path d="M3 22 H 21" />
      <path d="M10 22 V 16 a2 2 0 0 1 4 0 V 22" />
    </>
  ),
  // Olive sprig — used for resort / nature
  leaf: (
    <>
      <path d="M4 21 C 6 14, 12 7, 21 4" />
      <path d="M7 17 C 9 17, 11 15, 12 13" />
      <path d="M11 12 C 13 12, 15 10, 16 8" />
      <path d="M15 7 C 17 7, 19 5, 20 4" />
    </>
  ),
  // Map pin — used for location links
  pin: (
    <>
      <path d="M12 22 C 12 22, 5 14, 5 9 a 7 7 0 0 1 14 0 c 0 5 -7 13 -7 13 Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  // Map — alternative for travel sections
  map: (
    <>
      <path d="M3 6 L 9 4 L 15 6 L 21 4 V 18 L 15 20 L 9 18 L 3 20 Z" />
      <path d="M9 4 V 18" />
      <path d="M15 6 V 20" />
    </>
  ),
  // Simple train silhouette (carriage with wheels + rails)
  train: (
    <>
      <rect x="5" y="4" width="14" height="13" rx="2" />
      <line x1="5" y1="11" x2="19" y2="11" />
      <circle cx="9" cy="14" r="0.6" fill="currentColor" />
      <circle cx="15" cy="14" r="0.6" fill="currentColor" />
      <line x1="8" y1="17" x2="6" y2="20" />
      <line x1="16" y1="17" x2="18" y2="20" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </>
  ),
};

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 18, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
