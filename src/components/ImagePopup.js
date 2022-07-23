function ImagePopup(props) {
  return (
    <div className={`popup popup_gallery-card-image ${props.card && 'popup_visible'}`}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <img src={props.card?.link || ''} alt={props.card?.name || ''} className="popup__image"/>
        <p className="popup__image-title">{props.card?.name || ''}</p>
      </div>
    </div>
  );
}

export default ImagePopup;