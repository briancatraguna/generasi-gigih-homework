import './../src/App.css';
import 'regenerator-runtime/runtime';
import data from './data/albumData.js';
import TopNavigationMenu from './components/TopNavigationMenu/index.js'

console.log(process.env.REACT_APP_CLIENT_ID);

function showAlert(){
  alert(`You selected ${data.album.name} !`)
}

function App() {
  return (
    <div className="App">
      <div>
        <TopNavigationMenu name="Music"/>
        <TopNavigationMenu name="Podcast"/>
        <TopNavigationMenu name="Live"/>
        <TopNavigationMenu name="Radio"/>
      </div>
    
      <h1 className="songsTitle">Songs you might like</h1>
      <div className="itemContainer">
        <img src={data.album.images[0].url} alt="image"/>
        <p className="songTitle">{data.album.name}</p>
        <p className="artist">{data.album.artists[0].name}</p>
        <button className="selectButton" onClick={showAlert}>Select</button>
      </div>
    </div>
  );
}

export default App;
