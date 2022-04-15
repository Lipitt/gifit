import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardItem">
      <img src={data.images.downsized.url} alt="gif" />
    </div>
  );
};

export default Card;
