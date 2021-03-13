import React, { useState } from "react"

import SearchBar from "../components/Searchbar/Searchbar"
import Result from "../components/Result/Result"
import History from "../components/History/History"
import Tree from "../components/Tree/Tree"
import SearchCards from "../components/SearchCards/SearchCards"

const SearchPage = () => {
  // const [inputFocused, setInputFocused] = useState(true)
  // const changeInputFocused = isFocused => {
  //   setInputFocused(isFocused)
  // }

  const [results, fetchResults] = useState(null)
  const [result, fetchResult] = useState(null)
  const [tree, fetchTree] = useState(null)
  const [text, setText] = useState("")

  return (
    <>
      <SearchBar
        fetchResults={fetchResults}
        fetchResult={fetchResult}
        text={text}
        setText={setText}
        // variant={inputFocused ? "secondary" : "primary"}
        // changeInputFocused={changeInputFocused}
        // inputFocused={inputFocused}
      />
      {!results ? (
        <History />
      ) : !result ? (
        <SearchCards
          results={results}
          fetchTree={fetchTree}
          fetchResult={fetchResult}
        />
      ) : (
        <>
          <Result result={result} />
          <Tree tree={tree} fetchResult={fetchResult} />
          {/* <SearchCards results={results} fetchResult={fetchResult} /> */}
        </>
      )}
    </>
  )
}

export default SearchPage
