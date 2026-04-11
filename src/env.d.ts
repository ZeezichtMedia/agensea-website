/// <reference types="astro/client" />

// Lenis smooth-scroll instance wordt door Layout.astro op window gehangen.
// Hier maken we hem typed beschikbaar voor alle component-scripts.
interface LenisInstance {
  destroy: () => void;
  raf: (time: number) => void;
  stop: () => void;
  start: () => void;
}

declare global {
  interface Window {
    lenis?: LenisInstance | null;
  }
  // eslint-disable-next-line no-var
  var Lenis: { new (): LenisInstance } | undefined;
}

export {};
