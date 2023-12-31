import Button from '@/components/button/Button';
import { useEffect } from 'react';
import shareKakao from '@/utils/shareKakao';
import { useDispatch, useSelector } from 'react-redux';
import { selectResult } from '@/store/slice/resultSlice';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';
import { SET_LOADING } from '@/store/slice/loadingSlice';
import { IKakaoProps, ISelectedConcernProps } from '@/types/interface';
import style from './FortuneCookie.module.scss';

const FortuneCookieResult = ({ openModal }: ISelectedConcernProps) => {
  const { Kakao } = window as unknown as IKakaoProps;
  const selectedResult = useSelector(selectResult);
  const router = useRouter();
  const dispatch = useDispatch();
  const shareOnKakao = () => {
    shareKakao(Kakao);
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
  }, [Kakao]);

  // 공유하기 버튼 추가
  // const shareOnFacebook = () => {
  //   const url = window.location.href;
  //   const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  //     url
  //   )}`;
  //   window.open(facebookUrl, 'newwindow', 'width=600, height=400');
  // };

  // const shareOnTwitter = () => {
  //   const url = window.location.href;
  //   const text = '여기에 공유할 텍스트를 넣으세요';
  //   const twitterUrl = `https://twitter.com/share?url=${encodeURIComponent(
  //     url
  //   )}&text=${encodeURIComponent(text)}`;
  //   window.open(twitterUrl, 'newwindow', 'width=600, height=400');
  // };

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
        <div className={style.titleCloseBtn}>
          <button
            type="button"
            onClick={() => {
              openModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={style.title}>
          <h1>운세 결과는 다음과 같습니다!</h1>
        </div>
        <div className={style.body}>
          <p>{selectedResult}</p>
        </div>
        <div className={style.footer}>
          <Button onClick={tryAgain}>다시하기</Button>
          <Button onClick={shareOnKakao}>공유하기</Button>
        </div>
      </div>
    </div>,

    document.getElementById('modal-root') as HTMLElement
  );
};

export default FortuneCookieResult;
