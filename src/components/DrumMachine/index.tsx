import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { keysArray, padsArray } from '../../constants';
import { DrumPad } from './DrumPad';

const Display = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;

const DrumMachineContainer = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const DrumPadsContainer = styled.div`
  height: fit-content;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: repeat(3, calc(100% / 3));
  grid-gap: 3rem;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`;

const DrumMachine = () => {
  const [currentSoundName, setCurrentSoundName] =
    useState<string>('Current Sound');

  const clickPad = (audioName: string) => {
    const pad = document.getElementById(audioName) as HTMLButtonElement;

    pad.focus();
    pad.click();
  };

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    const keyId = event.key.toUpperCase();

    if (event.repeat || !keysArray.includes(keyId)) return;

    const keyPad = padsArray.find((pad) => pad.key === keyId);

    clickPad(keyPad.name);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <DrumMachineContainer id='drum-machine'>
      <Display id='display'>{currentSoundName}</Display>
      <DrumPadsContainer>
        {padsArray.map((pad) => (
          <DrumPad
            key={pad.key}
            keyId={pad.key}
            audioSource={pad.source}
            audioName={pad.name}
            setCurrentSoundName={setCurrentSoundName}
          />
        ))}
      </DrumPadsContainer>
    </DrumMachineContainer>
  );
};

export { DrumMachine };
