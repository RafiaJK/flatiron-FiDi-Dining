import React, { useState, useEffect } from "react";
import Form from "./Form";
import LocationsContainer from "./LocationsContainer";
import Search from "./Search";

function LocationsPage() {
    const [locations, setLocations] = useState([])
    const [filteredLocations, setFilteredLocations] = useState([])
    const [formInput, setFormInput] = useState({
      name: "",
      type: "",
      image: "",
      address: ""
    })

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

function handleChange(e){
  setFormInput({formInput, [e.target.name]: e.target.value})
  setFormInput(newLocation)
}

let newLocation = {
  name:formInput.name,
  type:formInput.type,
  image:formInput.image,
  address:formInput.address,
  id: locations.length+1}

function addLocation(e){
  e.preventDefault()
  fetch("http://localhost:3001/locations", {
    method: "POST",
    headers: {
      "Accept": "application/json",
     "Content-Type":"application/json"
  },
   body: JSON.stringify(formInput),
  });
    setFilteredLocations([...locations, formInput])
}

  return (
    <main>
      <Form formInput={formInput} addLocation={addLocation} handleChange={handleChange}/>
      <Search filterLocations={filterLocations}/>
      <LocationsContainer locations={filteredLocations}/>
    </main>
  );
}

export default LocationsPage;
