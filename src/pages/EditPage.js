import React from "react"
import "./EditPage.css"
import Form from "../components/Form/Form"

function EditPage() {
  return (
    <div className="edit-page">
      <div className="edit__searchbox">
        <h1 className="heading__primary">Edit Dictionary Entry</h1>
        <input type="text" className="edit__search" />
        <button className="button--primary">Search</button>
      </div>
      <Form />
    </div>
  )
}

export default EditPage
