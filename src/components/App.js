
// import './App.css';
import React from "react"
import LocationsPage from "./LocationsPage"
import NavBar from "./NavBar";
import {BrowserRouter} from 'react-router-dom'
import Form from "./Form";
import Search from "./Search";

function App() {


  return (
    <div className="App">
      <h1>FiDi Dining</h1>
      <BrowserRouter>
      <main>
        <NavBar />
        <LocationsPage />

      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
