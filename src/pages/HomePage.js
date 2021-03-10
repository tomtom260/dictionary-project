import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Features from "../components/Features/Features"

import "./HomePage.css"

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Features />
      <Footer />
    </div>
  )
}
