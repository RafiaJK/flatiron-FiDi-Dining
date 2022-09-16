import React, { useState, useEffect } from "react";
import Form from "./Form";
import LocationsContainer from "./LocationsContainer";
import Search from "./Search";
import {Switch, Route, router} from "react-router-dom"
import NavBar from "./NavBar";


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
      || location.type.toLowerCase().includes(search.toLowerCase()) 
      || location.address.toLowerCase().includes(search.toLowerCase())
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
      
        <Switch>
        <Route exact path="/">
          <Search filterLocations={filterLocations}/>
        <LocationsContainer locations={filteredLocations}/>
        <Form updateLocations={updateLocations}/>
        </Route>
        <Route exact path="/search">
        <Search filterLocations={filterLocations}/>
        <LocationsContainer locations={filteredLocations}/>
        </Route>
        <Route exact path="/form">
        <Form updateLocations={updateLocations}/>
        </Route>
      </Switch>

     {/* <Search filterLocations={filterLocations}/>
      <LocationsContainer locations={filteredLocations}/>
      <Form updateLocations={updateLocations}/> */}
      
    </main>
  );
}

export default LocationsPage;
