import { useState } from 'react';

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
  return (
    <div className={`photo${loaded && !error ? ' has-image' : ''}${className ? ' ' + className : ''}`}>
      {showImg && (
        <img
          src={src}
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
