import { useEffect } from "react"

export const Invoice = ({
  companyInfo,
  className,
  clientInfo,
  servicesSold,
  setServicesSold,
}) => {
  const populateUI = (ObjectName) => {
    return Object.values(ObjectName).map((val, index) => {
      return <li key={index}>{val}</li>
    })
  }
  const getSubTotal = () => {
    let prices = []
    const elements = document.getElementsByClassName("service-cost")
    const subtotalEl = [].slice.call(elements)
    subtotalEl.map((item) => {
      let itemPrice = Number(item.textContent)
      prices.push(itemPrice)
    })
    let sum = prices.reduce((a, b) => a + b, 0)
    document.getElementById("t").textContent = `Subtotal: £${sum.toFixed(2)}`
    const vatIncluded = sum.toFixed(2) * 1.2
    document.getElementById(
      "total"
    ).textContent = `Total: £${vatIncluded.toFixed(2)} (VAT included)`
  }

  const deleteService = (id) => {
    let newServices = servicesSold.filter((service) => service.id != id)
    setServicesSold(newServices)
  }

  useEffect(() => {
    getSubTotal()
  }, [servicesSold])

  return (
    <article className={className}>
      <header className="invoice-header">
        <h2>Invoice</h2>
        <ul>{companyInfo && populateUI(companyInfo)}</ul>
      </header>
      <main>
        <ul>
          <b className="info-heading">Billed To: </b>
          {clientInfo && populateUI(clientInfo)}
        </ul>
      </main>
      <table style={{ margin: "7.5vh 0", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Unit Cost</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {servicesSold &&
            servicesSold.map((item, index) => {
              return (
                <tr
                  key={index}
                  style={{ padding: "2rem 0", background: "aqua" }}
                >
                  <td>{item && item.serviceName}</td>
                  <td>{item && item.unitCost}</td>
                  <td>{item && item.quantity}</td>
                  <td className="service-cost">
                    {item && item.unitCost * item.quantity}
                  </td>
                  <td
                    className="hide-on-show"
                    onClick={() => deleteService(item.id)}
                  >
                    Delete
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <p id="t">Subtotal: </p>
      <p id="total"></p>
    </article>
  )
}
