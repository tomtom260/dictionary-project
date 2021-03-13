import React from "react"
import { useHistory } from "react-router-dom"
import "./SearchCard.css"

function SearchCard({ word, translation, fetchResult, fetchTree }) {
  const history = useHistory()
  return (
    <div
      className="search-card"
      onClick={() => {
        fetchTree([
          { word: "Thank you", translation: "አመሰግናለሁ" },
          { word: "Thank you", translation: "አመሰግናለሁ" },
          { word: "Thank you", translation: "አመሰግናለሁ" },
          { word: "Thank you", translation: "አመሰግናለሁ" },
          { word: "Thank you", translation: "አመሰግናለሁ" },
        ])
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
      }}
    >
      <h3>{word}</h3>
      <h2>{translation}</h2>
      <div className="button-container">
        <span className="icon-container">
          <img
            src="./edit-icon.png"
            alt=""
            onClick={() => {
              history.push(`/edit-entry/${word}`)
            }}
          />
        </span>
        <span className="icon-container">
          <img src="./delete-icon.png" alt="" onClick={() => {}} />
        </span>
      </div>
    </div>
  )
}

export default SearchCard
