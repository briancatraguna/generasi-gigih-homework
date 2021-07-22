import React from 'react';
import { useState } from 'react';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx';
import LoginButton from './components/LoginButton/index.jsx';
import axios from 'axios';

const AppComponent = () => {
    const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
    let accessToken = urlSearchParams.get('access_token');

    const [textInput,setTextInput] = useState("");
    const [data,setData] = useState(null);

    let listData;
    if (data != null){
        listData = data.albums.items.map((item,index)=>{
            return (
                <SongItem
                    imgUrl = {item.images[0].url}
                    songTitle = {item.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].href}
                    id = {item.id}
                />
            )
        })
    }

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleSearch = () => {
        let query = textInput;
        let accessTokenBearer = `Bearer ${accessToken}`;
        const BASE_URL = "https://api.spotify.com/v1/search?q="
        const getSpotifySearch = async() => {
            try {
                const response = await axios.get(`${BASE_URL}${query}&type=album&limit=30`,{
                    headers: {
                        'Authorization': accessTokenBearer
                    }
                })
                setData(response.data);
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }

    return(
        <div className="App">
            <LoginButton></LoginButton>
            <SectionTitle title="Search your favorite albums!"/>
            <br></br>
            <input type="text" value={textInput} onChange={handleChange}></input>
            <button onClick={handleSearch}>Search!</button>
            <br></br>

            {listData}

        </div>
    );
}

export default AppComponent;