import React from "react"

import "./Tree.css"
import TreeItem from "./TreeItem/TreeItem"

function Tree({ tree, fetchResult }) {
  console.log(tree)
  return (
    <div className="tree">
      <h2 className="heading__secondary">Nearby words</h2>
      {tree.map(({ word, translation }, i) => (
        <TreeItem
          active={i === 2}
          word={word}
          translation={translation}
          fetchResult={fetchResult}
        />
      ))}
    </div>
  )
}

export default Tree
