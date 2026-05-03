/**
 * Resolves a public-folder asset path against Vite's base URL.
 * In dev, BASE_URL is "/" so this returns "/photos/foo.jpg".
 * In production builds for GitHub Pages, BASE_URL is "/WEDDINGMARTINA-SANTIAGO/"
 * so this returns "/WEDDINGMARTINA-SANTIAGO/photos/foo.jpg".
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
