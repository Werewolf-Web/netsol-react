import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [education, setEducation] = useState([
    { id: 1, schoolName: '', fieldOfStudy: '', dateOfStudy: '' }
  ])

  const [experience, setExperience] = useState([
    { id: 1, companyName: '', positionTitle: '', responsibilities: '', dateFrom: '', dateUntil: '' }
  ])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder</h1>
      </header>
      <main className="app-main">
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
      </main>
    </div>
  )
}

export default App
