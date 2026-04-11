// Centrale lijst van Agensea-diensten. Geconsumeerd door Services.astro
// (en voorheen ook hardcoded in Hero.astro segments).

export interface Service {
  num: string;
  title: string;
  desc: string;
  href: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Websites op maat",
    desc: "Websites die vertrouwen wekken, klanten overtuigen en klaar zijn voor groei.",
    href: "/diensten/websites",
  },
  {
    num: "02",
    title: "Online Marketing",
    desc: "Strategische campagnes op de juiste kanalen, voor de juiste doelgroep. Datagedreven en altijd transparant.",
    href: "/diensten/marketing",
  },
  {
    num: "03",
    title: "Software op maat",
    desc: "Wij ontwerpen praktische applicaties en AI-gedreven tools die je wekelijks uren aan tijd besparen.",
    href: "/diensten/software",
  },
];

// Korte capability-tags voor de Marquee-balk.
export const capabilities = [
  "Websites",
  "AI Oplossingen",
  "Software op maat",
  "Online Marketing",
  "Branding",
  "Strategie",
  "Webshops",
  "Automatisering",
];
