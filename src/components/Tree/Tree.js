import React from "react"

import "./Tree.css"
import TreeItem from "./TreeItem/TreeItem"

function Tree() {
  return (
    <div className="tree">
      <h2 className="heading__secondary">Nearby words</h2>
      <TreeItem word="think" translation="asebe" />
      <TreeItem word="think" translation="asebe" />
      <TreeItem word="think" translation="asebe" active />
      <TreeItem word="think" translation="asebe" />
      <TreeItem word="think" translation="asebe" />
    </div>
  )
}

export default Tree
