import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import Api from './Api';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [artistAlbumData, setArtistAlbumData] = useState();

  const HARD_CODED_ARTIST = 'imaginedragons';

  // call getAlbums from the Api, set state for albumsData and isLoading
  async function getAlbumData() {
    const albumsData = await Api.getAlbums(HARD_CODED_ARTIST);
    setArtistAlbumData(albumsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getAlbumData();
  }, []);

  // display loading screen until Api call is fulfilled or rejected
  if (isLoading) {
    return (
      <div>
        <p> loading... </p>
      </div>
    );
  }

  return (
    <Homepage artistAlbumData={artistAlbumData} />
  );
}

export default App;
