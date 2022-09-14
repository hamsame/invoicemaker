import Head from "next/head"
import { useState } from "react"
import { BillTo } from "../components/billTo"
import { Address } from "../components/address"

export default function Create() {
  const [hideSecondFormInput, setHideSecondFormInput] = useState(true)
  return (
    <>
      <Head>
        <title>Invoice Maker | Create</title>
        <meta
          name="description"
          content="Create an invoice to send to a client for your products or services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Fill in the form to create an invoice</h1>
        <article className="form-section">
          <span className="form-buttons">
            <button onClick={() => setHideSecondFormInput(true)}>
              Company Info
            </button>
            <button onClick={() => setHideSecondFormInput(false)}>
              Client Info
            </button>
          </span>
          <form className="invoice-form">
            {hideSecondFormInput ? <Address /> : <BillTo />}
          </form>
        </article>
      </section>
    </>
  )
}
