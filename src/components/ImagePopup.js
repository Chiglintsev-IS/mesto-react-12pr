function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_gallery-card-image ${card && 'popup_visible'}`}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <img src={card?.link || ''} alt={card?.name || ''} className="popup__image"/>
        <p className="popup__image-title">{card?.name || ''}</p>
      </div>
    </div>
  );
}

export default ImagePopup;