import React from "react"
import "./Searchbar.css"

function SearchInput({ variant, changeInputFocused }) {
  return (
    <input
      onBlur={() => changeInputFocused(false)}
      onFocus={() => changeInputFocused(true)}
      type="text"
      placeholder="Search for a word"
      className={"searchbar searchbar--" + variant}
    />
  )
}

export default SearchInput
