import { useState, useEffect } from 'react'
import '../styles/Timer.css'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log('Cleanup function ran - interval cleared')
    }
  }, [isRunning])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const remaining = secs % 60
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`
  }

  return (
    <div className="component-card">
      <h2>Timer with Cleanup</h2>
      <p className="description">This component demonstrates cleanup functions in useEffect</p>
      
      <div className="timer-display">
        <div className="time">{formatTime(seconds)}</div>
      </div>

      <div className="button-group">
        <button 
          className="btn btn-start" 
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button 
          className="btn btn-stop" 
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="info-box">
        <h3>How it works:</h3>
        <ul>
          <li>The effect sets up an interval when isRunning is true</li>
          <li>The cleanup function (returned function) runs BEFORE the effect runs again</li>
          <li>Cleanup also runs when component unmounts</li>
          <li>This prevents memory leaks by clearing intervals/timeouts</li>
        </ul>
      </div>
    </div>
  )
}

export default Timer
