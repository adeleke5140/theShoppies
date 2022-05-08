import React from "react"

export default function Nomination() {
  return (
    <div className="nomination">
      <p className="nomination__title">Nomination</p>
      <ul className="nominations">
        <li>
          nominee <button>remove</button>
        </li>
      </ul>
    </div>
  )
}
