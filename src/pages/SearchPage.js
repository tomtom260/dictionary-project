import React, { useState } from "react"

import Logo from "../components/Logo/Logo"
import SearchBar from "../components/Searchbar/Searchbar"
import Result from "../components/Result/Result"

const SearchPage = () => {
  const [inputFocused, setInputFocused] = useState(true)
  const changeInputFocused = isFocused => {
    setInputFocused(isFocused)
  }

  return (
    <React.StrictMode>
      <Logo variant={inputFocused ? "secondary" : "primary"} />
      <SearchBar
        variant={inputFocused ? "secondary" : "primary"}
        changeInputFocused={changeInputFocused}
        inputFocused={inputFocused}
      />
      <Result word="Word" translation="translation" />
    </React.StrictMode>
  )
}

export default SearchPage
