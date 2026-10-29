
import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background and web development skills.",
};

export default function About() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16"
    >
      <section aria-labelledby="about-title">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
          Get to know me
        </p>

        <h1
          id="about-title"
          className="mt-3 text-4xl font-extrabold text-white sm:text-5xl"
        >
          About Me
        </h1>

        <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
          <p>
            I am a web development student learning how to build
            modern websites and web applications.
          </p>

          <p>
            I am developing my skills in React, Next.js,
            TypeScript, and responsive design. Through my
            coursework, I am learning to create reusable
            components and accessible user interfaces.
          </p>

          <p>
            My goal is to keep improving by building projects,
            learning from feedback, and practicing good software
            development techniques.
          </p>
        </div>
      </section>

      <section aria-labelledby="skills-title" className="mt-12">
        <h2
          id="skills-title"
          className="mb-6 text-2xl font-bold text-white"
        >
          My Learning Journey
        </h2>

        <SkillCard
          title="Web Development Skills"
          description="Technologies and concepts I am learning and practicing."
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Git and GitHub",
          ]}
        />
      </section>
    </main>
  );
}
