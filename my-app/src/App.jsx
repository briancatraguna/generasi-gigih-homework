import './../src/App.css';
import 'regenerator-runtime/runtime';
import data from './data/albumData.js';
import TopNavigationMenu from './components/TopNavigationMenu/index.jsx';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx'

console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  return (
    <div className="App">
      <TopNavigationMenu name="Music"/>
      <TopNavigationMenu name="Podcast"/>
      <TopNavigationMenu name="Live"/>
      <TopNavigationMenu name="Radio"/>
    
      <SectionTitle title="Songs you might like"/>
      <SongItem imgUrl={data.album.images[0].url} songTitle={data.album.name} artist={data.album.artists[0].name}/>
      {/* <div className="itemContainer">
                <img src={data.album.images[0].url} alt="image"/>
                <p className="songTitle">{data.album.name}</p>
                <p className="artist">{data.album.artists[0].name}</p>
                <button className="selectButton" onClick={showAlert}>Select</button>
            </div> */}
    </div>
  );
}

export default App;
