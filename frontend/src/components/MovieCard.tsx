import { Link } from "react-router-dom"

export default function MovieCard({
  id,
  poster,
}: {
  id: string
  poster: string
}) {
  return (
    <Link key={id} to={`movie/${id}`} className="relative w-[20%] h-full p-1">
      <div className="w-full rounded-md border-gray-600 border-1 overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w342/${poster}`}
          className="object-cover rounded-md transition-transform duration-500 hover:scale-120"
        />
      </div>
    </Link>
  )
}
