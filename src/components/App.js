
// import './App.css';
import React from "react"
import LocationsPage from "./LocationsPage"
import NavBar from "./NavBar";

function App() {


  return (
    <div className="App">
      <h1>FidiDining</h1>
      <main>
      {/* <NavBar/> */}
      {/* <Switch>
          <Route exact path="/locations"> */}
          <LocationsPage/>
          <NavBar/>
 
          {/* </Route> */}
          {/* <Route exact path="/form"> */}
            {/* <Form handleChange={handleChange} handleSubmit={handleSubmit}/> */}
          {/* </Route>
      </Switch> */}
      </main>
    </div>
  );
}

export default App;
