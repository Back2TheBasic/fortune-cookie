export interface ISelectedConcernProps {
  openModal: (state: boolean) => void;
}
export interface ISendDefaultParams {
  requestUrl: string;
  templateId: number;
}
export interface IKakaoProps {
  Kakao: {
    init: (key: string) => void;
    cleanup: () => void;
    Link: {
      sendScrap: (params: ISendDefaultParams) => void;
    };
  };
}

export interface IKakaoShareProps {
  Link: {
    sendScrap: (params: ISendDefaultParams) => void;
  };
}
