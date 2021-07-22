import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';


const SongItem = (props) => {

    const [database,setDatabase] = useState([]);

    const showAlert = () => {
        alert(`You selected ${props.songTitle}!`);
        console.log(props.id);
    }

    return (
            <div className="itemContainer">
                <img src={props.imgUrl} alt="image"/>
                <p className="songTitle">{props.songTitle}</p>
                <a className="artist" href={props.artistLink}>{props.artist}</a>
                <br></br>
                <button className="selectButton" onClick={showAlert}>Select</button>
            </div>
    );
}

export default SongItem;