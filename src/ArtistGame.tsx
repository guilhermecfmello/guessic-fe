import React, { useState, ChangeEvent } from "react";
import "./ArtistGame.css";
import ArtistDisplay from './components/ArtistDisplay/ArtistDisplay';
import mockData from "./mocks/artists-mock.json";
import { ArtistDisplayProps } from "./types/ArtistDisplayProps";

const ArtistGame: React.FC = () => {
  const [bands, setBands] = useState<ArtistDisplayProps[]>(mockData as ArtistDisplayProps[]);
  const [artistName, setArtistName] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setArtistName(value);
    const bands = mockData.filter((band) =>
      band.name.toLowerCase().includes(value.toLowerCase())
  );
    setBands(
      bands
    );
  };

  return (
    <div className="guess-container">
      <div className="game-container">
        <p>Adivinhe o artista do dia.</p>
        <p>Procure por um artista para dar seu primeiro palpite.</p>
        <input
          type="text"
          placeholder="Digite o nome do artista"
          className="artist-input"
          value={artistName}
          onChange={handleSearchChange}
        />
      </div>
      {bands.map((band, index) => (
        <ArtistDisplay
          key={index}
          imgSrc={band.imgSrc}
          name={band.name}
          debut={band.debut}
          members={band.members}
          popularity={band.popularity}
          gender={band.gender}
          genre={band.genre}
          cityFlag={band.cityFlag}
          cityName={band.cityName}
        />
      ))}
    </div>
  );
};

export default ArtistGame;
