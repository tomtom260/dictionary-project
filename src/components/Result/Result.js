import React, { useContext } from "react"
import { intlContext } from "../../translations/IntlProvider"
import "./Result.css"

function Result({ word, translation }) {
  const { message } = useContext(intlContext)

  return (
    <div className="result">
      <div className="result__word result__card">
        <div className="result__body">
          <h1 className="heading--primary">{word.title}</h1>
          <i className="result__icon">x</i>{" "}
          <span className="result__pronunciation">\'thank\</span>
          <p className="result__definition">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          </p>
          <h2 className="heading--secondary">{message.example}</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="result__arrow">
        <span>&rarr;</span>{" "}
      </div>
      <div className="result__translation result__card">
        <div className="result__body">
          <h1 className="heading--primary">{translation.title}</h1>
          <i className="result__icon">x</i>{" "}
          <span className="result__pronunciation">\'thank\</span>
          <p className="result__definition">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          </p>
          <h2 className="heading--secondary">{message.example}</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Result
