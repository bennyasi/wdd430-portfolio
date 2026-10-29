
interface SkillCardProps {
  skill: string;
  description: string;
}

export default function SkillCard({
  skill,
  description,
}: SkillCardProps) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900 p-5 transition duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-950/30">
      <h3 className="text-lg font-bold text-white">
        {skill}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        {description}
      </p>
    </article>
  );
}
