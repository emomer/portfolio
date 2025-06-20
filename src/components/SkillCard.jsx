import { useEffect, useRef, useState } from "react";
import { LuMousePointerClick } from "react-icons/lu";

export default function SkillCard({ logo, name }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);

  // Prüfen, ob wir im "Auto-Flip"-Modus sind:
  // Touch-Gerät UND schmaler Screen (< 476px)
  const isAutoFlip =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches &&
    window.innerWidth < 476;

  useEffect(() => {
    if (!isAutoFlip) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipped(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isAutoFlip]);

  return (
    <div
      ref={ref}
      className="relative w-30 h-30 sm:w-50 sm:h-50 [perspective:1000px] cursor-pointer"
      // nur bei Nicht-AutoFlip auf Hover/Touch flippen
      {...(!isAutoFlip && {
        onMouseEnter: () => setFlipped(true),
        onTouchStart: () => setFlipped(true),
      })}
    >
      <div
        className={`relative h-full w-full duration-700
                    [transform-style:preserve-3d]
                    ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Vorderseite (leer) */}
        <div className="absolute flex items-center justify-center inset-0 rounded-xl bg-white shadow-xl [backface-visibility:hidden]">
          <LuMousePointerClick size={30} />
        </div>

        {/* Rückseite */}
        <div
          className="absolute inset-0 rounded-xl bg-[var(--primary-color)] text-white shadow-xl
                     flex flex-col items-center justify-center gap-2 text-xl
                     [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="text-[3rem] sm:text-[4rem] mb-2">{logo}</div>
          <span className="text-[1rem] sm:text-[1.1rem] font-semibold">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
