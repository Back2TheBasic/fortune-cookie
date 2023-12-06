import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import style from './FortuneCookieChoice.module.scss';

interface ISelectedCookiesProps {
  selectedCookie: (cookie: number) => void;
}
const FortuneCookieChoice = ({ selectedCookie }: ISelectedCookiesProps) => {
  const buttons = ['선택1', '선택2', '선택3'];

  return (
    <div className={style.container}>
      <header>
        <Title>쿠키를 선택해주세요</Title>
      </header>
      <div className={style.button_container}>
        {buttons.map((buttonText, index) => (
          <Button
            key={buttonText}
            shape="circle"
            onClick={selectedCookie.bind(this, index + 1)}
          >
            {buttonText}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FortuneCookieChoice;
