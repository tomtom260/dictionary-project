import React from "react"
import "./TreeItem.css"

function TreeItem({ word, translation, active }) {
  return (
    <div className={active ? "tree-item tree-item--active" : "tree-item"}>
      <h3>{word}</h3>
      <p>{translation}</p>
    </div>
  )
}

export default TreeItem
