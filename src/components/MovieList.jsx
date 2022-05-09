import React from "react"

export default function MovieList({ input, movies, nominate }) {
  return (
    <div className="movie__container">
      <p className="movieList__title">Results from {input}</p>
      <ul className="movieList">
        {movies.length > 1 &&
          movies?.map((movie) => (
            <li className="movieList__item" key={movie.imdbID}>
              {movie.Title} ({movie.Year}){" "}
              <button onClick={() => nominate(movie)}>Nominate</button>
            </li>
          ))}
      </ul>
    </div>
  )
}
