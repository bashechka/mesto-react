import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef(currentUser.avatar);

  const [link, setLink] = React.useState('');

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      link
    });
  }

  React.useEffect(() => {
    setLink('');
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__container-inputs">
        <input
          onChange={handleLinkChange}
          type="url"
          id="popup__container_avatar-link"
          name="form__item-avatar-link"
          placeholder="Ссылка на аватар"
          className="popup__container-input popup__container-input_type_avatar-link"
          ref={avatarRef}
          value={link}
          required
        />
        <span className="popup__container popup__container_avatar-link-error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup