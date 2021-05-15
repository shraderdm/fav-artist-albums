import React from 'react';
import AlbumList from './AlbumList';
import Navbar from './Navbar';

function Homepage({ artistAlbumData }) {
  const artistNameForTitle = artistAlbumData.results[0].artistName;
  const artistAplleMusicLink = artistAlbumData.results[0].artistViewUrl;
  return (
    <div>
      <Navbar artistName={artistNameForTitle} artistLink={artistAplleMusicLink} />
      <AlbumList artistAlbumData={artistAlbumData} />
    </div>
  );
}

export default Homepage;
