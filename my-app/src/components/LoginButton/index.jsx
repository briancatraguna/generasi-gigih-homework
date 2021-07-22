import React from 'react';
import './style.css';

const REDIRECT_URL = "https://accounts.spotify.com/authorize?client_id=85a543ba79e54f91acdda93b9b01f6a8&response_type=token&redirect_uri=http://localhost:3000/"

class LoginButton extends React.Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            loginState: false,
            accessToken: "",
            tokenType: "",
            expiresIn: "",
        };
    }

    handleLogin(){
        const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
        const error = urlSearchParams.get('error');
        if (!error) {
            let accessToken = urlSearchParams.get('access_token')
            let tokenType = urlSearchParams.get('token_type')
            let expiresIn = urlSearchParams.get('expires_in')
            console.log(accessToken);
        }
    }

    render(){
        return(
            <a href={`${REDIRECT_URL}`} onClick={this.handleLogin}>Login</a>
        );
    }
}

export default LoginButton;