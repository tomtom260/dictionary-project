import React from "react"
import "./SearchCard.css"

function SearchCard({ word, translation, fetchResult }) {
  return (
    <div
      className="search-card"
      onClick={() =>
        fetchResult({
          word: {
            title: "thank you",
            definition:
              "a polite expression used when acknowledging a gift, service, or compliment",
            pronunciation: "THaNGk ˌyo͞o",
            example: [
              "thank you for your letter",
              "no thank you, I don't believe I will",
            ],
          },
          translation: {
            title: "አመሰግናለሁ",
            definition:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            pronunciation: "āmeseginalehu",
            example: [
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            ],
          },
        })
      }
    >
      <h3>{word}</h3>
      <h2>{translation}</h2>
      <div className="button-container">
        <button onClick="">Edit</button>
        <button onClick="">Delete</button>
      </div>
    </div>
  )
}

export default SearchCard
