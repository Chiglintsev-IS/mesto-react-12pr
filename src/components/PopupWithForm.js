function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_visible'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <h3 className="popup__header">{title}</h3>
        {children || <button className="popup__submit-button" type="submit">Да</button>}
      </div>
    </div>
  );
}

export default PopupWithForm;