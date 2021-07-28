import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';

const SearchBar = (props) => {

    const [textInput,setTextInput] = useState("");

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleSearch = () => {
        const query = textInput;
        let accessTokenBearer = props.accessToken;
        const BASE_URL = "https://api.spotify.com/v1/search?q="
        const getSpotifySearch = async() => {
            try {
                const response = await axios.get(`${BASE_URL}${query}&type=track&limit=30`,{
                    headers: {
                        'Authorization': accessTokenBearer
                    }
                })
                props.getData(response.data);
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }

    return(
        <div>
            <input type="text" value={textInput} onChange={handleChange}></input>
            <button onClick={handleSearch}>Search!</button>
        </div>
    );
}

export default SearchBar;