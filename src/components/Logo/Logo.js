import React, { useContext } from "react"

import "./Logo.css"
import { intlContext } from "../../translations/IntlProvider"

function Logo({ variant }) {
  const { changeLang, locale } = useContext(intlContext)
  return (
    <div>
      <h1 className={"logo logo--" + variant}>Dictionary</h1>
      <select
        value={locale}
        onChange={e => {
          changeLang(e.target.value)
          console.log(e.target.value)
        }}
      >
        <option value="en">English</option>
        <option value="sp">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  )
}

export default Logo
