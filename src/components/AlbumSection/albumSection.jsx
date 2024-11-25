import * as React from "react";
import { useEffect, useState } from "react";
import Api from "../../api/api.js";
import AreaCard from "../Card/Card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from '@mui/material';
import './albumSection.css';
// import './topAlbum.css'
// import axios from "axios";

export default function AlbumSection({endpoint, title}) {
  const [apiData, setApiData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // const top = "top";
      setLoading(true);
      try {
        const res = await Api(endpoint);
        setApiData(res);
        // const ress = await axios(`https://qtify-backend-labs.crio.do/albums/${endpoint}`);
        // setApiData(ress.data);
      } catch (err) {
        console.error("Error fetching API data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  console.log("Data Lenght", apiData.length);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>{title}</h3>
        <button className="toggle-button" onClick={toggleExpanded}>
          {isExpanded ? "Collapse" : "Show all"}
        </button>
      </div>

    
        {loading ? (
          <CircularProgress />
        ) : apiData.length === 0 ? (
          <div className="noData">No Data Available</div>
        ) : isExpanded ? (
          <div className="wrapper grid-layout">
            {apiData?.map((album, index) => (
              <AreaCard
                key={album.id || index}
                id={album.id}
                image={album.image}
                title={album.title}
                follows={album.follows}
                slug={album.slug}
              />
            ))}
          </div>
        ) : (
    
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 3000 },
                  items: 10,
                },
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
                tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
                mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
              }}
              showDots={false}
              customTransition="all 0.5s ease-in-out"
              infinite={false}
              containerClass="carousel-container"
              itemClass="carousel-item-padding"
              renderButtonGroupOutside={false}
              arrows={true}
              style={{
                transform: "translate3d(33px, 0px, 0px)",
              }}
            >
              {apiData?.map((album, index) => (
                <AreaCard
                  key={album.id || index} 
                  id={album.id}
                  image={album.image}
                  title={album.title}
                  follows={album.follows}
                  slug={album.slug}
                  link={`/album/${album.slug}`}
                />
              ))}
            </Carousel>
   
        )}
      </div>
   
  );
}




// // USING carousel.js component (swiper.js)

// import React, { useEffect, useState } from "react";
// import Api from "../../api/api.js";
// import AreaCard from "../Card/Card.jsx" // Import your new Carousel component
// import "react-multi-carousel/lib/styles.css";
// import SpringSlider from "../Carousel/carousel.jsx";

// export default function AlbumSection({ endpoint, title }) {
//   const [apiData, setApiData] = useState([]);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       try {
//         const res = await Api(endpoint);
//         setApiData(res);
//       } catch (err) {
//         console.error("Error fetching API data", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [endpoint]);

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h3>{title}</h3>
//         <button className="toggle-button" onClick={toggleExpanded}>
//           {isExpanded ? "Collapse" : "Show More"}
//         </button>
//       </div>

//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : apiData.length === 0 ? (
//         <div className="noData">No Data Available</div>
//       ) : isExpanded ? (
//         <div className="wrapper grid-layout">
//           {apiData?.map((album, index) => (
//             <AreaCard
//               key={album.id || index}
//               id={album.id}
//               image={album.image}
//               title={album.title}
//               follows={album.follows}
//               slug={album.slug}
//             />
//           ))}
//         </div>
//       ) : (
//         <div id="carousel-layout">
//           <SpringSlider data={apiData} />
//         </div>
//       )}
//     </div>
//   );
// }

