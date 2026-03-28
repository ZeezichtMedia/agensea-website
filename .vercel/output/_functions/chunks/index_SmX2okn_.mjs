import { c as createComponent } from './astro-component_CDyplbCz.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, c as renderComponent, F as Fragment, r as renderTemplate } from './entrypoint_CIqzDYY3.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DivUCpau.mjs';
import { $ as $$Navbar, a as $$Footer } from './Footer_Czu3eQ7X.mjs';
import { g as getCollection } from './_astro_content_jqxRPmJl.mjs';

const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${post.id}`, "href")} class="blog-card group relative bg-white/50 backdrop-blur-sm border border-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-indigo/5 flex flex-col h-full"${addAttribute(post.data.category || "", "data-category")}> <div class="absolute -inset-px bg-gradient-to-br from-indigo/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div> <div class="flex items-center gap-3 mb-4"> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} class="text-xs font-bold text-indigo uppercase tracking-widest"> ${post.data.pubDate.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> ${post.data.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="w-1 h-1 rounded-full bg-dark/20"></span> <span class="text-[10px] font-bold text-dark/40 uppercase tracking-widest"> ${post.data.category} </span> ` })}`} </div> <h2 class="text-2xl font-display font-bold text-dark mb-4 group-hover:text-indigo transition-colors duration-300"> ${post.data.title} </h2> <p class="text-dark/70 font-sans line-clamp-3 mb-8 text-sm leading-relaxed"> ${post.data.excerpt || post.data.description} </p> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1.5 mb-6 mt-auto"> ${post.data.tags.slice(0, 3).map((tag) => renderTemplate`<span class="text-[10px] font-medium text-dark/40 bg-dark/[0.03] px-2 py-0.5 rounded-full"> ${tag} </span>`)} </div>`} <div class="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-dark group-hover:text-indigo transition-colors uppercase tracking-widest border-t border-dark/5">
Lees verder
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="group-hover:translate-x-1 transition-transform"> <path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> </svg> </div> </a>`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/components/blog/BlogCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => data.draft !== true);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const categories = [
    ...new Set(sortedPosts.map((p) => p.data.category).filter(Boolean))
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": "Onze nieuwste inzichten en kennis over webdevelopment, marketing en AI." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-20"> <div class="max-w-7xl mx-auto px-6"> <div class="mb-16"> <h1 class="text-5xl md:text-7xl font-display font-bold text-dark tracking-tight mb-4">
Onze <span class="text-indigo">Inzichten</span>.
</h1> <p class="text-xl text-dark/70 max-w-2xl font-sans">
Ontdek de laatste trends, tips en verhalen over webdesign,
                    AI en online marketing.
</p> </div> <!-- Category Filter --> ${categories.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-12"> <button data-filter="all" class="filter-btn active px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo bg-indigo text-white transition-all">
Alles
</button> ${categories.map((cat) => renderTemplate`<button${addAttribute(cat, "data-filter")} class="filter-btn px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full border border-dark/10 text-dark/50 hover:border-indigo hover:text-indigo transition-all"> ${cat} </button>`)} </div>`} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-grid"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post })}`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/blog/index.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/homepagina zeezicht/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
