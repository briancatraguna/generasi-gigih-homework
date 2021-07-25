import React from 'react';
import './style.css';

const MY_WEBSITE = "https://spotifynya-brian.vercel.app/"
const REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${MY_WEBSITE}&scope=playlist-modify-private`

const LoginButton = () => {
    return(
        <a href={REDIRECT_URL}>
            <button className="button">LOGIN</button>
        </a>
    );
}

export default LoginButton;