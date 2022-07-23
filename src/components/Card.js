import React from "react";

function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="gallery-card">
      <button className="gallery-card__delete" type="button"></button>
      <img src={props.card.link} alt={props.card.name} className="gallery-card__image" onClick={handleClick} />
      <div className="gallery-card__caption">
        <h2 className="gallery-card__name">{props.card.name}</h2>
        <div>
          <button className="gallery-card__like-button" type="button"></button>
          <p className="gallery-card__likes-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;