import React from "react"

import SearchCard from "./SearchCard/SearchCard"
import "./SearchCards.css"

function SearchCards({ results, fetchResult }) {
  return (
    <div className="search-cards">
      {results.map(res => (
        <>
          <SearchCard
            word={res.word}
            translation={res.translation}
            fetchResult={fetchResult}
          />
        </>
      ))}
    </div>
  )
}
export default SearchCards
