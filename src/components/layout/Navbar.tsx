export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-white"
        >
          Mala Costumbre
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/archivo"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Archive
          </a>

          <a
            href="/historias"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Stories
          </a>

          <a
            href="/proyectos"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="/comunidad"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Community
          </a>

          <a
            href="/contacto"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}