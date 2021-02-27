import React, { useState } from "react"

import Logo from "../components/Logo/Logo"
import SearchBar from "../components/Searchbar/Searchbar"

const SearchPage = () => {
  const [inputFocused, setInputFocused] = useState(false)
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
    </React.StrictMode>
  )
}

export default SearchPage
