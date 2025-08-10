import SkillCard from "./components/SkillCard.jsx";
import { projects } from "./data/projects.js";
import { skills } from "./data/Skills.jsx";
import { lineColors } from "./data/lineColors.js";
import ProjectItem from "./components/ProjectItem.jsx";

export default function App() {
  return (
    <div>
      {/* ---------- Hero / Intro ---------- */}
      <main className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <header className="container mx-auto flex justify-between items-center py-5 z-50">
          <span className="text-white text-[1.2rem]">
            {"<"}
            <span className="hidden sm:inline text-[var(--primary-color)]">
              EmrecanMermer
            </span>
            <span className="inline sm:hidden text-[var(--primary-color)]">
              EM
            </span>
            {"/>"}
          </span>

          <a
            href="mailto:emrecan03@live.de"
            className="rounded-[6px] bg-[var(--primary-color)] py-2 px-4 text-white"
          >
            Kontaktieren
          </a>
        </header>

        {/* ▸ Animation Hero */}
        <div className="pointer-events-none absolute inset-0 mx-auto flex w-[90vw] justify-between">
          {lineColors.map((clr, i) => (
            <span
              key={clr}
              className="block w-px"
              style={{
                height: "150%",
                background: `linear-gradient(to bottom, transparent 0%, ${clr} 75%, ${clr} 100%)`,
                animation: "slide 6s cubic-bezier(0.4,0.26,0,0.97) infinite",
                animationDelay: `${i * 0.5}s`,
                animationFillMode: "backwards",
                willChange: "transform",
              }}
            />
          ))}
        </div>

        {/* Hero-Text */}
        <div className="container flex flex-1 flex-col items-center justify-center space-y-6 text-center z-50 ">
          <h1 className="text-[2.5rem] sm:text-[80px] font-bold text-white">
            Hallo, Welt!
          </h1>
          <span className="text-[1rem] sm:text-[28px] text-white">
            Mein Name ist Emrecan und ich bin ein Webentwickler
          </span>
        </div>

        {/* Scroll-Badge */}
        <div className="flex justify-center pb-6">
          <div className="relative h-16 w-9 rounded-full border-2 border-white">
            <svg
              className="absolute bottom-1 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-[var(--primary-color)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v12m0 0-4-4m4 4 4-4"
              />
            </svg>
          </div>
        </div>
      </main>

      {/* ---------- Über mich ---------- */}
      <section className="mt-30 py-10">
        <div className="container flex flex-col items-center">
          <h2 className="text-white text-[2rem]">Über mich</h2>
          <div className="mt-2 mb-10 h-0.5 w-24 bg-gradient-to-r from-[#34c5ff] to-[#0063cd]" />
          <p className="text-white text-[1rem] sm:text-[1.1rem] leading-7">
            Ich bin 24 Jahre alt und studiere seit vier Jahren Angewandte
            Informatik an der Hochschule Ruhr West in Bottrop. Ich werde
            vorraussichtlich Ende 2026 mein Bachelorstudium abschließen. Neben
            dem Studium entwickle ich regelmäßig Webseiten, um meine Skills
            kontinuierlich zu erweitern. In meiner Freizeit spiele ich gerne
            Schach, mache Fitness und schaue viele Filme und Serien.
          </p>
        </div>
      </section>

      {/* ---------- Skills & Tools ---------- */}
      <section className="container flex flex-col items-center mt-30">
        <h2 className="text-white text-[2rem]">Skills & Tools</h2>
        <div className="mt-2 mb-10 h-0.5 w-24 bg-gradient-to-r from-[#34c5ff] to-[#0063cd]" />
        <p className="text-white text-[1rem] sm:text-[1.1rem] text-center w-[80%] mb-8">
          Ich bin (noch) kein Experte, verfüge jedoch über solide
          Grundkenntnisse und habe bereits kleinere Projekte mit den folgenden
          Technologien umgesetzt:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </section>

      {/* ---------- Projekte ---------- */}
      <section className="container mx-auto mt-40 px-4">
        <h2 className="text-center text-3xl font-bold text-white">Projekte</h2>
        <div className="mx-auto mt-4 mb-10 h-0.5 w-24 bg-gradient-to-r from-[#34c5ff] to-[#0063cd]" />

        <div className="flex flex-col gap-12">
          {projects.map((p, i) => (
            <ProjectItem key={p.title} {...p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
