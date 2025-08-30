import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Landing() {
    const socials = [
    {
      href: "https://github.com/KevinYuCode",
      icon: <Github className="size-4 md:size-8" />,
      variant: "github",
    },
    {
      href: "https://www.linkedin.com/in/kevin-yu-queens/",
      icon: <Linkedin className="size-4 md:size-8" />,
    },
    {
      href: "https://www.instagram.com/i_kevin_yu/",
      icon: <Instagram className="size-4 md:size-8" />,
      variant: "instagram",
    },
    {
      href: "mailto:yu.kevin2002@gmail.com",
      icon: <Mail className="size-4 md:size-8" />,
      variant: "mail",
    },
  ];
  return (
    <main className="min-h-[100svh]">
      {/* full-height row, centers content vertically */}
      <section className="h-[100svh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6">
          <p className="text-5xl text-slate-600">I’m</p>

          <h1 className="mt-2  text-7xl sm:text-7xl text-slate-900">
            Kosi Amobi-Oleka
          </h1>

          <p className="mt-4 max-w-4xl text-xl md:text-2xl text-slate-600">
            A Computer Science student at Queens University and Software developer
          </p>

          <div className="mt-5 flex items-center gap-5 text-slate-800">
            {/* icons go here */}
            <a
            href="https://github.com/your-handle"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:opacity-70"
          >
            <Github size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-70"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70"
          >
            <Instagram size={26} />
          </a>
          <a
            href="mailto:you@example.com"
            aria-label="Email"
            className="hover:opacity-70"
          >
            <Mail size={26} />
          </a>
          </div>

          <a
            href="/resume.pdf"
            className="mt-8 inline-flex items-center justify-center rounded-full
                       px-5 py-3 text-white bg-black hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}
