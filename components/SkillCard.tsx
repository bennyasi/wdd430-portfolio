
interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {description}
      </p>

      <ul
        aria-label={title}
        className="mt-5 flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-indigo-800 bg-indigo-950 px-3 py-1.5 text-sm font-medium text-indigo-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
