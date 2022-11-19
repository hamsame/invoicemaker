import { useState, useEffect } from "react"

export const Bar = ({ viewInvoice, saveInvoice }) => {
  const [viewMode, setViewMode] = useState(false)
  const toggleView = () => {
    setViewMode(!viewMode)
    if (viewMode) {
      return viewInvoice()
    } else {
      return prepInvoice()
    }
  }

  const prepInvoice = () => {
    let elements = document.getElementsByClassName("hide-on-show")
    const hiddenElements = [].slice.call(elements)
    hiddenElements.map((el) => {
      if (el.classList.contains("true")) {
        el.classList.remove("true")
      }
    })
    document.querySelector(".form-section").style.display = "block"
    document.querySelector(".container").style.display = "grid"
    document.querySelector(".invoice").style.height = "initial"
    document.querySelector(".invoice").classList.remove("view")
  }

  useEffect(() => {
    toggleView()
  }, [])

  return (
    <div className="bar">
      <button onClick={() => toggleView()}>{viewMode ? "View" : "Edit"}</button>
      <button onClick={() => saveInvoice()}>Save</button>
    </div>
  )
}
