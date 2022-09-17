import React from 'react';

class PopupWithForm extends React.Component {
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
                    <form name={this.props.name} className="popup__container popup__form" noValidate>
                        <button type="button" className="popup__close-icon" onClick={this.props.onClose}></button>
                        <h2 className="popup__container-heading">{this.props.title}</h2>
                        {this.props.children}
                        <button type="submit" className="popup__button popup__container-save-button">{this.props.buttonName}</button>
                    </form>
                </div>
            </>
        );
    }
}
export default PopupWithForm;