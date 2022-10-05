import PopupWithImage from "./PopupWithImage";
import React from "react";

function Login(props) {
  const {onSignIn, onClosePopup, isPopupOpen} = props;

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
    onSignIn({password, email});
  }

  return (
    <>
      <form className="auth-form__root" onSubmit={handleSubmit}>
        <h1 className="auth-form__title">Вход</h1>
        <input placeholder='Email' className="auth-form__input" onChange={handleChangeEmail}/>
        <input placeholder='Пароль' className="auth-form__input" onChange={handleChangePassword}/>
        <button type="submit" className="auth-form__submit-button">Войти</button>
      </form>

      <PopupWithImage isOpen={isPopupOpen} onClose={onClosePopup} />
    </>
  );
}

export default Login;
