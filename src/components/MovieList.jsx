import React, { useState } from "react"
import toast from "react-hot-toast"

export default function MovieList({ input, movies, nominate }) {
  const [isDisabled, _] = useState(false)
  const notify = () =>
    toast.success("Nomination added!", {
      duration: 2000,
      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "10px"
      }
    })

  const toggleDisable = (btn) => {
    //I should probably use state here but I can't figure it out
    btn.disabled = true
  }
  return (
    <div className="movie__container">
      <p className="movieList__title">Results from {input}</p>
      <ul className="movieList">
        {movies.length > 1 &&
          movies?.map((movie) => (
            <li className="movieList__item" key={movie.imdbID}>
              {movie.Title} ({movie.Year}){" "}
              <button
                disabled={isDisabled}
                onClick={(e) => {
                  nominate(movie)
                  notify()
                  toggleDisable(e.target)
                }}
              >
                Nominate
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
