import React from "react"
import "./History.css"
import Card from "./Card/Card"

function History() {
  return (
    <div className="history">
      <Card word="Word" translation="Translation" />
      <Card word="Word" translation="Translation" />
      <Card word="Word" translation="Translation" />
      <Card word="Word" translation="Translation" />
    </div>
  )
}

export default History
