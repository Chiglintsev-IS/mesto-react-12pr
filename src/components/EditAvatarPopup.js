import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({url: inputRef.current.value});
  }

  return (
    <PopupWithForm name={'edit-profile-avatar'}
                   title={'Обновить аватар'}
                   isOpen={isOpen}
                   onClose={onClose}
                   buttonText={'Сохранить'}
                   onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input id="avatar-url"
               type="url"
               name="link"
               className="popup__input popup__input_profile_avatar"
               placeholder="Ссылка на аватар"
               ref={inputRef}
               required/>
        <span id="avatar-url-error" className="popup__input-error"/>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;