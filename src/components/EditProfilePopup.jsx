import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser.name, currentUser.about])

  return (
    <PopupWithForm name={'edit-profile'}
                   title={'Редактировать профиль'}
                   isOpen={isOpen}
                   onClose={onClose}
                   buttonText={'Сохранить'}
                   onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input id="name"
               type="text"
               name="name"
               className="popup__input popup__input_profile_name"
               placeholder="Имя"
               minLength="2"
               maxLength="40"
               required
               value={name}
               onChange={handleChangeName}
        />
        <span id="name-error" className="popup__input-error"/>
      </label>
      <label className="popup__label">
        <input id="about"
               type="text"
               name="description"
               className="popup__input popup__input_profile_job"
               placeholder="Профессия"
               minLength="2"
               maxLength="200"
               required
               value={description}
               onChange={handleChangeDescription}
        />
        <span id="about-error" className="popup__input-error"/>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
