import React from "react"

import "./Logo.css"

function Logo({ variant }) {
  return (
    <div>
      <h1 className={"logo logo--" + variant}>Dictionary</h1>
    </div>
  )
}

export default Logo
