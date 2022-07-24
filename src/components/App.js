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

        {/*Roland Sallatc*/}
        {/*Кнопка сабмита попапа есть у всех попапов с формой, */}
        {/*поэтому кнопку нужно перенести в сам компонент с попапом */}
        {/*и передавать её текст через пропсы, например buttonText='Сохранить'*/}

        {/*----*/}

        {/*вот тут совсем непонятно.*/}
        {/*У нас ведь кнопка внутри формы не всегда находится.*/}
        {/*Например для попапа удаления карточки "Вы уверены?" */}
        {/*И как в {children} передавать текст кнопки? ведь {children} мы явно внутрь засовываем?*/}

        <PopupWithForm name={'delete-card'}
                       title={'Вы уверены?'}
                       onClose={closeAllPopups}
                       // как props.buttonText использовать и зачем?
                       buttonText={'Да'}
                       isOpen={false}
        >
          {/*кнопка вне формы*/}
          <button className="popup__submit-button" type="submit">Да</button>
        </PopupWithForm>

        <PopupWithForm name={'edit-profile-avatar'}
                       title={'Обновить аватар'}
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
                       // как props.buttonText использовать и зачем?
                       buttonText={'Сохранить'}
        >
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
            {/*кнопка внутри формы*/}
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </PopupWithForm>

        <PopupWithForm name={'edit-profile'}
                       title={'Редактировать профиль'}
                       isOpen={isEditProfilePopupOpen}
                       onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm name={'edit-profile-avatar'}
                       title={'Обновить аватар'}
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm name={'add-new-place'}
                       title={'Новое место'}
                       isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
        >
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
