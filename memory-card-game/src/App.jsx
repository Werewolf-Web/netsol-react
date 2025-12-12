import { useState, useEffect, useCallback } from 'react'
import './styles/App.css'
import ScoreBoard from './components/ScoreBoard'
import GameBoard from './components/GameBoard'

function App() {
  const [cards, setCards] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [clickedCards, setClickedCards] = useState(new Set())

  const shuffleCards = (cardsArray) => {
    const shuffled = [...cardsArray]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const fetchPokemon = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const pokemons = []
      const randomIds = new Set()

      while (randomIds.size < 12) {
        randomIds.add(Math.floor(Math.random() * 151) + 1)
      }

      for (const id of randomIds) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        pokemons.push({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        })
      }

      setCards(shuffleCards(pokemons))
      setClickedCards(new Set())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])

  const handleCardClick = (cardId) => {
    if (clickedCards.has(cardId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore)
      }
      setCurrentScore(0)
      setClickedCards(new Set())
    } else {
      const newClicked = new Set(clickedCards)
      newClicked.add(cardId)
      setClickedCards(newClicked)
      setCurrentScore(currentScore + 1)
    }

    setCards(shuffleCards(cards))
  }

  const handleNewGame = () => {
    fetchPokemon()
    setCurrentScore(0)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎮 Memory Card Game</h1>
        <p>Click on cards without repeating. Try to get the highest score!</p>
      </header>

      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />

      {error && <div className="error-message">Error loading Pokemon: {error}</div>}

      {loading ? (
        <div className="loading">Loading Pokemon...</div>
      ) : (
        <>
          <GameBoard cards={cards} onCardClick={handleCardClick} />
          <div className="button-container">
            <button className="new-game-btn" onClick={handleNewGame}>
              New Game
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
