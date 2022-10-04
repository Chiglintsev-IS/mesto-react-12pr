import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({name, link});
  }

  return (
    <PopupWithForm name={'add-new-place'}
                   title={'Новое место'}
                   isOpen={isOpen}
                   onClose={onClose}
                   buttonText={'Сохранить'}
                   onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input id="place"
               type="text"
               name="place"
               className="popup__input popup__input_card_place"
               placeholder="Название"
               minLength="2"
               maxLength="30"
               required
               value={name}
               onChange={handleNameChange}
        />
        <span id="place-error" className="popup__input-error"/>
      </label>
      <label className="popup__label">
        <input id="link"
               type="url"
               name="link"
               className="popup__input popup__input_card_link"
               placeholder="Ссылка на изображение места"
               required
               value={link}
               onChange={handleLinkChange}
        />
        <span id="link-error" className="popup__input-error"/>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
