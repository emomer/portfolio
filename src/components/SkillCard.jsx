// src/components/SkillCard.jsx
import { motion } from "framer-motion";

export default function SkillCard({ logo, name }) {
  return (
    // Perspektive für 3D-Flip
    <div className="relative w-30 h-30 sm:w-50 sm:h-50 cursor-pointer">
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: 180 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7 }}
      >
        {/* Vorderseite */}
        <div className="absolute inset-0 rounded-xl bg-white shadow-xl [backface-visibility:hidden]" />

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
      </motion.div>
    </div>
  );
}
