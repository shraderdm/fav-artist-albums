import React from 'react';
import './AlbumDetails.css';

function AlbumDetails({ albumData }) {
  // date comes in format "2012-01-01T08:00:00Z" (year-month-day-Time)
  // convert to month-day-year
  function formatDate(dateString) {
    // split on "T or , or space"
    const regex = /(T|,| )+/;
    const formattedDateArr = dateString.split(regex);
    const [year, month, day] = formattedDateArr[0].split('-');
    return `${month}-${day}-${year}`;
  }

  return (
    <div className="album-section">
      <div className="card mb-3">
        <a href={albumData.collectionViewUrl} className="title-link">
          <h3 className="card-header">{albumData.collectionName}</h3>
        </a>
        <div className="card-body">
          <h5 className="card-title">{albumData.artistName}</h5>
        </div>
        <div className="card-body">
          <img alt={`album art for ${albumData.collectionName}`} src={albumData.artworkUrl100} />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Genre: ${albumData.primaryGenreName}`}</li>
          <li className="list-group-item">
            {`Release Date: ${formatDate(albumData.releaseDate)}`}
          </li>
        </ul>
        <div className="card-footer text-muted">
          {albumData.copyright}
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;
