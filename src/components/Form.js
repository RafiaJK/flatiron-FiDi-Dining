import React from "react";

function Form({handleChange, addLocation, formInput}) {

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
