export const Invoice = ({
  companyInfo,
  className,
  clientInfo,
  servicesSold,
}) => {
  const populateUI = (ObjectName) => {
    return Object.values(ObjectName).map((val, index) => {
      return <li key={index}>{val}</li>
    })
  }
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
                  <td>{item && item.unitCost * item.quantity}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </article>
  )
}
