import '../styles/ScoreBoard.css'

function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <h2>Current Score</h2>
        <p className="score-value">{currentScore}</p>
      </div>
      <div className="score-item">
        <h2>Best Score</h2>
        <p className="score-value">{bestScore}</p>
      </div>
    </div>
  )
}

export default ScoreBoard
