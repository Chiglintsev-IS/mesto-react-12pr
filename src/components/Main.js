import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';

function Main({
                cards,
                onCardLike,
                onCardDelete,
                onOpenImage,
                onEditAvatar,
                onEditProfile,
                onAddPlace
              }) {

  const currentUser = React.useContext(CurrentUserContext);

  // мне нужно ререндерить после обновления cards
  // кажется сделал фигню, посоветуйте пожалуйста
  React.useEffect(() => {},[cards])

  function handleCardClick(card) {
    onOpenImage(card);
  }

  return (<main className="content">
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
        {cards.map((card) => (<Card key={card._id}
                                    card={card}
                                    onCardClick={handleCardClick}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
        />))}
      </ul>
    </section>
  </main>);
}

export default Main;