function Card({onCardClick, card}) {
  
  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <li className="gallery-card">
      <button className="gallery-card__delete" type="button"></button>
      <img src={card.link} alt={card.name} className="gallery-card__image" onClick={handleClick} />
      <div className="gallery-card__caption">
        <h2 className="gallery-card__name">{card.name}</h2>
        <div>
          <button className="gallery-card__like-button" type="button"></button>
          <p className="gallery-card__likes-quantity">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;