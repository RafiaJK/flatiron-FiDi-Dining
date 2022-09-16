import React, {useState} from "react";

function Form({updateLocations, addLocation}) {
  const [formInput, setFormInput] = useState({
    name: "",
    type: "",
    image: "",
    address: ""
  })

  const newLocation = {
    name: formInput.name,
    type: formInput.type,
    image: formInput.image,
    address: formInput.address
  }

  function handleChange(e){
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }

  function addLocation(e){
    e.preventDefault()
    updateLocations(newLocation)

    fetch("http://localhost:3001/locations", {
      method: "POST",
      headers: {
        "Accept": "application/json",
       "Content-Type":"application/json"
    },
     body: JSON.stringify(newLocation),
    });
  }



  return (
    <div className="new-location-form">
      <h2>Add Location</h2>
      <form onSubmit={addLocation}>
        <input onChange={handleChange} value={formInput.name} type="text" name="name" placeholder="Name" />
        <input onChange={handleChange} value={formInput.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formInput.address} type="text" name="address" placeholder="Address" /> 
        <button type="submit">Add Location</button>
      </form>
    </div>
  );
}

export default Form;
