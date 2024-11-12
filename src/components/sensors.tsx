"use client";
import { Carousel, Card } from "./ui/apple-card-carrousel";

export function Sensors() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 dark bg-black" id="aurora-text">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Une solutions complete
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Humidité",
    title: "You can do more with AI.",
    src: "/humidity.webp",
  },
  {
    category: "Luminosité",
    title: "Enhance your productivity.",
    src: "/luminosity.webp",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/thermometre.webp",
  },
  {
    category: "Décibels",
    title: "Launching the new Apple Vision Pro.",
    src: "/decibel.webp",
  },

  {
    category: "Radon",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/radon.webp",
  },
  {
    category: "CO2",
    title: "Photography just got better.",
    src: "/co2.webp",
  },
  {
    category: "Geiger",
    title: "Hiring for a Staff Software Engineer",
    src: "/geiger.webp",
  },
];
