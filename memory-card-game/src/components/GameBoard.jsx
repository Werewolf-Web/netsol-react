import Card from './Card'
import '../styles/GameBoard.css'

function GameBoard({ cards, onCardClick }) {
  return (
    <div className="gameboard">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  )
}

export default GameBoard
