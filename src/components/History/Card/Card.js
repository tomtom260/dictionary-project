import React from "react"
import "./Card.css"

function Card({ word, translation }) {
  return (
    <div className="history__card">
      <h3>{word}</h3>
      <h2>{translation}</h2>
      <div className="history__remove">x</div>
    </div>
  )
}

export default Card
