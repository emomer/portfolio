// src/components/ProjectItem.jsx
export default function ProjectItem({
  title,
  description,
  stack,
  image,
  url,
  index,
}) {
  const reverse = index % 2 === 1;
  return (
    <div
      className={`flex flex-col md:flex-row gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-15`}
    >
      {/* Bild-Container */}
      <div className="w-full md:w-[50%] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>

      {/* Text-Container */}
      <div className="w-full md:w-[50%] flex flex-col">
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
      </div>
    </div>
  );
}
