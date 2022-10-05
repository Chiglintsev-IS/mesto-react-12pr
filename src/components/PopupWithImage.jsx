import successImg from '../images/popup/success.svg';
import failImg from '../images/popup/fail.svg';

function PopupWithImage(props) {
  const {isOpen, onClose, isSuccess} = props;

  const SUCCESS_TEXT = 'Вы успешно' + '\n' + 'зарегистрировались!';
  const FAIL_TEXT = 'Что-то пошло не так!' + '\n' + 'Попробуйте ещё раз.';

  return (
    <div className={`popup popup_type_auth ${isOpen && 'popup_visible'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <img className="popup__notify-image" alt={isSuccess ? SUCCESS_TEXT : FAIL_TEXT} src={isSuccess ? successImg : failImg}/>
        <h3 className="popup__notify-title">{isSuccess ? SUCCESS_TEXT : FAIL_TEXT}</h3>
      </div>
    </div>
  );
}

export default PopupWithImage;
