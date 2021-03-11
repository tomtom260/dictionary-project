import React from "react"
import ReactDOM from "react-dom"

import SearchPage from "./pages/SearchPage"
import HomePage from "./pages/HomePage"

import "./App.css"
import IntlProvider from "./translations/IntlProvider"
import AppRouter from "./router/AppRouter"

const App = () => (
  <React.StrictMode>
    <IntlProvider>
      <AppRouter />
      {/* <Form /> */}
    </IntlProvider>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById("root"))
