import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";

export const projects = [
  {
    title: "Flashedcards",
    description: "Eine Karteikarten-App zum Erstellen und Lernen von Vokabeln.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Firebase"],
    image: Project3,
    url: "https://flashedcards-3153e.firebaseapp.com/login",
  },
  {
    title: "Dolmetscher Website",
    description:
      "WordPress-Website für ein Dolmetscher- und Über-setzungsbüro mit einem Kontaktformular.",
    stack: ["HTML", "CSS", "WordPress"],
    image: Project2,
    url: "https://mermer-dolmetscher.de/",
  },
  {
    title: "Cryptostack Homepage",
    description:
      "Homepage für eine Demo-Krypto-Website mit aktuellen Krypto-Preisen als Tabelle.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "API"],
    image: Project1,
    url: "https://emomer.github.io/cryptostack/",
  },
];
