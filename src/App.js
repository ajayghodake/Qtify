// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
// import Section from "./components/Section/Section";
// import { FilteredSection } from "./components/FilterSection/FilterSection";
// import BasicTabs from "./components/BasicTabs/BasicTabs";
// import { useEffect, useState } from "react";

// function App() {
//   const [topAlbumSongs, setTopAlbumSongs] = useState([]);
//   const [newAlbumSongs, setNewAlbumSongs] = useState([]);
//   const [songsData, setSongsData] = useState([]);
//   const [value, setValue] = useState(0);
//   const [filteredData, setFilteredData] = useState([]);

//   const generateTopAlbumSongs = async () => {
//     try {
//       const res = await fetchTopAlbums();
//       setTopAlbumSongs(res);
//     } catch (error) {
//       console.log(error);
//       console.error("Error fetching top albums:", error);
//     }
//   };
//   const generateNewAlbumSongs = async () => {
//     try {
//       const res = await fetchNewAlbums();
//       setNewAlbumSongs(res);
//     } catch (error) {
//       console.log(error);
//       console.error("Error fetching top New Songs:", error);
//     }
//   };

//   const generateSongs = async () => {
//     try {
//       const res = await fetchSongs();
//       setSongsData(res);
//       setFilteredData(res);
//     } catch (error) {
//       console.log(error);
//       console.error("Error fetching Songs:", error);
//     }
//   };

//   const generateNewSongs = async (index) => {
//     let key = "";
//     if (index === 0) {
//       generateSongs();
//     } else if (index === 1) {
//       key = "rock";
//     } else if (index === 2) {
//       key = "pop";
//     } else if (index === 3) {
//       key = "jazz";
//     } else if (index === 4) {
//       key = "blues";
//     }

//     let newFilterdSongs = songsData.filter((song) => {
//       return song.genre.key === key;
//     });

//     setFilteredData(newFilterdSongs);
//   };

//   const handleIndexChange = async (newValue) => {
//     setValue(newValue);
//     generateNewSongs(newValue);
//   };

//   useEffect(() => {
//     generateTopAlbumSongs();
//     generateNewAlbumSongs();
//     generateSongs();
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <div className="component-wrapper">
//         <Section type="album" title="Top Albums" data={topAlbumSongs} />
//         <Section type="album" title="New Albums" data={newAlbumSongs} />
//       </div>
//       <FilteredSection
//         type="song"
//         title="Songs"
//         value={value}
//         filteredData={filteredData}
//         handleIndexChange={handleIndexChange}
//         toggle={false}
//       />
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
// import FilterSection from "./components/FilterSection/FilterSection";
import { getTopAlbums, getNewAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
// import styles from "./App.css";

function App() {
  //state to store top/new Albums, topAlbumSongs is just an array of 16-17 albums with some info and an array of songs in that album
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);

  //states related to the working of filterSection of songs:
  //state to store  original array of songs(unfiltered)
  const [songsData, setSongsData] = useState([]);

  //to store the index selected inn filters, can be ignored
  const [value, setValue] = useState(0);

  //to store the finally filtered songs
  const [filteredData, setFilteredData] = useState([]);

  //function to get top/new Album/Songs we will be using function from API file also
  const generateTopAlbumSongs = async () => {
    try {
      const res = await getTopAlbums();
      setTopAlbumSongs(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const res = await getNewAlbums();
      setNewAlbumSongs(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const generateSongs = async () => {
    try {
      console.log("generateSongs");
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    } catch (error) {
      return null;
    }
  };

  //function to generate filtered songs after selecting one tab
  const generateNewSongs = (index) => {
    let key = "";
    if (index === 0) {
      generateSongs();
    } else if (index === 1) {
      key = "rock";
    } else if (index === 2) {
      key = "pop";
    } else if (index === 3) {
      key = "jazz";
    } else if (index === 4) {
      key = "blues";
    }

    let newFilteredSongs = songsData.filter((song) => {
      console.log("key: ", key);
      return song.genre.key === key;
    });

    console.log(
      "generateNewSongs triggered and filtered this Data: ",
      newFilteredSongs
    );
    setFilteredData(newFilteredSongs);
  };
  //rock pop jazz blues

  //to handle any change in the selected tab of the songs section and call the generateNewSongs
  const handleIndexChange = async (newValue) => {
    console.log("handleChangeIndex triggered with newValue: ", newValue);
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
        <Section type="album" title="New Albums" data={newAlbumSongs} />
      </div>
      <div className="component-wrapper">
        <Section
          type="song"
          title="Songs"
          value={value}
          data={filteredData}
          handleIndexChange={handleIndexChange}
          toggle={false}
        />
      </div>
    </div>
  );
}

export default App;

// rcfe: react component function export
