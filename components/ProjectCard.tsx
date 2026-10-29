
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
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-sky-400">
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-5">
        <h4 className="text-sm font-semibold text-slate-200">
          Technologies
        </h4>

        <ul
          aria-label={`Technologies used for ${title}`}
          className="mt-2 flex flex-wrap gap-2"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-sky-800 bg-sky-950 px-3 py-1 text-sm text-sky-200"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      {link ? (
        <p className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded font-semibold text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            View Project <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      ) : null}
    </article>
  );
}
