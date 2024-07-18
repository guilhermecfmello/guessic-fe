// src/ArtistDisplay.tsx
import React from 'react';
import "../../ArtistGame.css";

interface ArtistDisplayProps {
  imgSrc: string;
  name: string;
  debut: string;
  members: string;
  popularity: string;
  gender: string;
  genre: string;
  cityFlag: string;
  cityName: string;
}

const ArtistDisplay: React.FC<ArtistDisplayProps> = ({ imgSrc, name, debut, members, popularity, gender, genre, cityFlag, cityName }) => {
  return (
    <div className="guess-container">
      <div className="header-row">
        <img src={imgSrc} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="row">
        <div className="item large">
          <h3>Debut</h3>
          <div className="flex-container">
            <h2>{debut}</h2>
            <svg focusable="false" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="white">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </div>
        </div>
        <div className="item small correct">
          <h3>Members</h3>
          <h2>{members}</h2>
        </div>
        <div className="item large">
          <h3>Popularity</h3>
          <div className="flex-container">
            <h2>{popularity}</h2>
            <svg focusable="false" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="white">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"></path>
            </svg>
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
        </div>
      </div>
    </div>
  );
};

export default ArtistDisplay;
