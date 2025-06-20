export default function ProjectCard({ title, stack, image, url }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      {/* Screenshot */}
      <img
        src={image}
        alt={title}
        className="w-full object-cover duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-6
                      bg-black/70 opacity-0 p-6 duration-500
                      group-hover:opacity-100"
      >
        {/* Titel */}
        <h3 className="text-white text-[1.5rem] font-semibold tracking-wide">
          {title}
        </h3>

        {/* Tech-Badges */}
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-white/10 py-1 px-3 text-xs text-gray-200 backdrop-blur-md"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Visit-Button */}
        {url && url !== "#" && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 text-center mt-2 inline-block rounded-md bg-[var(--primary-color)]
                       py-2 px-4 text-sm font-medium text-white shadow"
          >
            Seite besuchen
          </a>
        )}
      </div>
    </div>
  );
}
