import React from "react"

export default function SearchBar({ input, updateInput }) {
  return (
    <div className="searchBar">
      <label htmlFor="search">
        <p className="search__title">Movie Title</p>
        <span className="search__input--iconed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search search__input--icon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="search"
            name="search"
            id="search"
            className="search__input"
            results="2"
            value={input}
            onChange={updateInput}
          />
        </span>
      </label>
    </div>
  )
}
