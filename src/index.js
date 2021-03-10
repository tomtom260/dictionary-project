import React from "react"
import ReactDOM from "react-dom"

import SearchPage from "./pages/SearchPage"
import HomePage from "./pages/HomePage"

import "./App.css"
import IntlProvider from "./translations/IntlProvider"
import LoginPage from "./pages/LoginPage"

const App = () => (
  <React.StrictMode>
    <IntlProvider>
      {/* <SearchPage /> */}
      {/* <HomePage /> */}
      <LoginPage />
    </IntlProvider>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById("root"))
