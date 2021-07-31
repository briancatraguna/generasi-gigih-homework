import React from 'react';
import { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CreatePlaylistForm = (props) => {

    const {accessTokenBearer} = useSelector((state) => state.token)

    const userId = props.userId;
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
            const response = await axios.post(endpoint,{
                name: title,
                description: description,
                collaborative: false,
                public: false
            },{
                headers: {
                    'Authorization': accessTokenBearer,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const id = response.data.id;
            await axios({
                method: 'post',
                url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
                data: {
                  uris: props.selectedTracks
                },
                headers: {
                  'Authorization': accessTokenBearer,
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                }
              })
        } catch(error){
            console.error(error);
        }
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
            <form onSubmit={handleSubmit}>
                <label className="label">
                    Title:
                    <input type="text" onChange={handleTitle}></input>
                </label>
                <label className="label">
                    Description:
                    <input type="text" onChange={handleDescription}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePlaylistForm;