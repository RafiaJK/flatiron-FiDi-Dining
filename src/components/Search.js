import React, { useState } from "react";

function Search({filterLocations}) {

  const [search, setSearch] = useState("")

  function handleSearch(e){
    setSearch(e.target.value)
    filterLocations(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Locations:</label>
      <input
        type="text"
        id="search"
        placeholder="Find your next dining destination..."
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
}

export default Search;
