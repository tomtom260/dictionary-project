import React, { useContext } from "react"
import { intlContext } from "../../translations/IntlProvider"
import "./Result.css"

function Result({ result: { word, translation } }) {
  const { message } = useContext(intlContext)
  console.log(word, translation)
  return (
    <div className="result">
      <div className="result__word result__card">
        <div className="result__body">
          <h1 className="heading--result">{word.title}</h1>
          <span className="result__pronunciation">{word.pronunciation}</span>
          <p className="result__definition">{word.definition}</p>
          <h2 className="heading--secondary">{message.example}</h2>
          <p>{word.example[0]}</p>
          <p>{word.example[1]}</p>
        </div>
      </div>
      <div className="result__arrow">
        <span>&rarr;</span>{" "}
      </div>
      <div className="result__translation result__card">
        <div className="result__body">
          <h1 className="heading--result">{translation.title}</h1>
          <span className="result__pronunciation">
            {translation.pronunciation}
          </span>
          <p className="result__definition">{translation.definition}</p>
          <h2 className="heading--secondary">{message.example}</h2>
          <p>{translation.example[0]}</p>
          <p>{translation.example[1]}</p>
        </div>
      </div>
    </div>
  )
}

export default Result
