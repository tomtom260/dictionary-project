import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "../Button/Button.css"

import "./Header.css"
import { intlContext } from "../../translations/IntlProvider"

function Header({ variant }) {
  const { changeLang, locale } = useContext(intlContext)
  const [langVisible, setLangVisible] = useState(false)
  return (
    <div className="header">
      <h1 className="header__logo">Dictionary</h1>
      <nav className="center">
        <Link to="/search">
          <button className="button button--header">Search</button>
        </Link>
        <Link to="/add-entry">
          <button className="button button--header">Add Entry</button>
        </Link>
      </nav>
      <div
        className={
          langVisible
            ? "header__language header__language--big"
            : "header__language"
        }
      >
        <div className="header__login-box">
          <Link to="/login">
            <svg
              className="header__login-icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "100%",
                width: "100%",
                // fill: "currentcolor",
                // color: "#f0f0f0",
              }}
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </Link>
        </div>
        <div
          onClick={() => setLangVisible(!langVisible)}
          className="header__lang-icon"
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "16px",
              width: "16px",
              fill: "currentcolor",
            }}
          >
            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
          </svg>
        </div>
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

export default Header
