// Eén bron van waarheid voor het team. Gedeeld tussen TeamPopup.astro
// (modal detail) en — in de toekomst — andere componenten zoals Hero.

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** HTML body voor de bio (trusted, ontwikkelaar-geschreven). */
  bio: string;
  /** Pad naar portretfoto in /public */
  image: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: "jorik",
    name: "Jorik Schut",
    role: "Online marketing specialist",
    bio: `
      <p>Als online marketing specialist ben ik verantwoordelijk voor het opzetten, beheren en optimaliseren van de advertentiecampagnes.</p>
      <p>Verder houd ik mij bezig met het direct concreet maken van de ideeën van de klant. Ik breng concepten tot leven door het bouwen van vlotte demo's voor websites en SaaS-oplossingen. Daarna gaan ze door naar Jorian, die er een technisch totaalplaatje van maakt.</p>
    `,
    image: "/team/jorik-new.webp",
    linkedin: "https://www.linkedin.com/in/jorik-schut-317138233/?skipRedirect=true",
  },
  {
    id: "jorian",
    name: "Jorian Wientjens",
    role: "Developer / Technical specialist",
    bio: `
      <p>Als techneut van de drie ben ik de drijvende kracht achter de doorontwikkeling van onze websites en software op maat.</p>
      <p>Bovendien vertaal ik wensen naar kraakheldere technische voorstellen en zet de cruciale spreekwoordelijke puntjes op de 'i': van naadloos DNS-, mail- en hostingbeheer tot het in de puntjes opschonen van code.</p>
    `,
    image: "/team/jorian.webp",
    linkedin: "https://www.linkedin.com/in/jorian-wientjens/",
  },
  {
    id: "ruben",
    name: "Ruben Boogaard",
    role: "Account Manager",
    bio: `
      <p>Als Account Manager ben ik het vertrouwde centrale aanspreekpunt. Ik focus me op klantcontact, actieve acquisitie, relatiebeheer en het proactief signaleren van nieuwe kansen of verbetermogelijkheden bij bestaande relaties.</p>
      <p>Verder ben ik via netwerkevents vaak het allereerste contact met nieuwe potentiële klanten.</p>
    `,
    image: "/team/ruben.webp",
    linkedin: "https://www.linkedin.com/in/ruben-boogaard-521b75193/",
  },
  {
    id: "aline",
    name: "Aline Bijleveld",
    role: "Communicatie Strategist",
    bio: `
      <p>Ik help bedrijven bij het vinden van hun unieke stem en vertaal complexe visies naar heldere, effectieve communicatiestrategieën. Bij Agensea zorg ik voor de strategische diepgang.</p>
      <p>Met jarenlange ervaring in merkpositionering en copywriting zorg ik dat elk project een ijzersterk fundament heeft.</p>
    `,
    image: "/team/aline.png",
    linkedin: "https://www.linkedin.com/in/aline-bijleveld/",
  },
  {
    id: "phaedra",
    name: "Phaedra Tenu",
    role: "Communicatie specialist",
    bio: `
      <p>Van pakkende copy tot complete social media campagnes; ik zorg dat de boodschap niet alleen aankomt, maar ook blijft hangen. Ik werk nauw samen met het team om elk project tot leven te wekken.</p>
      <p>Mijn passie ligt bij het vertellen van verhalen die impact maken en mensen in beweging zetten.</p>
    `,
    image: "/team/phaedra.png",
    linkedin: "https://www.linkedin.com/in/phaedra-tenu/",
  },
];

export const teamById: Record<string, TeamMember> = Object.fromEntries(
  team.map((m) => [m.id, m])
);
