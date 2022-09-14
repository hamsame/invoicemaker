import { useState } from "react"
export const Address = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyname: "",
    firstline: "",
    secondline: "",
    city: "",
    postcode: "",
    postcode: "",
    phone: "",
  })

  const handleCompanyChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    let newInfo = { ...companyInfo, [name]: value }
    setCompanyInfo(newInfo)
    localStorage.setItem("companyInfo", JSON.stringify(companyInfo))
  }
  return (
    <>
      <div className="formControl">
        <label htmlFor="companyname">Your Company Name: </label>
        <input
          type="text"
          id="companyname"
          name="companyname"
          value={companyInfo.companyname}
          onChange={handleCompanyChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="firstline">First Line: </label>
        <input
          type="text"
          id="firstline"
          name="firstline"
          value={companyInfo.firstline}
          onChange={handleCompanyChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="secondline">Second Line: </label>
        <input
          type="text"
          id="secondline"
          name="secondline"
          value={companyInfo.secondline}
          onChange={handleCompanyChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={companyInfo.city}
          onChange={handleCompanyChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="postcode">Postcode:</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          value={companyInfo.postcode}
          onChange={handleCompanyChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={companyInfo.phone}
          onChange={handleCompanyChange}
        />
      </div>
    </>
  )
}
