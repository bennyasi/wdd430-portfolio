
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const isExternalLink =
    link?.startsWith("https://") ||
    link?.startsWith("http://");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-sky-400">
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-5">
        <h4 className="text-sm font-bold text-sky-300">
          Technologies
        </h4>

        <ul className="mt-3 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-sm text-slate-200"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      {link && (
        <p className="mt-6">
          <a
            href={link}
            target={isExternalLink ? "_blank" : undefined}
            rel={
              isExternalLink
                ? "noopener noreferrer"
                : undefined
            }
            className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            View Project
            <span aria-hidden="true">↗</span>
            {isExternalLink && (
              <span className="sr-only">
                (opens in a new tab)
              </span>
            )}
          </a>
        </p>
      )}
    </article>
  );
}
