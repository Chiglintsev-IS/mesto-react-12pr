import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/Api.js';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => setCurrentUser({...userInfo}));
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

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <div className="page">
        <Header/>
        <CurrentUserContext.Provider value={currentUser}>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick} onOpenImage={handleCardClick}/>
        </CurrentUserContext.Provider>
        <Footer/>

        <PopupWithForm name={'delete-card'}
                       title={'Вы уверены?'}
                       onClose={closeAllPopups}
                       buttonText={'Да'}
                       isOpen={false}
        >
        </PopupWithForm>

        <PopupWithForm name={'edit-profile-avatar'}
                       title={'Обновить аватар'}
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
                       buttonText={'Сохранить'}
        >
          <label className="popup__label">
            <input id="avatar-url"
                   type="url"
                   name="link"
                   className="popup__input popup__input_profile_avatar"
                   placeholder="Ссылка на аватар"
                   required/>
            <span id="avatar-url-error" className="popup__input-error"/>
          </label>
        </PopupWithForm>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>

        <PopupWithForm name={'edit-profile-avatar'}
                       title={'Обновить аватар'}
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
                       buttonText={'Сохранить'}
        >
          <label className="popup__label">
            <input id="avatar-url"
                   type="url"
                   name="link"
                   className="popup__input popup__input_profile_avatar"
                   placeholder="Ссылка на аватар"
                   required/>
            <span id="avatar-url-error" className="popup__input-error"/>
          </label>
        </PopupWithForm>

        <PopupWithForm name={'add-new-place'}
                       title={'Новое место'}
                       isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
                       buttonText={'Сохранить'}
        >
          <label className="popup__label">
            <input id="place"
                   type="text"
                   name="place"
                   className="popup__input popup__input_card_place"
                   placeholder="Название"
                   minLength="2"
                   maxLength="30"
                   required/>
            <span id="place-error" className="popup__input-error"/>
          </label>
          <label className="popup__label">
            <input id="link"
                   type="url"
                   name="link"
                   className="popup__input popup__input_card_link"
                   placeholder="Ссылка на изображение места"
                   required/>
            <span id="link-error" className="popup__input-error"/>
          </label>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
