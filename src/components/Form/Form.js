import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import "./Form.css"

function Form() {
  const [titleFocused, setTitleFocused] = useState(false)
  const [descriptionFocused, setDescriptionFocused] = useState(false)
  const [pronunciationFocused, setPronunciationFocused] = useState(false)
  const [exampleFocused, setExampleFocused] = useState(false)
  const location = useLocation()
  let title = location.pathname.startsWith("/add") ? "Add" : "Edit"
  title += " Amharic Defintion"
  return (
    <div className="login form">
      <h2 className="heading--secondary">{title}</h2>
      <label className={titleFocused ? "label--focused" : null} htmlFor="">
        Title
      </label>
      <input
        onFocus={() => setTitleFocused(true)}
        onBlur={() => setTitleFocused(false)}
        className="login__input"
        id="email"
        type="text"
        placeholder="Title"
      />
      <label
        className={descriptionFocused ? "label--focused" : null}
        htmlFor=""
      >
        Description
      </label>
      <input
        onFocus={() => setDescriptionFocused(true)}
        onBlur={() => setDescriptionFocused(false)}
        className="login__input"
        id="password"
        type="text"
        placeholder="Description"
      />
      <label
        className={pronunciationFocused ? "label--focused" : null}
        htmlFor=""
      >
        Pronunciation
      </label>
      <input
        onFocus={() => setPronunciationFocused(true)}
        onBlur={() => setPronunciationFocused(false)}
        className="login__input"
        type="example"
        placeholder="Pronunciation"
      />
      <label className={exampleFocused ? "label--focused" : null} htmlFor="">
        Example
      </label>
      <input
        onFocus={() => setExampleFocused(true)}
        onBlur={() => setExampleFocused(false)}
        className="login__input"
        type="text"
        placeholder="Example"
      />
      <button className="button--login">Next</button>
    </div>
  )
}

export default Form
