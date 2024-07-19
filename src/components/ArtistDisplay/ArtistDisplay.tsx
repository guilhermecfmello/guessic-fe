import React from "react";
import { ArtistDisplayProps } from "../../models/ArtistDisplayProps";
import "./ArtistDisplay.css";

const ArtistDisplay: React.FC<ArtistDisplayProps> = ({
  imgSrc,
  name,
  debut,
  members,
  popularity,
  gender,
  genre,
  cityFlag,
  cityName,
}) => {
  return (
    <div className="artist-card">
      <div className="artist-card-header">
        <img src={imgSrc} alt={name} className="artist-image" />
        <h2 className="artist-name">{name}</h2>
      </div>
      <div className="artist-card-body">
        <div className="artist-attr">
          <p>
            <strong>Debut:</strong> {debut}
          </p>
        </div>
        <div className="artist-attr">
          <p>
            <strong>Members:</strong> {members}
          </p>
        </div>
        <div className="artist-attr">
          <p>
            <strong>Popularity:</strong> {popularity}
          </p>
        </div>
        <div className="artist-attr">
          <p>
            <strong>Gender:</strong> {gender}
          </p>
        </div>
        <div className="artist-attr">
          <p>
            <strong>Genre:</strong> {genre}
          </p>
        </div>
        <div className="artist-attr">
          <div className="city-info">
            <img src={cityFlag} alt={cityName} className="city-flag" />
            <p className="city-name">{cityName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDisplay;
