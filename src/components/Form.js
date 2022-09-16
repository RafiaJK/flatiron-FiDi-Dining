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
      <h2>Don't see your destination? Add it now!</h2>
      <form onSubmit={addLocation}>
        <input onChange={handleChange} value={formInput.name} type="text" name="name" placeholder="Name" />
        <input onChange={handleChange} value={formInput.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formInput.address} type="text" name="address" placeholder="Address" /> 
        <select onChange={handleChange} value={formInput.type} name="type" id="selectList">
          <option name="☕️ Cafe">Cafe</option>
          <option name="🍸 Bar">Bar</option>
          <option name="🍽 Restaurant">Restaurant</option>
        </select>
        <button type="submit">ADD LOCATION</button>
      </form>
    </div>
  );
}

export default Form;
