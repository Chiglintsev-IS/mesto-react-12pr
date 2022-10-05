import {Link} from "react-router-dom";
import PopupWithImage from "./PopupWithImage";
import React from "react";

function Register(props) {
  const {onSignUp, onClosePopup, isSuccess, isPopupOpen} = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSignUp({password, email});
  }

  return (
    <>
      <form className="auth-form__root" onSubmit={handleSubmit}>
        <h1 className="auth-form__title">Регистрация</h1>
        <input placeholder='Email' className="auth-form__input" onChange={handleChangeEmail}/>
        <input placeholder='Пароль' className="auth-form__input" onChange={handleChangePassword}/>
        <button type="submit" className="auth-form__submit-button">Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className="auth-redirect-link">Уже зарегистрированы? Войти</Link>

      <PopupWithImage isOpen={isPopupOpen} onClose={onClosePopup} isSuccess={isSuccess}/>
    </>
  );
}

export default Register;
