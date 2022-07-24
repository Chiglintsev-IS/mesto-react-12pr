function PopupWithForm({name, title, isOpen, onClose, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_visible'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <h3 className="popup__header">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;