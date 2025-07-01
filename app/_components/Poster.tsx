import { useGeoPattern } from 'react-geopattern';

export function Poster({ title, color }: { title: string; color: string }) {
  const pattern = useGeoPattern(title, { color });

  return (
    <div
      style={{
        backgroundImage: pattern.toDataUrl(),
        backgroundSize: '75%',
      }}
      className={`aspect-square rounded-xl bg-red-500`}
    />
  );
}
