import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 inputContainer">
          <input type="text" />
          <SearchIcon className="searchIcon" fontSize="large" />
        </div>
        <div className="col-lg-4"></div>
      </div>
      <div className="row mt-5">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <Link to="/reactjs" class="btn btn-outline-dark">
            ReactJS
          </Link>
          <Link to="/javascript" class="btn btn-outline-dark">
            JavaScript
          </Link>
          <Link to="/css" class="btn btn-outline-dark">
            CSS
          </Link>
          <Link to="/bootstrap" class="btn btn-outline-dark">
            Bootstrap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
