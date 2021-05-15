import React from 'react';
import AlbumList from './AlbumList';

function Homepage({ artistAlbumData }) {
  return (
    <AlbumList artistAlbumData={artistAlbumData} />
  );
}

export default Homepage;
