// src/data/projects.js
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";

export const projects = [
  {
    title: "Flashedcards",
    description:
      "Eine Karteikarten-App zum Erstellen und Lernen von Vokabeln mit Vorlesefunktion.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Firebase"],
    image: Project3,
    url: "https://deine-domain.de/flashcards",
  },
  {
    title: "Dolmetscher Website",
    description:
      "WordPress-Website für ein Dolmetscher- und Über-setzungsbüro mit einem Kontaktformular.",
    stack: ["HTML", "CSS", "WordPress"],
    image: Project2,
    url: "https://deine-domain.de/dolmetscher",
  },
  {
    title: "Cryptostack Homepage",
    description:
      "Demo Homepage für eine Krypto-App mit aktuellen Krypto-Preisen als Tabelle.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "REST API"],
    image: Project1,
    url: "https://deine-domain.de/cryptostack",
  },
];
