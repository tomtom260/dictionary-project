import React from "react"
import "./Button.css"

export default ({ variant = "primary", children, active, onClick }) => {
  let className = active
    ? `button--${variant} button--${variant}--active`
    : `button--${variant}`

  return (
    <button
      onClick={() => {
        onClick()
      }}
      className={className}
    >
      {children}
    </button>
  )
}
