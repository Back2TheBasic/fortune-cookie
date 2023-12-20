import Title from '@/components/title/Title';
import Image from 'next/image';
import fortuneCookie from '@/assets/before-fortune-cookie.png';
import afterFortuneCookie from '@/assets/after-fortune-cookie.png';
import { useState } from 'react';
import usePlaySound from '@/utils/sounds';
import style from './FortuneCookieChoice.module.scss';

interface ISelectedCookiesProps {
  selectedCookie: (cookie: number) => void;
}
const FortuneCookieChoice = ({ selectedCookie }: ISelectedCookiesProps) => {
  const _ = selectedCookie;
  const [buttons, setButtons] = useState([
    fortuneCookie,
    fortuneCookie,
    fortuneCookie,
  ]);
  const playSound = usePlaySound('/audio/cookie.mp3');

  const onClickImage = (index: number) => {
    if (buttons[index] !== afterFortuneCookie) playSound();

    setButtons(
      buttons.map((button, i) => (i === index ? afterFortuneCookie : button))
    );
  };

  return (
    <div className={style.container}>
      <header>
        <Title>쿠키를 선택해주세요</Title>
      </header>
      <div className={style.button_container}>
        {buttons.map((buttonImg, index) => (
          <Image
            key={`${buttonImg}`}
            src={buttonImg}
            alt="fortune cookie image"
            onClick={onClickImage.bind(this, index)}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default FortuneCookieChoice;
