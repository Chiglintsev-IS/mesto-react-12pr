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

    api.handleCardLike({cardId: card._id, isLike: !isLiked})
      .then((updatedCard) => {
        const updatedCards = cards.map((card) => {
          return card._id === updatedCard._id
            ? updatedCard
            : card
        });
        setCards(updatedCards);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard({cardId: card._id})
      .then(resp => console.log(resp))
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
                  onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;