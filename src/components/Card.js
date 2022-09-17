import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <>
                <li className="photo__list-item">
                    <button type="button" className="photo__delete-button"></button>
                    <img className="photo__list-image" src={this.props.card.link} alt={this.props.card.name} onClick={() => this.props.onCardClick(this.props.card)} />
                    <div className="photo__wrapper">
                        <h2 className="photo__title">{this.props.card.name}</h2>
                        <div className="photo__like-wrapper">
                            <button type="button" className="photo__like-button"></button>
                            <input type="text" className="photo__like-count" name="photo__like-count" defaultValue={this.props.card.likes.length} />
                        </div>
                    </div>
                </li>
            </>

        );
    }

}





