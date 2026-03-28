import { c as createComponent } from './astro-component_CDyplbCz.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, c as renderComponent, u as unescapeHTML, F as Fragment } from './entrypoint_CIqzDYY3.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DivUCpau.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_jqxRPmJl.mjs';
import { $ as $$Navbar, a as $$Footer } from './Footer_Czu3eQ7X.mjs';
import { $ as $$CTA } from './CTA_DWtl5Y8m.mjs';
import 'clsx';

const $$AuthorBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AuthorBox;
  const { name, bio, avatar, credentials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-3xl mt-12 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white"> <div class="flex items-start gap-5"> ${avatar && renderTemplate`<img${addAttribute(avatar, "src")}${addAttribute(name, "alt")} class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0" loading="lazy">`} <div class="min-w-0"> <p class="text-[10px] font-bold text-dark/40 uppercase tracking-[0.3em] mb-1">
Geschreven door
</p> <p class="text-lg font-display font-bold text-dark">${name}</p> ${bio && renderTemplate`<p class="text-sm text-dark/60 mt-1 leading-relaxed"> ${bio} </p>`} ${credentials && credentials.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-3"> ${credentials.map((cred) => renderTemplate`<span class="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo/5 text-indigo text-[11px] font-bold rounded-full"> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"> <path d="M20 6 9 17l-5-5"></path> </svg> ${cred} </span>`)} </div>`} </div> </div> </div>`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/blog/AuthorBox.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content, headings } = await renderEntry(entry);
  const wordCount = entry.body ? entry.body.split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.data.title,
    description: entry.data.description,
    datePublished: entry.data.pubDate.toISOString(),
    ...entry.data.updatedDate && {
      dateModified: entry.data.updatedDate.toISOString()
    },
    ...entry.data.image && { image: entry.data.image.src },
    url: `https://agensea.nl/blog/${entry.id}/`,
    publisher: {
      "@type": "Organization",
      name: "Agensea",
      url: "https://agensea.nl"
    },
    ...entry.data.author && {
      author: {
        "@type": "Person",
        name: entry.data.author.name,
        ...entry.data.author.bio && {
          description: entry.data.author.bio
        }
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "seoTitle": entry.data.seo?.metaTitle, "seoDescription": entry.data.seo?.metaDescription, "ogImage": entry.data.image?.src }, { "default": async ($$result2) => renderTemplate`   ${renderComponent($$result2, "Navbar", $$Navbar, {})}  ${maybeRenderHead()}<div id="progress-bar-container" class="fixed top-0 left-0 right-0 z-[950] h-[3px] bg-transparent"> <div id="progress-bar" class="h-full bg-gradient-to-r from-indigo to-violet w-0 transition-none"></div> </div> <main class="min-h-screen pt-36 md:pt-44 pb-20"> <!-- Hero Header --> <header class="max-w-4xl mx-auto px-6 mb-16 md:mb-24"> <div class="mb-8"> <a href="/blog" class="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark/40 hover:text-indigo transition-colors"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="group-hover:-translate-x-1 transition-transform"> <path d="m15 18-6-6 6-6"></path> </svg>
Alle inzichten
</a> </div> <div class="flex flex-wrap items-center gap-4 mb-8"> <time${addAttribute(entry.data.pubDate.toISOString(), "datetime")} class="text-xs font-bold text-indigo uppercase tracking-[0.2em]"> ${entry.data.pubDate.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <span class="w-1 h-1 rounded-full bg-dark/20"></span> <span class="text-xs font-bold text-dark/40 uppercase tracking-[0.2em]">${readingTime} min leestijd</span> ${entry.data.updatedDate && entry.data.updatedDate > entry.data.pubDate && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="w-1 h-1 rounded-full bg-dark/20"></span> <span class="text-xs font-bold text-dark/40 uppercase tracking-[0.2em]">
Bijgewerkt${" "} ${entry.data.updatedDate.toLocaleDateString(
    "nl-NL",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  )} </span> ` })}`} </div> ${entry.data.category && renderTemplate`<span class="inline-block text-[10px] font-bold text-indigo uppercase tracking-[0.3em] bg-indigo/5 px-3 py-1 rounded-full mb-6"> ${entry.data.category} </span>`} <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dark tracking-tight leading-[1.08] mb-6"> ${entry.data.title} </h1> <p class="text-xl md:text-2xl text-dark/60 font-sans leading-relaxed max-w-3xl"> ${entry.data.excerpt || entry.data.description} </p> <div class="mt-10 h-px bg-gradient-to-r from-indigo/30 via-warm-grey to-transparent"></div> </header> <!-- Content Grid: Article + Sidebar TOC --> <div class="max-w-7xl mx-auto px-6"> <div class="grid lg:grid-cols-[1fr_260px] gap-16 xl:gap-24"> <!-- Article Content --> <article id="article-body" class="min-w-0"> <div class="markdown-body max-w-3xl"> ${renderComponent($$result2, "Content", Content, {})} </div> <!-- Tags --> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="max-w-3xl mt-16 pt-8 border-t border-warm-grey"> <p class="text-[10px] font-bold text-dark/40 uppercase tracking-[0.3em] mb-4">
Tags
</p> <div class="flex flex-wrap gap-2"> ${entry.data.tags.map((tag) => renderTemplate`<span class="px-3 py-1.5 bg-dark/[0.03] text-dark/60 text-xs font-medium rounded-full border border-dark/5 hover:border-indigo/30 hover:text-indigo transition-colors"> ${tag} </span>`)} </div> </div>`} <!-- Author Box (EEAT) --> ${entry.data.author && renderTemplate`${renderComponent($$result2, "AuthorBox", $$AuthorBox, { "name": entry.data.author.name, "bio": entry.data.author.bio, "avatar": entry.data.author.avatar, "credentials": entry.data.author.credentials })}`} </article> <!-- Sticky Sidebar --> <aside class="hidden lg:block"> <div class="sticky top-32"> <!-- Reading Progress Circle --> <div class="flex items-center gap-3 mb-8"> <div class="relative w-10 h-10"> <svg class="w-10 h-10 -rotate-90" viewBox="0 0 36 36"> <circle cx="18" cy="18" r="15.5" fill="none" stroke-width="2" class="stroke-warm-grey"></circle> <circle id="progress-circle" cx="18" cy="18" r="15.5" fill="none" stroke-width="2.5" stroke-linecap="round" class="stroke-indigo" stroke-dasharray="97.4" stroke-dashoffset="97.4" style="transition: stroke-dashoffset 0.15s ease-out;"></circle> </svg> <span id="progress-pct" class="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-dark/70 tabular-nums">0%</span> </div> <span class="text-[10px] font-bold text-dark/40 uppercase tracking-[0.25em]">Gelezen</span> </div> <!-- TOC --> ${headings && headings.length > 0 && renderTemplate`<nav aria-label="Inhoudsopgave"> <p class="text-[10px] font-bold text-dark/40 uppercase tracking-[0.3em] mb-4">
Inhoudsopgave
</p> <ul class="space-y-1 border-l border-warm-grey"> ${headings.filter((h) => h.depth <= 3).map((heading) => renderTemplate`<li> <a${addAttribute(`#${heading.slug}`, "href")}${addAttribute([
    "toc-link block py-1.5 text-sm text-dark/40 hover:text-indigo transition-all duration-300 border-l-2 border-transparent hover:border-indigo -ml-px",
    heading.depth === 1 && "pl-4 font-bold",
    heading.depth === 2 && "pl-4 font-medium",
    heading.depth === 3 && "pl-8 text-xs"
  ], "class:list")}${addAttribute(
    heading.slug,
    "data-heading-slug"
  )}> ${heading.text} </a> </li>`)} </ul> </nav>`} </div> </aside> </div> </div> </main> <div class="mt-20"> ${renderComponent($$result2, "CTA", $$CTA, {})} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": async ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))) })} <!-- Reading Progress + Active TOC Script --> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
