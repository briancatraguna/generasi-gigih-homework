import React from 'react';
import './style.css';

const REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/callback&scope=playlist-modify-private`

const LoginButton = () => {
    return(
        <a href={REDIRECT_URL}>
            <button className="button">LOGIN</button>
        </a>
    );
}

export default LoginButton;