import React from 'react';

function AlbumDetails({ albumData }) {
  return (
    // <div className="card border-dark mb-3" style={{ maxWidth: '20rem' }}>
    //   <div className="card-header">{albumData.collectionName}</div>
    //   <div className="card-body">
    //     <img alt={`album art for ${albumData.collectionName}`} src={albumData.artworkUrl100} />
    //   </div>
    // </div>
    <div>
      <div className="card mb-3">
        <h3 className="card-header">{albumData.collectionName}</h3>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <div className="card-body">
          <img alt={`album art for ${albumData.collectionName}`} src={albumData.artworkUrl100} />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">
            Check out the album:
            {' '}
            <a href={albumData.collectionViewUrl}>
              {albumData.collectionName}
            </a>
          </li>
        </ul>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;
