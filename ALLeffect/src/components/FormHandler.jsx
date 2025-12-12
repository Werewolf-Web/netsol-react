import { useState, useEffect } from 'react'
import '../styles/FormHandler.css'

function FormHandler() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (formData.username.length < 3 && formData.username.length > 0) {
      newErrors.username = 'Username must be at least 3 characters'
    }

    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'Email must be valid'
    }

    if (formData.age && (parseInt(formData.age) < 18 || parseInt(formData.age) > 120)) {
      newErrors.age = 'Age must be between 18 and 120'
    }

    setErrors(newErrors)
  }

  useEffect(() => {
    validateForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (Object.keys(errors).length === 0 && formData.username && formData.email && formData.age) {
      setSubmitted(true)
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="component-card">
      <h2>Form Handler</h2>
      <p className="description">This component demonstrates avoiding infinite useEffect loops</p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          <h3>Form submitted successfully!</h3>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <button onClick={() => setSubmitted(false)} className="btn btn-close">
            Close
          </button>
        </div>
      )}

      <div className="info-box">
        <h3>How it works:</h3>
        <ul>
          <li>validateForm is declared before useEffect to avoid dependency issues</li>
          <li>useEffect runs whenever formData changes (dependency array: [formData])</li>
          <li>Validation happens in a separate effect to avoid infinite loops</li>
          <li>The key: validation doesn't update formData, it only updates errors</li>
          <li>If validation updated formData, it would cause infinite loop!</li>
        </ul>
      </div>
    </div>
  )
}

export default FormHandler
