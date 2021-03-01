import React from "react"

import "./Tree.css"
import TreeItem from "./TreeItem/TreeItem"

function Tree() {
  return (
    <div className="tree">
      <h2 className="heading__secondary">Nearby words</h2>
      <TreeItem word="thank you" translation="አመሰግናለሁ" />
      <TreeItem word="thank you" translation="አመሰግናለሁ" />
      <TreeItem word="thank you" translation="አመሰግናለሁ" active />
      <TreeItem word="thank you" translation="አመሰግናለሁ" />
      <TreeItem word="thank you" translation="አመሰግናለሁ" />
    </div>
  )
}

export default Tree
