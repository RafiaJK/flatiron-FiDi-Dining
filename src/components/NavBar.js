//import {Link} from "react-router-dom"
import React from "react";
import Search from "./Search";
import Form from "./Form";
import LocationsContainer from "./LocationsContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LocationsPage from "./LocationsPage";

function NavBar() {
        return (
            <Router>
              <div>
                <nav>
                  
                      <Link to="/">Home </Link>
                    
                      <Link to="/form">Form </Link>
                  
                      <Link to="/search">Search</Link>
                   
                </nav>
        
                <Switch>
                <Route path="/">
                  </Route>
                  <Route path="/form">
                    <Form />
                  </Route>
                  <Route path="/search">
                    <Search />
                  </Route>
                  <Route path="*">
                    <h1>404 not found</h1>
                </Route>
                 
                </Switch>
              </div>
            </Router>
          );
        }



export default NavBar;