import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbum from "./components/TopAlbum/topAlbum";
import NewAlbum from "./components/NewAlbum/newAlbum";
import AlbumSection from "./components/AlbumSection/albumSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="component-wrapper">
      <AlbumSection endpoint={"top"} title={"Top Albums"} />
      </div>
      <div className="component-wrapper">
      <AlbumSection endpoint={"new"} title={"New Albums"} />
      </div>
    </div>
  );
}

export default App;
