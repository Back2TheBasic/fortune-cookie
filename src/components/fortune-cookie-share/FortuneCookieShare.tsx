import Button from '@/components/button/Button';
import { useRouter, useParams } from 'next/navigation';
import { replaceHyphensWithSpaces } from '@/utils/replace';
import Image from 'next/image';
import afterFortuneCookie from '@/assets/after-fortune-cookie.png';
import style from './FortuneCookieShare.module.scss';

const FortuneCookieShare = () => {
  const router = useRouter();
  const { id } = useParams();
  const decodedId = decodeURIComponent(id as string);
  const tryAgain = () => {
    router.push('/');
  };

  return (
    <div className={style.container}>
      <Image
        src={afterFortuneCookie}
        alt="fortune cookie image"
        width={300}
        height={300}
      />
      <div className={style.overlay}>
        <div className={style.body}>
          <p>{replaceHyphensWithSpaces(decodedId)}</p>
        </div>
        <div className={style.footer}>
          <Button onClick={tryAgain}>다시하기</Button>
        </div>
      </div>
    </div>
  );
};

export default FortuneCookieShare;
