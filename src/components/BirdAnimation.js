import React from "react";

function BirdAnimation() {
  return (
    <div className="bird-animation-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/Bird.png`}
        alt="Bird"
        className="bird-image"
      />
    </div>
  );
}

export default BirdAnimation;
