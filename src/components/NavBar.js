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

  import NavLink from "react-router-dom"
import LocationsPage from "./LocationsPage";

function NavBar() {
        return (
              <div>
                <nav>
                  
                      <Link to="/" exact>Home </Link>
                    
                      <Link to="/form" exact>Form </Link>
                  
                      <Link to="/search" exact>Search</Link>    
                </nav>
                </div>
         
        
          );
        }



export default NavBar;