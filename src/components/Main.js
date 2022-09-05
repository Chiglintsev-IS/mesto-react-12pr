import Card from './Card';
import api from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';

function Main({onOpenImage, onEditAvatar, onEditProfile, onAddPlace}) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardClick(card) {
    onOpenImage(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.setLike({cardId: card._id})
        .then((likedCard) => {
          cards.map((card) => {
            return card._id === likedCard._id
              ? likedCard
              : card
          })
        })
    }

    if (!isLiked) {
      api.removeLike({cardId: card._id})
        .then((unLikedCard) => {
          cards.map((card) => {
            return card._id === unLikedCard._id
              ? unLikedCard
              : card
          })
        })
    }
  }

  React.useEffect(() => {
    api.getCards()
      .then(
        (galleryCards) => {
          setCards([...galleryCards]);
        });
  }, []);

  return (
    <main className="content">
      <div className="content-header">
        <section className="profile">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img src={currentUser.avatar} alt="аватарка автора блога" className="profile__avatar-image"/>
          </div>
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about">{currentUser.about}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
        </section>
        <button className="add-gallery-elem-button" type="button" onClick={onAddPlace}/>
      </div>
      <section className="gallery-container">
        <ul className="gallery">
          {cards.map((card) => (
            <Card key={card._id}
                  card={card}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;