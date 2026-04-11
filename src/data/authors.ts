// Auteurs voor de kennisbank/blog. Eén bron van waarheid: pas hier de bio
// of avatar aan en alle blogposts updaten automatisch (E-E-A-T-vriendelijk).
//
// In de blog-frontmatter gebruik je alleen de id, bv. `author: jorian`.
// Resolutie naar het volledige Author object gebeurt in
// src/pages/kennisbank/[slug].astro.

export interface Author {
  id: string;
  name: string;
  /** Korte bio voor de AuthorBox (E-E-A-T signaal). */
  bio: string;
  /** Pad naar profielfoto in /public */
  avatar: string;
  /** Korte credentials/tags die expertise aantonen */
  credentials: string[];
  /** Optionele LinkedIn voor schema.org */
  linkedin?: string;
}

export const authors: Author[] = [
  {
    id: "jorian",
    name: "Jorian Wientjens",
    bio: "Developer en technisch specialist bij Agensea. Bouwt al jaren websites en maatwerk software, en kent het hele speelveld — van hosting en DNS tot performance en code-architectuur.",
    avatar: "/team/jorian.webp",
    credentials: [
      "Developer",
      "Technisch specialist",
      "Hosting & DNS",
    ],
    linkedin: "https://www.linkedin.com/in/jorian-wientjens/",
  },
];

export const authorsById: Record<string, Author> = Object.fromEntries(
  authors.map((a) => [a.id, a])
);
