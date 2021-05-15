import React from 'react';
import AlbumDetails from './AlbumDetails';

function AlbumList({ artistAlbumData }) {
  return (
    <div>
      {artistAlbumData.results.map((album) => (
        <AlbumDetails key={album.collectionId} albumData={album} />
      ))}
    </div>
  );
}

export default AlbumList;
