export interface GalleryItem {
  src: string;
  alt: string;
}

// Nur Fotos, die weder als Leistungsbild (lib/galabau.ts) noch als Referenz
// (lib/referenzen-data.ts) laufen. Die Galerie filtert Dubletten ohnehin heraus
// und blendet sich aus, sobald weniger als drei eigene Bilder uebrig bleiben.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/baustellen/neuer-rasen-und-rohbau-01.jpg",
    alt: "Neu verlegter Rollrasen mit schwarzer Rasenkante, Kiesstreifen und Sandsteinmauer vor einem Wohnhaus mit Anbau im Rohbau"
  },
  {
    src: "/assets/acquisition/baustellen/rohbau-eines-anbaus-01.jpg",
    alt: "Dieselbe Fläche vor Beginn der Arbeiten: offener Boden vor dem Anbau im Rohbau"
  },
  {
    src: "/assets/acquisition/baustellen/pflasterarbeiten-im-gange-01.jpg",
    alt: "Mitarbeiter verlegt graues Mehrformat-Pflaster neben einem Doppelstabmattenzaun"
  },
  {
    src: "/assets/acquisition/baustellen/baustelle-pflasterarbeiten-01.jpg",
    alt: "Frisch verlegte großformatige Platten mit Randsteinen vor Sandsteinmauer und Sichtschutzzaun"
  }
];
