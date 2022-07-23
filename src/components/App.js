import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />

        <PopupWithForm name={'edit-profile'}
                       title={'Редактировать профиль'}
                       children={
                         <form className="popup__form" name="edit-profile">
                           <label className="popup__label">
                             <input id="name"
                                    type="text"
                                    name="name"
                                    className="popup__input popup__input_profile_name"
                                    placeholder="Имя"
                                    minLength="2"
                                    maxLength="40"
                                    required/>
                             <span id="name-error" className="popup__input-error"></span>
                           </label>
                           <label className="popup__label">
                             <input id="about"
                                    type="text"
                                    name="about"
                                    className="popup__input popup__input_profile_job"
                                    placeholder="Профессия"
                                    minLength="2"
                                    maxLength="200"
                                    required/>
                             <span id="about-error" className="popup__input-error"></span>
                           </label>
                           <button className="popup__submit-button" type="submit">Сохранить</button>
                         </form>
                       }
                       isOpen = {isEditProfilePopupOpen}
                       onClose = {closeAllPopups}
        />

        <PopupWithForm name={'edit-profile-avatar'}
                       title={'Обновить аватар'}
                       children={
                         <form className="popup__form" name="edit-profile-avatar">
                           <label className="popup__label">
                             <input id="avatar-url"
                                    type="url"
                                    name="link"
                                    className="popup__input popup__input_profile_avatar"
                                    placeholder="Ссылка на аватар"
                                    required/>
                             <span id="avatar-url-error" className="popup__input-error"></span>
                           </label>
                           <button className="popup__submit-button" type="submit">Сохранить</button>
                         </form>
                       }
                       isOpen = {isEditAvatarPopupOpen}
                       onClose = {closeAllPopups}
        />

        <PopupWithForm name={'add-new-place'} 
                       title={'Новое место'} 
                       children={
                          <form className="popup__form" name="add-new-place">
                           <label className="popup__label">
                             <input id="place"
                                    type="text"
                                    name="place"
                                    className="popup__input popup__input_card_place"
                                    placeholder="Название"
                                    minLength="2"
                                    maxLength="30"
                                    required/>
                             <span id="place-error" className="popup__input-error"></span>
                           </label>
                           <label className="popup__label">
                             <input id="link"
                                    type="url"
                                    name="link"
                                    className="popup__input popup__input_card_link"
                                    placeholder="Ссылка на изображение места"
                                    required/>
                             <span id="link-error" className="popup__input-error"></span>
                           </label>
                           <button className="popup__submit-button popup__submit-button_disabled" disabled
                                   type="submit">Сохранить
                           </button>
                          </form>
                       }
                       isOpen = {isAddPlacePopupOpen}
                       onClose = {closeAllPopups}
        />
        
        <PopupWithForm name={'delete-card'}
                       title={'Вы уверены?'}
                       children={null}
                       onClose = {closeAllPopups}
        />

        <ImagePopup />

        <template id="gallery-card">
          <li className="gallery-card">
            <button className="gallery-card__delete" type="button"></button>
            <img src="#" alt="" className="gallery-card__image"/>
            <div className="gallery-card__caption">
              <h2 className="gallery-card__name"></h2>
              <div>
                <button className="gallery-card__like-button" type="button"></button>
                <p className="gallery-card__likes-quantity">0</p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
