import React from "react"

import "./Searchbar.css"
import History from "../History/History"

function SearchInput({ variant, changeInputFocused, inputFocused }) {
  return (
    <div className="searchBox">
      <input
        onBlur={() => changeInputFocused(false)}
        onFocus={() => changeInputFocused(true)}
        type="text"
        placeholder="Search for a word"
        className={"searchbar searchbar--" + variant}
      />
      {inputFocused ? <History /> : null}
    </div>
  )
}

export default SearchInput
