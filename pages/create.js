import Head from "next/head"
import { useState } from "react"
import { BillTo } from "../components/billTo"
import { Address } from "../components/address"
import { Bar } from "../components/bar"
import { ServicesForm } from "../components/serviceForm"
import { Invoice } from "../components/invoice"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function Create() {
  const [showClientForm, setShowClientForm] = useState({
    form1: true,
    form2: false,
    form3: false,
  })
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
    id: new Date().getTime().toString(),
    get priceTotal() {
      return Number(this.qty) * Number(this.cost)
    },
  })

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

  const saveInvoice = () => {
    viewInvoice()
    setTimeout(() => {
      const invoice = document.querySelector(".invoice")
      html2canvas(invoice).then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [8.27, 11.6944444],
        })
        pdf.addImage(imgData, "JPEG", 0, 0)
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf")
      })
    }, 200)
  }

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
        <section className="container">
          <article className="form-section">
            <span className="form-buttons">
              <button
                onClick={() =>
                  setShowClientForm({
                    form1: true,
                    form2: false,
                    form3: false,
                  })
                }
              >
                Company
              </button>
              <button
                onClick={() =>
                  setShowClientForm({
                    form1: false,
                    form2: true,
                    form3: false,
                  })
                }
              >
                Client
              </button>
              <button
                onClick={() =>
                  setShowClientForm({
                    form1: false,
                    form2: false,
                    form3: true,
                  })
                }
              >
                Services
              </button>
            </span>
            <form className="invoice-form" onSubmit={handleServiceBtn}>
              <span className={!showClientForm.form1 ? "hideForm" : ""}>
                <Address
                  setCompanyInfo={setCompanyInfo}
                  companyInfo={companyInfo}
                />
              </span>
              <span className={!showClientForm.form2 ? "hideForm" : ""}>
                <BillTo setClientInfo={setClientInfo} clientInfo={clientInfo} />
              </span>
              <span className={!showClientForm.form3 ? "hideForm" : ""}>
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
          <div>
            <Bar viewInvoice={viewInvoice} saveInvoice={saveInvoice} />
            <Invoice
              companyInfo={companyInfo}
              clientInfo={clientInfo}
              servicesSold={servicesSold}
              setServicesSold={setServicesSold}
              className="invoice"
            />
          </div>
        </section>
      </main>
    </>
  )
}
