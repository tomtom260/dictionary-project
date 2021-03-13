import React, { useContext, useState } from "react"

import Button from "../Button/Button"
import "./Searchbar.css"
import { intlContext } from "../../translations/IntlProvider"
import Header from "./Header/Header"

// localStorage.clear()
// localStorage.setItem(
//   "history",
//   JSON.stringify([
//     {
//       id: Math.floor(Math.random() * 100000),
//       word: "Word",
//       translation: "Translation",
//       from: "English",
//       to: "Amharic",
//     },
//     {
//       id: Math.floor(Math.random() * 100000),
//       word: "Word",
//       translation: "Translation",
//       from: "English",
//       to: "Amharic",
//     },
//     {
//       id: Math.floor(Math.random() * 100000),
//       word: "Word",
//       translation: "Translation",
//       from: "English",
//       to: "Amharic",
//     },
//   ])
// )

const word = {
  title: "Word",
  exapmles: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  ],
  definition: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  pronunciation: "\\thank\\",
}

const translation = {
  title: "Translation",
  exapmles: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  ],
  definition: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  pronunciation: "\\thank\\",
}

function SearchInput({ text, setText, fetchResults }) {
  const { locale, message } = useContext(intlContext)
  const [lang, changeLang] = useState(locale)
  // const [transTo, changeTransTo] = useState("am")
  const [inputFocused, changeInputFocused] = useState(true)

  return (
    <div className="searchbox">
      <Header
        changeLang={lg => changeLang(lg)}
        lang={lang}
        inputFocused={inputFocused}
      />
      <div className="searchbar__input">
        <input
          onBlur={() => changeInputFocused(false)}
          onFocus={() => changeInputFocused(true)}
          type="text"
          placeholder={message.searchPlaceholder}
          className="searchbar"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button
          disabled={text === ""}
          onClick={() => {
            fetchResults([
              {
                word: "Wor",
                translation: "Tran",
                pronunciation: "/thank/",
                example:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                word: "Word jhb",
                translation: "slations",
                pronunciation: "/thank/",
                example:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                word: "Word ill",
                translation: "There",
                pronunciation: "/thank/",
                example:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ])
          }}
          variant={"primary"}
        >
          {message.search}
        </Button>
      </div>
    </div>
  )
}

export default SearchInput
