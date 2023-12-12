import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCategory } from '@/store/slice/selectSlice';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import questions from '@/assets/data/questions.json';

const SelectQuestion = () => {
  const router = useRouter();

  const selectedCategory = useSelector(selectSelectedCategory);
  const categoryQuestions = questions[selectedCategory];
  const questionsPerPage: number = 5;
  const [questionIndex, setQuestionIndex] = useState(0);

  const refreshQuestions = () => {
    if (
      questionIndex / questionsPerPage + 1 ===
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
      <button type="button" onClick={refreshQuestions}>
        새로고침 {questionIndex / questionsPerPage + 1}/
        {categoryQuestions.length / questionsPerPage}
      </button>
    </>
  );
};

export default SelectQuestion;
