
// import './App.css';
import React from "react"
import LocationsPage from "./LocationsPage"
import NavBar from "./NavBar";

function App() {


  return (
    <div className="App">
      <h1>FiDi Dining</h1>
      <main>
        <NavBar/>
        <LocationsPage/>
          
      </main>
    </div>
  );
}

export default App;
