import React from 'react';
import { useState } from 'react';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx';
import LoginButton from './components/LoginButton/index.jsx';
import SearchBar from './components/SearchBar/index.jsx';

const HomePage = () => {
    const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
    let accessToken = urlSearchParams.get('access_token');

    const [data,setData] = useState(null);

    let listData;
    if (data != null){
        listData = data.albums.items.map((item,index)=>{
            return (
                <SongItem
                    key = {item.id}
                    imgUrl = {item.images[0].url}
                    songTitle = {item.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].href}
                    id = {item.id}
                />
            )
        })
    }

    const getData = (data) => {
        setData(data);
    }

    return(
        <div className="App">
            <LoginButton></LoginButton>
            <SectionTitle title="Search your favorite albums!"/>
            <br></br>
            <SearchBar accessToken={accessToken} getData={getData}></SearchBar>
            <br></br>

            {listData}

        </div>
    );
}

export default HomePage;