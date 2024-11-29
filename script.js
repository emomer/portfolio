// Sprachumschaltungs-Button
const languageBtn = document.getElementById("language-btn");

const translations = {
  en: {
    contactBtn: "Contact me",
    language: "English",
    heroTitle: "Hello, World!",
    heroSubtitle: "My name is Emrecan and I'm a Web Developer",
    downloadcvBtn: "Download CV",
    aboutTitle: "About Me",
    aboutText1:
      "I have been studying Computer Science at Hochschule Ruhr West in Bottrop for the past 3 years. Outside of my studies, I spend every day coding websites and exploring new technologies to continuously improve my skills.",
    aboutText2:
      "I thrive on solving problems and crafting websites that deliver a seamless and enjoyable experience for users. Let’s connect and create something great!",
    skillsTitle: "Skills & Uses",
    projectsTitle: "Projects",
    interestTitle: "Interested in working together?", // Überschrift für die neue Section
    interestText:
      "I'm always open to new opportunities and collaborations. Feel free to reach out and let's create something amazing together!",
    interestBtn: "Contact Me", // Button-Text für die neue Section
  },
  de: {
    contactBtn: "Jetzt kontaktieren",
    language: "Deutsch",
    heroTitle: "Hallo, Welt!",
    heroSubtitle: "Mein Name ist Emrecan und ich bin ein Webentwickler",
    downloadcvBtn: "Lebenslauf herunterladen",
    aboutTitle: "Über mich",
    aboutText1:
      "Ich studiere seit 3 Jahren Angewandte Informatik an der Hochschule Ruhr West in Bottrop. Außerhalb meines Studiums beschäftige ich mich täglich mit dem Coden von Webseiten und dem Erlernen neuer Technologien, um meine Fähigkeiten kontinuierlich zu verbessern.",
    aboutText2:
      "Ich löse gerne Probleme und erstelle Webseiten, die nahtlos und angenehm für Benutzer funktionieren. Lassen Sie uns gemeinsam etwas Großartiges schaffen!",
    skillsTitle: "Fähigkeiten & Werkzeuge",
    projectsTitle: "Projekte",
    interestTitle: "Interessiert an einer Zusammenarbeit?", // Überschrift für die neue Section
    interestText:
      "Ich bin immer offen für neue Möglichkeiten und Kooperationen. Kontaktieren Sie mich gerne und lassen Sie uns gemeinsam etwas Großartiges schaffen!",
    interestBtn: "Kontaktieren Sie mich", // Button-Text für die neue Section
  },
};

// Standardmäßig auf Englisch setzen oder gespeicherte Sprache laden
let currentLanguage = localStorage.getItem("selectedLanguage") || "en";

// Funktion zum Wechseln der Sprache
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  updateLanguage(currentLanguage);
}

// Funktion, um die Texte basierend auf der Sprache zu aktualisieren
function updateLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang); // Sprache speichern

  // Sprachbezogene Texte aktualisieren
  document.querySelector(".contact-btn").textContent =
    translations[lang].contactBtn;
  document.querySelector(".helloworld").textContent =
    translations[lang].heroTitle;
  document.querySelector(".hero-information").textContent =
    translations[lang].heroSubtitle;
  document.querySelector(".downloadcv-btn").textContent =
    translations[lang].downloadcvBtn;
  document.querySelector(".about-me-section h2").textContent =
    translations[lang].aboutTitle;

  const aboutParagraphs = document.querySelectorAll(".about-me-section p");
  aboutParagraphs[0].textContent = translations[lang].aboutText1;
  aboutParagraphs[1].textContent = translations[lang].aboutText2;

  // Aktualisiere Titel für Skills und Projects
  document.querySelector(".technologies-header h2").textContent =
    translations[lang].skillsTitle;
  document.querySelector(".projects-section h2").textContent =
    translations[lang].projectsTitle;

  // Aktualisiere die neue Section (Interest Section)
  document.querySelector(".interest-title").textContent =
    translations[lang].interestTitle;
  document.querySelector(".interest-text").textContent =
    translations[lang].interestText;
  document.querySelector(".interest-section a").textContent =
    translations[lang].interestBtn;

  // Button-Text aktualisieren
  languageBtn.textContent = `🌐 ${translations[lang].language}`;
}

// Event-Listener für den Button
languageBtn.addEventListener("click", toggleLanguage);

// Initiale Sprache beim Laden der Seite setzen
updateLanguage(currentLanguage);

/* -------- ANIMATION DER TECHNOLOGIE-ICONS (RESPONSIVE) ---------- */

const icons = document.querySelectorAll(".icon-container");

// Initiale Werte
let baseRadius = 250; // Ursprünglicher Radius
let centerX = 170; // Kreiszentrum X
let centerY = 180; // Kreiszentrum Y

// Funktion zur Berechnung des Radius und der Zentren basierend auf der Bildschirmgröße
function calculateRadius() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth > 640) {
    baseRadius = 250;
    centerX = 170;
    centerY = 180;
    return baseRadius; // Standardradius für große Bildschirme
  } else {
    baseRadius = 150; // Radius weiter verkleinern
    centerX = 100;
    centerY = 105;
    return baseRadius;
  }
}

// Funktion zum Platzieren der Icons basierend auf dem Radius und den Zentren
function positionIcons() {
  const radius = calculateRadius(); // Dynamischer Radius
  icons.forEach((icon, index) => {
    const angle = (index / icons.length) * 2 * Math.PI; // Gleichmäßige Winkel
    const x = centerX + radius * Math.cos(angle); // X-Position berechnen
    const y = centerY + radius * Math.sin(angle); // Y-Position berechnen
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
  });
}

// Event-Listener für Fenstergrößenänderung
window.addEventListener("resize", positionIcons);

// Icons initial platzieren
positionIcons();

/* -------- SCROLL ANIMATION ---------- */

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100 && rect.bottom >= 100; // Sichtbarkeitsprüfung
}

function handleScroll() {
  const elements = document.querySelectorAll("[data-animate]");
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible"); // Sichtbar machen
    } else {
      element.classList.remove("visible"); // Unsichtbar machen
    }
  });
}

// Beim Scrollen auslösen
window.addEventListener("scroll", handleScroll);

// Initial auslösen, um die Sichtbarkeit zu prüfen
handleScroll();

/* -------- SCROLL ANIMATION FÜR PROJEKTE ---------- */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  if (isInViewport(project)) {
    project.classList.add("visible");
  } else {
    project.classList.remove("visible");
  }
});

window.addEventListener("scroll", () => {
  projects.forEach((project) => {
    if (isInViewport(project)) {
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
    }
  });
});
