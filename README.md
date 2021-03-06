## Generasi Gigih Homework - Frontend Engineering 🎡🎢🎆
<img src="https://user-images.githubusercontent.com/32363208/125472904-fee7aea0-cc93-4e0f-bbda-7c9e0f55f6ef.png" height=150/>

### Release 0.1.3

1. Initialized the create react app and installed axios
2. Created app in the spotify API and retrieved the client id and the Oauth token for accessing API and stored it in .env file
3. Done connecting to the spotify API, and displayed a sample result!

### Release 0.2.1

1. Create a page in react which contains images of the album, song title and song artist
2. Created the layout in the App.jsx file
3. Used the data from https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js

#### Screenshot

<img src="https://user-images.githubusercontent.com/32363208/125472540-840f97c6-83ac-4c70-bc04-2c04efad1e92.png" width=750/>

### Release 0.2.2

Refactored the code into beautifully written React components!! 😊😊😊 

### Release 0.2.3
1. Updated the data from https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js (This contains array of tracks.)
2. Looped over the list to create the cards list of the tracks! 🎵
3. Added hyperlink on the artist text to go to Spotify playlists!

#### Screenshot
<img src="https://user-images.githubusercontent.com/32363208/125990781-3d48ed4b-4527-4b45-bf2e-15cedae90435.png" width=750/>

### Release 0.3.1
1. Implemented a search bar
2. Put client ID in .env
3. Used the query in the input text to modify the endpoint in spotify API
4. Looped through the json list in the results and put it in the props of SongItem

#### Screenshot
<img src="https://user-images.githubusercontent.com/32363208/126429222-74635b91-4661-4489-ab62-c11c8e3b6a70.png" width=750/>
<img src="https://user-images.githubusercontent.com/32363208/126429263-18e24fb6-4a74-4dcb-a958-83b20935b8f4.png" width=750/>

### Release 0.3.2
1. Refactored all the code to functional components instead of class components
2. Refactored the state to useState using React hooks
3. Select button on item changes to deselect button when clicked

#### Screenshot
<img src="https://user-images.githubusercontent.com/32363208/126691672-9ccc76f8-11bc-4606-9585-8ce49d2d99a5.png" width=750/>

### Release 0.3.3
1. Fixed previous bug on local database for selected albums
2. Post request worked to the spotify REST API for creating new playlists!

#### Screenshot
<img src="https://user-images.githubusercontent.com/32363208/126876496-91f40dd0-e2e2-4927-820b-92773ccdc1b8.png" width=750/>

### Release 0.4.1
Refactored the accessToken to storing in react redux using createSlice

### Release 0.4.2
1. Added react router to project
2. After login, the path will be to "/create-playlist"

#### Screenshot
```
path="/"
```
<img src="https://user-images.githubusercontent.com/32363208/127746720-3a0325a5-6966-477b-b85c-4bbd75676674.png" width=750/>

```
path="/create-playlist"
```
<img src="https://user-images.githubusercontent.com/32363208/127746621-baa16628-1b94-4aee-b719-ac530228321b.png" width=750/>

### Release 0.4.3
1. Fix any impure functions / mutable codes
2. Fix the eslint problems -> Declaring PropTypes, deleting unused components

### Release 0.5.1
1. Used flexbox for the SongItem component
2. Wrapped the data mapping with grid-container

### Release 0.5.2
1. Refactored login button to using material - ui component
2. Refactored the create playlist form to using material - ui component
3. Refactored the search bar to using material - ui component

#### Screenshot
<img src="https://user-images.githubusercontent.com/32363208/128551950-bc0eb530-168a-408d-90cd-6f04d1b0f826.png" width=750/>

### Release 0.5.3
1. Adding typescript to my app
2. Refactor all the components to typescript
3. Refactor homepage to typescript

### Release 0.6.1
Created test for song tracks component by using data from utils

#### Testing Code from `App.test.js`:
```
import '@testing-library/jest-dom';
import React from 'react';
import { render,screen } from '@testing-library/react';
import SongItem from './components/SongItem/index';
import data from './utils/albumData'

for (let i = 0;i < data.length; i++){
  it(`Item ${i}: ${data[i].album.name}`,()=>{
  
    render(
      <SongItem
          status={false}
          id={"1"}
          imgUrl={data[i].album.images[0].url}
          songTitle={data[i].album.name}
          artist={data[i].artists[0].name}
          />
    )    
    
    //selectButton
    expect(screen.getByText("Select")).toBeInTheDocument();
    //imgUrl
    const albumImg = screen.getByRole('img');
    expect(albumImg).toHaveAttribute('src',data[i].album.images[0].url);
    //songTitle
    expect(screen.getByText(data[i].album.name)).toBeInTheDocument();
    //artist
    expect(screen.getByText(data[i].artists[0].name));
  });
}
```

### Release 0.6.3
Just deployed my app!🚀 Can access it through https://spotifynya-brian.vercel.app/
