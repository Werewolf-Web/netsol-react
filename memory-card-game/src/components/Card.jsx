import '../styles/Card.css'

function Card({ id, name, image, onCardClick }) {
  const handleClick = () => {
    onCardClick(id)
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-inner">
        <img src={image} alt={name} className="card-image" />
        <p className="card-name">{name}</p>
      </div>
    </div>
  )
}

export default Card
