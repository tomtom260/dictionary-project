import React from "react"
import Button from "../../Button/Button"
import "./Header.css"

function Header({ inputFocused, changeLang, lang }) {
  return (
    <div
      className={
        inputFocused
          ? "searchbar__header"
          : "searchbar__header searchbar__header--invisible"
      }
    >
      <div className="searchbar__header__left">
        <Button
          variant="secondary"
          onClick={() => changeLang("en")}
          active={lang === "en"}
        >
          English
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeLang("sp")}
          active={lang === "sp"}
        >
          Spanish
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeLang("fr")}
          active={lang === "fr"}
        >
          French
        </Button>
      </div>
      <div className="result__arrow header__arrow">
        <span>&rarr;</span>{" "}
      </div>
      <div className="searchbar__header__right">
        <Button disabled variant="secondary">
          Amharic
        </Button>
      </div>
    </div>
  )
}

export default Header
