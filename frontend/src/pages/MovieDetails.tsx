import { useParams } from "react-router-dom"
import Nav from "../components/Nav"
import { useMoviesStore } from "../store/useMoviesStore"
import { Trash } from "lucide-react"
import { api } from "../lib/api"

export default function MovieDetails() {
  const { id } = useParams()
  const movies = useMoviesStore((s) => s.movies)
  const movie = movies.find((movie) => movie.id === id)
  console.log(movie)
  const {
    title,
    year,
    director,
    writer,
    actors,
    poster,
    posterWide,
    ratings,
    isSeen,
  } = movie
  return (
    <div className="flex flex-col text-white">
      <Nav />
      <div className="relative">
        <img
          className="absolute z-10 w-40 h-auto shadow-xl top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
          src={`https://image.tmdb.org/t/p/w185/${poster}`}
          alt={title}
        />
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w780/${posterWide}`}
          alt=""
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
      </div>
      <div className="p-3">
        <p>{title}</p>
        <p>{year}</p>
        <p>{director}</p>
        {writer !== director && <p>{writer}</p>}
        <p>{isSeen === true ? "Vu" : "Pas vu"}</p>
        <p></p>
        <p>Actors Collapsible</p>
        <p>
          Animation carte qui va à gauche en scrollant et infos qui vont à
          droite
        </p>
        <div
          onClick={() => {
            alert("t es sûr mec ?")
            api.deleteMovie(id)
            window.location.href = "/"
          }}
        >
          <Trash />
        </div>
      </div>
    </div>
  )
}
