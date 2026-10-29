
import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Benedicta Etim and her web development journey.",
};

const skills = [
  {
    skill: "HTML",
    description:
      "Building the structure of accessible and well-organized web pages.",
  },
  {
    skill: "CSS",
    description:
      "Styling web pages with layouts, colors, spacing, and responsive designs.",
  },
  {
    skill: "JavaScript",
    description:
      "Learning programming fundamentals, functions, and interactive web features.",
  },
  {
    skill: "React",
    description:
      "Creating reusable UI components to build consistent user interfaces.",
  },
  {
    skill: "Next.js",
    description:
      "Building web applications using the App Router and file-based routing.",
  },
  {
    skill: "TypeScript",
    description:
      "Using types and interfaces to make application code more reliable.",
  },
  {
    skill: "Tailwind CSS",
    description:
      "Styling responsive interfaces with utility classes.",
  },
  {
    skill: "Git and GitHub",
    description:
      "Tracking code changes, managing repositories, and publishing projects.",
  },
];

export default function About() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16"
    >
      <section
        aria-labelledby="about-title"
        className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-10"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
          Get to know me
        </p>

        <h1
          id="about-title"
          className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          About Me
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          My name is Benedicta Etim, and I am a WDD 430
          student learning to build modern websites and
          web applications.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          Through my coursework, I am developing my skills
          in React, Next.js, TypeScript, and responsive
          design. I am learning to create reusable
          components, accessible user interfaces, and
          well-organized applications using modern web
          development practices.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          My goal is to continue improving by building
          projects, learning from feedback, and applying
          good software development techniques to solve
          real-world problems.
        </p>
      </section>

      <section
        aria-labelledby="skills-title"
        className="mt-12"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
          My learning journey
        </p>

        <h2
          id="skills-title"
          className="mt-2 text-3xl font-bold text-white"
        >
          Web Development Skills
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          These are the technologies and concepts I am
          learning and practicing as I grow as a developer.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => (
            <SkillCard
              key={item.skill}
              skill={item.skill}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
