import React from 'react';

function AlbumDetails({ albumData }) {
  return (
    <div>
      <p>{albumData.collectionName}</p>
      <img alt={`album art for ${albumData.collectionName}`} src={albumData.artworkUrl100} />
    </div>
  );
}

export default AlbumDetails;
