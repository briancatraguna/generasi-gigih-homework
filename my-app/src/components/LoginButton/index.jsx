import React from 'react';
import './style.css';


const LoginButton = () => {
    const MY_WEBSITE = "http://localhost:3000/callback"
    const REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${MY_WEBSITE}&scope=playlist-modify-private`

    return (
        <a href={REDIRECT_URL}>
            <button className="button">LOGIN</button>
        </a>
    )
    
}

export default LoginButton;