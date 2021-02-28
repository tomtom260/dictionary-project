import React, { useState } from "react"

import Logo from "../components/Logo/Logo"
import SearchBar from "../components/Searchbar/Searchbar"
import Result from "../components/Result/Result"
import History from "../components/History/History"

const SearchPage = () => {
  const [inputFocused, setInputFocused] = useState(true)
  const changeInputFocused = isFocused => {
    setInputFocused(isFocused)
  }

  const [word, fetchWord] = useState(null)
  const [translation, fetchTranslation] = useState(null)
  const [text, setText] = useState("")

  return (
    <>
      <Logo variant={"secondary"} />
      <SearchBar
        fetchTranslation={fetchTranslation}
        fetchWord={fetchWord}
        text={text}
        setText={setText}
        // variant={inputFocused ? "secondary" : "primary"}
        // changeInputFocused={changeInputFocused}
        // inputFocused={inputFocused}
      />
      {!text ? <History /> : null}
      {word && translation ? (
        <Result word={word} translation={translation} />
      ) : null}
    </>
  )
}

export default SearchPage
