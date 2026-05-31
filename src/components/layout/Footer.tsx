export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Mala Costumbre Archive
            </h3>

            <p className="max-w-md text-sm text-zinc-400">
              A living archive documenting artists, creators, stories and
              cultural projects across Latin America and beyond.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>

            <a href="#" className="transition hover:text-white">
              Behance
            </a>

            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Mala Costumbre Archive. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}