import React, { useState } from "react";

function LocationCard({location}) {
const {name, type, image, address} = location
const [loveButton, setLoveButton] = useState(true)

function toggleLove(){
  setLoveButton(!loveButton)
}

  return (
    <li className="card">
      <img src={image} alt={"location image"} />
      <h4>{name}</h4>
      <p>Type: {type}</p> 
      <p>Address: {address}</p> 
      {loveButton ? (
        <button onClick={toggleLove} className="primary">🤍 Loved It Here! 🤍</button>
      ) : (
        <button onClick={toggleLove}>🚫 Wouldn't Come Back 🚫</button>
      )}
    </li>
  );
}

export default LocationCard;
