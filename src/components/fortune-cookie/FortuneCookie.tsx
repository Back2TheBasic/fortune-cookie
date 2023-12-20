/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable dot-notation */
import Title from '@/components/title/Title';
import Button from '@/components/button/Button';
import { useEffect } from 'react';
import shareKakao from '@/utils/shareKakao';
import { useSelector } from 'react-redux';
import { selectResult } from '@/store/slice/resultSlice';
import style from './FortuneCookie.module.scss';

interface ISelectedConcernProps {
  goback: (index: number) => void;
}

const FortuneCookie = ({ goback }: ISelectedConcernProps) => {
  const { Kakao } = window as any;
  const selectedResult = useSelector(selectResult);

  const kakaoShare = () => {
    shareKakao(Kakao);
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }, [Kakao]);

  return (
    <div className={style.container}>
      <header>
        <Title>쿠키를 선택해주세요</Title>
      </header>
      <form>
        <p>{selectedResult}</p>
        <div className={style.button_container}>
          <Button onClick={goback.bind(this, 0)}>다시하기</Button>
          <Button onClick={kakaoShare}>카카오</Button>
        </div>
      </form>
    </div>
  );
};

export default FortuneCookie;
