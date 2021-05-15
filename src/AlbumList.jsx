import React from 'react';
import AlbumDetails from './AlbumDetails';

function AlbumList({ artistAlbumData }) {
  return (
    <div>
      <p>
        {artistAlbumData.resultCount}
      </p>
      <AlbumDetails albumsData={artistAlbumData} />
    </div>
  );
}

export default AlbumList;
