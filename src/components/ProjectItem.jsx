import { motion } from "framer-motion";

export default function ProjectItem({
  title,
  description,
  stack,
  image,
  url,
  index,
}) {
  const reverse = index % 2 === 1;

  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: 100 * direction,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      className={`flex flex-col md:flex-row gap-10 mb-15 sm:mb-5 ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center`}
    >
      {/* Bild-Container */}
      <motion.div
        className="w-full md:w-[50%] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        custom={reverse ? 1 : -1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </motion.div>

      {/* Text-Container */}
      <motion.div
        className="w-full md:w-[50%] flex flex-col"
        custom={reverse ? -1 : 1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-[var(--primary-color)]/20 text-[var(--primary-color)]
                         rounded-full text-xs font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block w-max rounded-md bg-[var(--primary-color)]
                       py-2 px-6 text-sm font-semibold text-white transition-colors
                       hover:bg-[color-mix(in_srgb,var(--primary-color),#000_20%)]"
          >
            Seite besuchen
          </a>
        )}
      </motion.div>
    </div>
  );
}
