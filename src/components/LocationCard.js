import React from "react";

function LocationCard({location}) {
const {name, type, image, address} = location

  return (
    <li className="card">
      <img src={image} alt={"location image"} />
      <h4>{name}</h4>
      <p>Type: {type}</p> 
      <p>Address: {address}</p> 
      {true ? (
        <button className="primary">Add To Favorites</button>
      ) : (
        <button>Remove From Favorites</button>
      )}
    </li>
  );
}

export default LocationCard;
