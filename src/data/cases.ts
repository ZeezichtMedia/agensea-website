// Eén bron van waarheid voor alle cases. Geconsumeerd door zowel Cases.astro
// (carousel grid) als CasePopup.astro (modal detail). Was eerder gedupliceerd
// in beide componenten.
//
// `description` bevat trusted, ontwikkelaar-geschreven HTML — geen user input.
// Deze wordt via innerHTML in de modal gerenderd.

export type CaseCategory = "marketing" | "website" | "software";

export interface CaseEntry {
  id: string;
  title: string;
  /** Korte tag onder de card en in modal-header */
  tag: string;
  /** Filter-categorie voor het carousel */
  category: CaseCategory;
  /** Pad naar de portfolio-afbeelding (in /public) */
  image: string;
  /** Optionele alt-tekst; default = `${tag} — ${title}` */
  imageAlt?: string;
  /** Volledige HTML-beschrijving die in de modal verschijnt */
  description: string;
  /** Optionele externe link naar live website */
  link?: string;
}

const quoteIcon = `<svg class="w-4 h-4 mt-0.5 shrink-0 text-indigo/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/></svg>`;

function quote(body: string, author: string, variant: "soft" | "indigo" = "indigo"): string {
  const wrapClass = variant === "soft"
    ? "p-4 rounded-xl border bg-warm-grey/30 border-warm-grey/50 mb-6"
    : "p-4 rounded-xl border bg-indigo/5 border-indigo/10 mb-6";
  const textClass = variant === "soft"
    ? "text-sm leading-relaxed text-text-secondary italic"
    : "text-sm leading-relaxed text-dark";
  return `
    <div class="${wrapClass}">
      <div class="flex items-start gap-3">
        ${quoteIcon}
        <div>
          <p class="${textClass}">${body}</p>
          <span class="block mt-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary/60">${author}</span>
        </div>
      </div>
    </div>
  `;
}

function block(heading: string, body: string): string {
  return `<h4 class="font-bold text-dark mb-2">${heading}</h4><p class="mb-6">${body}</p>`;
}

