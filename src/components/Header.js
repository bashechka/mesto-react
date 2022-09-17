import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <>
                <header className="header">
                    <div className="header__logo"></div>
                </header>
            </>

        );
    }

}


export default Header;