import { useState } from 'react';
import cover from '../../assets/images/cover/cradles.jpg'

import {
  next,
  pause,
  play,
  prev,
  stop
} from '../../assets/images/buttons'

import ControlButton from './ControlButton';

const Controls = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePlay = () => {
    setIsPaused(!isPaused)
  };
  return (
    <div className="control-container">
      <img src={cover} alt="Capa do Álbum" className="current" />
      <div className="buttons-container">
        <ControlButton>
          <img src={prev} alt="Voltar" className="button-icon" />
        </ControlButton>
        <ControlButton>
          <img src={stop} alt="Parar" className="button-icon" />
        </ControlButton>
        <ControlButton>
          <img 
          src={isPaused ? pause : play} 
          alt="Play/Pause" 
          className="button-icon" 
          onClick={() => handlePlay()}
          />
        </ControlButton>
        <ControlButton>
          <img src={next} alt="Avançar" className="button-icon" />
        </ControlButton>
      </div>
    </div>
  );
};

export default Controls;