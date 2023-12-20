import { useSound } from 'use-sound';

const usePlaySound = (audio: string, sound?: number) => {
  const [play] = useSound(audio, {
    volume: sound || 1.0,
  });

  return play;
};
export default usePlaySound;
