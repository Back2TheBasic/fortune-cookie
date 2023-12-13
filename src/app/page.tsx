// TODO : eslint 오류 해결하기
/* eslint-disable import/order */
import Link from 'next/link';
import Button from '@/components/button/Button';
import styles from './page.module.scss';
import Title from '@/components/title/Title';

const Home = () => {
  return (
    <main className={styles.main}>
      <Title>2024 포춘쿠키</Title>
      <Link href="/select" className={styles['start-container']}>
        <Button>시작하기</Button>
      </Link>
    </main>
  );
};

export default Home;
