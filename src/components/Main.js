import {useEffect, useState} from 'react';
import avatar from '../images/avatar.jpg';
import Card from './Card';
import api from '../utils/Api.js';

function Main({onOpenImage, onEditAvatar, onEditProfile, onAddPlace}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  function handleCardClick(card) {
    onOpenImage(card);
  }

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(
        ([userInfo, galleryCards]) => {
          setUserAvatar(userInfo.avatar);
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setCards([...galleryCards]);
        });
  }, []);

  return (
    <main className="content">
      <div className="content-header">
        <section className="profile">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img src={userAvatar} alt="аватарка автора блога" className="profile__avatar-image"/>
          </div>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
        </section>
        <button className="add-gallery-elem-button" type="button" onClick={onAddPlace}></button>
      </div>
      <section className="gallery-container">
        <ul className="gallery">
          {cards.map((card) => (
            <Card key={card._id}
                  card={card}
                  onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;