import React, { useState } from "react"
import "./History.css"
import Card from "./Card/Card"

function History() {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  )

  const changeHistory = id => {
    const newHistory = JSON.parse(localStorage.getItem("history")).filter(
      el => el.id !== id
    )

    localStorage.setItem("history", JSON.stringify(newHistory))
    setHistory(newHistory)
  }

  return (
    <div className="history">
      {history
        ? history.map(el => (
            <Card
              key={el.id}
              changeHistory={() => changeHistory(el.id)}
              word={el.word}
              translation={el.translation}
            />
          ))
        : null}
    </div>
  )
}

export default History
