/** Le salon où se tient le stand, et ce qu'on y propose. */
export const SALON = {
  name: "Parallèle",
  kind: "Salon du bien-être",
  place: "Ciney Expo",
  stand: "114",
  year: 2026,
  days: [
    { day: "Ven", date: 13, hours: "13h - 20h", start: "2026-11-13T13:00", end: "2026-11-13T20:00" },
    { day: "Sam", date: 14, hours: "10h - 19h", start: "2026-11-14T10:00", end: "2026-11-14T19:00" },
    { day: "Dim", date: 15, hours: "10h - 19h", start: "2026-11-15T10:00", end: "2026-11-15T19:00" },
  ],
  talk: {
    when: "Vendredi 17h",
    room: "salle Tropique",
    title: "Le Tarot ne prédit pas l'avenir, et c'est une bonne nouvelle.",
    start: "20261113T170000",
    end: "20261113T180000",
  },
};

/** Les deux lectures affichées au stand (prix des affiches du salon). */
export const LECTURES = [
  {
    no: "9003",
    name: "Le Tirage des Trois Voiles",
    line: "Ce tirage révèle qui vous êtes, et ce qui vous en éloigne : forces, failles et direction.",
    detail: "Document écrit + consultation (environ 1h30)",
    price: 90,
  },
  {
    no: "9005",
    name: "La Traversée",
    line: "Une lecture pour franchir les passages : une rupture, un épuisement, un changement profond.",
    detail: "Document écrit + consultation (environ 1h30)",
    price: 130,
  },
];

export const LINKS = {
  site: "https://www.eclipsedetoile.com",
  youtube: "https://www.youtube.com/@Ephantius",
  tiktok: "https://www.tiktok.com/@ephantius",
  instagram: "https://www.instagram.com/eclipsedetoile/",
  email: "contact@eclipsedetoile.com",
};
