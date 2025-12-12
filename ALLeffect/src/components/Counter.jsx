import { useState, useEffect } from 'react'
import '../styles/Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  const [effectRuns, setEffectRuns] = useState(0)

  useEffect(() => {
    console.log('Effect ran! Count is now:', count)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEffectRuns(prev => prev + 1)
  }, [count])

  return (
    <div className="component-card">
      <h2>Counter with useEffect</h2>
      <p className="description">This component demonstrates useEffect with dependency array</p>
      
      <div className="counter-display">
        <div className="counter-item">
          <label>Count:</label>
          <span className="counter-value">{count}</span>
        </div>
        <div className="counter-item">
          <label>Effect Runs:</label>
          <span className="counter-value">{effectRuns}</span>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn btn-decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="btn btn-reset" onClick={() => {
          setCount(0)
          setEffectRuns(0)
        }}>
          Reset
        </button>
      </div>

      <div className="info-box">
        <h3>How it works:</h3>
        <ul>
          <li>The effect runs AFTER render whenever count changes</li>
          <li>The dependency array [count] tells React to re-run when count changes</li>
          <li>Without a dependency array, effect runs after EVERY render</li>
          <li>With an empty array, effect runs only once (on mount)</li>
        </ul>
      </div>
    </div>
  )
}

export default Counter
