import React from "react"
import "./History.css"
import Card from "./Card/Card"

function History() {
  const history = JSON.parse(localStorage.getItem("history"))
  return (
    <div className="history">
      {history
        ? history.map(el => (
            <Card key={el.id} word={el.word} translation={el.translation} />
          ))
        : null}
    </div>
  )
}

export default History
