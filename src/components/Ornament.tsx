/**
 * Elegant ornamental dividers — used between sections instead of leaf blobs.
 * Inspired by classical Italian/Art Nouveau line-work.
 */

type Variant = 'diamond' | 'fleur' | 'olive';

export function Ornament({ variant = 'diamond' }: { variant?: Variant }) {
  return (
    <div className="ornament" aria-hidden="true">
      <span className="line" />
      <span className="mark">{renderMark(variant)}</span>
      <span className="line" />
    </div>
  );
}

function renderMark(variant: Variant) {
  switch (variant) {
    case 'fleur':
      return (
        <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
          <path
            d="M18 2c-2 4-4 6-8 7 4 1 6 3 8 7 2-4 4-6 8-7-4-1-6-3-8-7z"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <circle cx="18" cy="9" r="1.2" fill="currentColor" />
        </svg>
      );
    case 'olive':
      return (
        <svg width="44" height="18" viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="0.9">
          <path d="M4 9c4-3 8-3 12 0" fill="none" />
          <ellipse cx="6" cy="8" rx="2" ry="1" transform="rotate(-30 6 8)" fill="currentColor" fillOpacity="0.25" />
          <ellipse cx="10" cy="6.5" rx="2" ry="1" transform="rotate(-15 10 6.5)" fill="currentColor" fillOpacity="0.25" />
          <ellipse cx="14" cy="6" rx="2" ry="1" transform="rotate(0 14 6)" fill="currentColor" fillOpacity="0.25" />
          <circle cx="22" cy="9" r="1.6" fill="currentColor" />
          <path d="M40 9c-4-3-8-3-12 0" fill="none" />
          <ellipse cx="38" cy="8" rx="2" ry="1" transform="rotate(30 38 8)" fill="currentColor" fillOpacity="0.25" />
          <ellipse cx="34" cy="6.5" rx="2" ry="1" transform="rotate(15 34 6.5)" fill="currentColor" fillOpacity="0.25" />
          <ellipse cx="30" cy="6" rx="2" ry="1" transform="rotate(0 30 6)" fill="currentColor" fillOpacity="0.25" />
        </svg>
      );
    case 'diamond':
    default:
      return (
        <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
          <path d="M14 1 L21 7 L14 13 L7 7 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
          <circle cx="3" cy="7" r="1.2" fill="currentColor" />
          <circle cx="25" cy="7" r="1.2" fill="currentColor" />
        </svg>
      );
  }
}
