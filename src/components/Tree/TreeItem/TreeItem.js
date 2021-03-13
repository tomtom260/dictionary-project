import React from "react"
import "./TreeItem.css"

function TreeItem({ word, translation, active, fetchResult }) {
  return (
    <div
      className={active ? "tree-item tree-item--active" : "tree-item"}
      onClick={() => {
        fetchResult({
          word: {
            title: "th you",
            definition:
              "a polite expression used when acknowledging a gift, service, or compliment",
            pronunciation: "THaNGk ˌyo͞o",
            example: [
              "thank you for your letter",
              "no thank you, I don't believe I will",
            ],
          },
          translation: {
            title: "አመሰግናሁ",
            definition:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            pronunciation: "āmeseginalehu",
            example: [
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            ],
          },
        })
      }}
    >
      <h3>{word}</h3>
      <p>{translation}</p>
    </div>
  )
}

export default TreeItem
