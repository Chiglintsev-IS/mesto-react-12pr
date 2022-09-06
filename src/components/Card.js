import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `gallery-card__delete-button ${isOwn ? 'gallery-card__delete-button_visible' : 'gallery-card__delete-button_hidden'}`;

  const isLiked = card.likes.some(like => like._id === currentUser._id);
  const cardLikeButtonClassName = `gallery-card__like-button ${isLiked && 'gallery-card__like-button_fill'}`;

  function handleImageClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handeDeleteClick() {
    onCardDelete(card)
  }

  return (
    <li className="gallery-card">
      <button className={cardDeleteButtonClassName} type="button" onClick={handeDeleteClick}/>
      <img src={card.link} alt={card.name} className="gallery-card__image" onClick={handleImageClick}/>
      <div className="gallery-card__caption">
        <h2 className="gallery-card__name">{card.name}</h2>
        <div>
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}/>
          <p className="gallery-card__likes-quantity">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;