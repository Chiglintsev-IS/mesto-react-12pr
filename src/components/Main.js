import React from 'react';
import avatar from '../images/avatar.jpg';
import Card from './Card';
import api from '../utils/Api.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  function handleCardClick(card) {
    props.onOpenImage(card);
  }

  React.useEffect(() => {
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
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="аватарка автора блога" className="profile__avatar-image"/>
          </div>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </section>
        <button className="add-gallery-elem-button" type="button" onClick={props.onAddPlace}></button>
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