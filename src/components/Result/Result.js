import React, { useState } from "react"
import "./Result.css"

function Result({ word, translation }) {
  const [lang, changeLang] = useState("ENG")
  const [transTo, changeTransTo] = useState("AMH")

  return (
    <div className="result">
      <div className="result__word result__card">
        <div className="result__header">
          <button
            className={
              "button--secondary" +
              (lang === "ENG" ? " button--secondary--active" : "")
            }
            onClick={() => changeLang("ENG")}
          >
            English
          </button>
          <button
            className={
              "button--secondary" +
              (lang === "SPA" ? " button--secondary--active" : "")
            }
            onClick={() => changeLang("SPA")}
          >
            Spanish
          </button>
          <button
            className={
              "button--secondary" +
              (lang === "FRE" ? " button--secondary--active" : "")
            }
            onClick={() => changeLang("FRE")}
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
          <h2 className="heading--secondary">Examples</h2>
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
              (transTo === "AMH" ? " button--secondary--active" : "")
            }
            onClick={() => changeTransTo("AMH")}
          >
            Amharic
          </button>
          <button
            className={
              "button--secondary" +
              (transTo === "ORO" ? " button--secondary--active" : "")
            }
            onClick={() => changeTransTo("ORO")}
          >
            Afan Oromo
          </button>
          <button
            className={
              "button--secondary" +
              (transTo === "TIG" ? " button--secondary--active" : "")
            }
            onClick={() => changeTransTo("TIG")}
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
          <h2 className="heading--secondary">Examples</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Result
