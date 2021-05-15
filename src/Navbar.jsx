import React from 'react';
import './Navbar.css';

// style={{ marginLeft: '40%' }}

function Navbar({ artistName, artistLink }) {
  return (
    <div className="main-navbar-div">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h4>
            <a className="nav-link active" href={artistLink}>{artistName}</a>
          </h4>
          <div>
            <button type="button" className="btn btn-success">Change Artist</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
