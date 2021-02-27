import React from "react"
import ReactDOM from "react-dom"

import SearchPage from "./pages/SearchPage"
import "./App.css"

const App = () => (
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById("root"))
