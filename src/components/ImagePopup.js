import React from 'react';

class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <>
                <div className={
                    this.props.isOpen
                        ? `popup popup_type_${this.props.name} popup_open`
                        : `popup popup_type_${this.props.name} `
                }
                >
                    <div name="popup-open-pic" className="popup__container">
                        <button type="button" className="popup__close-icon" onClick={this.props.onClose}></button>
                        <img className="popup__photo" src={this.props.card.link} alt={this.props.card.name}></img>
                        <p className="popup__photo-caption">{this.props.card.name}</p>
                    </div>
                </div>
            </>
        );
    }
}
export default ImagePopup;