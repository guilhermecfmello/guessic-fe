import React from "react";
import "./ArtistGame.css";
import ArtistDisplay from './components/ArtistDisplay/ArtistDisplay';

const ArtistGame: React.FC = () => {
  return (
    <div className="guess-container">
      <div className="game-container">
        <p>Adivinhe o artista do dia.</p>
        <p>Procure por um artista para dar seu primeiro palpite.</p>
        <input
          type="text"
          placeholder="Digite o nome do artista"
          className="artist-input"
        />
      </div>
      <ArtistDisplay
        imgSrc="https://i.scdn.co/image/ab6761610000e5ebaccd7a0491c0fa9f7afee49f"
        name="Cuco"
        debut="2016"
        members="Solo"
        popularity="#806"
        gender="Male"
        genre="Pop"
        cityFlag="https://flagcdn.com/w80/us.png"
        cityName="Itu"
      />
    </div>
  );
};

export default ArtistGame;
