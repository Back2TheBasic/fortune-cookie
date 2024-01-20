import { IKakaoShareProps } from '@/types/interface';

const shareKakao = (Kakao: IKakaoShareProps, kakaoUrl: string) => {
  return Kakao.Link.sendScrap({
    requestUrl: kakaoUrl,
    templateId: 103243,
  });
};

export default shareKakao;
