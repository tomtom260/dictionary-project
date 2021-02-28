import React, { useContext, useState } from "react"

import "./Logo.css"
import { intlContext } from "../../translations/IntlProvider"

function Logo({ variant }) {
  const { changeLang, locale } = useContext(intlContext)
  const [langVisible, setLangVisible] = useState(false)
  return (
    <div>
      <h1 className={"logo logo--" + variant}>Dictionary</h1>
      {/* <select
        className="header__select"
        value={locale}
        onChange={e => {
          changeLang(e.target.value)
          console.log(e.target.value)
        }}
      >
        <option value="en">English</option>
        <option value="sp">Spanish</option>
        <option value="fr">French</option>
      </select> */}
      <div className="header__language">
        <i
          onClick={() => setLangVisible(!langVisible)}
          className="header__lang-icon"
        >
          x
        </i>
        {langVisible ? (
          <div className="header__lang-box">
            <div
              onClick={() => {
                changeLang("en")
                setLangVisible(false)
              }}
              className="header__lang"
            >
              English
            </div>
            <div
              onClick={() => {
                changeLang("sp")
                setLangVisible(false)
              }}
              className="header__lang"
            >
              Spanish
            </div>
            <div
              onClick={() => {
                changeLang("fr")
                setLangVisible(false)
              }}
              className="header__lang"
            >
              French
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Logo
