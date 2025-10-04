import axios from "axios"

const axiosClient = axios.create({ baseURL: "http://localhost:3000/movies" })

const getMovies = async () => {
  const { data: movies } = await axiosClient.get("")
  return movies
}

const getPreview = async (title: string, year: number | undefined) => {
  const { data: movie } = await axiosClient.get("/preview", {
    params: { title: title, year: year },
  })
  return movie
}

const postMovie = async (title: string, year?: number | undefined) => {
  const { data: response } = await axiosClient.post("", {
    title,
    year,
  })
  return response
}

const deleteMovie = async (id: string) => {
  const { data: response } = await axiosClient.delete("", {
    data: { id },
  })
  return response
}

export const api = {
  getMovies,
  getPreview,
  postMovie,
  deleteMovie,
}
