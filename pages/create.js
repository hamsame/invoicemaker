import Head from "next/head"
import { useState } from "react"
import { BillTo } from "../components/billTo"
import { Address } from "../components/address"

export default function Create() {
  const [showClientForm, setShowClientForm] = useState(true)

  const [companyInfo, setCompanyInfo] = useState({
    companyname: "",
    firstline: "",
    secondline: "",
    city: "",
    postcode: "",
    postcode: "",
    phone: "",
  })

  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    clientFirstline: "",
    clientSecondline: "",
    clientCity: "",
    clientPostcode: "",
    clientPhone: "",
  })
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
            <button onClick={() => setShowClientForm(true)}>
              Company Info
            </button>
            <button onClick={() => setShowClientForm(false)}>
              Client Info
            </button>
          </span>
          <form className="invoice-form">
            <span className={showClientForm ? "" : "hideForm"}>
              <Address
                setCompanyInfo={setCompanyInfo}
                companyInfo={companyInfo}
              />
            </span>
            <span className={showClientForm ? "hideForm" : ""}>
              <BillTo setClientInfo={setClientInfo} clientInfo={clientInfo} />
            </span>
          </form>
        </article>
      </section>
    </>
  )
}
