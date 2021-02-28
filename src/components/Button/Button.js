import React from "react"
import "./Button.css"

export default ({
  disabled,
  variant = "primary",
  children,
  active,
  onClick,
}) => {
  let className = active
    ? `button button--${variant} button--${variant}--active`
    : `button button--${variant}`

  return (
    <button
      disabled={disabled}
      onClick={() => {
        onClick()
      }}
      className={className}
    >
      {children}
    </button>
  )
}
