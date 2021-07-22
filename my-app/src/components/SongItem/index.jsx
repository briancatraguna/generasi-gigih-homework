import React from 'react';
import { useState } from 'react';
import './style.css';


const SongItem = (props) => {

    const [status,setStatus] = useState(false)

    const showAlert = () => {
        setStatus(!status)
        console.log(status)
    }

    let button;
    if (status == false){
        button = <button className="selectButton" onClick={showAlert}>Select</button>
    } else {
        button = <button className="deselectButton" onClick={showAlert}>Deselect</button>
    }

    return (
            <div className="itemContainer">
                <img src={props.imgUrl} alt="image"/>
                <p className="songTitle">{props.songTitle}</p>
                <a className="artist" href={props.artistLink}>{props.artist}</a>
                <br></br>
                {button}
            </div>
    );
}

export default SongItem;