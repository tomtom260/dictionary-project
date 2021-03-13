import React from "react"
import "./EditPage.css"
import Form from "../components/Form/Form"
import { useParams } from "react-router-dom"

function EditPage() {
  const definitions = {
    amharicDef: {
      title: "Translation",
      exapmles: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      ],
      definition: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      pronunciation: "\\thank\\",
    },
    englishDef: {
      title: "Translation",
      exapmles: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      ],
      definition: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      pronunciation: "\\thank\\",
    },
    frenchDef: {
      title: "Translation",
      exapmles: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      ],
      definition: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      pronunciation: "\\thank\\",
    },
    spanishDef: {
      title: "Translation",
      exapmles: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      ],
      definition: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      pronunciation: "\\thank\\",
    },
  }
  const name = useParams().name
  console.log(name)

  return (
    <div className="edit-page">
      <Form definitons={definitions} />
    </div>
  )
}

export default EditPage
