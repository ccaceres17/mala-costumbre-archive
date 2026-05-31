export default function FeaturedArtists() {
  const artists = [
    {
      name: "Camila Reyes",
      discipline: "Photographer",
    },
    {
      name: "Juan Torres",
      discipline: "Visual Artist",
    },
    {
      name: "Maria Vega",
      discipline: "Designer",
    },
  ];

  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold">
          Featured Artists
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="rounded-xl border border-zinc-800 p-8"
            >
              <div className="mb-4 h-64 rounded-lg bg-zinc-900"></div>

              <h3 className="text-xl font-semibold">
                {artist.name}
              </h3>

              <p className="mt-2 text-zinc-400">
                {artist.discipline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}