import React, { useContext, useState } from "react"
import { intlContext } from "../../translations/IntlProvider"
import "./Result.css"

function Result({ word, translation }) {
  const { locale, message } = useContext(intlContext)
  const [lang, changeLang] = useState(locale)
  const [transTo, changeTransTo] = useState("am")

  return (
    <div className="result">
      <div className="result__word result__card">
        <div className="result__header">
          <button
            className={
              "button--secondary" +
              (lang === "en" ? " button--secondary--active" : "")
            }
            onClick={() => changeLang("en")}
          >
            English
          </button>
          <button
            className={
              "button--secondary" +
              (lang === "sp" ? " button--secondary--active" : "")
            }
            onClick={() => changeLang("sp")}
          >
            Spanish
          </button>
          <button
            className={
              "button--secondary" +
              (lang === "fr" ? " button--secondary--active" : "")
            }
            onClick={() => changeLang("fr")}
          >
            French
          </button>
        </div>
        <div className="result__body">
          <h1 className="heading--primary">{word}</h1>
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
        <div className="result__header">
          <button
            className={
              "button--secondary" +
              (transTo === "am" ? " button--secondary--active" : "")
            }
            onClick={() => changeTransTo("am")}
          >
            Amharic
          </button>
          <button
            className={
              "button--secondary" +
              (transTo === "or" ? " button--secondary--active" : "")
            }
            onClick={() => changeTransTo("or")}
          >
            Afan Oromo
          </button>
          <button
            className={
              "button--secondary" +
              (transTo === "tg" ? " button--secondary--active" : "")
            }
            onClick={() => changeTransTo("tg")}
          >
            Tigrignya
          </button>
        </div>
        <div className="result__body">
          <h1 className="heading--primary">{translation}</h1>
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
