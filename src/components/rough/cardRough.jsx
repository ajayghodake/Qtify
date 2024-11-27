import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import { FilteredSection } from "./components/FilterSection/FilterSection";
import BasicTabs from "./components/BasicTabs/BasicTabs";
import { useEffect, useState } from "react";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]); // Corrected Here: Typo in variable name
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const generateTopAlbumSongs = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumSongs(res);
    } catch (error) {
      console.error("Error fetching top albums:", error); // Corrected Here: More descriptive error message
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumSongs(res); // Corrected Here: Updated variable name
    } catch (error) {
      console.error("Error fetching new albums:", error); // Corrected Here: More descriptive error message
    }
  };

  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    } catch (error) {
      console.error("Error fetching songs:", error); // Corrected Here: More descriptive error message
    }
  };

  const generateNewSongs = (index) => {
    let key = "";
    if (index === 1) key = "rock";
    else if (index === 2) key = "pop";
    else if (index === 3) key = "jazz";
    else if (index === 4) key = "blues";

    if (index === 0) {
      setFilteredData(songsData); // Corrected Here: Simplified logic for "All Songs"
    } else {
      const newFilteredSongs = songsData.filter((song) => song.genre.key === key);
      setFilteredData(newFilteredSongs);
    }
  };

  const handleIndexChange = (newValue) => {
    setValue(newValue);
    generateNewSongs(newValue);
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="component-wrapper">
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbumSongs} /> {/* Corrected Here: Updated variable */}
      </div>
      <FilteredSection
        type="song"
        title="Songs"
        value={value}
        filteredData={filteredData}
        handleIndexChange={handleIndexChange}
      />
    </div>
  );
}

export default App;
