// src/ArtistDisplay.tsx
import React from 'react';
import "../../ArtistGame.css";
import "../../types/ArtistDisplayProps";


const ArtistDisplay: React.FC<ArtistDisplayProps> = ({ imgSrc, name, debut, members, popularity, gender, genre, cityFlag, cityName }) => {
  return (
    <div className="guess-container">
      {/* <div className="header-row">
        <img src={imgSrc} alt={name} />
        <h2>{name}</h2>
      </div> */}
      <div className="row">
        {/* <div className="item large">
          <h3>Debut</h3>
          <div className="flex-container">
            <h2>{debut}</h2>
          </div>
        </div> */}
        <div className="item small correct">
          <h3>Members</h3>
          <h2>{members}</h2>
        </div>
        {/* <div className="item large">
          <h3>Popularity</h3>
          <div className="flex-container">
            <h2>{popularity}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="item small">
          <h3>Gender</h3>
          <h2>{gender}</h2>
        </div>
        <div className="item large correct">
          <h3>Genre</h3>
          <h2>{genre}</h2>
        </div>
        <div className="item small close">
          <img className="flag-img" width="80px" src={cityFlag} alt={`${cityName} Flag`} />
          <h3 className="cityName">{cityName}</h3>
        </div> */}
      </div>
    </div>
  );
};

export default ArtistDisplay;
