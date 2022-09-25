import Head from "next/head"
import { useState } from "react"
import { BillTo } from "../components/billTo"
import { Address } from "../components/address"
import { ServicesForm } from "../components/serviceForm"

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

  const [service, setService] = useState({
    serviceName: "",
    quantity: "",
    unitCost: "",
    get priceTotal() {
      return Number(this.qty) * Number(this.cost)
    },
  })

  const handleServiceBtn = (e) => {
    e.preventDefault()
    if (service.serviceName && service.quantity && service.unitCost) {
      let newService = { ...service, id: new Date().getTime().toString() }
      setServicesSold([...servicesSold, newService])
      setService({
        serviceName: "",
        quantity: "",
        unitCost: "",
        get priceTotal() {
          return Number(this.qty) * Number(this.cost)
        },
      })
    }
  }
  const [servicesSold, setServicesSold] = useState([])
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

      <main>
        <h2>Fill in the form to create an invoice</h2>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            width: "100%",
            gap: "1.5rem",
          }}
        >
          <article className="form-section">
            <span className="form-buttons">
              <button onClick={() => setShowClientForm(true)}>
                Company Info
              </button>
              <button onClick={() => setShowClientForm(false)}>
                Client Info
              </button>
            </span>
            <form className="invoice-form" onSubmit={handleServiceBtn}>
              {/* <span className={showClientForm ? "" : "hideForm"}>
                <Address
                  setCompanyInfo={setCompanyInfo}
                  companyInfo={companyInfo}
                />
              </span>
              <span className={showClientForm ? "hideForm" : ""}>
                <BillTo setClientInfo={setClientInfo} clientInfo={clientInfo} />
              </span> */}
              <span>
                <ServicesForm
                  service={service}
                  setService={setService}
                  servicesSold={servicesSold}
                  setServicesSold={setServicesSold}
                  handleServiceBtn={handleServiceBtn}
                />
              </span>
            </form>
          </article>
          <Invoice
            companyInfo={companyInfo}
            clientInfo={clientInfo}
            servicesSold={servicesSold}
            setServicesSold={setServicesSold}
            className="invoice"
          />
        </section>
      </main>
    </>
  )
}

const Invoice = ({ companyInfo, className, clientInfo, servicesSold }) => {
  const populateUI = (ObjectName) => {
    return Object.values(ObjectName).map((val, index) => {
      return <li key={index}>{val}</li>
    })
  }
  return (
    <article className={className}>
      <header className="invoice-header">
        <h2>Invoice</h2>
        <ul>{populateUI(companyInfo)}</ul>
      </header>
      <main>
        <ul>
          <b className="info-heading">Billed To: </b>
          {populateUI(clientInfo)}
        </ul>
      </main>
      <table>
        <tr>
          <th>Service</th>
          <th>Unit Cost</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {servicesSold.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.serviceName}</td>
              <td>{item.unitCost}</td>
              <td>{item.quantity}</td>
              <td>{item.unitCost * item.quantity}</td>
            </tr>
          )
        })}
      </table>
    </article>
  )
}
