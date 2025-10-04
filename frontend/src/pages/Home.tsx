import { useQuery } from "@tanstack/react-query"
import MovieCard from "../components/MovieCard"
import Nav from "../components/Nav"
import { api } from "../lib/api"
import { useMoviesStore } from "../store/useMoviesStore"

export default function Home() {
  const setMovies = useMoviesStore((s) => s.setMovies)
  const { data: fetchedMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: api.getMovies,
  })
  const movies = fetchedMovies?.slice(0, 30)
  if (fetchedMovies) setMovies(fetchedMovies)
  return (
    <div className="pb-[7vh]">
      <p className="mt-3 ml-3 font-bold text-2xl">Pantàr</p>
      <Nav />
      <div className="flex flex-wrap justify-center p-3">
        {movies?.map(({ id, poster }: any) => (
          <MovieCard id={id} poster={poster} />
        ))}
      </div>
    </div>
  )
}
