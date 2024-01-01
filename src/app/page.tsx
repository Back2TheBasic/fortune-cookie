import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import { Metadata } from 'next';
import fortuneCookie from '@/assets/main-fortune-cookie.png';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: '포춘쿠키',
};

const Home = () => {
  return (
    <main className={styles.main}>
      <Title>2024 포춘쿠키</Title>
      <Image
        src={fortuneCookie}
        width="300"
        height="300"
        alt="포춘쿠키 메인"
        className={styles['start-image']}
      />
      <Link href="/select" className={styles['start-container']}>
        <Button>시작하기</Button>
      </Link>
    </main>
  );
};

export default Home;
