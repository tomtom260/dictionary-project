import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import EditPage from "../pages/EditPage"
import SearchPage from "../pages/SearchPage"
import AddPage from "../pages/AddPage"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/edit-entry" component={EditPage} />
        <Route path="/add-entry" component={AddPage} />
        <Route path="/search" component={SearchPage} />
        <Route component={HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
