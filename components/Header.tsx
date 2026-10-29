
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-950 text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-sky-300"
        >
          WDD 430 Portfolio
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-slate-200 hover:text-sky-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-slate-200 hover:text-sky-300"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
