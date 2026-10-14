export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "poolumfeld-teich",
    title: "Poolumfeld mit Holzdeck und Teich",
    ort: "Lampertheim",
    leistung: "Gartengestaltung & Rollrasen",
    text: "Außenanlage rund um einen Pool: Holzdeck mit Plattenrand am Becken, daneben ein naturnaher Teich mit Steinufer, Seerosen und Uferbepflanzung. Kugelgehölze und ein Holzsichtschutz schließen den Garten zu den Nachbarn ab.",
    afterImage: "/assets/acquisition/projekte/garten-mit-pool-und-teich-01.jpg",
    alt: "Garten mit Pool, Holzdeck und naturnahem Teich mit Seerosen, dahinter Gehölze und Wohnhäuser"
  },
  {
    id: "rollrasen-kiesweg",
    title: "Rollrasen mit Kiesweg und Palisaden",
    ort: "Lampertheim",
    leistung: "Gartengestaltung & Rollrasen",
    text: "Frisch verlegter Rollrasen mit geschwungener Rasenkante, rundum eingefasst von hellem Kies. Schwarze Rundpalisaden trennen den Kiesweg ab, eine niedrige Sandsteinmauer schließt die Fläche zum Hof hin ab.",
    afterImage: "/assets/acquisition/projekte/neu-angelegter-rasen-und-kiesweg-01.jpg",
    alt: "Frisch verlegter Rollrasen mit hellem Kiesweg, schwarzen Rundpalisaden und Sandsteinmauer"
  }
];
