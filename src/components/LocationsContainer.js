import React from "react";
import LocationCard from "./LocationCard";

function LocationsContainer({locations}) {
  const locationComponents = locations.map(location => { 
   return <LocationCard key={location.id} location={location}/>
  })
  return (
    <ul className="cards">{locationComponents}</ul>
  );
}

export default LocationsContainer;
