import React, { useContext } from "react"

import "./Searchbar.css"
import History from "../History/History"
import { intlContext } from "../../translations/IntlProvider"

function SearchInput({ variant, changeInputFocused, inputFocused }) {
  const { message } = useContext(intlContext)
  return (
    <div className="searchBox">
      <input
        onBlur={() => changeInputFocused(false)}
        onFocus={() => changeInputFocused(true)}
        type="text"
        placeholder={message.searchPlaceholder}
        className={"searchbar searchbar--" + variant}
      />
      {/* {inputFocused ? <History /> : null} */}
    </div>
  )
}

export default SearchInput
