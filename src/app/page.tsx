import Link from 'next/link';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import styles from './page.module.scss';

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
