import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import api from '../utils/Api.js';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {Routes, Route, Navigate} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isAuth, setAuth] = React.useState(true);

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
      <Routes>
        <Route path='/mesto-react' element={<Navigate to="/sign-in" replace/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute loggedIn={true}/>}>
          <Route index element={<>
            <CurrentUserContext.Provider value={currentUser}>
              <Main
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onOpenImage={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
              <Footer/>
              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />
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
                isOpen={false}
                name={'delete-card'}
                title={'Вы уверены?'}
                buttonText={'Да'}
                onClose={closeAllPopups}
              />
              <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
              />
            </CurrentUserContext.Provider>
          </>}/>
        </Route>
      </Routes>
    </div>
  </div>);
}

export default App;
