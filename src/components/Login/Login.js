import React, { useState } from "react"
import "./Login.css"

function Login() {
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  return (
    <div className="login">
      <h2 className="heading--secondary">Login</h2>
      <label className={emailFocused ? "label--focused" : null} htmlFor="">
        Email
      </label>
      <input
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        className="login__input"
        id="email"
        type="text"
      />
      <label className={passwordFocused ? "label--focused" : null} htmlFor="">
        Password
      </label>
      <input
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
        className="login__input"
        id="password"
        type="password"
      />
      <button className="button--login">Login</button>
    </div>
  )
}

export default Login
