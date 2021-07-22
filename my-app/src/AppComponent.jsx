import React from 'react';
import { useState } from 'react';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx';
import LoginButton from './components/LoginButton/index.jsx';
import axios from 'axios';


class AppComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);

        const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
        let accessToken = urlSearchParams.get('access_token');
        
        this.state = {
            textInput: "",
            accessToken: accessToken,
            data: null
        }

        if (accessToken!=null){
            this.setState({
                textInput: "",
                accessToken: accessToken,
                data: {}
            })
            console.log(this.state.accessToken)
        }

        
    }

    handleSearch(){
        let query = this.state.textInput;
        let accessToken = `Bearer ${this.state.accessToken}`;
        const BASE_URL = "https://api.spotify.com/v1/search?q="
        const getSpotifySearch = async() => {
            try {
                const response = await axios.get(`${BASE_URL}${query}&type=album&limit=30`,{
                    headers: {
                        'Authorization': accessToken
                    }
                })
                this.setState({
                    data: response.data
                })
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }

    handleChange(e){
        this.setState({textInput: e.target.value})
    }

    render(){
        let listData;
        const theLink = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/callback&scope=playlist-modify-private`
        if (this.state.data != null){
            listData = this.state.data.albums.items.map((item,index)=>{
                return (
                    <SongItem
                    imgUrl = {item.images[0].url}
                    songTitle = {item.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].href}
                    />
                )
            })
        }
        return(
            <div className="App">

                <LoginButton></LoginButton>
                
                <SectionTitle title="Search your favorite albums!"/>
                <br></br>
                <input type="text" value={this.state.textInput} onChange={this.handleChange}></input>
                <button onClick={this.handleSearch}>Search!</button>
                <br></br>

                {listData}

            </div>
        )
        
    }
}

export default AppComponent;