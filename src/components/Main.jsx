import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import Nomination from "./Nomination"

import { useQuery } from "react-query"
import { useEffect, useState } from "react"

const api_key = import.meta.env.VITE_API_KEY
// async function fetchMovie() {
//   const res = await fetch()
//   return res.json()
// }

const Main = () => {
  const [input, setInput] = useState("")
  const { data, status } = useQuery(
    "movies",
    (fetchMovie = (input) =>
      fetch(
        `http://www.omdbapi.com/?apikey=${api_key}&s=${input}&type=movie`
      ).then((res) => res.json()))
  )

  useEffect(() => {
    fetchMovie(input)
  }, [input])

  if (status === "loading") {
    console.log("loading")
  }

  if (status === "error") {
    console.error(error, "there was an error")
  }

  console.log(data)
  const updateInput = (e) => setInput(e.target.value)

  return (
    <div className="main">
      <SearchBar input={input} updateInput={updateInput} />
      <MovieList input={input} />
      <Nomination />
    </div>
  )
}

export default Main
