import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCategory } from '@/store/slice/selectSlice';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import questions from '@/assets/data/questions.json';
import styles from './SelectQuestion.module.scss';

const SelectQuestion = () => {
  const router = useRouter();

  const selectedCategory = useSelector(selectSelectedCategory);
  const categoryQuestions = questions[selectedCategory];
  const questionsPerPage: number = 5;
  const [questionIndex, setQuestionIndex] = useState(0);

  const refreshQuestions = () => {
    if (
      questionIndex / questionsPerPage + 1 >=
      categoryQuestions.length / questionsPerPage
    )
      setQuestionIndex(0);
    else setQuestionIndex(questionIndex + questionsPerPage);
  };

  const selectQuestion = (question: string) => {
    const _ = question.length;
    router.push('/result');
  };

  return (
    <>
      <Title>{selectedCategory} 고민 선택</Title>
      <section className={styles.question__container}>
        {categoryQuestions
          .slice(questionIndex, questionIndex + questionsPerPage)
          .map((question: string) => {
            return (
              <Button
                onClick={() => selectQuestion(question)}
                key={question}
                shape="default"
              >
                {question}
              </Button>
            );
          })}
      </section>
      <button
        type="button"
        onClick={refreshQuestions}
        className={styles['question__refresh-btn']}
      >
        새로고침 {questionIndex / questionsPerPage + 1}/
        {Math.ceil(categoryQuestions.length / questionsPerPage)}
      </button>
    </>
  );
};

export default SelectQuestion;
