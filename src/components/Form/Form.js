import React, { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import "./Form.css"

function Form({ definitions }) {
  const [titleFocused, setTitleFocused] = useState(false)
  const [definitionFocused, setDefinitionFocused] = useState(false)
  const [pronunciationFocused, setPronunciationFocused] = useState(false)
  const [example1Focused, setExample1Focused] = useState(false)
  const [example2Focused, setExample2Focused] = useState(false)
  const location = useLocation()
  const [amharicDef, setAmharicDef] = useState(null)
  const [spanishDef, setSpanishDef] = useState(null)
  const [englishDef, setEnglishDef] = useState(null)
  const [frenchDef, setFrenchDef] = useState(null)

  const [formState, setFormState] = useState("am")
  const history = useHistory()

  let title = location.pathname.startsWith("/add") ? "Add " : "Edit "
  let formLang
  let formDef

  switch (formState) {
    case "am":
      formLang = "Amharic"
      formDef = definitions.amharicDef
      break
    case "en":
      formLang = "English"
      formDef = definitions.englishDef
      break
    case "sp":
      formLang = "Spanish"
      formDef = definitions.spanishDef
      break
    case "fr":
      formLang = "French"
      formDef = definitions.frenchDef
      break
    default:
      break
  }
  title += formLang
  title += " Definition"
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
        type="text"
        placeholder="Title"
        id="title-input"
        defaultValue={formDef.title}
      />
      <label className={definitionFocused ? "label--focused" : null} htmlFor="">
        Defintion
      </label>
      <input
        onFocus={() => setDefinitionFocused(true)}
        onBlur={() => setDefinitionFocused(false)}
        className="login__input"
        type="text"
        placeholder="Definition"
        id="def-input"
        defaultValue={formDef.definition}
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
        type="text"
        placeholder="Pronunciation"
        id="pronun-input"
        defaultValue={formDef.pronunciation}
      />
      <label className={example1Focused ? "label--focused" : null} htmlFor="">
        Example 1
      </label>
      <input
        onFocus={() => setExample1Focused(true)}
        onBlur={() => setExample1Focused(false)}
        className="login__input"
        type="text"
        placeholder="Example 1"
        id="example1-input"
        defaultValue={formDef.example[0]}
      />
      <label className={example2Focused ? "label--focused" : null} htmlFor="">
        Example 2
      </label>
      <input
        onFocus={() => setExample2Focused(true)}
        onBlur={() => setExample2Focused(false)}
        className="login__input"
        type="text"
        placeholder="Example 2"
        id="example2-input"
        defaultValue={formDef.example[1]}
      />
      <button
        className="button--login"
        onClick={() => {
          switch (formState) {
            case "am":
              setAmharicDef({
                title: document.getElementById("title-input").value,
                definition: document.getElementById("def-input").value,
                pronunciation: document.getElementById("pronun-input").value,
                example: [
                  document.getElementById("example1-input").value,
                  document.getElementById("example2-input").value,
                ],
              })
              setFormState("en")
              break
            case "en":
              setEnglishDef({
                title: document.getElementById("title-input").value,
                definition: document.getElementById("def-input").value,
                pronunciation: document.getElementById("pronun-input").value,
                example: [
                  document.getElementById("example1-input").value,
                  document.getElementById("example2-input").value,
                ],
              })
              setFormState("sp")
              break
            case "sp":
              setSpanishDef({
                title: document.getElementById("title-input").value,
                definition: document.getElementById("def-input").value,
                pronunciation: document.getElementById("pronun-input").value,
                example: [
                  document.getElementById("example1-input").value,
                  document.getElementById("example2-input").value,
                ],
              })
              setFormState("fr")
              break
            case "fr":
              setFrenchDef({
                title: document.getElementById("title-input").value,
                definition: document.getElementById("def-input").value,
                pronunciation: document.getElementById("pronun-input").value,
                example: [
                  document.getElementById("example1-input").value,
                  document.getElementById("example2-input").value,
                ],
              })
              console.log({
                amharicDef,
                englishDef,
                spanishDef,
                frenchDef,
              })
              history.push("/search")
              break
            default:
              break
          }
        }}
      >
        {formState === "fr" ? "Submit" : "Next"}
      </button>
    </div>
  )
}

Form.defaultProps = {
  definitions: {
    amharicDef: {
      title: "",
      definition: "",
      pronunciation: "",
      example: ["", ""],
    },
    englishDef: {
      title: "",
      definition: "",
      pronunciation: "",
      example: ["", ""],
    },
    frenchDef: {
      title: "",
      definition: "",
      pronunciation: "",
      example: ["", ""],
    },
    spanishDef: {
      title: "",
      definition: "",
      pronunciation: "",
      example: ["", ""],
    },
  },
}

export default Form
