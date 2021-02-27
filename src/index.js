import React, { useState } from "react"
import ReactDOM from "react-dom"

import Logo from "./Logo/Logo.js"
import Results from "./Results/Results.js"
import SearchBar from "./Searchbar/Searchbar"
import "./App.css"

const App = () => {
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
      />
      <Results />
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
