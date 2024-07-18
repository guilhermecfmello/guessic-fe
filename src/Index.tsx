// src/NewPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewPage: React.FC = () => {

    const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    navigate('/artist-game');
  };
  
  return (
    <div>
      <header>
        <h1>Bem-vindo ao Guessic</h1>
        <h4>Guess the Music</h4>
      </header>
      <section>
        <button onClick={handlePlayButtonClick} className="play-button">Jogar</button>
      </section>
      <footer>
        <p>&copy; 2024 Guessic. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default NewPage;
