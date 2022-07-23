import avatar from '../images/avatar.jpg'

function Main(props) {

  return (
    <main className="content">
      <div className="content-header">
        <section className="profile">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={avatar} alt="аватарка автора блога"
                 className="profile__avatar-image"/>
          </div>
          <h1 className="profile__name">name</h1>
          <p className="profile__about">about</p>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </section>
        <button className="add-gallery-elem-button" type="button" onClick={props.onAddPlace}></button>
      </div>
      <section className="gallery-container">
        <ul className="gallery"></ul>
      </section>
    </main>
  );
}

export default Main;