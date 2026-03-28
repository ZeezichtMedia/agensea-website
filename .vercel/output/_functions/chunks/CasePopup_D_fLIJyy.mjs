import { c as createComponent } from './astro-component_CDyplbCz.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './entrypoint_CIqzDYY3.mjs';
import 'clsx';
import { r as renderScript } from './Layout_DivUCpau.mjs';

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cases;
  const { categoryFilter } = Astro2.props;
  const cases = [
    {
      id: "arieke",
      title: "Arieke van Liere",
      tag: "LinkedIn Campagne",
      category: "marketing",
      image: "/portfolio/arieke-van-liere.png"
    },
    {
      id: "adrz",
      title: "Adrz",
      tag: "Imago Campagne",
      category: "marketing",
      image: "/portfolio/adrz.png"
    },
    {
      id: "kaap",
      title: "Innovatiepunt KAAP",
      tag: "Awareness Campagne",
      category: "marketing",
      image: "/portfolio/innovatiepunt-kaap.png"
    },
    {
      id: "rd",
      title: "Bouwgroep R&D",
      tag: "Website",
      category: "website",
      image: "/portfolio/bouwgroep-rd.png"
    },
    {
      id: "boogaard",
      title: "Minicamping Boogaard",
      tag: "Website",
      category: "website",
      image: "/portfolio/minicamping-boogaard.webp"
    },
    {
      id: "assieraden",
      title: "Assieraden Specialist",
      tag: "Website",
      category: "website",
      image: "/portfolio/assieraden-specialist.webp"
    },
    {
      id: "bb",
      title: "B&B Voorste Eng",
      tag: "Website",
      category: "website",
      image: "/portfolio/bb-voorste-eng.png"
    }
  ];
  const categories = [
    { id: "all", label: "Alles" },
    { id: "website", label: "Websites" },
    { id: "marketing", label: "Marketing" },
    { id: "software", label: "Software" }
  ];
  const displayCases = categoryFilter ? cases.filter((c) => c.category === categoryFilter) : cases;
  return renderTemplate`${maybeRenderHead()}<section id="cases" class="pt-12 pb-16 md:pt-24 md:pb-24 px-6 lg:px-10 overflow-hidden" data-astro-cid-23yevxlj> <div class="max-w-7xl mx-auto" data-astro-cid-23yevxlj> <!-- Header --> <div class="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16" data-astro-cid-23yevxlj> <div class="max-w-xl" data-astro-cid-23yevxlj> <span class="inline-flex items-center gap-2 text-xs font-medium text-text-secondary uppercase tracking-[0.2em] mb-4" data-astro-cid-23yevxlj> <span class="w-8 h-[1px] bg-indigo" data-astro-cid-23yevxlj></span>
Portfolio
</span> <h2 class="font-display text-3xl md:text-5xl font-bold leading-tight" data-astro-cid-23yevxlj>
Recent werk
</h2> </div> <!-- Filters (Only show if no strict categoryFilter is applied) --> ${!categoryFilter && renderTemplate`<div class="flex flex-wrap gap-2 md:gap-4 p-1 bg-dark-lighter/30 rounded-full border border-white/5 w-fit" data-astro-cid-23yevxlj> ${categories.map((cat) => renderTemplate`<button${addAttribute(`filter-btn px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 interactive ${cat.id === "all" ? "active bg-white text-dark shadow-lg" : "text-text-secondary hover:bg-white hover:text-dark"}`, "class")}${addAttribute(cat.id, "data-filter")}${addAttribute(`Filter by ${cat.label}`, "aria-label")} data-astro-cid-23yevxlj> ${cat.label} </button>`)} </div>`} </div> </div> <!-- Horizontal Scroll Gallery --> <div class="relative group/gallery" data-astro-cid-23yevxlj> <!-- Nav Arrows --> <button id="cases-prev" class="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-warm-grey/30 items-center justify-center hover:bg-indigo hover:text-white hover:border-indigo transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 cursor-pointer" aria-label="Vorige" data-astro-cid-23yevxlj> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-23yevxlj><path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-23yevxlj></path></svg> </button> <button id="cases-next" class="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-warm-grey/30 items-center justify-center hover:bg-indigo hover:text-white hover:border-indigo transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 cursor-pointer" aria-label="Volgende" data-astro-cid-23yevxlj> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-23yevxlj><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-23yevxlj></path></svg> </button> <div id="cases-grid" class="flex gap-6 md:gap-8 px-6 lg:px-10 overflow-x-auto pb-8 scrollbar-hide scroll-smooth select-none" data-astro-cid-23yevxlj> ${displayCases.map((item, i) => renderTemplate`<div class="reveal case-card group block w-[280px] md:w-[380px] shrink-0 interactive"${addAttribute(item.category, "data-category")}${addAttribute(item.id, "data-id")}${addAttribute(`animation-delay: ${i * 0.1}s;`, "style")} data-astro-cid-23yevxlj> <!-- Image Card --> <div class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-dark cursor-pointer case-trigger" data-astro-cid-23yevxlj> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style="image-rendering: -webkit-optimize-contrast;" loading="lazy" data-astro-cid-23yevxlj> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" data-astro-cid-23yevxlj></div> <span class="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-lg text-[10px] font-bold text-white uppercase tracking-widest shadow-lg" data-astro-cid-23yevxlj> ${item.tag} </span> <!-- Expand hint --> <div class="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-23yevxlj> <svg class="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" data-astro-cid-23yevxlj><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" data-astro-cid-23yevxlj></path></svg> </div> </div> <!-- Title --> <h3 class="font-display text-lg md:text-xl font-bold group-hover:text-indigo transition-colors flex items-center justify-between cursor-pointer case-trigger" data-astro-cid-23yevxlj> ${item.title} <svg class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-23yevxlj><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-23yevxlj></path></svg> </h3> </div>`)} </div> <!-- Gradient Overlays --> <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10 opacity-0 md:opacity-100" data-astro-cid-23yevxlj></div> <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10 opacity-0 md:opacity-100" data-astro-cid-23yevxlj></div> </div> </section>  ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/Cases.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/Cases.astro", void 0);

const $$CasePopup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="case-modal" class="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-12 opacity-0 pointer-events-none transition-all duration-500"> <!-- Backdrop --> <div class="absolute inset-0 bg-dark/20 backdrop-blur-md" id="case-modal-close"></div> <!-- Modal Container --> <div class="relative bg-white rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl translate-y-8 transition-all duration-500 flex flex-col md:flex-row"> <!-- Left: Image/Visual --> <div class="w-full md:w-1/2 h-64 md:h-auto bg-warm-grey relative overflow-hidden"> <img id="case-image" src="" alt="" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent md:bg-gradient-to-r"></div> </div> <!-- Right: Content --> <div id="case-content-scroll" class="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto relative"> <button id="case-modal-close-btn" class="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream hover:bg-warm-grey flex items-center justify-center transition-colors interactive"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M18 6L6 18M6 6l12 12"></path> </svg> </button> <div class="mt-4"> <span id="case-category" class="text-xs font-bold uppercase tracking-widest text-indigo mb-4 block"></span> <h2 id="case-title" class="font-display text-3xl md:text-5xl font-bold leading-tight mb-6"></h2> <div id="case-description" class="text-text-secondary text-lg leading-relaxed space-y-4"></div> <div id="case-link-container" class="mt-10 hidden"> <a id="case-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 group text-white bg-dark px-6 py-3 rounded-full font-bold hover:bg-indigo transition-colors interactive">
Bekijk live website
<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> </div> </div> <!-- Scroll indicator --> <div id="case-scroll-hint" class="sticky bottom-0 left-0 right-0 flex justify-center py-3 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"> <div class="flex flex-col items-center gap-1 animate-bounce"> <svg class="w-5 h-5 text-indigo/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg> <span class="text-[10px] font-bold text-text-secondary/40 uppercase tracking-widest">Scroll</span> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/CasePopup.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/CasePopup.astro", void 0);

export { $$Cases as $, $$CasePopup as a };
