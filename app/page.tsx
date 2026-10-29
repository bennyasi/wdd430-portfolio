
import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Home",
  description: "Explore my web development portfolio projects.",
};

const projects: Project[] = [
  {
    title: "WDD 430 Portfolio",
    description:
      "A responsive portfolio application built with Next.js. It demonstrates reusable TypeScript components, the App Router, shared layouts, and a JSON API endpoint.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://github.com/YOUR-USERNAME/wdd430-portfolio",
  },
  {
    title: "My Second Project",
    description:
      "Replace this sample with a description of a second project you have actually built. Explain its purpose, features, and what you learned.",
    technologies: [
      "Replace with your actual technology",
      "Add another actual technology",
    ],
    link: "https://github.com/YOUR-USERNAME/YOUR-SECOND-REPOSITORY",
  },
];

export default function Home() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16"
    >
      <section
        aria-labelledby="hero-title"
        className="mb-12 rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 px-6 py-12 sm:px-10 sm:py-16"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
          Welcome to my portfolio
        </p>

        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Building useful experiences for the web.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Hello! I am a web development student learning to
          build modern, responsive websites with Next.js,
          React, TypeScript, and Tailwind CSS.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-flex rounded-lg bg-sky-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        >
          Explore my projects
        </a>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
          My work
        </p>

        <h2
          id="projects-title"
          className="mt-2 text-3xl font-bold text-white"
        >
          Featured Projects
        </h2>

        <p className="mb-7 mt-3 max-w-2xl leading-7 text-slate-300">
          Explore my projects, the technologies I used, and
          the skills I am developing.
        </p>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
