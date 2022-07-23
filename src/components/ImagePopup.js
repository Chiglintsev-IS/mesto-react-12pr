function ImagePopup() {
  return (
    <div className="popup popup_gallery-card-image">
      <div className="popup__image-container">
        <button className="popup__close-button" type="button"></button>
        <img src="#" alt="" className="popup__image"/>
        <p className="popup__image-title"></p>
      </div>
    </div>
  );
}

export default ImagePopup;