import React from 'react';
import AlbumList from './AlbumList';

function Homepage({ artistAlbumData }) {
  return (
    // add Navbar
    <AlbumList artistAlbumData={artistAlbumData} />
  );
}

export default Homepage;
