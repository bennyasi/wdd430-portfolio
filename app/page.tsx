
import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Benedicta Etim's web development portfolio and projects.",
};

const projects: Project[] = [
  {
    title: "WDD 430 Portfolio Website",
    description:
      "A responsive portfolio website built for WDD 430. It showcases my learning in Next.js App Router, reusable React components, TypeScript, accessible page layouts, and Tailwind CSS styling.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://github.com/bennyasi/wdd430-portfolio",
  },
  {
    title: "Next.js Hello API",
    description:
      "A simple JSON API endpoint built with the Next.js App Router. It demonstrates how to create a GET route handler and return a JSON response from a Next.js application.",
    technologies: [
      "Next.js",
      "TypeScript",
      "REST API",
      "JSON",
    ],
    link: "/api/hello",
  },
];

export default function Home() {
  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16"
    >
      <section
        aria-labelledby="hero-title"
        className="mb-12 rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 px-6 py-12 sm:px-10 sm:py-16"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
          Benedicta Etim | WDD 430
        </p>

        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Welcome to my portfolio
        </h1>

        <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
          Building useful experiences for the web.
        </p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Hello! I am Benedicta Etim, a web development
          student learning to build modern, responsive
          websites and applications using Next.js, React,
          TypeScript, and Tailwind CSS. This portfolio
          highlights my coursework, projects, and growing
          web development skills.
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
          className="mt-2 text-3xl font-bold text-white sm:text-4xl"
        >
          Featured Projects
        </h2>

        <p className="mb-7 mt-3 max-w-2xl leading-7 text-slate-300">
          Explore my work, the technologies I use, and the
          skills I am developing as I learn modern web
          development.
        </p>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}

