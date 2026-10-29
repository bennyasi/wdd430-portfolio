
interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900 p-5 transition hover:border-sky-400">
      <h3 className="font-semibold text-white">
        {skill}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        A technology or skill I am developing through
        coursework and practical projects.
      </p>
    </article>
  );
}
