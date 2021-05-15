import React from 'react';
import AlbumList from './AlbumList';
import Navbar from './Navbar';
import './Homepage.css';

function Homepage({ artistAlbumData }) {
  const artistNameForTitle = artistAlbumData.results[0].artistName;
  const artistAplleMusicLink = artistAlbumData.results[0].artistViewUrl;
  return (
    <div>
      <Navbar artistName={artistNameForTitle} artistLink={artistAplleMusicLink} />
      <h1 className="main-title">Favorite Artist Albums</h1>
      <AlbumList artistAlbumData={artistAlbumData} />
    </div>
  );
}

export default Homepage;
