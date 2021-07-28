import React from 'react';
import { useState } from 'react';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx';
import LoginButton from './components/LoginButton/index.jsx';
import SearchBar from './components/SearchBar/index.jsx';
import CreatePlaylistForm from './components/CreatePlaylistForm/index.jsx';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from './redux/token.js';

const HomePage = () => {
    
    const {accessTokenBearer} = useSelector((state) => state.token)
    const dispatch = useDispatch();
    dispatch(getToken());

    const [data,setData] = useState(null);
    const [selectedList,setSelectedList] = useState([]);
    const [userId,setUserId] = useState("");

    const getData = (data) => {
        setData(data);
    }

    const pushToSelectedList = (id) => {
        const currentList = selectedList;
        currentList.push(id);
        setSelectedList(currentList);
    }

    const deleteFromSelectedList = (id) => {
        const currentList = selectedList;
        for (var i = 0;i<selectedList.length;i++){
            if (selectedList[i] === id){
                currentList.splice(i,1);
            }
        }
        setSelectedList(currentList);
    }

    const getStatus = (id) => {
        let status = false;
        for (var i = 0;i<selectedList.length;i++){
            if (selectedList[i] === id){
                status = true
            }
        }
        return status;
    }

    const getCurrentUserId = async() => {
        try {
            console.log(accessTokenBearer)
            const response = await axios.get("https://api.spotify.com/v1/me?",{
                headers: {
                    Authorization: accessTokenBearer,
                }
            })
            console.log(response.data)
            setUserId(response.data.id)
        } catch(error){
            console.error(error);
        }
    }

    let listData;
    if (data != null){
        listData = data.tracks.items.map((item,index)=>{
            const status = getStatus(item.uri)
            return (
                <SongItem
                    key = {item.id}
                    imgUrl = {item.album.images[0].url}
                    songTitle = {item.album.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].href}
                    id = {item.uri}
                    status = {status}
                    pushToSelectedList = {pushToSelectedList}
                    deleteFromSelectedList = {deleteFromSelectedList}
                />
            )
        })
    }

    getCurrentUserId();
    return(
        <div className="App">
            <LoginButton></LoginButton>
            <CreatePlaylistForm userId={userId} accessTokenBearer={accessTokenBearer} selectedTracks={selectedList}></CreatePlaylistForm>
            <SectionTitle title="Search your favorite albums!"/>
            <br></br>
            <SearchBar accessToken={accessTokenBearer} getData={getData}></SearchBar>
            <br></br>

            {listData}

        </div>
    );
}

export default HomePage;