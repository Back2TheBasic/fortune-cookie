export interface ISelectedConcernProps {
  openModal: (state: boolean) => void;
}
export interface ISendDefaultParams {
  objectType: string;
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  itemContent: {
    profileText: string;
    profileImageUrl: string;
    titleImageUrl: string;
    titleImageText: string;
    titleImageCategory: string;
    items: {
      item: string;
      itemOp: string;
    }[];
    sum: string;
    sumOp: string;
  };
  social: {
    likeCount: number;
    commentCount: number;
    sharedCount: number;
  };
  buttons: {
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }[];
}
export interface IKakaoProps {
  Kakao: {
    init: (key: string) => void;
    cleanup: () => void;
    Share: {
      sendDefault: (params: ISendDefaultParams) => void;
    };
  };
}

export interface IKakaoShareProps {
  Share: {
    sendDefault: (params: ISendDefaultParams) => void;
  };
}
