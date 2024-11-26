import * as React from "react";
import PropTypes from "prop-types"; // For type-checking
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import "./Card.css";

export default function AreaCard({ data, type }) {
  const {
    image,
    follows = 0,
    title = "Unknown",
    slug = "Unknown",
    songs = [],
  } = data;

  // Tooltip content based on type
  const tooltipContent =
    type === "album"
      ? `${songs.length} songs`
      : type === "song"
      ? "Single song"
      : "";

  const content = (
    <div className="card-container">
      <div className="card-box">
        <img
          src={image || "https://placehold.jp/159x170.png"}
          alt={title}
          loading="lazy"
        />
        <Chip id="chip" label={`${follows} follows`} />
      </div>
      <div id="slug">{slug}</div>
    </div>
  );

  return type === "album" ? (
    <Tooltip title={tooltipContent} placement="top" arrow>
      {content}
    </Tooltip>
  ) : (
    { content }
  );
}

// Define PropTypes for the component
AreaCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string,
    follows: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    songs: PropTypes.array,
  }).isRequired,
  type: PropTypes.oneOf(["album", "song"]).isRequired,
};

// Default props for optional fields
AreaCard.defaultProps = {
  data: {
    image: "https://placehold.jp/159x170.png",
    follows: 0,
    title: "Unknown",
    slug: "Unknown",
    songs: [],
  },
};

// // Using Switch Case
// import * as React from "react";
// import PropTypes from "prop-types"; // For type-checking
// import Chip from "@mui/material/Chip";
// import Tooltip from "@mui/material/Tooltip";
// import "./Card.css";

// export default function AreaCard({ data, type }) {
//   switch (type) {
//     case "album": {
//       const { id, image, follows, title, slug, songs } = data;
//       return (
//         <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
//           <div key={id} className="card-container">
//             <div className="card-box">
//               <img src={image || "https://placehold.jp/159x170.png"} alt={title || "Album"} loading="lazy"/>
//               <Chip id="chip" label={`${follows} follows || 0`} />
//             </div>
//             <div id="slug">{slug || "Unknown"}</div>
//           </div>
//         </Tooltip>
//       );
//     }

//     case "song": {
//       const { id, image, follows, title, slug, songs } = data;
//       return (
//           <div key={id} className="card-container">
//             <div className="card-box">
//             <img src={image || "https://placehold.jp/159x170.png"} alt={title || "Album"} loading="lazy"/>
//               <Chip id="chip" label={`${follows} follows || 0`} />
//             </div>
//             <div id="slug">{slug || "Unknown"}</div>
//           </div>
//       );
//     }
//     default:
//       return <></>;
//   }
// }

// // Define prop types
// AreaCard.propTypes = {
//   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   follows: PropTypes.number.isRequired,
//   slug: PropTypes.string,
// };

// // Default props
// AreaCard.defaultProps = {
//   slug: "Unknown",
// };
