import * as React from "react";
import PropTypes from "prop-types"; // For type-checking
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import "./Card.css";

export default function AreaCard({ data, type }) {
  switch (type) {
    case "album": {
      const { id, image, follows, title, slug, songs } = data;
      return (
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div key={id} className="card-container">
            <div className="card-box">
              <img src={image} alt={title || "Album"} loading="lazy"/>
              <Chip id="chip" label={`${follows} follows`} />
            </div>
            <div id="slug">{slug || "Unknown"}</div>
          </div>
        </Tooltip>
      );
    }

    case "song": {
      const { id, image, follows, title, slug, songs } = data;
      return (
          <div key={id} className="card-container">
            <div className="card-box">
              <img src={image} alt={title || "Album"} loading="lazy"/>
              <Chip id="chip" label={`${follows} follows`} />
            </div>
            <div id="slug">{slug || "Unknown"}</div>
          </div>
      );
    }
    default:
      return <></>;
  }
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
