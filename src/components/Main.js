import React from 'react';
import api from '../utils/Api';
import avatar from '../images/user_JIC.jpeg';
import Card from './Card';


function Main(props) {

    const [userName, setUserName] = React.useState('Мона Лиза');
    const [userDescription, setUserDescription] = React.useState('госпожа');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => { console.log(err) })
    }, [])

    React.useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => { console.log(err) })
    }, [])

    return (

        <main className="main-content">
            <section className="profile">
                <div className="profile__wrapper">
                    <img src={userAvatar} alt="Портрет Жака-Ив Кусто" className="profile__avatar"></img>
                    <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__info-mode">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo" >
                <ul className="photo__list">
                    {cards.map(card => (<Card key={card._id} card={card} onCardClick={props.onCardClick} />))}
                </ul>
            </section>
        </main>

    );
}

export default Main;