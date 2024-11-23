import * as React from "react";
import PropTypes from "prop-types"; // For type-checking
import Chip from "@mui/material/Chip";
import "./Card.css";

export default function AreaCard({ id, image, title, follows, slug }) {
  return (
    <div className="main">
    <div className="container">
      <div key={id} className="card-container">
        <div className="card-box">
          <img src={image} alt={title || "Album"} />
          <Chip id="chip" label={`${follows} follows`} />
        </div>
        <div id="slug">{slug || "Unknown"}</div>
      </div>
    </div>
    </div>
  );
}

// Define prop types
AreaCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  follows: PropTypes.number.isRequired,
  slug: PropTypes.string,
};

// Default props
AreaCard.defaultProps = {
  slug: "Unknown",
};

// import * as React from "react";
// import { useEffect, useState } from "react";
// import Api from "../../api/api.js";
// import Chip from "@mui/material/Chip";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./Card.css";
// // import Btn from "../Button/Button.jsx";

// export default function ActionAreaCard() {
//   const [apiData, setApiData] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [isExpanded, setIsExpanded] = useState(false); // State to handle "Show More/Collapse"

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await Api();
//         setApiData(res);
//       } catch (err) {
//         console.error("Error fetching API data", err);
//       } finally {
//         // setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 10 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
//   };

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h3>Top Albums</h3>
//         <button className="toggle-button" onClick={toggleExpanded}>
//           {isExpanded ? "Collapse" : "Show More"}
//         </button>
//       </div>

//       <div className={`wrapper ${isExpanded ? "grid-layout" : ""}`}>
//         {isExpanded ? (
//           // Grid layout when expanded
//           apiData?.map((album, index) => (
//             <div className="main">
//             <div key={album.id || index} className="card-container">
//               <div className="card-box">
//                 <img src={album.image} alt={album.title || "album"} />
//                 <Chip id="chip" label={`${album.follows || 0} follows`} />
//               </div>
//               <div id="slug">{album.slug || "unknown"}</div>
//             </div>
//             </div>
//           ))
//         ) : (
//           // Carousel layout when collapsed
//           <Carousel
//             responsive={responsive}
//             showDots={false}
//             containerClass="carousel-container"
//             itemClass="carousel-item-padding"
//             renderButtonGroupOutside={false}
//             arrows={true}
//           >
//             {apiData?.map((album, index) => (
//               <div key={album.id || index} className="card-container">
//                 <div className="card-box">
//                   <img src={album.image} alt={album.title || "album"} />
//                   <Chip id="chip" label={`${album.follows || 0} follows`} />
//                 </div>
//                 <div id="slug">{album.slug || "unknown"}</div>
//               </div>
//             ))}
//           </Carousel>
//         )}
//       </div>
//     </div>
//   );
// }
