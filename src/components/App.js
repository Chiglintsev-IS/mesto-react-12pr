import logo from '../images/logo.svg';

// import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page page_preload">
        <header className="header">
          <img src={logo} alt="Логотип блога Место" className="header__logo"/>
        </header>
        <main className="content">
          <div className="content-header">
            <section className="profile">
              <div className="profile__avatar">
                <img src="<%=require('./images/avatar.jpg')%>" alt="аватарка автора блога"
                     className="profile__avatar-image"/>
              </div>
              <h1 className="profile__name">name</h1>
              <p className="profile__about">about</p>
              <button className="profile__edit-button" type="button"></button>
            </section>
            <button className="add-gallery-elem-button" type="button"></button>
          </div>
          <section className="gallery-container">
            <ul className="gallery"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup_profile-form">
          <div className="popup__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="popup__header">Редактировать профиль</h3>
            <form className="popup__form" name="edit-profile">
              <label className="popup__label">
                <input id="name"
                       type="text"
                       name="name"
                       className="popup__input popup__input_profile_name"
                       placeholder="Имя"
                       minLength="2"
                       maxLength="40"
                       required/>
                <span id="name-error" className="popup__input-error"></span>
              </label>
              <label className="popup__label">
                <input id="about"
                       type="text"
                       name="about"
                       className="popup__input popup__input_profile_job"
                       placeholder="Профессия"
                       minLength="2"
                       maxLength="200"
                       required/>
                <span id="about-error" className="popup__input-error"></span>
              </label>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_edit-profile-avatar">
          <div className="popup__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="popup__header">Обновить аватар</h3>
            <form className="popup__form" name="edit-profile-avatar">
              <label className="popup__label">
                <input id="avatar-url"
                       type="url"
                       name="link"
                       className="popup__input popup__input_profile_avatar"
                       placeholder="Ссылка на аватар"
                       required/>
                <span id="avatar-url-error" className="popup__input-error"></span>
              </label>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_gallery-form">
          <div className="popup__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="popup__header">Новое место</h3>
            <form className="popup__form" name="add-new-place">
              <label className="popup__label">
                <input id="place"
                       type="text"
                       name="place"
                       className="popup__input popup__input_card_place"
                       placeholder="Название"
                       minLength="2"
                       maxLength="30"
                       required/>
                <span id="place-error" className="popup__input-error"></span>
              </label>
              <label className="popup__label">
                <input id="link"
                       type="url"
                       name="link"
                       className="popup__input popup__input_card_link"
                       placeholder="Ссылка на изображение места"
                       required/>
                <span id="link-error" className="popup__input-error"></span>
              </label>
              <button className="popup__submit-button popup__submit-button_disabled" disabled
                      type="submit">Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_delete-card">
          <div className="popup__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="popup__header">Вы уверены?</h3>
            <button className="popup__submit-button" type="submit">Да</button>
          </div>
        </div>

        <div className="popup popup_gallery-card-image">
          <div className="popup__image-container">
            <button className="popup__close-button" type="button"></button>
            <img src="#" alt="" className="popup__image"/>
            <p className="popup__image-title"></p>
          </div>
        </div>

        <template id="gallery-card">
          <li className="gallery-card">
            <button className="gallery-card__delete" type="button"></button>
            <img src="#" alt="" className="gallery-card__image"/>
            <div className="gallery-card__caption">
              <h2 className="gallery-card__name"></h2>
              <div>
                <button className="gallery-card__like-button" type="button"></button>
                <p className="gallery-card__likes-quantity">0</p>
              </div>
            </div>
          </li>
        </template>
        <script>
          window.addEventListener("load", () => document
          .querySelector('.page_preload')
          .classList.remove('page_preload'));
        </script>
      </div>
    </div>
  );
}

export default App;
