import React from "react";

function Card(props) {
  return (
    <li className="photo__list-item">
      <button type="button" className="photo__delete-button"></button>
      <img className="photo__list-image" src={props.card.link} alt={props.card.name} onClick={() => props.onCardClick(props.card)} />
      <div className="photo__wrapper">
        <h2 className="photo__title">{props.card.name}</h2>
        <div className="photo__like-wrapper">
          <button type="button" className="photo__like-button"></button>
          <span className="photo__like-count" name="photo__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card