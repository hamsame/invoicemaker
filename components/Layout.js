import React from "react"
import { useGlobalContext } from "./context"
import Navbar from "./Navbar"

function Layout({ children }) {
  const { smallNav } = useGlobalContext()
  return (
    <>
      <Navbar />
      {!smallNav ? <main>{children}</main> : null}
    </>
  )
}

export default Layout
