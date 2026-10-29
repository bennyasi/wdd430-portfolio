
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "WDD 430 Portfolio",
    template: "%s | WDD 430 Portfolio",
  },
  description:
    "A web development portfolio built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100 antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-50 -translate-y-20 rounded-lg bg-white px-4 py-2 font-semibold text-slate-950 focus:translate-y-0"
        >
          Skip to main content
        </a>

        <Header />

        <div className="flex flex-1 flex-col">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

