export const ServicesForm = ({ service, setService }) => {
  const handleService = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    let newInfo = { ...service, [name]: value }
    setService(newInfo)
  }

  return (
    <>
      <div className="formControl">
        <label htmlFor="serviceName">Service Name: </label>
        <input
          type="text"
          id="serviceName"
          name="serviceName"
          value={service.serviceName}
          onChange={handleService}
        />
      </div>
      <div className="formControl">
        <label htmlFor="unitCost">Unit Cost: </label>
        <input
          type="text"
          id="unitCost"
          name="unitCost"
          value={service.unitCost}
          onChange={handleService}
        />
      </div>
      <div className="formControl">
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={service.quantity}
          onChange={handleService}
        />
      </div>
      <button type="submit" className="submit-btn">
        Add Service
      </button>
    </>
  )
}
