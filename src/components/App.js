import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';


function App() {
  const [isEditAvatarPopupOpen, setEditAvatarOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIEditProfileOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);


  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  };

  function handleEditProfileClick() {
    setIEditProfileOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  };

  function closeAllPopups() {
    setEditAvatarOpen(false);
    setAddPlaceOpen(false);
    setIEditProfileOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
   

  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }


  return (
    <div className="page">

      <ImagePopup
        name="open-pic"
        card={selectedCard}
        onClose={closeAllPopups} 
        isOpen={isImagePopupOpen}
        />

      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        buttonName="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__container-inputs">
            <input type="url" id="popup__container_avatar-link" name="form__item-avatar-link" placeholder="Ссылка на аватар"
              className="popup__container-input popup__container-input_type_avatar-link" defaultValue="" required></input>
            <span className="popup__container popup__container_avatar-link-error"></span>
          </fieldset>
        }
      />

      <PopupWithForm
        name="update-profile"
        title="Редактировать профиль"
        buttonName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__container-inputs">
            <input type="text" id="popup__container_name" name="form__item-name" placeholder="Имя"
              className="popup__container-input popup__container-input_type_name" defaultValue="Жак-Ив Кусто" minLength="2"
              maxLength="40" required></input>
            <span className="popup__container popup__container_name-error"></span>
            <input type="text" id="popup__container_job" name="form__item-job" placeholder="О себе"
              className="popup__container-input popup__container-input_type_job" defaultValue="Исследователь океана" minLength="2"
              maxLength="200" required></input>
            <span className="popup__container popup__container_job-error"></span>
          </fieldset>
        }
      />

      <PopupWithForm
        name="add-pic"
        title="Новое место"
        buttonName="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__container-inputs">
            <input type="text" id="popup__container_place" name="form__item-place" placeholder="Название"
              className="popup__container-input popup__container-input_type_place" defaultValue="" minLength="2" maxLength="30"
              required></input>
            <span className="popup__container popup__container_place-error"></span>
            <input type="url" id="popup__container_link" name="form__item-link" placeholder="Ссылка на картинку"
              className="popup__container-input popup__container-input_type_link" defaultValue="" required></input>
            <span className="popup__container popup__container_link-error"></span>
          </fieldset>
        }
      />

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonName="Да"
      />

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;