import { Dispatch, SetStateAction, useRef } from 'react';
import { styled } from 'styled-components';

type DrumPadProps = {
  keyId: string;
  audioSource: string;
  audioName: string;
  setCurrentSoundName: Dispatch<SetStateAction<string>>;
};

const DrumPadButton = styled.button`
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--platinum);
  border-radius: 4px;
  background-color: var(--fire-engine-red);
  color: inherit;
  font-family: inherit;
  font-size: 2rem;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
    border-color: var(--orange-web);
  }
`;

const DrumPad = ({
  keyId,
  audioSource,
  audioName,
  setCurrentSoundName,
}: DrumPadProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = (audioElement: HTMLAudioElement) => {
    setCurrentSoundName(audioName);

    // eslint-disable-next-line no-param-reassign
    audioElement.currentTime = 0;
    audioElement.play().catch(() => null);
  };

  return (
    <DrumPadButton
      className='drum-pad'
      id={audioName}
      onClick={() => playSound(audioRef.current)}
    >
      {keyId}
      <audio ref={audioRef} id={keyId} src={audioSource} className='clip'>
        <track kind='captions' />
      </audio>
    </DrumPadButton>
  );
};

export { DrumPad };
