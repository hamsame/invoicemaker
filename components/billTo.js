import { useState } from "react"
export const BillTo = () => {
  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    clientFirstline: "",
    clientSecondline: "",
    clientCity: "",
    clientPostcode: "",
    clientPhone: "",
  })

  const handleClientChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    let newInfo = { ...clientInfo, [name]: value }
    setClientInfo(newInfo)
    localStorage.setItem("clientInfo", JSON.stringify(clientInfo))
  }

  return (
    <>
      <div className="formControl">
        <label htmlFor="clientName">Client Name: </label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          value={clientInfo.clientName}
          onChange={handleClientChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="clientFirstline">Client First Line: </label>
        <input
          type="text"
          id="clientFirstline"
          name="clientFirstline"
          value={clientInfo.clientFirstline}
          onChange={handleClientChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="clientSecondline">Client Second Line: </label>
        <input
          type="text"
          id="clientSecondline"
          name="clientSecondline"
          value={clientInfo.clientSecondline}
          onChange={handleClientChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="clientCity">Client City:</label>
        <input
          type="text"
          id="clientCity"
          name="clientCity"
          value={clientInfo.clientCity}
          onChange={handleClientChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="clientPostcode">Client Postcode:</label>
        <input
          type="text"
          id="clientPostcode"
          name="clientPostcode"
          value={clientInfo.clientPostcode}
          onChange={handleClientChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="clientPhone">Client Phone Number:</label>
        <input
          type="text"
          id="clientPhone"
          name="clientPhone"
          value={clientInfo.clientPhone}
          onChange={handleClientChange}
        />
      </div>
    </>
  )
}
