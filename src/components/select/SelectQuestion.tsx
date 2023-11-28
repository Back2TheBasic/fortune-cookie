import Button from '../Button';
import Title from '../Title';
import styles from './SelectQuestion.module.scss';

const SelectQuestion = () => {
  const questions: string[] = ['질문1', '질문2', '질문3'];

  return (
    <>
      <Title title="고민 선택" />
      {questions.map((question) => {
        return <Button key={question} name={question} />;
      })}
      <button type="button">새로고침</button>
    </>
  );
};

export default SelectQuestion;