export const cases: CaseEntry[] = [
  {
    id: "arieke",
    title: "Arieke van Liere",
    tag: "LinkedIn Campagne",
    category: "marketing",
    image: "/portfolio/arieke-van-liere.png",
    description:
      quote(
        `"ZeeZicht heeft voor mij een LinkedIn-campagne ingericht die boven verwachting goed heeft gepresteerd. Ze dachten proactief mee en kwamen zelf met het slimme voorstel om de campagne via mijn persoonlijke account te laten lopen – een aanpak die duidelijk zijn vruchten heeft afgeworpen. De campagne leverde niet alleen veel nieuwe leads op, maar ook concrete boekingen voor mijn bedrijf. Wat ZeeZicht voor mij onderscheidt, is hun flexibiliteit, ervaring en kennis van de nieuwste mogelijkheden. Daarnaast is het gewoon heel prettig samenwerken. Ik kan ZeeZicht dan ook van harte aanbevelen."`,
        "Arieke van Liere",
        "soft"
      ) +
      block(
        "Vraagstuk",
        "Arieke wilde haar nieuwe showreel krachtig onder de aandacht brengen bij een specifieke, zakelijke doelgroep via LinkedIn, met als hoofddoel het genereren van maximale engagement en concrete aanvragen voor haar rol als dagvoorzitter."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We ontwikkelden een gerichte, data-gedreven LinkedIn-strategie. Van het scherpstellen van de doelgroep tot de daadwerkelijke uitrol, planning en optimalisatie van de campagne we begeleidden het volledige traject van A tot Z."
      ),
  },
  {
    id: "adrz",
    title: "Adrz",
    tag: "Imago Campagne",
    category: "marketing",
    image: "/portfolio/adrz.png",
    description:
      quote(
        "Agensea heeft onze campagne digitaal precies bij de juiste doelgroep weten te brengen. Prettige samenwerking, snelle schakels en duidelijke rapportages.",
        "Adrz"
      ) +
      block(
        "Vraagstuk",
        "Adrz had sterke nieuwe imagocontent gecreëerd en zocht een strategische partner om deze visuele verhalen lokaal (binnen heel Zeeland) zo krachtig en efficiënt mogelijk digitaal te verspreiden."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "De imagocampagne is volledig door Adrz zelf opgezet, inclusief de creatieve uitwerking en de inzet op fysieke kanalen zoals billboards en bioscoop. Wij verzorgden de digitale verspreiding via gerichte Meta-advertenties (Facebook/Instagram) en YouTube (Google Ads), zodat de campagne precies de juiste Zeeuwen bereikte."
      ),
  },
  {
    id: "kaap",
    title: "Innovatiepunt KAAP",
    tag: "Awareness Campagne",
    category: "marketing",
    image: "/portfolio/innovatiepunt-kaap.png",
    description:
      block(
        "Vraagstuk",
        "Innovatiepunt KAAP bevond zich in een 'early stage' en had als primaire behoefte om krachtige naamsbekendheid op te bouwen. Het doel was om de juiste regionale ondernemers en doelgroepen bekend te maken met het merk, ze naar de website te leiden en ze een tastbaar beeld te geven van wat er binnen KAAP eigenlijk allemaal gebeurt en mogelijk is."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We hebben een strategische awareness- en considerationcampagne ontwikkeld en uitgerold via Meta en LinkedIn. Door doelbewuste targeting en inspirerende, authentieke content hebben we het abstracte begrip 'innovatie' tastbaar en aantrekkelijk gemaakt voor de Zeeuwse ondernemer."
      ) +
      `<h4 class="font-bold text-dark mb-6">Resultaat</h4><p class="mb-6">Een sterke lancering van het merk KAAP. Meer ondernemers in de regio weten inmiddels beter de weg te vinden naar het innovatiepunt en zien sneller de potentie van het netwerk.</p>`,
  },
  {
    id: "rd",
    title: "Bouwgroep R&D",
    tag: "Website",
    category: "website",
    image: "/portfolio/bouwgroep-rd.png",
    description:
      quote(
        "Ik ben heel erg blij met het eindresultaat. Het hele traject verliep soepel en professioneel, van het eerste gesprek tot de oplevering. De website sluit nu perfect aan bij wie we zijn als bedrijf.",
        "Mischa, Bouwgroep R&D"
      ) +
      block(
        "Vraagstuk",
        "De toenmalige website van Bouwgroep R&D sloot qua uitstraling niet meer aan bij hun professionaliteit en actuele aanbod. Ze zochten een online visueel visitekaartje dat makkelijk navigeert en commercieel klopt."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We ontwierpen en bouwden een compleet nieuwe, strategisch doordachte website. De nadruk lag op logische UX (User Experience) en een fris, modern design dat hun unieke kwaliteiten direct vertaalt naar de bezoeker."
      ),
  },
  {
    id: "boogaard",
    title: "Minicamping Boogaard",
    tag: "Website",
    category: "website",
    image: "/portfolio/minicamping-boogaard.webp",
    link: "https://www.minicamping-boogaard.nl/nl",
    description:
      quote(
        "De drone beelden maken echt het verschil. Gasten zien meteen wat voor prachtige plek we hebben. En we worden nu veel beter gevonden in Google!",
        "Minicamping Boogaard"
      ) +
      block(
        "Vraagstuk",
        "Minicamping Boogaard had een verouderde website en was voor boekingen grotendeels afhankelijk van externe platforms. Dit betekende hoge commissies en weinig controle. Ze wilden onafhankelijkheid, meer directe inkomsten en een uitstraling die de prachtige locatie weerspiegelt."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "Door strategische inzet van dronebeelden en een conversiegerichte, sfeervolle website lieten we de camping echt spreken. Het nieuwe platform geeft gasten direct het vakantiegevoel en maakt soepel online boeken zonder tussenkomst van dure bemiddelaars mogelijk."
      ),
  },
  {
    id: "assieraden",
    title: "Assieraden Specialist",
    tag: "Website",
    category: "website",
    image: "/portfolio/assieraden-specialist.webp",
    link: "https://www.assieradenspecialist.nl/",
    description:
      quote(
        "Onze klanten waarderen de rustige uitstraling en het gemak waarmee ze een persoonlijk sieraad kunnen samenstellen. De site straalt precies uit wat we willen: zorg en kwaliteit.",
        "Assieraden Specialist"
      ) +
      block(
        "Vraagstuk",
        "Het ontwerpen en ontwikkelen van een platform voor een zeer emotioneel product waarbij vertrouwen, ingetogenheid, respect en personalisatie centraal staan in de online klantervaring."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We kozen bewust voor een 'soft commerce' benadering: verfijnde begeleiding en puur advies, zonder harde sales-triggers. Dit vertaalde zich in een strak, rustgevend design dat tegelijkertijd e-commerce functioneel is."
      ),
  },
  {
    id: "bb",
    title: "B&B Voorste Eng",
    tag: "Website",
    category: "website",
    image: "/portfolio/bb-voorste-eng.png",
    link: "https://www.boerderijvoorste-eng.nl/nl",
    description:
      block(
        "Vraagstuk",
        "B&B Voorste Eng was voor hun reserveringen volledig afhankelijk van dure, externe boekingsplatforms en miste nog de regie en uitstraling van een volwaardige eigen website."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We hebben de fundamenten gelegd voor hun online eigenwaarde: een heldere en sfeervolle maatwerk website. Hierdoor verlaagden we direct de drempel voor potentiële gasten om informatie te vinden en zonder tussenpartij actie te ondernemen."
      ),
  },
  {
    id: "contentportal",
    title: "Content Portal",
    tag: "Software op maat",
    category: "software",
    image: "/portfolio/content-portal.png",
    description:
      quote(
        "Eindelijk geen losse mailtjes en appjes meer over content. Alles staat op één plek, het scheelt ons echt uren per week.",
        "Content Portal gebruiker"
      ) +
      block(
        "Vraagstuk",
        "Organisaties die op meerdere kanalen communiceren (social media, website, nieuwsberichten) lopen vast op losse mailtjes, appjes en vergeten verzoeken. Er was behoefte aan één centrale plek waar teamleden snel en zonder drempels content kunnen aanleveren."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We hebben een complete SaaS-applicatie gebouwd waarmee teams in drie klikken content kunnen indienen voor social media, nieuwsartikelen of websitewijzigingen. Inclusief spraak-naar-tekst, bestanduploads, een overzichtelijk dashboard en volledige branding-aanpassing per organisatie."
      ),
  },
  {
    id: "offertegenerator",
    title: "Offerte Generator",
    tag: "Software op maat",
    category: "software",
    image: "/portfolio/offerte-generator.png",
    description:
      quote(
        "Wat voorheen een uur kostte, doen we nu in vijf minuten. De offertes zien er professioneler uit dan ooit en we maken geen fouten meer met prijzen.",
        "Offerte Generator gebruiker"
      ) +
      block(
        "Vraagstuk",
        "Het handmatig opstellen van offertes kost veel tijd, is foutgevoelig en levert vaak inconsistente documenten op. Medewerkers kopieerden oude offertes en pasten ze aan, met het risico op verkeerde prijzen of verouderde voorwaarden."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We bouwden een stapsgewijze offerte-tool waarmee medewerkers in een paar klikken een professionele offerte samenstellen. Klantgegevens, diensten en voorwaarden worden automatisch ingeladen. Het resultaat is een op maat gemaakte PDF die direct verstuurd kan worden."
      ),
  },
  {
    id: "aikennisbank",
    title: "AI Kennisbank",
    tag: "Software op maat",
    category: "software",
    image: "/portfolio/ai-kennisbank.png",
    description:
      quote(
        "Onze medewerkers vinden nu in seconden antwoord op vragen waar ze voorheen tien minuten naar moesten zoeken in mappen en documenten.",
        "AI Kennisbank gebruiker"
      ) +
      block(
        "Vraagstuk",
        "Bedrijfskennis zit vaak verspreid over documenten, handleidingen en de hoofden van medewerkers. Nieuwe collega's moeten eindeloos zoeken en vragen stellen. Bestaande medewerkers worden steeds onderbroken met dezelfde vragen."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We ontwikkelden een AI-chatbot die getraind is op alle interne documenten, handleidingen en procedures van de organisatie. Medewerkers stellen gewoon een vraag in normaal Nederlands en krijgen direct het juiste antwoord, inclusief een verwijzing naar het brondocument."
      ),
  },
  {
    id: "dashboardtool",
    title: "Dashboard & Rapportage",
    tag: "Software op maat",
    category: "software",
    image: "/portfolio/dashboard-tool.png",
    description:
      quote(
        "Eindelijk alle cijfers op één plek. We hoeven niet meer drie verschillende tools te openen om te weten hoe we ervoor staan.",
        "Dashboard gebruiker"
      ) +
      block(
        "Vraagstuk",
        "Bedrijfsdata zit verspreid over verschillende tools: Google Analytics, het CRM, de boekhouding en spreadsheets. Om een compleet beeld te krijgen moet je meerdere systemen openen en zelf de cijfers combineren."
      ) +
      block(
        "Wat Agensea heeft gedaan",
        "We bouwden een centraal dashboard dat automatisch data ophaalt uit alle relevante bronnen. Omzet, leads, websiteverkeer en conversies staan overzichtelijk bij elkaar. Met realtime updates en een activiteitenfeed mis je nooit meer een belangrijk moment."
      ),
  },
];

export const caseCategories = [
  { id: "all", label: "Alles" },
  { id: "website", label: "Websites" },
  { id: "marketing", label: "Marketing" },
  { id: "software", label: "Software" },
] as const;

/** Map voor snelle id-lookup vanuit modal-script */
export const casesById: Record<string, CaseEntry> = Object.fromEntries(
  cases.map((c) => [c.id, c])
);
