import ArtistCard from "@/components/cards/ArtistCard";
import { artists } from "@/constants/artists";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-6xl font-bold">
          Archive
        </h1>

        <p className="mb-16 max-w-2xl text-zinc-400">
          A growing collection of artists, creators and cultural voices.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              name={artist.name}
              discipline={artist.discipline}
              city={artist.city}
            />
          ))}
        </div>
      </div>
    </main>
  );
}