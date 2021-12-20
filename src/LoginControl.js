import React from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}
            </>
        )
    }
}

export default LoginControl;