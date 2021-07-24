import React from 'react';
import { useState } from 'react';
import './style.css';
import axios from 'axios';

const CreatePlaylistForm = (props) => {

    const userId = props.userId;
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = () => {
        const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
        const submitPlaylist = () => {
            try {
                const response = axios.post(endpoint,{
                    name: title,
                    description: description,
                    collaborative: false,
                    public: false
                },{
                    headers: {
                        'Authorization': props.accessTokenBearer,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            } catch(error){
                console.error(error);
            }
        }
        submitPlaylist();
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <h3>Create Playlist</h3>
            <form>
                <label className="label">
                    Title:
                    <input type="text" onChange={handleTitle}></input>
                </label>
                <label className="label">
                    Description:
                    <input type="text" onChange={handleDescription}></input>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default CreatePlaylistForm;