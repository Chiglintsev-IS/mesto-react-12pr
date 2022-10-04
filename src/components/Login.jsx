import {Link} from "react-router-dom";

function Login() {
  return (
    <>
      <form className="auth-form__root">
        <h1 className="auth-form__title">Вход</h1>
        <input placeholder='Email' className="auth-form__input"/>
        <input placeholder='Пароль' className="auth-form__input"/>
        <button type="submit" className="auth-form__submit-button">Войти</button>
      </form>
    </>
  );
}

export default Login;
