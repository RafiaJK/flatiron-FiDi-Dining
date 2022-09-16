import React, { useState, useEffect } from "react";
import Form from "./Form";
import LocationsContainer from "./LocationsContainer";
import Search from "./Search";

function LocationsPage() {
    const [locations, setLocations] = useState([])
    const [filteredLocations, setFilteredLocations] = useState([])


    useEffect( ()=> {
      fetch ('http://localhost:3001/locations')
      .then(r=>r.json())
      .then (data=> { 
        setLocations(data)
        setFilteredLocations(data)
      })
    }, [])


function filterLocations (search){
  if (search === ""){
    setFilteredLocations(locations)
  } else {
    setFilteredLocations(locations.filter(location => {
      return location.name.toLowerCase().includes(search.toLowerCase()) 
      // || location.type.toLowerCase().includes(search.toLowerCase()) 
      // || location.address.toLowerCase().includes(search.toLowerCase())
    }))
  }
}

  function updateLocations(newLocation){
    const locationToAdd = {...newLocation, id: locations.length+1}
    setLocations([...locations], locationToAdd)
    setFilteredLocations([...filteredLocations, locationToAdd])
  }


  return (
    <main>
      <Form updateLocations={updateLocations}/>
      <Search filterLocations={filterLocations}/>
      <LocationsContainer locations={filteredLocations}/>
    </main>
  );
}

export default LocationsPage;
