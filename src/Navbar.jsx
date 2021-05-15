import React from 'react';

// style={{ marginLeft: '40%' }}

function Navbar({ artistName, artistLink }) {
  return (
    <div>
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
