import Title from '@/components/title/Title';
import Button from '@/components/button/Button';
import style from './FortuneCookie.module.scss';
import { useEffect } from 'react';
import { shareKakao } from '@/utils/shareKakao';
import {
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';

interface ISelectedConcernProps {
  goback: (index: number) => void;
}

const FortuneCookie = ({ goback }: ISelectedConcernProps) => {
  const { Kakao } = window as any;

  const kakaoShare = () => {
    shareKakao(Kakao);
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }, []);

  return (
    <div className={style.container}>
      <header>
        <Title>쿠키를 선택해주세요</Title>
      </header>
      <form>
        <p>
          소중한 사람이 흔들리고 있네요. 당분간 멀리서 지켜봐주는 것이
          좋겠습니다.
        </p>
        <div className={style.button_container}>
          <Button onClick={goback.bind(this, 0)}>다시하기</Button>
          <Button onClick={kakaoShare}>카카오</Button>
          <LineShareButton
            url={'https://github.com/next-share'}
            title={
              'next-share is a social share buttons for your next React apps.'
            }
          >
            <LineIcon />
          </LineShareButton>
          <FacebookShareButton
            url={'https://github.com/next-share'}
            title={
              'next-share is a social share buttons for your next React apps.'
            }
          >
            <FacebookIcon />
          </FacebookShareButton>
        </div>
      </form>
    </div>
  );
};

export default FortuneCookie;
