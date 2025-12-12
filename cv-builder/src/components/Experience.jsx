import { useState } from 'react'
import '../styles/Experience.css'

function Experience({ experience, setExperience }) {
  const [editingId, setEditingId] = useState(1)

  const handleChange = (id, field, value) => {
    setExperience(
      experience.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    )
  }

  const handleSubmit = () => {
    setEditingId(null)
  }

  const handleEdit = (id) => {
    setEditingId(id)
  }

  const handleAdd = () => {
    const newId = Math.max(...experience.map(e => e.id), 0) + 1
    setExperience([
      ...experience,
      { id: newId, companyName: '', positionTitle: '', responsibilities: '', dateFrom: '', dateUntil: '' }
    ])
    setEditingId(newId)
  }

  const handleDelete = (id) => {
    if (experience.length > 1) {
      setExperience(experience.filter(entry => entry.id !== id))
    }
  }

  return (
    <section className="section experience-section">
      <h2>Professional Experience</h2>
      
      {experience.map(entry => (
        <div key={entry.id} className="entry">
          {editingId === entry.id ? (
            <form className="form">
              <div className="form-group">
                <label htmlFor={`company-${entry.id}`}>Company Name</label>
                <input
                  type="text"
                  id={`company-${entry.id}`}
                  value={entry.companyName}
                  onChange={(e) => handleChange(entry.id, 'companyName', e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`position-${entry.id}`}>Position Title</label>
                <input
                  type="text"
                  id={`position-${entry.id}`}
                  value={entry.positionTitle}
                  onChange={(e) => handleChange(entry.id, 'positionTitle', e.target.value)}
                  placeholder="Enter position title"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`responsibilities-${entry.id}`}>Main Responsibilities</label>
                <textarea
                  id={`responsibilities-${entry.id}`}
                  value={entry.responsibilities}
                  onChange={(e) => handleChange(entry.id, 'responsibilities', e.target.value)}
                  placeholder="Describe your main responsibilities"
                  rows="4"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`dateFrom-${entry.id}`}>Date From</label>
                <input
                  type="text"
                  id={`dateFrom-${entry.id}`}
                  value={entry.dateFrom}
                  onChange={(e) => handleChange(entry.id, 'dateFrom', e.target.value)}
                  placeholder="e.g., 2020-01"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`dateUntil-${entry.id}`}>Date Until</label>
                <input
                  type="text"
                  id={`dateUntil-${entry.id}`}
                  value={entry.dateUntil}
                  onChange={(e) => handleChange(entry.id, 'dateUntil', e.target.value)}
                  placeholder="e.g., 2023-12"
                />
              </div>
              
              <div className="button-group">
                <button type="button" className="btn btn-submit" onClick={handleSubmit}>
                  Submit
                </button>
                {experience.length > 1 && (
                  <button type="button" className="btn btn-delete" onClick={() => handleDelete(entry.id)}>
                    Delete
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="display-section">
              <div className="info-item">
                <strong>Company:</strong> {entry.companyName || 'Not provided'}
              </div>
              <div className="info-item">
                <strong>Position:</strong> {entry.positionTitle || 'Not provided'}
              </div>
              <div className="info-item">
                <strong>Responsibilities:</strong> {entry.responsibilities || 'Not provided'}
              </div>
              <div className="info-item">
                <strong>Period:</strong> {entry.dateFrom || 'N/A'} - {entry.dateUntil || 'N/A'}
              </div>
              <button className="btn btn-edit" onClick={() => handleEdit(entry.id)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
      
      <button className="btn btn-add" onClick={handleAdd}>
        Add Experience
      </button>
    </section>
  )
}

export default Experience
