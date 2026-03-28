import { c as createComponent } from './astro-component_CDyplbCz.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, c as renderComponent } from './entrypoint_CIqzDYY3.mjs';
import { r as renderScript, $ as $$Layout } from './Layout_DivUCpau.mjs';
import { $ as $$Navbar, a as $$Footer } from './Footer_Czu3eQ7X.mjs';
import { $ as $$TeamPopup } from './TeamPopup_BeTQhiCe.mjs';
import 'clsx';
import { $ as $$Cases, a as $$CasePopup } from './CasePopup_D_fLIJyy.mjs';
import { $ as $$CTA } from './CTA_DWtl5Y8m.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const segments = [
    {
      id: "website",
      label: "een professionele website of webshop",
      subtitle: "Je zoekt een website die er strak uitziet én doet wat hij moet doen: overtuigen. Wij bouwen snelle, betrouwbare websites en webshops op maat.",
      solutions: [
        { title: "Maatwerk Websites", desc: "Snel, veilig en precies zoals jij het wilt.", href: "/diensten/websites" },
        { title: "UX & Webdesign", desc: "Een ontwerp dat je bezoekers begrijpen.", href: "/diensten/websites" }
      ]
    },
    {
      id: "klanten",
      label: "meer klanten en online groei",
      subtitle: "Je wilt beter gevonden worden en meer aanvragen krijgen. Met slimme advertenties en strakke campagnes zorgen we dat jouw ideale klant je direct weet te vinden.",
      solutions: [
        { title: "Online Campagnes", desc: "Direct zichtbaar voor mensen die zoeken.", href: "/diensten/marketing" },
        { title: "Strategie & Branding", desc: "Je bedrijf ijzersterk in de markt positioneren.", href: "/diensten/marketing" }
      ]
    },
    {
      id: "software",
      label: "tijd besparen met software",
      subtitle: "Zonde van de tijd om alles nog handmatig te doen. Wij ontwerpen praktische applicaties en tools die je wekelijks uren aan tijd besparen.",
      solutions: [
        { title: "Maatwerk Software", desc: "Pakketten die zich aanpassen aan jouw manier van werken.", href: "/diensten/software" },
        { title: "AI & Automatisering", desc: "Laat techniek data scannen en het zware werk doen.", href: "/diensten/software" }
      ]
    },
    {
      id: "kennismaken",
      label: "meer over jullie weten",
      subtitle: "Leuk! Wij zijn Agensea. Een nuchter Zeeuws bedrijf met passie voor techniek en daadkracht. Geen vage marketingtaal, maar heldere oplossingen die echt iets opleveren.",
      solutions: [
        { title: "Neem direct contact op", desc: "Vrijblijvend sparren over jouw ideeën.", href: "/over-ons" },
        { title: "Bekijk onze portfolio", desc: "Ontdek wat we voor andere ondernemers bereikten.", href: "/#cases" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center pt-24 lg:pt-40 pb-20 lg:pb-32 overflow-hidden" data-astro-cid-bbe6dxrz> <!-- Gradient Mesh Background --> <div class="mesh-blob w-[600px] h-[600px] bg-indigo/10 top-[-10%] left-[-10%]" style="animation-delay: 0s;" data-astro-cid-bbe6dxrz></div> <div class="mesh-blob w-[500px] h-[500px] bg-violet/10 bottom-[-10%] right-[-5%]" style="animation-delay: -5s;" data-astro-cid-bbe6dxrz></div> <div class="relative z-10 w-full max-w-7xl mx-auto px-6" data-astro-cid-bbe6dxrz> <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center" data-astro-cid-bbe6dxrz> <!-- Left Column: Headline & UVP --> <div class="lg:col-span-7 text-left relative" data-astro-cid-bbe6dxrz> <h1 class="font-display font-bold text-4xl sm:text-6xl md:text-[4rem] lg:text-[4.5rem] leading-[1.1] md:leading-[1] tracking-tight text-dark reveal" data-astro-cid-bbe6dxrz>
Jouw Agensea in<br class="md:hidden" data-astro-cid-bbe6dxrz> <span class="text-indigo" data-astro-cid-bbe6dxrz>websites, software<br class="md:hidden" data-astro-cid-bbe6dxrz> & marketing.</span> </h1> <p class="mt-8 lg:mt-10 text-lg md:text-xl text-text-secondary max-w-xl reveal leading-relaxed" style="transition-delay: 200ms;" data-astro-cid-bbe6dxrz>
Welkom bij <strong data-astro-cid-bbe6dxrz>Agensea</strong>. Wij zijn dé strategische partner voor ambitieuze organisaties. We combineren maatwerk development, online marketing en AI tot oplossingen die echt impact maken.
</p> <!-- Trust Badge & Team Flavor --> <div class="mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 reveal" style="transition-delay: 400ms;" data-astro-cid-bbe6dxrz> <!-- Avatars --> <div class="flex items-center gap-4" data-astro-cid-bbe6dxrz> <div class="flex -space-x-3" data-astro-cid-bbe6dxrz> <div data-case="adrz" class="w-10 h-10 rounded-full border-2 border-white bg-white bg-contain bg-center bg-no-repeat overflow-hidden cursor-pointer hover:scale-110 hover:z-10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo/20 interactive" style="background-image: url('/logos-hero/Logo_Adrz_RGB.png');" title="Bekijk ADRZ Case" data-astro-cid-bbe6dxrz></div> <div data-case="hz" class="w-10 h-10 rounded-full border-2 border-white bg-white bg-no-repeat overflow-hidden cursor-pointer hover:scale-110 hover:z-10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo/20 interactive" style="background-image: url('/logos-hero/hz-logo (1).jpg'); background-size: cover; background-position: center;" title="Bekijk HZ Case" data-astro-cid-bbe6dxrz></div> <div data-case="kaap" class="w-10 h-10 rounded-full border-2 border-white bg-white bg-contain bg-center bg-no-repeat overflow-hidden cursor-pointer hover:scale-110 hover:z-10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo/20 interactive" style="background-image: url('/logos-hero/Kaap_RGB_Logo_rond_fc.svg');" title="Bekijk De Kaap Case" data-astro-cid-bbe6dxrz></div> </div> <p class="text-[10px] font-bold uppercase tracking-widest text-text-secondary/60 italic" data-astro-cid-bbe6dxrz>Vertrouwd door</p> </div> <!-- Divider --> <div class="hidden sm:block w-[1px] h-8 bg-dark/10" data-astro-cid-bbe6dxrz></div> <!-- Team Badge (Hidden on mobile) --> <div class="hidden sm:flex items-center gap-4 group" data-astro-cid-bbe6dxrz> <div class="flex -space-x-4" data-astro-cid-bbe6dxrz> <div class="w-12 h-12 rounded-full border-2 border-indigo p-0.5 overflow-hidden bg-white transition-transform duration-500 hover:z-10 hover:scale-110 cursor-pointer team-trigger group/team" data-member="ruben" data-astro-cid-bbe6dxrz> <div class="w-full h-full rounded-full bg-cover bg-center transition-transform duration-500 group-hover/team:scale-110" style="background-image: url('/team/ruben.webp');" data-astro-cid-bbe6dxrz></div> </div> <div class="w-12 h-12 rounded-full border-2 border-indigo p-0.5 overflow-hidden bg-white transition-transform duration-500 hover:z-10 hover:scale-110 cursor-pointer team-trigger group/team" data-member="jorian" data-astro-cid-bbe6dxrz> <div class="w-full h-full rounded-full bg-cover bg-center transition-transform duration-500 group-hover/team:scale-110" style="background-image: url('/team/jorian.webp');" data-astro-cid-bbe6dxrz></div> </div> <div class="w-12 h-12 rounded-full border-2 border-indigo p-0.5 overflow-hidden bg-white transition-transform duration-500 hover:z-10 hover:scale-110 cursor-pointer team-trigger group/team" data-member="jorik" data-astro-cid-bbe6dxrz> <div class="w-full h-full rounded-full bg-cover bg-center transition-transform duration-500 group-hover/team:scale-110" style="background-image: url('/team/jorik.webp');" data-astro-cid-bbe6dxrz></div> </div> </div> <div class="flex flex-col justify-center" data-astro-cid-bbe6dxrz> <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo leading-tight" data-astro-cid-bbe6dxrz>Ons Team</span> </div> </div> </div> </div> <!-- Right Column: Interactive Dropdown --> <div class="lg:col-span-5 relative mt-6 lg:mt-0" data-astro-cid-bbe6dxrz> <div class="bg-white/50 backdrop-blur-[40px] border border-white p-5 sm:p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative z-20 reveal" style="transition-delay: 300ms;" data-astro-cid-bbe6dxrz> <div class="mb-8 md:mb-10" data-astro-cid-bbe6dxrz> <span class="block font-display font-medium text-2xl text-text-secondary mb-4" data-astro-cid-bbe6dxrz>Ik wil</span> <!-- Custom Dropdown --> <div class="relative w-full text-left" id="hero-dropdown-container" data-astro-cid-bbe6dxrz> <button id="hero-dropdown-btn" class="w-full flex items-center justify-between gap-4 font-display font-bold text-xl md:text-2xl text-indigo/60 hover:text-indigo leading-tight pb-3 border-b-2 border-indigo/20 hover:border-indigo transition-all interactive outline-none" data-astro-cid-bbe6dxrz> <span id="selected-label" class="break-words text-left flex-1 italic" data-astro-cid-bbe6dxrz>...kies je behoefte</span> <svg class="w-6 h-6 shrink-0 transition-transform duration-300" id="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz><path d="M6 9l6 6 6-6" data-astro-cid-bbe6dxrz></path></svg> </button> <div id="hero-dropdown-list" class="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-warm-grey/50 overflow-hidden opacity-0 pointer-events-none translate-y-4 transition-all duration-300 z-50" data-astro-cid-bbe6dxrz> ${segments.map((seg) => renderTemplate`<button class="segment-option w-full text-left px-5 md:px-6 py-3 md:py-4 hover:bg-cream-dark transition-colors border-b border-warm-grey/20 last:border-b-0 font-display text-lg md:text-xl font-medium text-dark flex items-center justify-between group"${addAttribute(seg.id, "data-id")} data-astro-cid-bbe6dxrz> ${seg.label} <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-bbe6dxrz><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-bbe6dxrz></path></svg> </button>`)} </div> </div> </div> <!-- Dynamic Results Area --> <div class="relative transition-[height] duration-500 ease-out-expo" id="content-wrapper" style="height: 220px;" data-astro-cid-bbe6dxrz> <!-- Empty State --> <div id="content-empty" class="absolute top-0 left-0 right-0 w-full flex flex-col items-center justify-center opacity-100 transition-opacity duration-300 py-10 h-[220px]" data-astro-cid-bbe6dxrz> <div class="text-center" data-astro-cid-bbe6dxrz> <div class="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 border border-warm-grey/50" data-astro-cid-bbe6dxrz> <svg class="w-8 h-8 text-indigo/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bbe6dxrz><path d="M15 15l5 5M10 18a8 8 0 100-16 8 8 0 000 16z" data-astro-cid-bbe6dxrz></path></svg> </div> <p class="text-text-secondary/40 text-xs tracking-widest uppercase font-medium" data-astro-cid-bbe6dxrz>Selecteer een ambitie</p> </div> </div> ${segments.map((seg) => renderTemplate`<div${addAttribute(`content-${seg.id}`, "id")} class="segment-content absolute top-0 left-0 right-0 w-full transition-all duration-500 ease-out-expo opacity-0 translate-y-8 pointer-events-none" data-astro-cid-bbe6dxrz> <div class="flex flex-col gap-6" data-astro-cid-bbe6dxrz> <p class="text-lg text-dark leading-snug font-medium" data-astro-cid-bbe6dxrz> ${seg.subtitle} </p> <div class="grid gap-2 sm:gap-3" data-astro-cid-bbe6dxrz> ${seg.solutions.map((sol) => renderTemplate`<a${addAttribute(sol.href, "href")} class="group flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/50 border border-warm-grey/30 hover:border-indigo hover:shadow-lg transition-all interactive" data-astro-cid-bbe6dxrz> <div data-astro-cid-bbe6dxrz> <h4 class="font-display font-bold text-dark text-sm sm:text-base" data-astro-cid-bbe6dxrz>${sol.title}</h4> <p class="text-[10px] sm:text-xs text-text-secondary mt-0.5" data-astro-cid-bbe6dxrz>${sol.desc}</p> </div> <div class="w-8 h-8 rounded-full bg-white flex shrink-0 items-center justify-center border border-warm-grey/50 group-hover:bg-indigo group-hover:border-indigo group-hover:text-white transition-colors" data-astro-cid-bbe6dxrz> <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-bbe6dxrz></path></svg> </div> </a>`)} </div> </div> </div>`)} </div> </div> <!-- Decorative Floating Element --> <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo/5 rounded-full blur-2xl z-10" data-astro-cid-bbe6dxrz></div> </div> </div> </div> </section> ${renderComponent($$result, "TeamPopup", $$TeamPopup, { "data-astro-cid-bbe6dxrz": true })}  ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/Hero.astro", void 0);

const $$LogoCarousel = createComponent(($$result, $$props, $$slots) => {
  const row1 = [
    { name: "Dockwize", src: "/Kopie van Unlocked  Logo Partner/Dockwize wit.svg" },
    { name: "Innovatiepunt KAAP", src: "/Kopie van Unlocked  Logo Partner/Innovatiepunt KAAP.svg" },
    { name: "ADRZ", src: "/Kopie van Unlocked  Logo Partner/Logo_Adrz_RGB.png" },
    { name: "HZ", src: "/Kopie van Unlocked  Logo Partner/HZ.svg" },
    { name: "Widea", src: "/Kopie van Unlocked  Logo Partner/Widea.svg" },
    { name: "Bouwgroep R&D", src: "/Kopie van Unlocked  Logo Partner/Bouwgroep R&D.svg" }
  ];
  const row2 = [
    { name: "Zeeland Podcasts", src: "/Kopie van Unlocked  Logo Partner/Zeeland podcasts.svg" },
    { name: "Buurtteams", src: "/Kopie van Unlocked  Logo Partner/Buurtteams.svg" },
    { name: "Arieke van Liere", src: "/Kopie van Unlocked  Logo Partner/Arieke van liere.svg" },
    { name: "Contemplas", src: "/Kopie van Unlocked  Logo Partner/Contemplas.svg" },
    { name: "Fractal", src: "/Kopie van Unlocked  Logo Partner/Fractal.svg" },
    { name: "MIM", src: "/Kopie van Unlocked  Logo Partner/MIM.svg" }
  ];
  const display1 = [...row1, ...row1, ...row1];
  const display2 = [...row2, ...row2, ...row2];
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full py-16 lg:py-24 overflow-hidden border-t border-white/5" data-astro-cid-lqivs3vl> <!-- Header --> <div class="max-w-7xl mx-auto px-6 lg:px-10 mb-12" data-astro-cid-lqivs3vl> <div class="flex items-center gap-4 reveal" data-astro-cid-lqivs3vl> <div class="w-1.5 h-1.5 rounded-full bg-indigo animate-pulse" data-astro-cid-lqivs3vl></div> <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40" data-astro-cid-lqivs3vl>Vertrouwd door ambitieuze merken</span> </div> </div> <!-- Row 1: Scrolls LEFT (larger, brighter — foreground) --> <div class="logo-track mb-6 relative" data-astro-cid-lqivs3vl> <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" data-astro-cid-lqivs3vl></div> <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" data-astro-cid-lqivs3vl></div> <div class="flex marquee-left items-center gap-8 md:gap-16 px-4 md:px-8 hover:[animation-play-state:paused]" data-astro-cid-lqivs3vl> ${display1.map((logo) => renderTemplate`<div class="flex-shrink-0 group cursor-pointer" data-astro-cid-lqivs3vl> <div class="relative px-4 md:px-8 py-5 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500" data-astro-cid-lqivs3vl> <img${addAttribute(logo.src, "src")}${addAttribute(logo.name, "alt")} class="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-30 group-hover:opacity-100 transition-all duration-500" loading="lazy" data-astro-cid-lqivs3vl> <!-- Tooltip --> <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/0 group-hover:text-white/60 uppercase tracking-widest whitespace-nowrap transition-all duration-300 group-hover:-bottom-7" data-astro-cid-lqivs3vl> ${logo.name} </span> </div> </div>`)} </div> </div> <!-- Row 2: Scrolls RIGHT (smaller, dimmer — background depth) --> <div class="logo-track relative" data-astro-cid-lqivs3vl> <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" data-astro-cid-lqivs3vl></div> <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" data-astro-cid-lqivs3vl></div> <div class="flex marquee-right items-center gap-10 md:gap-20 px-4 md:px-8 hover:[animation-play-state:paused]" data-astro-cid-lqivs3vl> ${display2.map((logo) => renderTemplate`<div class="flex-shrink-0 group cursor-pointer" data-astro-cid-lqivs3vl> <div class="relative px-3 md:px-6 py-4 rounded-xl" data-astro-cid-lqivs3vl> <img${addAttribute(logo.src, "src")}${addAttribute(logo.name, "alt")} class="h-7 md:h-9 w-auto object-contain brightness-0 invert opacity-15 group-hover:opacity-70 transition-all duration-500 scale-95 group-hover:scale-100" loading="lazy" data-astro-cid-lqivs3vl> </div> </div>`)} </div> </div> </div>`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/LogoCarousel.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="over-ons" class="relative pt-32 md:pt-48 pb-12 md:pb-16 bg-dark overflow-hidden"> <!-- Subtle background accent --> <div class="absolute top-0 right-0 w-1/2 h-full bg-indigo/5 blur-[120px] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10"> <div class="max-w-4xl"> <span class="inline-flex items-center gap-3 text-xs font-bold text-indigo uppercase tracking-[0.3em] mb-12 reveal"> <span class="w-12 h-[1px] bg-indigo/30"></span>
Ons Manifesto
</span> <h2 class="font-display text-[clamp(2rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-16 reveal">
Strategische oplossingen voor <span class="text-indigo italic underline underline-offset-8">ambitieuze</span> bedrijven.<br>
Geen loze beloftes, maar <span class="text-indigo">tastbaar resultaat.</span> </h2> <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"> <div class="reveal" style="transition-delay: 200ms;"> <p class="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-12">
Digitale groei vraagt om meer dan alleen een mooie website. Het vraagt om een doordachte strategie waarbij technologie en marketing elkaar versterken. Dat is de langetermijnvisie van <span class="text-white font-medium italic">Agensea</span>.
</p> <div class="reveal space-y-8" style="transition-delay: 400ms;"> <p class="text-lg text-white/50 leading-relaxed max-w-md">
Wij bouwen toekomstbestendige oplossingen. Van bedrijfsspecifieke software tot data-gedreven campagnes. Geen standaard templates, maar maatwerk dat aansluit op jouw ambities en processen.
</p> <div class="pt-4"> <a href="#diensten" class="inline-flex items-center gap-4 text-white group interactive"> <span class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-indigo group-hover:bg-indigo"> <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </span> <span class="text-xs font-bold uppercase tracking-widest group-hover:text-indigo transition-colors duration-500">Bekijk onze diensten</span> </a> </div> </div> </div> <!-- Team Visual (New) --> <div class="reveal relative" style="transition-delay: 600ms;"> <div class="relative group"> <div class="absolute -inset-4 bg-indigo/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div> <div class="aspect-[4/5] bg-dark-lighter rounded-[40px] overflow-hidden border border-white/10 relative z-10"> <img src="/Team foto dummy/naamloze map/Gemini_Generated_Image_e71luhe71luhe71l.png" alt="Agensea Team" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent"></div> <div class="absolute bottom-10 left-10"> <div class="flex items-center gap-3"> <div class="flex -space-x-2"> <div class="w-8 h-8 rounded-full border-2 border-white bg-cover" style="background-image: url('/team/ruben.webp')"></div> <div class="w-8 h-8 rounded-full border-2 border-white bg-cover" style="background-image: url('/team/jorian.webp')"></div> <div class="w-8 h-8 rounded-full border-2 border-white bg-cover" style="background-image: url('/team/jorik.webp')"></div> </div> <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Direct contact</span> </div> </div> </div> </div> </div> </div> </div> </div> <!-- Client Logo Carousel (v8.0) --> <div class="reveal mt-16 md:mt-24" style="transition-delay: 800ms;"> ${renderComponent($$result, "LogoCarousel", $$LogoCarousel, {})} </div> </section>`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/About.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      num: "01",
      title: "Maatwerk Websites",
      desc: "Websites die vertrouwen wekken, klanten overtuigen en klaar zijn voor groei.",
      href: "/diensten/websites"
    },
    {
      num: "02",
      title: "Online Marketing",
      desc: "Strategische campagnes op de juiste kanalen, voor de juiste doelgroep. Datagedreven en altijd transparant.",
      href: "/diensten/marketing"
    },
    {
      num: "03",
      title: "Maatwerk Software",
      desc: "Wij ontwerpen praktische applicaties en AI-gedreven tools die je wekelijks uren aan tijd besparen.",
      href: "/diensten/software"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="diensten" class="py-24 md:py-40 px-6 lg:px-10"> <div class="max-w-7xl mx-auto"> <!-- Header --> <div class="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"> <div> <span class="inline-flex items-center gap-2 text-xs font-medium text-text-secondary uppercase tracking-[0.2em] mb-4"> <span class="w-8 h-[1px] bg-indigo"></span>
Diensten
</span> <h2 class="font-display text-3xl md:text-5xl font-bold leading-tight">
Wat wij doen
</h2> </div> </div> <!-- Service Rows --> <div class="border-t border-warm-grey"> ${services.map((service, i) => renderTemplate`<a${addAttribute(service.href, "href")} class="reveal service-row group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 md:py-10 px-4 md:px-6 border-b border-warm-grey interactive"${addAttribute(`animation-delay: ${i * 0.1}s;`, "style")}> <span class="service-num font-display text-sm font-bold text-muted transition-colors w-12 shrink-0">${service.num}</span> <span class="font-display text-2xl md:text-3xl font-bold flex-1 transition-colors">${service.title}</span> <span class="text-text-secondary text-sm md:text-base max-w-sm transition-colors">${service.desc}</span> <span class="service-arrow shrink-0 hidden md:block"> <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg> </span> </a>`)} </div> </div> </section>`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/Services.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "CasePopup", $$CasePopup, {})} ` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/index.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
