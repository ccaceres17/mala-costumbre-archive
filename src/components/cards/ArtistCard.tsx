import Link from "next/link";

type ArtistCardProps = {
  name: string;
  discipline: string;
  city: string;
  slug: string;
};

export default function ArtistCard({
  name,
  discipline,
  city,
  slug,
}: ArtistCardProps) {
  return (
    <Link href={`/archivo/${slug}`}>
      <article className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
        <div className="h-72 bg-zinc-900 transition duration-500 group-hover:scale-105" />

        <div className="p-6">
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>

          <p className="mt-2 text-zinc-400">
            {discipline}
          </p>

          <p className="mt-1 text-sm text-zinc-600">
            {city}
          </p>
        </div>
      </article>
    </Link>
  );
}