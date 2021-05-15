import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import Api from './Api';

function App() {
  const DEFAULT_ARTIST = 'imaginedragons';
  const [isLoading, setIsLoading] = useState(true);
  const [currArtist, setCurrArtist] = useState(DEFAULT_ARTIST);
  const [artistAlbumData, setArtistAlbumData] = useState();

  // call getAlbums from the Api, set state for albumsData and isLoading
  async function getAlbumData(artist) {
    const albumsData = await Api.getAlbums(artist);
    setArtistAlbumData(albumsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getAlbumData(currArtist);
  }, [currArtist]);

  // display loading screen until Api call is fulfilled or rejected
  if (isLoading) {
    return (
      <div>
        <p> loading... </p>
      </div>
    );
  }

  return (
    <Homepage artistAlbumData={artistAlbumData} setCurrArtist={setCurrArtist} />
  );
}

export default App;
