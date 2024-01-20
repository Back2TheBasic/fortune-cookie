import Button from '@/components/button/Button';
import { useEffect } from 'react';
import shareKakao from '@/utils/shareKakao';
import { useDispatch, useSelector } from 'react-redux';
import { selectResult } from '@/store/slice/resultSlice';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';
import { SET_LOADING } from '@/store/slice/loadingSlice';
import { IKakaoProps, ISelectedConcernProps } from '@/types/interface';
import { replaceSpacesWithHyphens } from '@/utils/replace';
import IconButton from '@/components/iconButton/IconButton';
import facebook from '@/assets/facebook.png';
import twitter from '@/assets/twitter.png';
import kakaotalk from '@/assets/kakaotalk.png';
import style from './FortuneCookie.module.scss';

const FortuneCookieResult = ({ openModal }: ISelectedConcernProps) => {
  const { Kakao } = window as unknown as IKakaoProps;
  const selectedResult = useSelector(selectResult);
  const router = useRouter();
  const dispatch = useDispatch();
  const result = replaceSpacesWithHyphens(selectedResult as string);
  const shareOnKakao = () => {
    const domain = window.location.origin;
    const url = `${domain}/share/${result}`;
    shareKakao(Kakao, url);
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
  }, [Kakao]);

  // 공유하기 버튼 추가
  const shareOnFacebook = () => {
    const domain = window.location.origin;
    const url = `${domain}/share/${result}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, 'newwindow', 'width=600, height=400');
  };

  const shareOnTwitter = () => {
    const domain = window.location.origin;
    const url = `${domain}/share/${result}`;
    const text = '나의 오늘 운세 결과를 확인해보세요!';
    const twitterUrl = `https://twitter.com/share?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, 'newwindow', 'width=600, height=400');
  };

  const tryAgain = () => {
    openModal(false);
    router.push('/');
  };

  useEffect(() => {
    if (!selectedResult) {
      dispatch(SET_LOADING(true));
    } else {
      dispatch(SET_LOADING(false));
    }
  }, [selectedResult, dispatch]);

  return ReactDOM.createPortal(
    <div className={style.modalBackground}>
      <div className={style.modalContainer}>
        <div className={style.body}>
          <p>{selectedResult}</p>
        </div>
        <div className={style.tryAgin}>
          <Button onClick={tryAgain}>다시하기</Button>
        </div>
        <div className={style.footer}>
          <IconButton
            onClick={shareOnFacebook}
            src={facebook}
            alt="페이스북 공유하기"
          />
          <IconButton
            onClick={shareOnTwitter}
            src={twitter}
            alt="트위터 공유하기"
          />
          <IconButton
            onClick={shareOnKakao}
            src={kakaotalk}
            alt="카카오 공유하기 이미지"
          />
        </div>
      </div>
    </div>,

    document.getElementById('modal-root') as HTMLElement
  );
};

export default FortuneCookieResult;
