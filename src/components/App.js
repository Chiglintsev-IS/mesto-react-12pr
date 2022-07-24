import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick} onOpenImage={handleCardClick}/>
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
            <span id="avatar-url-error" className="popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name={'edit-profile'}
                       title={'Редактировать профиль'}
                       isOpen={isEditProfilePopupOpen}
                       onClose={closeAllPopups}
                       buttonText={'Сохранить'}
        >
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
            <span id="avatar-url-error" className="popup__input-error"></span>
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
