import React from "react"
import Button from "../../Button/Button"

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
      {/* <span>&rarr;</span> */}
      <div className="searchbar__header__right">
        <Button variant="secondary">Amharic</Button>
      </div>
    </div>
  )
}

export default Header
