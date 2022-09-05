import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';

function Card({onCardClick, card}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  // eslint-disable-next-line no-unused-vars
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  const isLiked = card.likes.some(like => like._id === currentUser._id);
  // eslint-disable-next-line no-unused-vars
  const cardLikeButtonClassName = `gallery-card__delete-button ${isLiked && 'gallery-card__like-button_fill'}`;

  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <li className="gallery-card">
      <button className="gallery-card__delete-button" type="button"/>
      <img src={card.link} alt={card.name} className="gallery-card__image" onClick={handleClick} />
      <div className="gallery-card__caption">
        <h2 className="gallery-card__name">{card.name}</h2>
        <div>
          <button className="gallery-card__like-button" type="button"/>
          <p className="gallery-card__likes-quantity">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;