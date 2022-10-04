function PopupWithForm({name, title, isOpen, buttonText, children, onClose, onSubmit}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_visible'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <h3 className="popup__header">{title}</h3>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="popup__submit-button" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;