import { useRouter } from 'next/navigation';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import styles from './SelectQuestion.module.scss';

const SelectQuestion = () => {
  const router = useRouter();
  const questions: string[] = ['질문1', '질문2', '질문3'];

  const selectQuestion = (question: string) => {
    router.push('/result');
  };

  return (
    <>
      <Title>고민 선택</Title>
      {questions.map((question) => {
        return (
          <Button onClick={() => selectQuestion(question)} key={question}>
            {question}
          </Button>
        );
      })}
      <button type="button">새로고침</button>
    </>
  );
};

export default SelectQuestion;
