import React from "react";

import "./CoverImage.css";

const imageUrl =
  "https://img.freepik.com/premium-vector/navigation-map-street-3d-location-pin-locator-pins-pointer-navigator-maps-locations-marker_102902-1053.jpg?w=2000";
const CoverImage = () => {
  return (
    <div>
      <img className="cover" src={imageUrl} alt="cover image" />
    </div>
  );
};

export default CoverImage;
