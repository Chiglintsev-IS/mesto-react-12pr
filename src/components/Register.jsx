import {Link} from "react-router-dom";

function Register() {
  return (
    <>
      <form className="auth-form__root">
        <h1 className="auth-form__title">Регистрация</h1>
        <input placeholder='Email' className="auth-form__input"/>
        <input placeholder='Пароль' className="auth-form__input"/>
        <button type="submit" className="auth-form__submit-button">Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className="auth-redirect-link">Уже зарегистрированы? Войти</Link>
    </>
  );
}

export default Register;
