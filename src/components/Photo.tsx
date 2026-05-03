import { useState } from 'react';
import { asset } from '../lib/asset';

type Props = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
};

export function Photo({ src, alt, label, className }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const showImg = src && !error;
  // Resolve relative public-folder paths against Vite's BASE_URL.
  // Pass-through for absolute (http) URLs.
  const resolved = src && !/^https?:\/\//.test(src) ? asset(src) : src;
  return (
    <div className={`photo${loaded && !error ? ' has-image' : ''}${className ? ' ' + className : ''}`}>
      {showImg && (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      <span className="label">{label}</span>
    </div>
  );
}
