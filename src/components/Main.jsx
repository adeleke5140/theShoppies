import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import Nomination from "./Nomination"

import axios from "axios"
import { useEffect, useState } from "react"

const api_key = import.meta.env.VITE_API_KEY

const Main = () => {
  const [movies, setMovies] = useState([])
  const [input, setInput] = useState("")
  const [nominatedMovies, setnominatedMovies] = useState([])

  //fetch movies based on the search Input
  const getMovies = async (input) => {
    const searchText = input.toLowerCase()
    const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${searchText}&type=movie`
    axios.get(url).then((res) => {
      if (res.data.Search) {
        setMovies(res.data.Search)
      }
    })
  }

  //side effect to call the api on first render,
  //and a depenedency that refetches the data when the input changes
  useEffect(() => {
    getMovies(input)
    console.log(movies)
  }, [input])

  const updateInput = (event) => setInput(event.target.value)

  const addNomination = (movie) => {
    //get the latest added movie and include it to the added movie array with other nominated items
    const newNomination = [...nominatedMovies, movie]
    setnominatedMovies(newNomination)
  }

  const removeNomination = (id) => {
    const newNomination = nominatedMovies.filter((_, index) => index !== id)
    setnominatedMovies(newNomination)
  }

  return (
    <div className="main">
      <SearchBar input={input} updateInput={updateInput} />
      <MovieList input={input} movies={movies} nominate={addNomination} />
      <Nomination
        nominations={nominatedMovies}
        removeNomination={removeNomination}
      />
    </div>
  )
}

export default Main
