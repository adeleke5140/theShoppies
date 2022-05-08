import React from "react"

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <label htmlFor="search">
        Movie title
        <span className="search__input--iconed">
          <input
            type="search"
            name="search"
            id="search"
            value="ram"
            className="search__input"
          />
        </span>
      </label>
    </div>
  )
}
