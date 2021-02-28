import React from "react"
import "./Card.css"

function Card({ word, translation, changeHistory }) {
  return (
    <div className="history__card">
      <h3>{word}</h3>
      <h2>{translation}</h2>
      <div onClick={changeHistory} className="history__remove">
        x
      </div>
    </div>
  )
}

export default Card
