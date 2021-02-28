import React, { useState, createContext } from "react"

import en from "./en"
import fr from "./fr"
import sp from "./sp"
const intlContext = createContext()

function IntlProvider({ children }) {
  const [locale, setLocale] = useState("en")
  const [message, setMessage] = useState(en)

  const changeLang = lang => {
    setLocale(lang)
    switch (lang) {
      case "en":
        setMessage(en)
        break
      case "fr":
        setMessage(fr)
        break
      case "sp":
        setMessage(sp)
        break
      default:
        setMessage(en)
    }
  }

  return (
    <intlContext.Provider
      value={{
        locale,
        message,
        changeLang,
      }}
    >
      {children}
    </intlContext.Provider>
  )
}

export { IntlProvider as default, intlContext }
