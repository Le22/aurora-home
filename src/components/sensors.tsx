"use client";
import { Carousel, Card } from "./ui/apple-card-carrousel";

export function Sensors() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 dark bg-black" id="aurora-text">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Une solutions complète
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Humidité",
    title: "",
    src: "/humidity.webp",
  },
  {
    category: "Luminosité",
    title: "",
    src: "/luminosity.webp",
  },
  {
    category: "Product",
    title: "",
    src: "/thermometre.webp",
  },
  {
    category: "Décibels",
    title: "",
    src: "/decibel.webp",
  },

  {
    category: "Radon",
    title: "",
    src: "/radon.webp",
  },
  {
    category: "CO2",
    title: "",
    src: "/co2.webp",
  },
  {
    category: "Geiger",
    title: "",
    src: "/geiger.webp",
  },
];
