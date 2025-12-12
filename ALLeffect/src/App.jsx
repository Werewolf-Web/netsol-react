import { useState } from 'react'
import './styles/App.css'
import Counter from './components/Counter'
import DataFetcher from './components/DataFetcher'
import Timer from './components/Timer'
import FormHandler from './components/FormHandler'

function App() {
  const [activeComponent, setActiveComponent] = useState('counter')

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ALLeffect</h1>
        <p>Understanding React useEffect and Component Lifecycle</p>
      </header>
      
      <nav className="app-nav">
        <button
          className={`nav-button ${activeComponent === 'counter' ? 'active' : ''}`}
          onClick={() => setActiveComponent('counter')}
        >
          Counter
        </button>
        <button
          className={`nav-button ${activeComponent === 'timer' ? 'active' : ''}`}
          onClick={() => setActiveComponent('timer')}
        >
          Timer
        </button>
        <button
          className={`nav-button ${activeComponent === 'fetcher' ? 'active' : ''}`}
          onClick={() => setActiveComponent('fetcher')}
        >
          Data Fetcher
        </button>
        <button
          className={`nav-button ${activeComponent === 'form' ? 'active' : ''}`}
          onClick={() => setActiveComponent('form')}
        >
          Form Handler
        </button>
      </nav>

      <main className="app-main">
        {activeComponent === 'counter' && <Counter />}
        {activeComponent === 'timer' && <Timer />}
        {activeComponent === 'fetcher' && <DataFetcher />}
        {activeComponent === 'form' && <FormHandler />}
      </main>
    </div>
  )
}

export default App
