import type { ReactNode } from "react";

const RED = "#E5322D";

type SketchProps = {
  className?: string;
};

const base = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Sketch({
  viewBox,
  className,
  children,
}: SketchProps & { viewBox: string; children: ReactNode }) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" focusable="false" {...base}>
      {children}
    </svg>
  );
}

export function CarSketch({ className }: SketchProps) {
  return (
    <Sketch viewBox="0 0 160 100" className={className}>
      <path d="M6 89c22-1 44 1 66-.2 20-.9 40 .8 61 .2 14-.4 21-1 27 .6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M39 64.4c7.2-.8 14.6 4.2 15.4 11.8.8 7.4-4.6 14.6-12.2 15.2-7.6.6-14.8-4.8-15.2-12.4-.4-7.4 5-13.8 12-14.6z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M39.6 71.2c3.1-.3 6.1 1.9 6.4 5.2.3 3.2-2.1 6.2-5.4 6.3-3.2.1-6-2.4-6.1-5.7-.1-3.2 2.2-5.5 5.1-5.8z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M117.2 64.8c7.4-.5 14.8 4.8 15.2 12.4.4 7.4-5.2 14.4-12.6 14.6-7.6.2-14.6-5.4-14.6-12.8 0-7.2 5.2-13.6 12-14.2z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M117.6 71.4c3.2-.2 6.2 2.2 6.2 5.5 0 3.3-2.6 6.1-5.8 6-3.2-.1-5.9-2.8-5.8-6 .1-3.1 2.3-5.3 5.4-5.5z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M54.8 86.6c12.4 1 28.6.6 47.2.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M21.5 86.2c-4.2-2.2-6.6-6.4-7.2-12.2-1-9.2 2.4-16.2 11.4-19.2 4-1.4 9.2-2.2 13.6-1.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M39.3 53c2.4-11.6 9.2-22 22.8-25.2 3.6-.8 10.4-1.4 14.4-.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M76.2 26.6c1.6-5.2 8.8-6.2 11.8-1.4.8 1.2 1.2 2.6 1.4 4" stroke={RED} strokeWidth="1.75" />
      <path d="M88.8 27.8c10.2 1.2 19.4 6.4 26.2 15.8 3.8 5.2 8.2 8 14.8 9.8 5.4 1.5 11.2 2.2 13.8 8.2 1.6 3.6 1.6 8.4.4 12.6-1 3.2-3.2 5.6-7 6.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M28.8 57.2c16-2 34.4-2.8 52.2-1.8 16.6.9 33.4 2.4 50.8 6.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M54.2 53.8c4.2-10.4 10.8-17.6 23.2-19.6 3.8-.6 8.2-.4 10.4 0 7.6 2.2 13.6 8.8 16.8 16.4-9.2-1.4-17.2-2.2-27-1.8-8.2.3-15.2 1.2-23.4 5z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M78.2 34.6c.4 6.8.8 13.2 1.4 19" stroke="currentColor" strokeWidth="1.75" />
    </Sketch>
  );
}

export function PhoneSketch({ className }: SketchProps) {
  return (
    <Sketch viewBox="0 0 130 155" className={className}>
      <path d="M26 11.2h39.2c3.6 0 6.5 2.8 6.5 6.3v36.8c0 3.6-2.8 6.5-6.4 6.5H26.3c-3.6 0-6.5-2.8-6.5-6.4V17.6c0-3.6 2.8-6.4 6.2-6.4z" stroke={RED} strokeWidth="1.75" />
      <path d="M45.8 18.6c8.6-.6 16.2 5.6 16.8 14.2.6 8.6-5.6 16.6-14.2 17.2-8.6.6-16.2-5.8-16.6-14.4-.4-8.6 5.8-16.4 14-17z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M46.2 50.2c.2 5.6 0 7.8.2 9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M28 67c8.8-6.6 16.6-8.4 27.6-6.2 7.2 1.4 12.6 4.8 16.8 8.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M31.6 65.6c-1.8 14-2.4 26.4 1 38.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M57.4 67.2c1.8 12.6 1.6 25.2.4 36.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M32.8 104.2c8.4 2.2 16.8 2.4 25 0" stroke="currentColor" strokeWidth="1.75" />
      <path d="M30.4 69c-6.4 9.6-9.6 18.4-8.8 27 1.6 2.2 4.2 3.2 6.6 2.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M58 70c8.2 1.2 15.4-3.2 19.6-10.6 2.6-4.6 3.6-10 3-15.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M79.4 15.2c3.4-1.4 8-.6 9.8 3.4 2.8 6.2 3.6 16.4 2 25.4-1.2 5.2-5.2 8-10.2 6.8-4.6-1.1-7-5.2-7.8-10.2-1.6-8.4-1.2-17.6 6.2-25.4z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M84.6 19c1.3-.2 2.4.6 2.6 1.7" stroke={RED} strokeWidth="1.75" />
      <path d="M36.4 104.8c-2 15.6-3 26-1.4 36.2 3 .6 5.6 0 6.8-2.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M54.6 105.2c2.6 15 4.6 25.6 7 35.6 3 .2 6-.8 7.2-2.8" stroke="currentColor" strokeWidth="1.75" />
    </Sketch>
  );
}

