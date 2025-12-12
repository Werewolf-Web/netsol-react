import { useState } from 'react'
import '../styles/Education.css'

function Education({ education, setEducation }) {
  const [editingId, setEditingId] = useState(1)

  const handleChange = (id, field, value) => {
    setEducation(
      education.map(entry =>
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
    const newId = Math.max(...education.map(e => e.id), 0) + 1
    setEducation([
      ...education,
      { id: newId, schoolName: '', fieldOfStudy: '', dateOfStudy: '' }
    ])
    setEditingId(newId)
  }

  const handleDelete = (id) => {
    if (education.length > 1) {
      setEducation(education.filter(entry => entry.id !== id))
    }
  }

  return (
    <section className="section education-section">
      <h2>Education</h2>
      
      {education.map(entry => (
        <div key={entry.id} className="entry">
          {editingId === entry.id ? (
            <form className="form">
              <div className="form-group">
                <label htmlFor={`school-${entry.id}`}>School Name</label>
                <input
                  type="text"
                  id={`school-${entry.id}`}
                  value={entry.schoolName}
                  onChange={(e) => handleChange(entry.id, 'schoolName', e.target.value)}
                  placeholder="Enter school name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`field-${entry.id}`}>Field of Study</label>
                <input
                  type="text"
                  id={`field-${entry.id}`}
                  value={entry.fieldOfStudy}
                  onChange={(e) => handleChange(entry.id, 'fieldOfStudy', e.target.value)}
                  placeholder="Enter field of study"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`date-${entry.id}`}>Date of Study</label>
                <input
                  type="text"
                  id={`date-${entry.id}`}
                  value={entry.dateOfStudy}
                  onChange={(e) => handleChange(entry.id, 'dateOfStudy', e.target.value)}
                  placeholder="e.g., 2020-2024"
                />
              </div>
              
              <div className="button-group">
                <button type="button" className="btn btn-submit" onClick={handleSubmit}>
                  Submit
                </button>
                {education.length > 1 && (
                  <button type="button" className="btn btn-delete" onClick={() => handleDelete(entry.id)}>
                    Delete
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="display-section">
              <div className="info-item">
                <strong>School:</strong> {entry.schoolName || 'Not provided'}
              </div>
              <div className="info-item">
                <strong>Field of Study:</strong> {entry.fieldOfStudy || 'Not provided'}
              </div>
              <div className="info-item">
                <strong>Date:</strong> {entry.dateOfStudy || 'Not provided'}
              </div>
              <button className="btn btn-edit" onClick={() => handleEdit(entry.id)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
      
      <button className="btn btn-add" onClick={handleAdd}>
        Add Education
      </button>
    </section>
  )
}

export default Education
