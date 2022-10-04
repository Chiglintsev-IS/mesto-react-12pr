import logo from '../images/logo.svg';
import {Link, Route, Routes} from "react-router-dom";

function Header(props) {
  const {email} = {email: 'e'};

  function handleLogout() {
    console.log(123);
  }

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип блога Место" className="header__logo"/>
      </Link>
      <Routes>
        <Route path="/sign-up" element={
          <Link to="/sign-in" className="header__auth-link">Войти</Link>
        }/>
        <Route path="/sign-in" element={
          <Link to="/sign-up" className="header__auth-link">Регистрация</Link>
        }/>
        <Route path="/" element={
          <div className="header__profile-menu">
            {email && <p className="header__profile-email">{email}</p>}
            <Link to="/sign-in" className="header__auth-link" onClick={handleLogout}>Выйти</Link>
          </div>
        }/>
      </Routes>
    </header>
  );
}

export default Header;
