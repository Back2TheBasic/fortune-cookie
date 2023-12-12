import { useSound } from 'use-sound';

export const usePlaySound = (audio: string, sound?: number) => {
  const [play] = useSound(audio, {
    volume: sound ? sound : 1.0,
  });

  return play;
};
