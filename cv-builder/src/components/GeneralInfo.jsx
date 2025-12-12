import { useState } from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    setGeneralInfo({
      ...generalInfo,
      [name]: value
    })
  }

  const handleSubmit = () => {
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <section className="section general-info-section">
      <h2>General Information</h2>
      
      {isEditing ? (
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={generalInfo.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={generalInfo.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          
          <button type="button" className="btn btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div className="display-section">
          <div className="info-item">
            <strong>Name:</strong> {generalInfo.name || 'Not provided'}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {generalInfo.email || 'Not provided'}
          </div>
          <div className="info-item">
            <strong>Phone:</strong> {generalInfo.phone || 'Not provided'}
          </div>
          <button className="btn btn-edit" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  )
}

export default GeneralInfo
