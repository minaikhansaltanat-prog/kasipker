export default function imageLoader({ src }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (src.startsWith('/')) return `${base}${src}`;
  return src;
}
