// Language Toggle Button
const languageBtn = document.getElementById("language-btn");

// Translation object containing text for English (en) and German (de)
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
    overlayBtnSite: "View Site",
    overlayBtnCode: "View Code",
    interestTitle: "Interested in working together?",
    interestText:
      "I'm always open to new opportunities and collaborations. Feel free to reach out and let's create something amazing together!",
    interestBtn: "Contact Me",
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
    overlayBtnSite: "Zur Website",
    overlayBtnCode: "Zum Code",
    interestTitle: "Interessiert an einer Zusammenarbeit?",
    interestText:
      "Ich bin immer offen für neue Möglichkeiten und Kooperationen. Kontaktieren Sie mich gerne und lassen Sie uns gemeinsam etwas Großartiges schaffen!",
    interestBtn: "Kontaktieren Sie mich",
  },
};

// Set default language or load saved language from localStorage
let currentLanguage = localStorage.getItem("selectedLanguage") || "en";

// Function to toggle between English and German languages
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  updateLanguage(currentLanguage);
}

// Function to update the text content of the page based on selected language
function updateLanguage(lang) {
  // Save the selected language to localStorage
  localStorage.setItem("selectedLanguage", lang);

  // Update contact button text
  document.querySelector(".contact-btn").textContent =
    translations[lang].contactBtn;

  // Update hero section texts
  document.querySelector(".helloworld").textContent =
    translations[lang].heroTitle;
  document.querySelector(".hero-information").textContent =
    translations[lang].heroSubtitle;

  // Update download CV button text
  document.querySelector(".downloadcv-btn").textContent =
    translations[lang].downloadcvBtn;

  // Update About Me section title
  document.querySelector(".about-me-section h2").textContent =
    translations[lang].aboutTitle;

  // Update About Me section paragraphs
  const aboutParagraphs = document.querySelectorAll(".about-me-section p");
  aboutParagraphs[0].textContent = translations[lang].aboutText1;
  aboutParagraphs[1].textContent = translations[lang].aboutText2;

  // Update Skills & Uses section title
  document.querySelector(".technologies-header h2").textContent =
    translations[lang].skillsTitle;

  // Update Projects section title
  document.querySelector(".projects-section h2").textContent =
    translations[lang].projectsTitle;

  // Update overlay buttons in project sections
  const overlayBtnSite = document.querySelectorAll(".overlay-btn-site");
  overlayBtnSite.forEach((button) => {
    button.textContent = translations[lang].overlayBtnSite;
  });
  const overlayBtnCode = document.querySelectorAll(".overlay-btn-code");
  overlayBtnCode.forEach((button) => {
    button.textContent = translations[lang].overlayBtnCode;
  });

  // Update Interest section texts
  document.querySelector(".interest-title").textContent =
    translations[lang].interestTitle;
  document.querySelector(".interest-text").textContent =
    translations[lang].interestText;
  document.querySelector(".interest-section a").textContent =
    translations[lang].interestBtn;

  // Update language button text to reflect current language
  languageBtn.textContent = `🌐 ${translations[lang].language}`;
}

// Add event listener to language button to handle language toggle
languageBtn.addEventListener("click", toggleLanguage);

// Initialize page with the current language
updateLanguage(currentLanguage);

/* ------------- DISPLAY CIRCLES ------------ */

// Select all icon containers to position them in a circular layout
const icons = document.querySelectorAll(".icon-container");

// Initial values for circle positioning
let baseRadius = 250; // Base radius of the circle
let centerX = 170; // X-coordinate of the circle's center
let centerY = 180; // Y-coordinate of the circle's center

// Function to calculate radius and center based on viewport width
function calculateRadius() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth > 640) {
    // Settings for larger screens
    baseRadius = 250;
    centerX = 170;
    centerY = 180;
    return baseRadius;
  } else {
    // Settings for smaller screens
    baseRadius = 150;
    centerX = 100;
    centerY = 105;
    return baseRadius;
  }
}

// Function to position icons evenly around the circle
function positionIcons() {
  const radius = calculateRadius(); // Get the current radius
  icons.forEach((icon, index) => {
    const angle = (index / icons.length) * 2 * Math.PI; // Calculate angle for even spacing
    const x = centerX + radius * Math.cos(angle); // Calculate X position
    const y = centerY + radius * Math.sin(angle); // Calculate Y position
    icon.style.left = `${x}px`; // Set X position
    icon.style.top = `${y}px`; // Set Y position
  });
}

// Add event listener to reposition icons on window resize
window.addEventListener("resize", positionIcons);

// Initial positioning of icons
positionIcons();

/* -------- ANIMATE TECHNOLOGY ICONS SEQUENTIALLY ---------- */

// Function to animate icons one after another with a delay
function animateIconsSequentially() {
  const icons = document.querySelectorAll(".icon-container");
  for (let i = 1; i <= icons.length; i++) {
    setTimeout(() => {
      const icon = document.querySelector(`[data-id="${i}"]`);
      if (icon) {
        icon.classList.add("visible"); // Add 'visible' class to trigger CSS animation
      }
    }, i * 500); // Delay based on the icon's index
  }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100 && rect.bottom >= 100;
}

// Event handler to trigger icon animation when technologies section enters viewport
function handleScrollAnimation() {
  const technologiesSection = document.querySelector(".technologies-section");
  if (isInViewport(technologiesSection)) {
    animateIconsSequentially(); // Start animation
    window.removeEventListener("scroll", handleScrollAnimation); // Remove listener to prevent re-triggering
  }
}

// Add event listener for scroll to handle animations
window.addEventListener("scroll", handleScrollAnimation);

// Trigger scroll handler in case the section is already visible on load
handleScrollAnimation();

/* -------- SCROLL ANIMATION FOR ELEMENTS WITH DATA-ANIMATE ATTRIBUTE ---------- */

// Function to add or remove 'visible' class based on element's visibility in viewport
function handleScroll() {
  const elements = document.querySelectorAll("[data-animate]");
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible"); // Add class to trigger animation
    } else {
      element.classList.remove("visible"); // Remove class if not in view
    }
  });
}

// Add event listener for scroll to handle general animations
window.addEventListener("scroll", handleScroll);

// Initial call to set the correct state on page load
handleScroll();

/* -------- SCROLL ANIMATION FOR PROJECTS ---------- */

// Select all project elements
const projects = document.querySelectorAll(".project");

// Add event listener for scroll to animate projects when they enter viewport
window.addEventListener("scroll", () => {
  projects.forEach((project) => {
    if (isInViewport(project)) {
      project.classList.add("visible"); // Add class to trigger animation
    } else {
      project.classList.remove("visible"); // Remove class if not in view
    }
  });
});
