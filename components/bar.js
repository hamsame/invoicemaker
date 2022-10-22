import { useState, useEffect } from "react"

export const Bar = () => {
  const [viewMode, setViewMode] = useState(false)
  const toggleView = () => {
    setViewMode(!viewMode)
    if (viewMode) {
      return viewInvoice()
    } else {
      return prepInvoice()
    }
  }

  const viewInvoice = () => {
    let elements = document.getElementsByClassName("hide-on-show")
    const hiddenElements = [].slice.call(elements)
    hiddenElements.map((el) => {
      el.classList.add("true")
    })
    document.querySelector(".form-section").style.display = "none"
    document.querySelector(".container").style.display = "block"
    document.querySelector(".invoice").style.height = "100%"
    document.querySelector(".invoice").classList.add("view")
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
      <button>Save</button>
    </div>
  )
}
