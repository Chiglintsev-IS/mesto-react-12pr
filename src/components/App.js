import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/Api.js';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => setCurrentUser({...userInfo}))
      .catch(e => console.error(e));
  }, []);

  React.useEffect(() => {
    api.getCards()
      .then((galleryCards) => {
        setCards([...galleryCards]);
      })
      .catch(e => console.error(e));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(newUserInfo = {}) {
    api.changeUserInfo(newUserInfo)
      .then((userInfo) => setCurrentUser({...userInfo}))
      .then(() => closeAllPopups())
      .catch(e => console.error(e));
  }

  function handleUpdateAvatar(newAvatar = {}) {
    api.changeUserAvatar(newAvatar)
      .then((userInfo) => setCurrentUser({...userInfo}))
      .then(() => closeAllPopups())
      .catch(e => console.error(e));
  }

  function handleAddPlace(place) {
    api.createCard({name: place.name, link: place.link})
      .then((card) => {
        setCards([card, ...cards]);
      })
      .then(() => closeAllPopups())
      .catch(e => console.error(e));
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(liker => liker._id === currentUser._id);

    api.handleCardLike({cardId: card._id, isLike: !isLiked})
      .then((updatedCard) => {
        const updatedCards = cards.map((card) => {
          return card._id === updatedCard._id ? updatedCard : card
        });
        setCards(updatedCards);
      })
      .catch(e => console.error(e));
  }

  function handleCardDelete(card) {
    api.deleteCard({cardId: card._id})
      .then(() => {
        const updatedCards = cards.filter(i => i._id !== card._id);
        setCards(updatedCards);
      })
      .catch(e => console.error(e));
  }

  return (<div className="App">
    <div className="page">
      <Header/>
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onOpenImage={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>
      <Footer/>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />

      <PopupWithForm
        name={'delete-card'}
        title={'Вы уверены?'}
        onClose={closeAllPopups}
        buttonText={'Да'}
        isOpen={false}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  </div>);
}

export default App;