export function MapSketch({ className }: SketchProps) {
  return (
    <Sketch viewBox="0 0 160 120" className={className}>
      <path d="M14 11.2c43.5-1.2 87.2.8 132.4 0 4.6.4 6.8 3.4 6.6 7.8l-1.2 82.8c-.2 4.6-3.2 7.6-7.6 7.4L13.6 108c-4.4.2-7.2-2.8-7.2-7.2L7.8 18.4c-.2-4.4 2.4-7.4 6.2-7.2z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8.2 40.2c44-1.6 86 1.2 143.6-.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8.4 70.6c46 .8 90-1.4 143.2.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M50.2 11c-1.2 32 .6 64.4-1 97.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M102.4 11.2c.8 31.6-1 64.2.6 97" stroke="currentColor" strokeWidth="1.75" />
      <path d="M18.5 66.8h9.2c1.3 0 2.2.9 2.2 2.1v3.4c0 1.2-1 2.1-2.3 2.1h-9c-1.2 0-2.1-1-2.1-2.2v-3.3c0-1.2.9-2.1 2-2.1z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M33.2 66.6h9c1.3.1 2.3.9 2.2 2.2v3.2c.1 1.2-.9 2.2-2.1 2.2h-9.1c-1.2 0-2.2-1-2.1-2.2v-3.3c0-1.2 1-2.1 2.1-2.1z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M47.8 67h8.6c1.3 0 2.2 1 2.1 2.2v3.1c.1 1.3-.8 2.3-2.1 2.2H47.9c-1.3.1-2.3-.9-2.2-2.2v-3.2c0-1.1 1-2.1 2.1-2.1z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M29.2 87.6c2.6-.1 4.7 2 4.7 4.5s-2.1 4.6-4.6 4.6c-2.6 0-4.7-2-4.7-4.6 0-2.5 2-4.5 4.6-4.5z" stroke={RED} strokeWidth="1.75" />
      <path d="M29.2 87.6c.4-16.2 1.2-28.6 1.6-47.8 22.6-2.2 52.6-1.6 74.8 0 10.4.8 24.8 6.8 32.8 16.4 2.6 3.2 4.4 6.6 5.2 9.4" stroke={RED} strokeWidth="2.1" />
      <path d="M144.2 50.2c4.8.2 8.4 4 8.4 8.6 0 6.8-8.4 16.8-8.4 16.8s-8.6-10-8.6-16.8c0-4.7 3.6-8.6 8.6-8.6z" stroke={RED} strokeWidth="1.75" />
      <path d="M144.2 56.2c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3z" stroke={RED} strokeWidth="1.75" />
    </Sketch>
  );
}

export function ForkliftSketch({ className }: SketchProps) {
  return (
    <Sketch viewBox="0 0 200 130" className={className}>
      <path d="M6 116c34-1 68 1 102-.2 30-.9 58-1.2 86 .8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M33.2 95.2c6.8-.5 13 4.6 13.4 11.4.4 6.8-4.8 13-11.6 13.2-6.8.2-13-5.2-13.2-12-.2-6.8 5-12.2 11.4-12.6z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M33.6 101.2c3.1-.2 5.8 2.3 5.8 5.4 0 3.2-2.5 5.8-5.7 5.7-3.1-.1-5.6-2.6-5.6-5.6 0-3.1 2.4-5.4 5.5-5.5z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M79.6 101.2c4.8-.3 9 3.4 9.2 8.2.2 4.8-3.5 8.9-8.3 9-4.8.1-8.9-3.7-8.9-8.5 0-4.7 3.4-8.4 8-8.7z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16.8 93.5c.6-24 2.4-36.8 18.2-40.6 8.6-2 24.2-1.4 33.2 2 6.6 2.5 10 9.2 10.8 18.6.6 8.6.4 20 .4 26.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20.8 54.2c.4-11.2.8-16 2.8-18 15.4-1.6 30.2-1.8 43.4.6 2.4 2 2.8 6.6 2.8 17.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M23.2 54.6c11.2-1.2 23.6-.8 38.4.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M82.2 18.5c.2 30 .5 56 .3 88" stroke="currentColor" strokeWidth="1.75" />
      <path d="M89.4 20.2c.3 28 .2 54.2.4 86" stroke="currentColor" strokeWidth="1.75" />
      <path d="M81.4 20.4h9.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M81.6 46.8h9.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M89.6 88.4c18.4-.8 33.6-.4 49.8.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M89.8 96.2c17.8.2 33.2-.2 49.2.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M158.2 40.5c5.4-.4 10.2 3.6 10.6 9 .4 5.4-3.6 10.2-9 10.5-5.4.3-10.2-3.8-10.4-9.2-.2-5.4 3.8-9.9 8.8-10.3z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M158.4 60.2v8.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M146.5 70.2c7.6-3.8 16.2-4.2 24.8-1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M146.8 70.4c-2.6 8.2-3.4 13.2-2.4 18.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M171 70.8c3 8 4.2 12.8 3.2 18" stroke="currentColor" strokeWidth="1.75" />
      <path d="M158.5 69.6v26.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M158.5 96c-3.2 8.6-5.2 14.4-5.8 19.6 2.4.4 4.8 0 5.8-1.6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M158.5 96c3.6 8.2 6 14 7.2 19.6 2.4.2 4.8-.4 5.6-1.8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M138.5 33.5h40.6c3.6 0 6.5 2.8 6.5 6.4v75.2c0 3.6-2.8 6.4-6.4 6.4h-40.8c-3.6 0-6.5-2.8-6.5-6.4V40c0-3.6 2.8-6.5 6.6-6.5z" stroke={RED} strokeWidth="1.75" />
    </Sketch>
  );
}
