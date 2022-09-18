import React from "react"
import Link from "next/link"
import { useGlobalContext } from "./context"

function Navbar() {
  const { smallNav, setSmallNav, changeNav } = useGlobalContext()

  return (
    <>
      <nav className={"navbar"}>
        <div className={"navbarWrapper"}>
          <h1 onClick={() => setSmallNav(false)} className={"navTitle"}>
            <Link href="/">
              <a>Invoice Maker</a>
            </Link>
          </h1>
          <button onClick={changeNav}>
            {!smallNav ? <>&#8801;</> : <>&#x2715;</>}
          </button>
          <ul className={smallNav ? "showLinks" : ""}>
            <li onClick={() => setSmallNav(false)}>
              <Link href="/create">
                <a>Create</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
